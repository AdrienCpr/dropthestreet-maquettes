"use client"

import { useState } from 'react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

type Auction = {
    id: number
    name: string
    image: string
    currentPrice: number
    timeLeft: string
    bidders: number
}

const mockAuctions: Auction[] = [
    {
        id: 1,
        name: "Air Jordan 1 Retro High OG",
        image: "/placeholder.svg",
        currentPrice: 250,
        timeLeft: "2h 35m",
        bidders: 15
    },
    {
        id: 2,
        name: "Supreme Box Logo Hoodie",
        image: "/placeholder.svg",
        currentPrice: 500,
        timeLeft: "1h 15m",
        bidders: 23
    },
    {
        id: 3,
        name: "Off-White x Nike Air Force 1",
        image: "/placeholder.svg",
        currentPrice: 350,
        timeLeft: "3h 50m",
        bidders: 18
    }
]

export default function AuctionsList() {
    const [auctions] = useState<Auction[]>(mockAuctions)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {auctions.map((auction,index) => (
                <Card key={auction.id} className="overflow-hidden">
                    <Image
                        src={auction.image}
                        alt={auction.name}
                        width={300}
                        height={300}
                        className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-4">
                        <h2 className="text-xl font-semibold mb-2">{auction.name}</h2>
                        <p className="text-lg font-bold mb-2">{auction.currentPrice} €</p>
                        <p className="text-sm text-gray-600 mb-1">Temps restant : {auction.timeLeft}</p>
                        <p className="text-sm text-gray-600">{auction.bidders} enchérisseurs</p>
                    </CardContent>
                    <CardFooter className="p-4 flex justify-between">
                        <Button variant="default" onClick={() => window.location.href = `/auctions/${auctions[index].id}`}>Enchérir</Button>
                        <Button variant="outline">Suivre</Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}

