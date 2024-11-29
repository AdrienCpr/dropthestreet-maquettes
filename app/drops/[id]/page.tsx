import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Bell } from 'lucide-react'
import ProductGallery from './components/product-gallery'
import Countdown from './components/countdown'
import LiveChat from './components/live-chat'

type Drop = {
  id: string
  name: string
  brand: string
  model: string
  price: number
  dropDate: string
  description: string
  details: string[]
  seller: {
    name: string
    avatarUrl: string
    isVerified: boolean
    rating: number
  }
}

// Fonction pour générer les paramètres des pages dynamiques (récupérer l'ID des drops)
export async function generateStaticParams() {
  const res = await fetch('https://votre-api.com/drops')
  const drops: Drop[] = await res.json()

  return drops.map((drop) => ({
    id: drop.id,
  }))
}

// Fonction pour récupérer les données pour chaque drop (en fonction de l'ID)
export async function getStaticProps({ params }: { params: { id: string } }) {
  const res = await fetch(`https://votre-api.com/drops/${params.id}`)
  const drop: Drop = await res.json()

  return {
    props: {
      drop,
    },
  }
}

type DropDetailPageProps = {
  drop: Drop
}

export default function DropDetailPage({ drop }: DropDetailPageProps) {
  return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ProductGallery />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{drop.name}</h1>
            <div className="flex items-center space-x-2 mb-4">
              <Badge>{drop.brand}</Badge>
              <Badge variant="outline">{drop.model}</Badge>
            </div>
            <p className="text-xl font-semibold mb-2">Prix: {drop.price} €</p>
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Début du Drop</h2>
              <Countdown targetDate={new Date(drop.dropDate)} />
            </div>
            <Button className="w-full mb-4">
              <Bell className="mr-2 h-4 w-4" /> Notifier à l&apos;ouverture
            </Button>
            <Tabs defaultValue="description" className="mt-6">
              <TabsList>
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="details">Détails</TabsTrigger>
              </TabsList>
              <TabsContent value="description">
                <p>{drop.description}</p>
              </TabsContent>
              <TabsContent value="details">
                <ul className="list-disc pl-5">
                  {drop.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
            <div className="mt-8">
              <h2 className="text-lg font-semibold mb-2">Vendeur</h2>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={drop.seller.avatarUrl || "/placeholder.svg?height=40&width=40"} alt="Vendeur" />
                  <AvatarFallback>VD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{drop.seller.name}</p>
                  <div className="flex items-center">
                    <Badge variant="secondary" className="mr-2">
                      {drop.seller.isVerified ? 'Vérifié' : 'Non vérifié'}
                    </Badge>
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="ml-1">{drop.seller.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Chat en direct</h2>
          <LiveChat />
        </div>
      </div>
  )
}
