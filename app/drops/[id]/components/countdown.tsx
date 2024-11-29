'use client'

import { useState, useEffect } from 'react'

// Define the TimeLeft interface
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
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft())

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
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearInterval(timer)
    }, [targetDate])

    const timerComponents = (Object.keys(timeLeft) as Array<keyof TimeLeft>)
        .map(interval => {
            // Type-safe way to check if the value is undefined, 0, or null
            const value = timeLeft[interval as keyof TimeLeft]
            if (value === undefined || value === 0 || value === null) {
                return null
            }

            return (
                <span className="text-2xl font-bold" key={interval}>
          {value} {interval}{" "}
        </span>
            )
        })
        .filter((component): component is JSX.Element => component !== null)

    return (
        <div className="text-center p-4 bg-primary/10 rounded-lg">
            {timerComponents.length ? timerComponents : <span className="text-2xl font-bold">Le drop a commencé !</span>}
        </div>
    )
}