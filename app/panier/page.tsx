"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Icons } from "../panier/[id]/components/icons"

export default function CheckoutPage() {
    const [isProcessing, setIsProcessing] = useState(false)
    const [isConfirmed, setIsConfirmed] = useState(false)

    const handlePayment = async (event: React.FormEvent) => {
        event.preventDefault()
        setIsProcessing(true)
        await new Promise(resolve => setTimeout(resolve, 2000))
        setIsProcessing(false)
        setIsConfirmed(true)
    }

    if (isConfirmed) {
        return (
            <Card className="w-full max-w-3xl mx-auto mt-8">
                <CardHeader>
                    <CardTitle>Confirmation de commande</CardTitle>
                    <CardDescription>Merci pour votre achat sur Drop the Street !</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-center p-8">
                        <Icons.check className="w-16 h-16 text-green-500" />
                    </div>
                    <p className="text-center text-lg font-medium">Votre paiement a été traité avec succès.</p>
                    <p className="text-center mt-2">Un e-mail de confirmation vous sera envoyé sous peu.</p>
                </CardContent>
            </Card>
        )
    }

    return (
        <form onSubmit={handlePayment}>
            <Card className="w-full max-w-3xl mx-auto mt-8">
                <CardHeader>
                    <CardTitle>Finaliser votre achat</CardTitle>
                    <CardDescription>Complétez votre paiement pour Drop the Street</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Récapitulatif de la commande</h3>
                        <div className="flex justify-between items-center">
                            <span>T-shirt Urban Vibes - Taille L</span>
                            <span className="font-medium">59,99 €</span>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                            <span>Frais de livraison</span>
                            <span className="font-medium">4,99 €</span>
                        </div>
                        <Separator className="my-2" />
                        <div className="flex justify-between items-center font-semibold">
                            <span>Total</span>
                            <span>64,98 €</span>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Informations de paiement</h3>
                        <div className="space-y-2">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="cardName">Nom sur la carte</Label>
                                    <Input id="cardName" placeholder="John Doe" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="cardNumber">Numéro de carte</Label>
                                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="expDate">Date de expiration</Label>
                                    <Input id="expDate" placeholder="MM/AA" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="cvv">CVV</Label>
                                    <Input id="cvv" placeholder="123" required />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Options de livraison</h3>
                        <RadioGroup defaultValue="standard">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="standard" id="standard" />
                                <Label htmlFor="standard">Standard (3-5 jours ouvrés)</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="express" id="express" />
                                <Label htmlFor="express">Express (1-2 jours ouvrés) +5,00 €</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Adresse de livraison</h3>
                        <div className="space-y-2">
                            <Input placeholder="Adresse" required />
                            <Input placeholder="Code postal" required />
                            <Input placeholder="Ville" required />
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" type="submit" disabled={isProcessing}>
                        {isProcessing ? (
                            <>
                                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                Traitement en cours...
                            </>
                        ) : (
                            "Confirmer et payer"
                        )}
                    </Button>
                </CardFooter>
            </Card>
        </form>
    )
}

