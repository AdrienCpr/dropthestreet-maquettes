import { Bell, Gavel, MessageCircle, ShoppingBag } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Types pour nos notifications
type NotificationType = "drop" | "auction" | "support" | "promo"

interface Notification {
  id: string
  type: NotificationType
  message: string
  date: string
}

// Données factices pour les notifications
const notifications: Notification[] = [
  { id: "1", type: "drop", message: "Le drop Supreme x Nike commence dans 1 heure !", date: "2023-11-29T14:00:00" },
  { id: "2", type: "auction", message: "Vous avez été surenchéri sur les Air Jordan 1 Chicago", date: "2023-11-29T13:30:00" },
  { id: "3", type: "support", message: "Votre demande a été traitée. Cliquez pour voir la réponse.", date: "2023-11-29T12:45:00" },
  { id: "4", type: "promo", message: "Offre spéciale : -20% sur la nouvelle collection Yeezy", date: "2023-11-29T11:15:00" },
  { id: "5", type: "auction", message: "Félicitations ! Vous avez remporté l'enchère pour les Adidas Yeezy Boost 350", date: "2023-11-29T10:00:00" },
]

// Composant pour une notification individuelle
const NotificationItem = ({ notification }: { notification: Notification }) => {
  const getIcon = (type: NotificationType) => {
    switch (type) {
      case "drop":
        return <ShoppingBag className="h-5 w-5 text-blue-500" />
      case "auction":
        return <Gavel className="h-5 w-5 text-orange-500" />
      case "support":
        return <MessageCircle className="h-5 w-5 text-green-500" />
      case "promo":
        return <Bell className="h-5 w-5 text-purple-500" />
    }
  }

  return (
    <div className="flex items-start space-x-4 p-4 hover:bg-gray-50 transition-colors duration-200">
      {getIcon(notification.type)}
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-900">{notification.message}</p>
        <p className="text-xs text-gray-500">{new Date(notification.date).toLocaleString()}</p>
      </div>
    </div>
  )
}

export default function NotificationsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="divide-y divide-gray-200">
            {notifications.map((notification) => (
              <NotificationItem key={notification.id} notification={notification} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

