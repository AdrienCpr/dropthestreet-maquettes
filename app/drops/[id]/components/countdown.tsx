'use client'

import { useState, useEffect } from 'react'

// Define a specific type for the time left object
interface TimeLeft {
    jours?: number
    heures?: number
    minutes?: number
    secondes?: number
}

interface CountdownProps {
    targetDate: Date
}

export default function Countdown({ targetDate }: CountdownProps) {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({})

    function calculateTimeLeft(): TimeLeft {
        const difference = +targetDate - +new Date()
        let timeLeft: TimeLeft = {}

        if (difference > 0) {
            timeLeft = {
                jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
                heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                secondes: Math.floor((difference / 1000) % 60)
            }
        }

        return timeLeft
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearTimeout(timer)
    })

    const timerComponents = Object.keys(timeLeft)
        .filter((interval): interval is keyof TimeLeft => interval in timeLeft)
        .map(interval => {
            if (!timeLeft[interval]) {
                return null
            }

            return (
                <span className="text-2xl font-bold" key={interval}>
                {timeLeft[interval]} {interval}{" "}
            </span>
            )
        })

    return (
        <div className="text-center p-4 bg-primary/10 rounded-lg">
            {timerComponents.length ? timerComponents : <span className="text-2xl font-bold">Le drop a commencé !</span>}
        </div>
    )
}