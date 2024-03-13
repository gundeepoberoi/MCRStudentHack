"use client";
import React, { useState, useEffect } from 'react';
import { NumberBox } from './NumberBox';

interface TimeProps {
    date: string;
    // days: number | string;
    // hours: number | string;
    // minutes: number | string;
    // seconds: number | string;
}

export const TimerContainer = ({ currentDate }: { currentDate: Date }) => {
    
    const targetDate = new Date('2024-03-29T23:59:59');

    const timeDifference = targetDate.getTime() - currentDate.getTime();
    const initialDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const initialHours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const initialMinutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const initialSeconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    const [days, setDays] = useState<number | string>(initialDays);
    const [hours, setHours] = useState<number | string>(initialHours);
    const [minutes, setMinutes] = useState<number | string>(initialMinutes);
    const [seconds, setSeconds] = useState<number | string>(initialSeconds);

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            if (Number(seconds) > 0) {
                setSeconds(Number(seconds) - 1);
            } else if (Number(minutes) > 0) {
                setMinutes(Number(minutes) - 1);
                setSeconds(59);
            } else if (Number(hours) > 0) {
                setHours(Number(hours) - 1);
                setMinutes(59);
                setSeconds(59);
            } else if (Number(days) > 0) {
                setDays(Number(days) - 1);
                setHours(23);
                setMinutes(59);
                setSeconds(59);
            } else {
                clearInterval(countdownInterval); // Clear the interval when countdown reaches zero
            }
        }, 1000);

        // Clean up interval on component unmount
        return () => clearInterval(countdownInterval);
    }, [days, hours, minutes, seconds]);

    let daysFlip = Number(days) <= 0 && Number(hours) <= 0 && Number(minutes) <= 0 && Number(seconds) <= 0 ? true : false;
    let hoursFlip = Number(seconds) <= 0 && Number(minutes) <= 0 && Number(hours) > 0 ? true : false;
    let minutesFlip = Number(seconds) <= 0 && Number(minutes) > 0 ? true : false;
    let secondsFlip = Number(seconds) > 0 ? true : false;

    return (
        <div className="mt-2 md:mt-40 rounded-xl">
            <div className="grid grid-cols-2 gap-4 py-6 px-10 md:flex md:items-center md:justify-between md:mt-2 rounded-xl md:px-6 md:py-8">
                <NumberBox num={days} unit="Days" flip={daysFlip} />
                <div className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50 ">:</div>
                <NumberBox num={hours} unit="Hours" flip={hoursFlip} />
                <div className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50 ">:</div>
                <NumberBox num={minutes} unit="Minutes" flip={minutesFlip} />
                <div className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50 ">:</div>
                <NumberBox num={seconds} unit="Seconds" flip={secondsFlip} />
            </div>
        </div>
    );
};
