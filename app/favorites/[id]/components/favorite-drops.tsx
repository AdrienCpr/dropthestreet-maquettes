'use client'

import { useState } from 'react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {Heart, ShoppingCart} from 'lucide-react'

// Simulons des données pour les drops favoris
const initialDrops = [
    { id: 1, name: "Air Max Futuristic", brand: "Nike", price: 199.99, image: "/placeholder.svg?height=200&width=200" },
    { id: 2, name: "Yeezy Boost 350", brand: "Adidas", price: 220, image: "/placeholder.svg?height=200&width=200" },
    { id: 3, name: "Supreme Box Logo Hoodie", brand: "Supreme", price: 168, image: "/placeholder.svg?height=200&width=200" },
    { id: 4, name: "Off-White Belt", brand: "Off-White", price: 180, image: "/placeholder.svg?height=200&width=200" },
    { id: 5, name: "Bape Shark Hoodie", brand: "A Bathing Ape", price: 379, image: "/placeholder.svg?height=200&width=200" },
    { id: 6, name: "Jordan 1 Retro High", brand: "Jordan", price: 170, image: "/placeholder.svg?height=200&width=200" },
]

export default function FavoriteDrops() {
    const [drops, setDrops] = useState(initialDrops)
    const [sortBy, setSortBy] = useState('name')

    const handleRemoveFavorite = (id: number) => {
        setDrops(drops.filter(drop => drop.id !== id))
    }

    const handleSort = (value: string) => {
        setSortBy(value);
        setDrops([...drops].sort((a, b) => {
            if (value === 'price') {
                return a.price - b.price; // Tri par prix (numérique)
            } else if (typeof a[value as keyof typeof a] === "string" && typeof b[value as keyof typeof b] === "string") {
                return (a[value as keyof typeof a] as string).localeCompare(b[value as keyof typeof b] as string);
            }
            return 0;
        }));
    };


    return (
        <div>
            <div className="flex justify-end mb-4">
                <Select onValueChange={handleSort} defaultValue={sortBy}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Trier par" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="name">Nom</SelectItem>
                        <SelectItem value="brand">Marque</SelectItem>
                        <SelectItem value="price">Prix</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {drops.map((drop) => (
                    <Card key={drop.id} className="overflow-hidden">
                        <CardContent className="p-0">
                            <img src={drop.image} alt={drop.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="font-semibold text-lg">{drop.name}</h3>
                                <p className="text-sm text-gray-600">{drop.brand}</p>
                                <p className="font-bold mt-2">{drop.price.toFixed(2)} €</p>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-full" onClick={() => handleRemoveFavorite(drop.id)}>
                                <ShoppingCart className="w-4 h-4 mr-2" /> Ajouter dans le panier
                            </Button>
                            <Button variant="outline" className="w-full" onClick={() => handleRemoveFavorite(drop.id)}>
                                <Heart className="w-4 h-4 mr-2" /> Retirer des favoris
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

