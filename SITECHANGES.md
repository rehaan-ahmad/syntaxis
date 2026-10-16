1. Change the count of parternered schools to 4.
2. Wherever Pragma is mentioned, change it to either KonfHub or Register Now, based on whether the ticket is paid or free.
3. Updated venues for events:
    a. Check-In/Registration - Main Gate
    b. The Kindling - Main Stage, College Grounds
    c. Techne - DSA Lab, Basement A-Block
    d. Code Trilogy R1 - DSA Lab + Java Lab, Basement A-Block
    e. Day1 Closing - Main Stage, College Grounds
    f. Archithon - A-Block, RDEC
    g. Genesis Track - Auditorium, Gound Floor B-Block
    h. Pantheon Games - Third Floor, A-Block
    i. Rhesis - Auditorium, B-Block
    j. Pythia Expo - Removed
    k. Code Trilogy R2 - DSA Lab, Basement A-Block
    l. Code Trilogy R3 - DSA Lab, Basement A-Block
    m. Apotheosis - Main Stage, College Grounds
    n. Lunch/Breaks - College Premises [ONLY DESIGNATED AREAS]
4. The Privacy Policy section is too complex and extreme. Make it relatively lighter based on this event, while ensuring that it's fool-proof.
5. In the "Sponsorship Lead Contact", make two columns, one with Fest Lead - Rehaan Ahmad; +91 99108 34975 and Anurag Kumar; +91 91531 30906. Keep the email "syntaxis@rdec.in" in the centre, as it is  the common email.
6. Just as KonfHub has the option to open it in new page, add the same for all the tally forms. 
7. In the event sprint section, simply replace teh "Open" event head with "Games".
8. In the Hackathon section, I need to provide an option to download a consent letter, which needs to be filled, printed, and submitted via mail. All the team members have to fill it, and send it attached in a single email to "syntaxis@rdec.in"
9. The Pantheon Games now contains only Free Fire, and is free. Hence, integrate this form for it instead of the KonfHub widget: Paste this HTML code snippet on the page where you want the embed to appear.

<iframe data-tally-src="https://tally.so/embed/1WPJAb?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="500" frameborder="0" marginheight="0" marginwidth="0" title="Pantheon Games Registration"></iframe>
<script>var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}</script>

Alternatively, simply paste this embed link in the editor of a no-code tool (Notion, Ghost, Canva, etc). To enable dynamic height, you will also need to include the script tag in the <head> section of your website.

https://tally.so/embed/1WPJAb?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1

<script async src="https://tally.so/widgets/embed.js"></script>

10. I need the UI to scale automatically based on the screen's size/resolution, make sure that the content is readable in every possible scenario.
11. Genesis Track will be organized on Day 2 ONLY. Only the top 3 will be called with their Principal/Vice-Principal and Parents on Day3 for Prize distribution. There's specific prize for Genesis Track except for participation certificates and certain perks.
12. In the FAQ section, specifically in the Device Policy question, mention that intermittent WiFi will be provided.
13. The banner which is floating on the top, I need you to remove it, and simply put college-logo.png on the top left, and naac-logo.png on the top right of the page.
14. In the Archithon section, use this Consent Letter code: <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Archithon - Team Consent & Declaration Form</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            color: #1f2937;
            background-color: #f3f4f6;
        }

        @media print {
            body {
                background-color: #ffffff !important;
                color: #000000 !important;
                padding: 0 !important;
                margin: 0 !important;
            }
            .no-print {
                display: none !important;
            }
            .page-container {
                box-shadow: none !important;
                padding: 0 !important;
                margin: 0 !important;
                width: 100% !important;
                max-width: none !important;
                border: none !important;
            }
            .page-break-before {
                page-break-before: always;
            }
            .avoid-break {
                page-break-inside: avoid;
            }
            input, textarea {
                border: none !important;
                border-bottom: 1px dotted #666 !important;
                background: transparent !important;
            }
        }

        /* Form input bottom line styling for clean print layout */
        .form-line {
            border-bottom: 1px dashed #9ca3af;
            min-height: 2rem;
            display: flex;
            align-items: flex-end;
            padding-bottom: 2px;
        }
    </style>
</head>
<body class="py-8 px-4 sm:px-6 lg:px-8">

    <div class="max-w-4xl mx-auto mb-6 no-print flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-xl shadow-md border border-gray-200 gap-4">
        <div>
            <h2 class="text-lg font-bold text-gray-800">Archithon Consent Form (Print Ready)</h2>
            <p class="text-xs text-gray-500">Fill in the fields digitally or print a blank copy to fill by hand. Click print to save as PDF.</p>
        </div>
        <div class="flex items-center space-x-3 w-full sm:w-auto">
            <button onclick="window.print()" class="w-full sm:w-auto px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-medium text-sm rounded-lg shadow transition flex items-center justify-center space-x-2">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5 4v2h10V4H5zm0 12h10v-4H5v4zm11-8H4a2 2 0 00-2 2v4h4v-2h8v2h4v-4a2 2 0 00-2-2zm-3-5H7V1h6v2z"/>
                </svg>
                <span>Print / Save as PDF</span>
            </button>
        </div>
    </div>

    <div class="page-container max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-xl shadow-xl border border-gray-200">
        
        <!-- Header -->
        <div class="border-b-2 border-gray-800 pb-4 mb-6">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight uppercase">ARCHITHON</h1>
                    <p class="text-sm font-semibold text-blue-800 tracking-wide">PARTICIPANT CONSENT & UNDERTAKING FORM</p>
                    <p class="text-xs text-gray-500">Host Venue: R.D. Engineering College (RDEC), Ghaziabad</p>
                </div>
                <div class="text-right sm:border-l-2 border-gray-300 sm:pl-4">
                    <span class="block text-xs text-gray-500 font-medium">Form Ref No:</span>
                    <span class="block text-sm font-bold text-gray-800">ARC-2026 / <span class="text-gray-400">______</span></span>
                </div>
            </div>
        </div>

        <div class="mb-8">
            <h2 class="text-xs font-bold text-white bg-gray-800 px-3 py-1.5 rounded tracking-wider uppercase mb-4">
                1. Team & Venue Logistics Details
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                    <label class="block text-xs font-semibold text-gray-600 uppercase">Team Name</label>
                    <input type="text" placeholder="Enter official team name" class="w-full mt-1 p-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 font-medium text-gray-800">
                </div>
                <div>
                    <label class="block text-xs font-semibold text-gray-600 uppercase">Institution / College Name</label>
                    <input type="text" placeholder="Enter institution name" class="w-full mt-1 p-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 font-medium text-gray-800">
                </div>
                <div>
                    <label class="block text-xs font-semibold text-gray-600 uppercase">Nearest Relative's Mobile (Emergency)</label>
                    <input type="tel" placeholder="+91 XXXXX-XXXXX" class="w-full mt-1 p-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 font-medium text-gray-800">
                </div>
                <div>
                    <label class="block text-xs font-semibold text-gray-600 uppercase">Local Address near RDEC (Hostel/Hotel/PG/Stay location)</label>
                    <input type="text" placeholder="Enter local stay address near RDEC campus" class="w-full mt-1 p-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 font-medium text-gray-800">
                </div>
            </div>
        </div>

        <div class="mb-8">
            <h2 class="text-xs font-bold text-white bg-gray-800 px-3 py-1.5 rounded tracking-wider uppercase mb-4">
                2. Team Members Information (Up to 4 Members)
            </h2>

            <div class="grid grid-cols-1 gap-6">

                <!-- Member 1 (Team Leader) -->
                <div class="border border-blue-200 bg-blue-50/30 rounded-lg p-4 relative avoid-break">
                    <div class="flex justify-between items-center mb-3">
                        <span class="text-xs font-bold bg-blue-800 text-white px-2 py-0.5 rounded">MEMBER 1 - TEAM LEADER</span>
                        <span class="text-xs text-blue-700 font-medium">*Primary Point of Contact</span>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                        <div>
                            <label class="font-semibold text-gray-700">Full Name</label>
                            <input type="text" class="w-full mt-1 p-1.5 border border-gray-300 rounded bg-white">
                        </div>
                        <div>
                            <label class="font-semibold text-gray-700">Email Address</label>
                            <input type="email" class="w-full mt-1 p-1.5 border border-gray-300 rounded bg-white">
                        </div>
                        <div>
                            <label class="font-semibold text-gray-700">Phone / WhatsApp</label>
                            <input type="tel" class="w-full mt-1 p-1.5 border border-gray-300 rounded bg-white">
                        </div>
                        <div>
                            <label class="font-semibold text-gray-700">Parent / Guardian Name</label>
                            <input type="text" class="w-full mt-1 p-1.5 border border-gray-300 rounded bg-white">
                        </div>
                        <div>
                            <label class="font-semibold text-gray-700">Parent / Guardian Mobile</label>
                            <input type="tel" class="w-full mt-1 p-1.5 border border-gray-300 rounded bg-white">
                        </div>
                        <div>
                            <label class="font-semibold text-gray-700">ID Card No. / Aadhar</label>
                            <input type="text" class="w-full mt-1 p-1.5 border border-gray-300 rounded bg-white">
                        </div>
                    </div>
                </div>

                <!-- Member 2 -->
                <div class="border border-gray-300 rounded-lg p-4 avoid-break">
                    <div class="flex justify-between items-center mb-3">
                        <span class="text-xs font-bold bg-gray-700 text-white px-2 py-0.5 rounded">MEMBER 2</span>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                        <div>
                            <label class="font-semibold text-gray-700">Full Name</label>
                            <input type="text" class="w-full mt-1 p-1.5 border border-gray-300 rounded">
                        </div>
                        <div>
                            <label class="font-semibold text-gray-700">Email Address</label>
                            <input type="email" class="w-full mt-1 p-1.5 border border-gray-300 rounded">
                        </div>
                        <div>
                            <label class="font-semibold text-gray-700">Phone / WhatsApp</label>
                            <input type="tel" class="w-full mt-1 p-1.5 border border-gray-300 rounded">
                        </div>
                        <div>
                            <label class="font-semibold text-gray-700">Parent / Guardian Name</label>
                            <input type="text" class="w-full mt-1 p-1.5 border border-gray-300 rounded">
                        </div>
                        <div>
                            <label class="font-semibold text-gray-700">Parent / Guardian Mobile</label>
                            <input type="tel" class="w-full mt-1 p-1.5 border border-gray-300 rounded">
                        </div>
                        <div>
                            <label class="font-semibold text-gray-700">ID Card No. / Aadhar</label>
                            <input type="text" class="w-full mt-1 p-1.5 border border-gray-300 rounded">
                        </div>
                    </div>
                </div>

                <!-- Member 3 -->
                <div class="border border-gray-300 rounded-lg p-4 avoid-break">
                    <div class="flex justify-between items-center mb-3">
                        <span class="text-xs font-bold bg-gray-700 text-white px-2 py-0.5 rounded">MEMBER 3</span>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                        <div>
                            <label class="font-semibold text-gray-700">Full Name</label>
                            <input type="text" class="w-full mt-1 p-1.5 border border-gray-300 rounded">
                        </div>
                        <div>
                            <label class="font-semibold text-gray-700">Email Address</label>
                            <input type="email" class="w-full mt-1 p-1.5 border border-gray-300 rounded">
                        </div>
                        <div>
                            <label class="font-semibold text-gray-700">Phone / WhatsApp</label>
                            <input type="tel" class="w-full mt-1 p-1.5 border border-gray-300 rounded">
                        </div>
                        <div>
                            <label class="font-semibold text-gray-700">Parent / Guardian Name</label>
                            <input type="text" class="w-full mt-1 p-1.5 border border-gray-300 rounded">
                        </div>
                        <div>
                            <label class="font-semibold text-gray-700">Parent / Guardian Mobile</label>
                            <input type="tel" class="w-full mt-1 p-1.5 border border-gray-300 rounded">
                        </div>
                        <div>
                            <label class="font-semibold text-gray-700">ID Card No. / Aadhar</label>
                            <input type="text" class="w-full mt-1 p-1.5 border border-gray-300 rounded">
                        </div>
                    </div>
                </div>

                <!-- Member 4 -->
                <div class="border border-gray-300 rounded-lg p-4 avoid-break">
                    <div class="flex justify-between items-center mb-3">
                        <span class="text-xs font-bold bg-gray-700 text-white px-2 py-0.5 rounded">MEMBER 4</span>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                        <div>
                            <label class="font-semibold text-gray-700">Full Name</label>
                            <input type="text" class="w-full mt-1 p-1.5 border border-gray-300 rounded">
                        </div>
                        <div>
                            <label class="font-semibold text-gray-700">Email Address</label>
                            <input type="email" class="w-full mt-1 p-1.5 border border-gray-300 rounded">
                        </div>
                        <div>
                            <label class="font-semibold text-gray-700">Phone / WhatsApp</label>
                            <input type="tel" class="w-full mt-1 p-1.5 border border-gray-300 rounded">
                        </div>
                        <div>
                            <label class="font-semibold text-gray-700">Parent / Guardian Name</label>
                            <input type="text" class="w-full mt-1 p-1.5 border border-gray-300 rounded">
                        </div>
                        <div>
                            <label class="font-semibold text-gray-700">Parent / Guardian Mobile</label>
                            <input type="tel" class="w-full mt-1 p-1.5 border border-gray-300 rounded">
                        </div>
                        <div>
                            <label class="font-semibold text-gray-700">ID Card No. / Aadhar</label>
                            <input type="text" class="w-full mt-1 p-1.5 border border-gray-300 rounded">
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="mb-8 avoid-break">
            <h2 class="text-xs font-bold text-white bg-gray-800 px-3 py-1.5 rounded tracking-wider uppercase mb-3">
                3. Rules, Code of Conduct & Consent Terms
            </h2>
            <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 text-xs text-gray-700 space-y-2 leading-relaxed">
                <p><strong>1. Code of Conduct:</strong> All team members agree to maintain professionalism, ethics, and sportsmanship throughout Archithon. Any plagiarism, misconduct, or property damage at RDEC will result in immediate disqualification.</p>
                <p><strong>2. Health & Emergency:</strong> Participants grant organizers permission to seek medical assistance in case of emergencies and confirm they have informed their parents/guardians regarding their participation.</p>
                <p><strong>3. Media & Intellectual Property:</strong> Participants consent to photos/videos captured during the event being used for promotional and archival purposes by Archithon and RDEC.</p>
                <p><strong>4. Undertaking:</strong> We certify that the information provided above is accurate. We understand and accept all rules and guidelines set forth by the organizing committee.</p>
            </div>
        </div>

        <div class="avoid-break">
            <h2 class="text-xs font-bold text-white bg-gray-800 px-3 py-1.5 rounded tracking-wider uppercase mb-6">
                4. Signatures & Acknowledgement
            </h2>
            
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-xs">
                <div>
                    <div class="h-16 border-b-2 border-gray-400 mb-2 flex items-end justify-center pb-1 text-gray-400 italic">
                        Sign Here
                    </div>
                    <p class="font-bold text-gray-800">Team Leader Signature</p>
                    <p class="text-gray-500 font-mono text-[10px]">Member 1</p>
                </div>
                <div>
                    <div class="h-16 border-b-2 border-gray-400 mb-2 flex items-end justify-center pb-1 text-gray-400 italic">
                        Sign Here
                    </div>
                    <p class="font-bold text-gray-800">Member 2 Signature</p>
                    <p class="text-gray-500 font-mono text-[10px]">Member 2</p>
                </div>
                <div>
                    <div class="h-16 border-b-2 border-gray-400 mb-2 flex items-end justify-center pb-1 text-gray-400 italic">
                        Sign Here
                    </div>
                    <p class="font-bold text-gray-800">Member 3 Signature</p>
                    <p class="text-gray-500 font-mono text-[10px]">Member 3</p>
                </div>
                <div>
                    <div class="h-16 border-b-2 border-gray-400 mb-2 flex items-end justify-center pb-1 text-gray-400 italic">
                        Sign Here
                    </div>
                    <p class="font-bold text-gray-800">Member 4 Signature</p>
                    <p class="text-gray-500 font-mono text-[10px]">Member 4</p>
                </div>
            </div>

            <div class="mt-8 pt-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between text-xs text-gray-600 gap-4">
                <div>
                    <span class="font-semibold">Date of Submission:</span> ____ / ____ / 2026
                </div>
                <div>
                    <span class="font-semibold">Organizing Desk Verified By:</span> ___________________________
                </div>
            </div>
        </div>

    </div>

</body>
</html>

Make sure it follows out brand guidelines, and make it compulsory that the team fills this and sends it to syntaxis@rdec.in, otherwise their entry will be deemed void.
15. Use this consent letter for Genesis Track, with out brand guidelines:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Archithon - Genesis Track School Consent & Indemnity Form</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            color: #1f2937;
            background-color: #f3f4f6;
        }

        @media print {
            body {
                background-color: #ffffff !important;
                color: #000000 !important;
                padding: 0 !important;
                margin: 0 !important;
            }
            .no-print {
                display: none !important;
            }
            .page-container {
                box-shadow: none !important;
                padding: 0 !important;
                margin: 0 !important;
                width: 100% !important;
                max-width: none !important;
                border: none !important;
            }
            .page-break-before {
                page-break-before: always;
            }
            .avoid-break {
                page-break-inside: avoid;
            }
            input, textarea {
                border: none !important;
                border-bottom: 1px dotted #666 !important;
                background: transparent !important;
            }
        }
    </style>
</head>
<body class="py-8 px-4 sm:px-6 lg:px-8">

    <div class="max-w-4xl mx-auto mb-6 no-print flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-xl shadow-md border border-gray-200 gap-4">
        <div>
            <h2 class="text-lg font-bold text-gray-800">Genesis Track School Consent Form (Print Ready)</h2>
            <p class="text-xs text-gray-500">For school-sponsored student participants. Complete digitally or print for physical signatures. Click print to save as PDF.</p>
        </div>
        <div class="flex items-center space-x-3 w-full sm:w-auto">
            <button onclick="window.print()" class="w-full sm:w-auto px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-sm rounded-lg shadow transition flex items-center justify-center space-x-2">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5 4v2h10V4H5zm0 12h10v-4H5v4zm11-8H4a2 2 0 00-2 2v4h4v-2h8v2h4v-4a2 2 0 00-2-2zm-3-5H7V1h6v2z"/>
                </svg>
                <span>Print / Save as PDF</span>
            </button>
        </div>
    </div>

    <div class="page-container max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-xl shadow-xl border border-gray-200">
        
        <!-- Header -->
        <div class="border-b-2 border-emerald-800 pb-4 mb-6">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <div class="flex items-center space-x-2">
                        <span class="bg-emerald-700 text-white text-xs font-bold px-2 py-0.5 rounded tracking-wide uppercase">Genesis Track</span>
                        <span class="text-xs text-gray-500 font-medium">School Innovation Program</span>
                    </div>
                    <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight uppercase mt-1">ARCHITHON</h1>
                    <p class="text-sm font-semibold text-emerald-800 tracking-wide">PARENTAL CONSENT, MEDICAL AUTHORIZATION & INDEMNITY FORM</p>
                    <p class="text-xs text-gray-500">Host Venue: R.D. Engineering College (RDEC), Ghaziabad</p>
                </div>
                <div class="text-right sm:border-l-2 border-gray-300 sm:pl-4">
                    <span class="block text-xs text-gray-500 font-medium">Form Ref No:</span>
                    <span class="block text-sm font-bold text-gray-800">GEN-2026 / <span class="text-gray-400">______</span></span>
                </div>
            </div>
        </div>

        <div class="mb-8">
            <h2 class="text-xs font-bold text-white bg-emerald-800 px-3 py-1.5 rounded tracking-wider uppercase mb-4">
                1. School & Faculty Coordinator Details
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                    <label class="block text-xs font-semibold text-gray-600 uppercase">School Name & Board</label>
                    <input type="text" placeholder="Enter school name and affiliation (CBSE/ICSE/State)" class="w-full mt-1 p-2 border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 font-medium text-gray-800">
                </div>
                <div>
                    <label class="block text-xs font-semibold text-gray-600 uppercase">School City / District</label>
                    <input type="text" placeholder="Enter city or district" class="w-full mt-1 p-2 border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 font-medium text-gray-800">
                </div>
                <div>
                    <label class="block text-xs font-semibold text-gray-600 uppercase">Teacher-in-Charge / Coordinator Name</label>
                    <input type="text" placeholder="Enter faculty coordinator full name" class="w-full mt-1 p-2 border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 font-medium text-gray-800">
                </div>
                <div>
                    <label class="block text-xs font-semibold text-gray-600 uppercase">Coordinator Contact (Phone & Email)</label>
                    <input type="text" placeholder="Mobile number & official email" class="w-full mt-1 p-2 border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 font-medium text-gray-800">
                </div>
            </div>
        </div>

        <div class="mb-8">
            <h2 class="text-xs font-bold text-white bg-emerald-800 px-3 py-1.5 rounded tracking-wider uppercase mb-4">
                2. Student Participant Details (Genesis Track Team / Members)
            </h2>

            <div class="space-y-6">
                <!-- Student 1 -->
                <div class="border border-emerald-200 bg-emerald-50/20 rounded-lg p-4 avoid-break">
                    <div class="flex justify-between items-center mb-3">
                        <span class="text-xs font-bold bg-emerald-800 text-white px-2 py-0.5 rounded">STUDENT 1 (TEAM LEAD / PARTICIPANT)</span>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                        <div>
                            <label class="font-semibold text-gray-700">Full Name</label>
                            <input type="text" class="w-full mt-1 p-1.5 border border-gray-300 rounded bg-white">
                        </div>
                        <div>
                            <label class="font-semibold text-gray-700">Class / Grade & Age</label>
                            <input type="text" placeholder="e.g., Class 11-A, Age 16" class="w-full mt-1 p-1.5 border border-gray-300 rounded bg-white">
                        </div>
                        <div>
                            <label class="font-semibold text-gray-700">Date of Birth (DD/MM/YYYY)</label>
                            <input type="text" placeholder="DD/MM/YYYY" class="w-full mt-1 p-1.5 border border-gray-300 rounded bg-white">
                        </div>
                        <div>
                            <label class="font-semibold text-gray-700">Parent / Guardian Name</label>
                            <input type="text" class="w-full mt-1 p-1.5 border border-gray-300 rounded bg-white">
                        </div>
                        <div>
                            <label class="font-semibold text-gray-700">Parent / Guardian Contact</label>
                            <input type="tel" placeholder="+91 XXXXX XXXXX" class="w-full mt-1 p-1.5 border border-gray-300 rounded bg-white">
                        </div>
                        <div>
                            <label class="font-semibold text-gray-700">Emergency Contact Number</label>
                            <input type="tel" placeholder="Alternate phone" class="w-full mt-1 p-1.5 border border-gray-300 rounded bg-white">
                        </div>
                        <div class="md:col-span-3">
                            <label class="font-semibold text-gray-700">Medical Conditions, Allergies, or Special Dietary Notes</label>
                            <input type="text" placeholder="Mention any allergies, medications, or Nil" class="w-full mt-1 p-1.5 border border-gray-300 rounded bg-white">
                        </div>
                    </div>
                </div>

                <!-- Student 2 -->
                <div class="border border-gray-300 rounded-lg p-4 avoid-break">
                    <div class="flex justify-between items-center mb-3">
                        <span class="text-xs font-bold bg-gray-700 text-white px-2 py-0.5 rounded">STUDENT 2 (Optional)</span>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                        <div>
                            <label class="font-semibold text-gray-700">Full Name</label>
                            <input type="text" class="w-full mt-1 p-1.5 border border-gray-300 rounded">
                        </div>
                        <div>
                            <label class="font-semibold text-gray-700">Class / Grade & Age</label>
                            <input type="text" class="w-full mt-1 p-1.5 border border-gray-300 rounded">
                        </div>
                        <div>
                            <label class="font-semibold text-gray-700">Date of Birth</label>
                            <input type="text" placeholder="DD/MM/YYYY" class="w-full mt-1 p-1.5 border border-gray-300 rounded">
                        </div>
                        <div>
                            <label class="font-semibold text-gray-700">Parent / Guardian Name</label>
                            <input type="text" class="w-full mt-1 p-1.5 border border-gray-300 rounded">
                        </div>
                        <div>
                            <label class="font-semibold text-gray-700">Parent / Guardian Contact</label>
                            <input type="tel" class="w-full mt-1 p-1.5 border border-gray-300 rounded">
                        </div>
                        <div>
                            <label class="font-semibold text-gray-700">Emergency Contact</label>
                            <input type="tel" class="w-full mt-1 p-1.5 border border-gray-300 rounded">
                        </div>
                        <div class="md:col-span-3">
                            <label class="font-semibold text-gray-700">Medical Conditions / Allergies</label>
                            <input type="text" placeholder="Mention any allergies or Nil" class="w-full mt-1 p-1.5 border border-gray-300 rounded">
                        </div>
                    </div>
                </div>

                <!-- Student 3 -->
                <div class="border border-gray-300 rounded-lg p-4 avoid-break">
                    <div class="flex justify-between items-center mb-3">
                        <span class="text-xs font-bold bg-gray-700 text-white px-2 py-0.5 rounded">STUDENT 3 (Optional)</span>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                        <div>
                            <label class="font-semibold text-gray-700">Full Name</label>
                            <input type="text" class="w-full mt-1 p-1.5 border border-gray-300 rounded">
                        </div>
                        <div>
                            <label class="font-semibold text-gray-700">Class / Grade & Age</label>
                            <input type="text" class="w-full mt-1 p-1.5 border border-gray-300 rounded">
                        </div>
                        <div>
                            <label class="font-semibold text-gray-700">Date of Birth</label>
                            <input type="text" placeholder="DD/MM/YYYY" class="w-full mt-1 p-1.5 border border-gray-300 rounded">
                        </div>
                        <div>
                            <label class="font-semibold text-gray-700">Parent / Guardian Name</label>
                            <input type="text" class="w-full mt-1 p-1.5 border border-gray-300 rounded">
                        </div>
                        <div>
                            <label class="font-semibold text-gray-700">Parent / Guardian Contact</label>
                            <input type="tel" class="w-full mt-1 p-1.5 border border-gray-300 rounded">
                        </div>
                        <div>
                            <label class="font-semibold text-gray-700">Emergency Contact</label>
                            <input type="tel" class="w-full mt-1 p-1.5 border border-gray-300 rounded">
                        </div>
                        <div class="md:col-span-3">
                            <label class="font-semibold text-gray-700">Medical Conditions / Allergies</label>
                            <input type="text" placeholder="Mention any allergies or Nil" class="w-full mt-1 p-1.5 border border-gray-300 rounded">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mb-8 avoid-break">
            <h2 class="text-xs font-bold text-white bg-emerald-800 px-3 py-1.5 rounded tracking-wider uppercase mb-3">
                3. Medical Authorization, Liability Waiver & Code of Conduct
            </h2>
            <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 text-xs text-gray-700 space-y-2.5 leading-relaxed">
                <p><strong>1. Parental Consent & Travel:</strong> I/We, being the parent(s) or legal guardian(s) of the minor student(s) named above, hereby grant permission for their participation in the <strong>Genesis Track at Archithon</strong>, hosted at R.D. Engineering College (RDEC), Ghaziabad.</p>
                <p><strong>2. Medical Emergency Treatment:</strong> In the event of any illness, accident, or medical emergency, I/we authorize the faculty coordinator and event organizers to obtain immediate medical treatment and emergency care as deemed necessary by certified medical professionals.</p>
                <p><strong>3. Code of Conduct for Minors:</strong> Participants agree to abide by all safety guidelines, campus rules, and instructions issued by RDEC and Archithon organizers. Misbehavior or willful damage to institution property will incur disciplinary action.</p>
                <p><strong>4. Media & Publicity Release:</strong> I/we grant permission for photographs, project showcases, and video recordings of the students during the event to be published for educational, promotional, and archival purposes by Archithon and RDEC.</p>
                <p><strong>5. Indemnity Undertaking:</strong> I/we release the organizers, R.D. Engineering College, and event partners from any liability for unforeseen accidents or incidental loss during transit and participation, to the fullest extent permissible by law.</p>
            </div>
        </div>

        <div class="avoid-break">
            <h2 class="text-xs font-bold text-white bg-emerald-800 px-3 py-1.5 rounded tracking-wider uppercase mb-6">
                4. Signatures, Approvals & Official Stamp
            </h2>
            
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs mb-8">
                <div class="border border-gray-200 p-4 rounded-lg text-center flex flex-col justify-between">
                    <div>
                        <div class="h-16 border-b-2 border-gray-400 mb-2 flex items-end justify-center pb-1 text-gray-400 italic">
                            Parent Signature
                        </div>
                        <p class="font-bold text-gray-800">Parent / Guardian Signature</p>
                        <p class="text-gray-500 text-[10px] mt-1">(For Student 1)</p>
                    </div>
                    <div class="mt-4 pt-2 border-t border-gray-100 text-[11px] text-gray-600">
                        Date: ____ / ____ / 2026
                    </div>
                </div>

                <div class="border border-gray-200 p-4 rounded-lg text-center flex flex-col justify-between">
                    <div>
                        <div class="h-16 border-b-2 border-gray-400 mb-2 flex items-end justify-center pb-1 text-gray-400 italic">
                            Teacher Sign
                        </div>
                        <p class="font-bold text-gray-800">Faculty Coordinator</p>
                        <p class="text-gray-500 text-[10px] mt-1">School Representative</p>
                    </div>
                    <div class="mt-4 pt-2 border-t border-gray-100 text-[11px] text-gray-600">
                        Date: ____ / ____ / 2026
                    </div>
                </div>

                <div class="border border-gray-200 p-4 rounded-lg text-center flex flex-col justify-between bg-gray-50/50">
                    <div>
                        <div class="h-16 border-b-2 border-dashed border-gray-400 mb-2 flex items-center justify-center text-gray-400 text-[11px]">
                            [ School Seal / Stamp ]
                        </div>
                        <p class="font-bold text-gray-800">Principal / Headmaster</p>
                        <p class="text-gray-500 text-[10px] mt-1">Signature & Official Stamp</p>
                    </div>
                    <div class="mt-4 pt-2 border-t border-gray-100 text-[11px] text-gray-600">
                        Date: ____ / ____ / 2026
                    </div>
                </div>
            </div>

            <div class="pt-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between text-xs text-gray-600 gap-4">
                <div>
                    <span class="font-semibold">Archithon Genesis Track Desk:</span> Verified & Registered
                </div>
                <div>
                    <span class="font-semibold">Event Helpdesk:</span> support@archithon.in | RDEC Ghaziabad
                </div>
            </div>
        </div>

    </div>

</body>
</html>

16. IMPORTANT: There is only one authorized official email, "syntaxis@rdec.in", in addition to this, add "rehaan24ai077@rdec.in" in contact section for Genesis Track. Plus, both the consent letters, make them available to download, and sent to the official email.
Make sure that all the things that have been integrated are event-appropriate, and don't break any rules.
