'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Maximize } from 'lucide-react'
import { Button } from "@/components/ui/button"

const images = [
    '/placeholder.svg?height=500&width=500',
    '/placeholder.svg?height=500&width=500',
    '/placeholder.svg?height=500&width=500',
    '/placeholder.svg?height=500&width=500',
]

export default function ProductGallery() {
    const [currentImage, setCurrentImage] = useState(0)
    const [isZoomed, setIsZoomed] = useState(false)

    const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length)
    const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)

    return (
        <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                    src={images[currentImage]}
                    alt={`Product image ${currentImage + 1}`}
                    fill
                    className={`object-cover transition-transform duration-500 ease-in-out ${isZoomed ? 'scale-150' : 'scale-100'}`}
                    onClick={() => setIsZoomed(!isZoomed)}
                />
                <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-2 right-2 bg-white/80"
                    onClick={() => setIsZoomed(!isZoomed)}
                >
                    <Maximize className="h-4 w-4" />
                </Button>
            </div>
            <div className="absolute inset-0 flex items-center justify-between">
                <Button variant="outline" size="icon" className="ml-2" onClick={prevImage}>
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="mr-2" onClick={nextImage}>
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
            <div className="mt-4 flex justify-center space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2 w-2 rounded-full ${
                            index === currentImage ? 'bg-primary' : 'bg-gray-300'
                        }`}
                        onClick={() => setCurrentImage(index)}
                    />
                ))}
            </div>
        </div>
    )
}

