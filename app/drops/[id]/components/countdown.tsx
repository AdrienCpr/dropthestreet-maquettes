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
    // Initialize with a properly typed empty object
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        jours: 0,
        heures: 0,
        minutes: 0,
        secondes: 0
    })

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
            const value = timeLeft[interval as keyof TimeLeft]

            if (!value) {
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
        <div>
            {timerComponents.length ? timerComponents : "Le drop a commencé !"}
        </div>
    )
}