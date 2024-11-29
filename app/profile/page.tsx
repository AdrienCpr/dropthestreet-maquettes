'use client'

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Bell, ShoppingBag, Gavel, Settings } from 'lucide-react'

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState('history')

    const user = {
        username: 'streetwear_king',
        bio: 'Passionné de streetwear et collectionneur de sneakers rares. Toujours à l\'affût des derniers drops !',
        avatar: '/placeholder.svg?height=100&width=100'
    }

    const purchaseHistory = [
        { id: 1, item: 'Supreme Box Logo Hoodie', date: '2023-05-15', price: '€350' },
        { id: 2, item: 'Air Jordan 1 Retro High', date: '2023-04-22', price: '€220' },
        { id: 3, item: 'Off-White Industrial Belt', date: '2023-03-10', price: '€180' },
    ]

    const salesHistory = [
        { id: 1, item: 'Yeezy Boost 350 V2', date: '2023-05-01', price: '€300' },
        { id: 2, item: 'BAPE Shark Hoodie', date: '2023-04-05', price: '€280' },
    ]

    const followedAuctions = [
        { id: 1, item: 'Travis Scott x Nike SB Dunk Low', endDate: '2023-06-30', currentBid: '€750' },
        { id: 2, item: 'Palace Tri-Ferg Hoodie', endDate: '2023-06-25', currentBid: '€200' },
    ]

    return (
        <div className="container mx-auto p-4">
            <Card className="mb-8">
                <CardHeader className="flex flex-row items-center gap-4">
                    <Avatar className="w-24 h-24">
                        <AvatarImage src={user.avatar} alt={user.username} />
                        <AvatarFallback>{user.username[0].toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                        <CardTitle className="text-2xl">{user.username}</CardTitle>
                        <CardDescription className="mt-2">{user.bio}</CardDescription>
                    </div>
                </CardHeader>
            </Card>

            <Tabs defaultValue="history" className="mb-8" onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="history"><ShoppingBag className="mr-2 h-4 w-4" />Historique</TabsTrigger>
                    <TabsTrigger value="auctions"><Gavel className="mr-2 h-4 w-4" />Enchères</TabsTrigger>
                    <TabsTrigger value="settings"><Settings className="mr-2 h-4 w-4" />Paramètres</TabsTrigger>
                    <TabsTrigger value="account"><Bell className="mr-2 h-4 w-4" />Compte</TabsTrigger>
                </TabsList>
                <TabsContent value="history">
                    <Card>
                        <CardHeader>
                            <CardTitle>Historique des achats</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                {purchaseHistory.map(purchase => (
                                    <li key={purchase.id} className="flex justify-between items-center">
                                        <span>{purchase.item}</span>
                                        <span>{purchase.date}</span>
                                        <span className="font-bold">{purchase.price}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="mt-4">
                        <CardHeader>
                            <CardTitle>Historique des ventes</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                {salesHistory.map(sale => (
                                    <li key={sale.id} className="flex justify-between items-center">
                                        <span>{sale.item}</span>
                                        <span>{sale.date}</span>
                                        <span className="font-bold">{sale.price}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="auctions">
                    <Card>
                        <CardHeader>
                            <CardTitle>Enchères suivies</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                {followedAuctions.map(auction => (
                                    <li key={auction.id} className="flex justify-between items-center">
                                        <span>{auction.item}</span>
                                        <span>Fin le {auction.endDate}</span>
                                        <span className="font-bold">{auction.currentBid}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="settings">
                    <Card>
                        <CardHeader>
                            <CardTitle>Paramètres de notifications</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="push-notifications">Notifications push</Label>
                                <Switch id="push-notifications" />
                            </div>
                            <div className="flex items-center justify-between">
                                <Label htmlFor="email-notifications">Notifications par email</Label>
                                <Switch id="email-notifications" />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="account">
                    <Card>
                        <CardHeader>
                            <CardTitle>Informations du compte</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="votre@email.com" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Nouveau mot de passe</Label>
                                <Input id="password" type="password" />
                            </div>
                            <Button>Mettre à jour</Button>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>

            {activeTab !== 'account' && (
                <Button className="w-full">Modifier les informations du compte</Button>
            )}
        </div>
    )
}

