<?php
// api-syntaxis.rdec.ac.in/submit.php

// ── CORS ──────────────────────────────────────────────────────────────────
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://syntaxis-subdirectory.vercel.app');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

# Preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

# Only POST allowed
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

// ── PARSE BODY ─────────────────────────────────────────────────────────────
$body  = json_decode(file_get_contents('php://input'), true);
$email = isset($body['email'])    ? filter_var(trim($body['email']), FILTER_SANITIZE_EMAIL) : '';
$token = isset($body['cf_token']) ? trim($body['cf_token']) : '';

# ── VALIDATE EMAIL ─────────────────────────────────────────────────────────
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address.']);
    exit;
}

// ── VALIDATE TURNSTILE TOKEN ───────────────────────────────────────────────
$turnstile_secret = getenv('TURNSTILE_SECRET_KEY');

if (empty($turnstile_secret)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Server configuration error.']);
    exit;
}

$verify = file_get_contents(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    false,
    stream_context_create([
        'http' => [
            'method'  => 'POST',
            'header'  => 'Content-Type: application/x-www-form-urlencoded',
            'content' => http_build_query([
                'secret'   => $turnstile_secret,
                'response' => $token,
                'remoteip' => $_SERVER['REMOTE_ADDR'] ?? '',
            ]),
        ],
    ])
);

if ($verify === false) {
    http_response_code(503);
    echo json_encode(['success' => false, 'message' => 'Could not verify captcha. Try again.']);
    exit;
}

$verify_data = json_decode($verify, true);

if (!$verify_data['success']) {
    http_response_code(403);
    echo json_encode(['success' => false, 'message' => 'Captcha verification failed.']);
    exit;
}

// ── RATE LIMITING ──────────────────────────────────────────────────────────
# 1 submission per IP per 10 minutes
$ip_hash   = md5($_SERVER['REMOTE_ADDR'] ?? 'unknown');
$lock_file = sys_get_temp_dir() . '/syntaxis_rl_' . $ip_hash . '.lock';

if (file_exists($lock_file) && (time() - filemtime($lock_file)) < 600) {
    http_response_code(429);
    echo json_encode(['success' => false, 'message' => 'Too many requests. Please try again in a few minutes.']);
    exit;
}

touch($lock_file);

// ── SEND VIA WEB3FORMS ─────────────────────────────────────────────────────
$web3forms_key = getenv('WEB3FORMS_ACCESS_KEY');

if (empty($web3forms_key)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Server configuration error.']);
    exit;
}

$response = file_get_contents(
    'https://api.web3forms.com/submit',
    false,
    stream_context_create([
        'http' => [
            'method'  => 'POST',
            'header'  => 'Content-Type: application/json',
            'content' => json_encode([
                'access_key' => $web3forms_key,
                'email'      => $email,
                'subject'    => 'Syntaxis 2026 — Launch Notification Request',
                'from_name'  => 'Syntaxis 2026 Website',
            ]),
        ],
    ])
);

if ($response === false) {
    http_response_code(503);
    echo json_encode(['success' => false, 'message' => 'Failed to send. Please try again.']);
    exit;
}

$result = json_decode($response, true);

if ($result['success']) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send. Please try again.']);
}