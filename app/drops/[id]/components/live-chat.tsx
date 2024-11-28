'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
    id: number
    user: string
    text: string
    avatar: string
}

export default function LiveChat() {
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, user: 'Alice', text: 'Ce drop est incroyable !', avatar: '/placeholder.svg?height=32&width=32' },
        { id: 2, user: 'Bob', text: 'J\'ai hâte que ça commence', avatar: '/placeholder.svg?height=32&width=32' },
    ])
    const [newMessage, setNewMessage] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (newMessage.trim()) {
            setMessages([...messages, {
                id: messages.length + 1,
                user: 'Vous',
                text: newMessage.trim(),
                avatar: '/placeholder.svg?height=32&width=32'
            }])
            setNewMessage('')
        }
    }

    return (
        <div className="border rounded-lg p-4">
            <ScrollArea className="h-[300px] mb-4">
                {messages.map((message) => (
                    <div key={message.id} className="flex items-start space-x-2 mb-4">
                        <Avatar>
                            <AvatarImage src={message.avatar} alt={message.user} />
                            <AvatarFallback>{message.user[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold">{message.user}</p>
                            <p>{message.text}</p>
                        </div>
                    </div>
                ))}
            </ScrollArea>
            <form onSubmit={handleSubmit} className="flex space-x-2">
                <Input
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Écrivez votre message..."
                    className="flex-grow"
                />
                <Button type="submit">Envoyer</Button>
            </form>
        </div>
    )
}

