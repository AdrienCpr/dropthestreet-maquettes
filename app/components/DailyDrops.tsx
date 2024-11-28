import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const drops = [
    { id: 1, name: "Supreme x Nike", time: "14:00", image: "/placeholder.svg" },
    { id: 2, name: "Yeezy Boost 350", time: "16:00", image: "/placeholder.svg" },
    { id: 3, name: "Off-White Collection", time: "18:00", image: "/placeholder.svg" },
]

export default function DailyDrops() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Drops du jour</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4">
                    {drops.map((drop) => (
                        <li key={drop.id} className="flex items-center space-x-4">
                            <Image src={drop.image} alt={drop.name} width={64} height={64} className="rounded" />
                            <div>
                                <h3 className="font-semibold">{drop.name}</h3>
                                <p className="text-sm text-gray-500">À {drop.time}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}

