"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { ShoppingCart, Minus, Plus, Trash2 } from 'lucide-react'

interface Product {
    id: number
    name: string
    price: number
    image: string
    size: string
    quantity: number
}

export default function CheckoutPage() {
    const [isPaid, setIsPaid] = useState(false)
    const [showPayment, setShowPayment] = useState(false)
    const [shippingMethod, setShippingMethod] = useState("standard")
    const [products, setProducts] = useState<Product[]>([
        { id: 1, name: "T-shirt Supreme x The North Face", price: 149.99, image: "/placeholder.svg?height=100&width=100", size: "M", quantity: 1 },
        { id: 2, name: "Hoodie Off-White", price: 299.99, image: "/placeholder.svg?height=100&width=100", size: "L", quantity: 1 },
        { id: 3, name: "Sneakers Yeezy Boost 350", price: 220.00, image: "/placeholder.svg?height=100&width=100", size: "42", quantity: 1 },
    ])

    const handlePayment = () => {
        setTimeout(() => {
            setIsPaid(true)
        }, 1500)
    }

    const updateQuantity = (id: number, change: number) => {
        setProducts(products.map(product =>
            product.id === id ? { ...product, quantity: Math.max(1, product.quantity + change) } : product
        ))
    }

    const removeProduct = (id: number) => {
        setProducts(products.filter(product => product.id !== id))
    }

    const updateSize = (id: number, newSize: string) => {
        setProducts(products.map(product =>
            product.id === id ? { ...product, size: newSize } : product
        ))
    }

    const totalPrice = products.reduce((sum, product) => sum + product.price * product.quantity, 0)
    const finalPrice = shippingMethod === "express" ? totalPrice + 9.99 : totalPrice

    if (isPaid) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle>Confirmation de paiement</CardTitle>
                        <CardDescription>Merci pour votre achat chez Drop the Street !</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-center text-green-600 font-bold text-xl">
                            Votre paiement de {finalPrice.toFixed(2)} € a été effectué avec succès.
                        </p>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <Card className="w-full max-w-4xl">
                <CardHeader>
                    <CardTitle>Votre panier Drop the Street</CardTitle>
                    <CardDescription>Finalisez votre commande de streetwear</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-medium mb-4">Liste des produits</h3>
                            {products.map((product) => (
                                <div key={product.id} className="flex items-center space-x-4 py-4 border-b">
                                    <Image src={product.image} alt={product.name} width={100} height={100} className="rounded-md" />
                                    <div className="flex-grow">
                                        <h4 className="font-medium">{product.name}</h4>
                                        <p className="text-sm text-gray-500">Prix: {product.price.toFixed(2)} €</p>
                                        <div className="flex items-center space-x-2 mt-2">
                                            <Label htmlFor={`size-${product.id}`} className="text-sm">Taille:</Label>
                                            <Select value={product.size} onValueChange={(value) => updateSize(product.id, value)}>
                                                <SelectTrigger className="w-20">
                                                    <SelectValue placeholder="Taille" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="S">S</SelectItem>
                                                    <SelectItem value="M">M</SelectItem>
                                                    <SelectItem value="L">L</SelectItem>
                                                    <SelectItem value="XL">XL</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Button variant="outline" size="icon" onClick={() => updateQuantity(product.id, -1)}>
                                            <Minus className="h-4 w-4" />
                                        </Button>
                                        <span className="w-8 text-center">{product.quantity}</span>
                                        <Button variant="outline" size="icon" onClick={() => updateQuantity(product.id, 1)}>
                                            <Plus className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <Button variant="destructive" size="icon" onClick={() => removeProduct(product.id)}>
                                        <Trash2 className="h-4 w-4" />
                                        <span className="sr-only">Supprimer l&apos;article</span>
                                    </Button>
                                </div>
                            ))}
                            <div className="flex justify-between items-center font-bold mt-4">
                                <span>Total</span>
                                <span>{totalPrice.toFixed(2)} €</span>
                            </div>
                        </div>

                        {showPayment && (
                            <>
                                <Separator />
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Informations de paiement</h3>
                                    <div className="space-y-2">
                                        <div>
                                            <Label htmlFor="card-number">Numéro de carte</Label>
                                            <Input id="card-number" placeholder="1234 5678 9012 3456" />
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="flex-1">
                                                <Label htmlFor="expiry">Date d&apos;expiration</Label>
                                                <Input id="expiry" placeholder="MM/AA" />
                                            </div>
                                            <div className="flex-1">
                                                <Label htmlFor="cvc">CVC</Label>
                                                <Input id="cvc" placeholder="123" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Separator />
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Options de livraison</h3>
                                    <RadioGroup defaultValue="standard" onValueChange={setShippingMethod}>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="standard" id="standard" />
                                            <Label htmlFor="standard">Standard (3-5 jours ouvrés) - Gratuit</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="express" id="express" />
                                            <Label htmlFor="express">Express (1-2 jours ouvrés) - 9.99 €</Label>
                                        </div>
                                    </RadioGroup>
                                </div>
                                <div>
                                    <Label htmlFor="address">Adresse de livraison</Label>
                                    <Input id="address" placeholder="123 Rue de la Mode, 75001 Paris" />
                                </div>
                            </>
                        )}
                    </div>
                </CardContent>
                <CardFooter>
                    {showPayment ? (
                        <Button className="w-full" onClick={handlePayment}>
                            Confirmer et payer {finalPrice.toFixed(2)} €
                        </Button>
                    ) : (
                        <Button className="w-full" onClick={() => setShowPayment(true)}>
                            <ShoppingCart className="mr-2 h-4 w-4" /> Passer la commande
                        </Button>
                    )}
                </CardFooter>
            </Card>
        </div>
    )
}

