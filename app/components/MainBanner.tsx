'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function MainBanner() {
    const [timeLeft, setTimeLeft] = useState(24 * 60 * 60) // 24 heures en secondes

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0))
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const formatTime = (time: number) => {
        const hours = Math.floor(time / 3600)
        const minutes = Math.floor((time % 3600) / 60)
        const seconds = time % 60
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    }

    return (
        <div className="relative h-96 rounded-lg overflow-hidden">
            <Image src="/placeholder.svg" alt="Prochain drop" layout="fill" objectFit="cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
                <h2 className="text-4xl font-bold mb-4">Prochain Drop : Streetwear Deluxe</h2>
                <p className="text-2xl mb-6">Commence dans : {formatTime(timeLeft)}</p>
                <Button variant="secondary" size="lg">
                    En savoir plus
                </Button>
            </div>
        </div>
    )
}

