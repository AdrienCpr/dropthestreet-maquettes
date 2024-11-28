import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const products = [
    { id: 1, name: "Air Jordan 1 Retro", price: "189 €", image: "/placeholder.svg" },
    { id: 2, name: "Supreme Box Logo Hoodie", price: "299 €", image: "/placeholder.svg" },
    { id: 3, name: "Bape Shark Hoodie", price: "359 €", image: "/placeholder.svg" },
]

export default function PopularProducts() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Produits populaires</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4">
                    {products.map((product) => (
                        <li key={product.id} className="flex items-center space-x-4">
                            <Image src={product.image} alt={product.name} width={64} height={64} className="rounded" />
                            <div>
                                <h3 className="font-semibold">{product.name}</h3>
                                <p className="text-sm text-gray-500">{product.price}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}

