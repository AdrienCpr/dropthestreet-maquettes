import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const auctions = [
    { id: 1, name: "Nike x Off-White Air Force 1", currentBid: "450 €", timeLeft: "2h 15m", image: "/placeholder.svg" },
    { id: 2, name: "Supreme Skateboard Deck", currentBid: "300 €", timeLeft: "1h 30m", image: "/placeholder.svg" },
    { id: 3, name: "Yeezy 700 Wave Runner", currentBid: "380 €", timeLeft: "45m", image: "/placeholder.svg" },
]

export default function LiveAuctions() {
    return (
        <Card className="mt-8">
            <CardHeader>
                <CardTitle>Enchères en direct</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {auctions.map((auction) => (
                        <Card key={auction.id}>
                            <CardContent className="p-4">
                                <Image src={auction.image} alt={auction.name} width={200} height={200} className="rounded mb-4" />
                                <h3 className="font-semibold">{auction.name}</h3>
                                <p className="text-sm text-gray-500">Enchère actuelle : {auction.currentBid}</p>
                                <p className="text-sm text-gray-500">Temps restant : {auction.timeLeft}</p>
                                <Button className="w-full mt-4">Enchérir</Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

