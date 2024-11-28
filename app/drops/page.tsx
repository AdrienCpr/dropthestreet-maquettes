'use client'

import { useState } from 'react'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import { CalendarIcon, FilterIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

// Types pour nos données
type Drop = {
    id: number
    name: string
    brand: string
    category: 'Sneakers' | 'Vêtements' | 'Accessoires'
    image: string
    dropDate: Date
    isVip: boolean
}

// Données factices pour notre exemple
const page: Drop[] = [
    {
        id: 1,
        name: "Air Max Futuristic",
        brand: "Nike",
        category: "Sneakers",
        image: "/placeholder.svg?height=200&width=200",
        dropDate: new Date(2023, 11, 15, 10, 0),
        isVip: false
    },
    {
        id: 2,
        name: "Hoodie Supreme x Off-White",
        brand: "Supreme",
        category: "Vêtements",
        image: "/placeholder.svg?height=200&width=200",
        dropDate: new Date(2023, 11, 16, 18, 0),
        isVip: true
    },
    {
        id: 3,
        name: "Casquette Yeezy",
        brand: "Adidas",
        category: "Accessoires",
        image: "/placeholder.svg?height=200&width=200",
        dropDate: new Date(2023, 11, 17, 12, 0),
        isVip: false
    },
    // Ajoutez plus de page ici...
]

export default function DropList() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    const [selectedBrand, setSelectedBrand] = useState<string | null>(null)
    const [selectedDate, setSelectedDate] = useState<string | null>(null)

    const filteredDrops = page.filter(drop => {
        if (selectedCategory && drop.category !== selectedCategory) return false
        if (selectedBrand && drop.brand !== selectedBrand) return false
        if (selectedDate) {
            const today = new Date()
            const dropDate = new Date(drop.dropDate)
            if (selectedDate === 'Aujourd\'hui' && !isSameDay(today, dropDate)) return false
            if (selectedDate === 'Cette semaine' && !isThisWeek(dropDate, { weekStartsOn: 1 })) return false
        }
        return true
    })

    const brands = Array.from(new Set(page.map(drop => drop.brand)))

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Drops à venir</h1>

            <div className="flex flex-wrap gap-4 mb-6">
                <Select onValueChange={(value) => setSelectedCategory(value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Catégorie" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Sneakers">Sneakers</SelectItem>
                        <SelectItem value="Vêtements">Vêtements</SelectItem>
                        <SelectItem value="Accessoires">Accessoires</SelectItem>
                    </SelectContent>
                </Select>

                <Select onValueChange={(value) => setSelectedBrand(value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Marque" />
                    </SelectTrigger>
                    <SelectContent>
                        {brands.map(brand => (
                            <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <Select onValueChange={(value) => setSelectedDate(value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Date" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Aujourd'hui">Aujourd&apos;hui</SelectItem>
                        <SelectItem value="Cette semaine">Cette semaine</SelectItem>
                    </SelectContent>
                </Select>

                <Button
                    variant="outline"
                    onClick={() => {
                        setSelectedCategory(null)
                        setSelectedBrand(null)
                        setSelectedDate(null)
                    }}
                >
                    Réinitialiser les filtres
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDrops.map(drop => (
                    <Card key={drop.id} className="overflow-hidden">
                        <CardContent className="p-0">
                            <img src={drop.image} alt={drop.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2">{drop.name}</h2>
                                <p className="text-sm text-gray-600 mb-2">{drop.brand}</p>
                                <p className="text-sm mb-2">
                                    {format(drop.dropDate, "d MMMM yyyy 'à' HH:mm", { locale: fr })}
                                </p>
                                {drop.isVip && (
                                    <Badge variant="secondary" className="mb-2">VIP</Badge>
                                )}
                            </div>
                        </CardContent>
                        <Separator />
                        <CardFooter className="flex justify-between p-4">
                            <Button>Participer</Button>
                            <Button variant="outline">
                                <CalendarIcon className="mr-2 h-4 w-4" /> Ajouter
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            <Separator className="my-8" />

            <h2 className="text-2xl font-bold mb-6">Drops VIP</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {page.filter(drop => drop.isVip).map(drop => (
                    <Card key={drop.id} className="overflow-hidden">
                        <CardContent className="p-0">
                            <img src={drop.image} alt={drop.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2">{drop.name}</h2>
                                <p className="text-sm text-gray-600 mb-2">{drop.brand}</p>
                                <p className="text-sm mb-2">
                                    {format(drop.dropDate, "d MMMM yyyy 'à' HH:mm", { locale: fr })}
                                </p>
                                <Badge variant="secondary" className="mb-2">VIP</Badge>
                            </div>
                        </CardContent>
                        <Separator />
                        <CardFooter className="flex justify-between p-4">
                            <Button>Participer</Button>
                            <Button variant="outline">
                                <CalendarIcon className="mr-2 h-4 w-4" /> Ajouter
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

function isSameDay(date1: Date, date2: Date) {
    return date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
}

function isThisWeek(date: Date, options: { weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6 }) {
    const today = new Date()
    const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + (options.weekStartsOn || 0)))
    const endOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 6 + (options.weekStartsOn || 0)))
    return date >= startOfWeek && date <= endOfWeek
}

