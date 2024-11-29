"use client"

import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

export default function Filters() {
    const [priceRange, setPriceRange] = useState([0, 1000])

    return (
        <div className="mb-8 p-4 bg-gray-100 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Filtres</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Catégorie" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="sneakers">Sneakers</SelectItem>
                        <SelectItem value="hoodies">Hoodies</SelectItem>
                        <SelectItem value="tshirts">T-shirts</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Marque" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="nike">Nike</SelectItem>
                        <SelectItem value="adidas">Adidas</SelectItem>
                        <SelectItem value="supreme">Supreme</SelectItem>
                    </SelectContent>
                </Select>
                <div>
                    <p className="mb-2">Prix: {priceRange[0]}€ - {priceRange[1]}€</p>
                    <Slider
                        min={0}
                        max={1000}
                        step={10}
                        value={priceRange}
                        onValueChange={setPriceRange}
                    />
                </div>
            </div>
            <Button className="mt-4">Appliquer les filtres</Button>
        </div>
    )
}

