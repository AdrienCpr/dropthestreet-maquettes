import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageCircle, Star, Clock, Bell } from 'lucide-react'
import ProductGallery from './components/product-gallery'
import Countdown from './components/countdown'
import LiveChat from './components/live-chat'

export default function DropDetailPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <ProductGallery />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">Nom du Produit</h1>
          <div className="flex items-center space-x-2 mb-4">
            <Badge>Marque</Badge>
            <Badge variant="outline">Modèle</Badge>
          </div>
          <p className="text-xl font-semibold mb-2">Prix: 199.99 €</p>
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Début du Drop</h2>
            <Countdown targetDate={new Date('2023-12-31T23:59:59')} />
          </div>
          <Button className="w-full mb-4">
            <Bell className="mr-2 h-4 w-4" /> Notifier à l'ouverture
          </Button>
          <Tabs defaultValue="description" className="mt-6">
            <TabsList>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="details">Détails</TabsTrigger>
            </TabsList>
            <TabsContent value="description">
              <p>Description détaillée du produit...</p>
            </TabsContent>
            <TabsContent value="details">
              <ul className="list-disc pl-5">
                <li>Caractéristique 1</li>
                <li>Caractéristique 2</li>
                <li>Caractéristique 3</li>
              </ul>
            </TabsContent>
          </Tabs>
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-2">Vendeur</h2>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Vendeur" />
                <AvatarFallback>VD</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Nom du Vendeur</p>
                <div className="flex items-center">
                  <Badge variant="secondary" className="mr-2">Vérifié</Badge>
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span className="ml-1">4.8</span>
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

