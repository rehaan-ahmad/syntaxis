import { useState, useEffect } from 'react';

/**
 * Represents the calculated time remaining until the target date.
 */
export interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

/**
 * Target date for the countdown.
 * Specified in ISO 8601 format with a +05:30 offset for India Standard Time (IST).
 */
const TARGET_DATE = new Date('2026-09-18T09:00:00+05:30').getTime();

/**
 * Custom hook that tracks the time remaining until the festival start date.
 * Updates the countdown state every second.
 *
 * @returns {CountdownState} The current breakdown of days, hours, minutes, and seconds.
 */
export function useCountdown(targetDateMs: number = TARGET_DATE): CountdownState {
  const [timeLeft, setTimeLeft] = useState<CountdownState>(calculateTimeLeft(targetDateMs));

  function calculateTimeLeft(dateMs: number): CountdownState {
    const difference = dateMs - Date.now();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isExpired: false,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDateMs));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDateMs]);

  return timeLeft;
}
