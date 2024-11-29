'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Clock, Send } from 'lucide-react'

// Simuler des données d'enchère
const auctionData = {
    id: '1',
    title: "Air Jordan 1 Retro High OG 'Chicago'",
    currentPrice: 850,
    endTime: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 heures à partir de maintenant
    images: [
        '/placeholder.svg?height=400&width=300',
        '/placeholder.svg?height=400&width=300',
        '/placeholder.svg?height=400&width=300',
    ],
    description: "La Air Jordan 1 Retro High OG 'Chicago' est une réédition de la colorway originale de 1985. Cette sneaker emblématique présente une tige en cuir blanc avec des superpositions rouges et des swooshes noirs.",
    history: "Conçue par Tinker Hatfield pour Michael Jordan en 1985, la Air Jordan 1 a révolutionné le monde des sneakers et est devenue une icône de la culture streetwear.",
    bids: [
        { user: 'StreetKing23', amount: 850, time: '2 minutes ago' },
        { user: 'SneakerQueen', amount: 800, time: '5 minutes ago' },
        { user: 'HypeBeast99', amount: 750, time: '10 minutes ago' },
    ],
    chat: [
        { user: 'CoolKid', message: "Est-ce que la taille est conforme ?", time: '5 minutes ago' },
        { user: 'Vendeur', message: "Oui, elles taillent normalement.", time: '3 minutes ago' },
    ]
}

export default function AuctionDetailPage() {
    const [bidAmount, setBidAmount] = useState('')
    const [chatMessage, setChatMessage] = useState('')
    const router = useRouter()

    const handleBid = () => {
        // Logique pour placer une enchère
        console.log('Nouvelle enchère:', bidAmount)
        setBidAmount('')
    }

    const handleSendMessage = () => {
        // Logique pour envoyer un message
        console.log('Nouveau message:', chatMessage)
        setChatMessage('')
    }

    const formatTime = (date: Date) => {
        const hours = date.getHours().toString().padStart(2, '0')
        const minutes = date.getMinutes().toString().padStart(2, '0')
        const seconds = date.getSeconds().toString().padStart(2, '0')
        return `${hours}:${minutes}:${seconds}`
    }

    return (
        <div className="container mx-auto p-4">
            <Button variant="outline" className="mb-4" onClick={() => router.back()}>
                Retour
            </Button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <Tabs defaultValue="image1" className="w-full">
                        <TabsList className="grid w-full grid-cols-3">
                            {auctionData.images.map((_, index) => (
                                <TabsTrigger key={index} value={`image${index + 1}`}>Image {index + 1}</TabsTrigger>
                            ))}
                        </TabsList>
                        {auctionData.images.map((src, index) => (
                            <TabsContent key={index} value={`image${index + 1}`}>
                                <Image
                                    src={src}
                                    alt={`${auctionData.title} - Image ${index + 1}`}
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover rounded-lg"
                                />
                            </TabsContent>
                        ))}
                    </Tabs>
                    <Card className="mt-6">
                        <CardHeader>
                            <CardTitle>Détails techniques</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{auctionData.description}</p>
                        </CardContent>
                    </Card>
                    <Card className="mt-6">
                        <CardHeader>
                            <CardTitle>Histoire du modèle</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{auctionData.history}</p>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>{auctionData.title}</CardTitle>
                            <CardDescription>
                                Fin de enchère dans : <Clock className="inline-block w-4 h-4 mr-1" />
                                <span className="font-bold">{formatTime(auctionData.endTime)}</span>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-2xl font-bold mb-4">Prix actuel : {auctionData.currentPrice} €</p>
                            <div className="flex space-x-2">
                                <Input
                                    type="number"
                                    placeholder="Votre enchère"
                                    value={bidAmount}
                                    onChange={(e) => setBidAmount(e.target.value)}
                                />
                                <Button onClick={handleBid}>Placer une enchère</Button>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="mt-6">
                        <CardHeader>
                            <CardTitle>Historique des enchères</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea className="h-[200px]">
                                {auctionData.bids.map((bid, index) => (
                                    <div key={index} className="flex justify-between items-center mb-2">
                                        <span>{bid.user}</span>
                                        <span>{bid.amount} €</span>
                                        <span className="text-sm text-gray-500">{bid.time}</span>
                                    </div>
                                ))}
                            </ScrollArea>
                        </CardContent>
                    </Card>
                    <Card className="mt-6">
                        <CardHeader>
                            <CardTitle>Chat en direct</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea className="h-[200px] mb-4">
                                {auctionData.chat.map((message, index) => (
                                    <div key={index} className="flex items-start space-x-2 mb-2">
                                        <Avatar>
                                            <AvatarFallback>{message.user[0]}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-semibold">{message.user}</p>
                                            <p>{message.message}</p>
                                            <p className="text-sm text-gray-500">{message.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </ScrollArea>
                            <div className="flex space-x-2">
                                <Input
                                    placeholder="Votre message"
                                    value={chatMessage}
                                    onChange={(e) => setChatMessage(e.target.value)}
                                />
                                <Button onClick={handleSendMessage}>
                                    <Send className="w-4 h-4" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

