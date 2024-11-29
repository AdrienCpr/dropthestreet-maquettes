"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

type Message = {
    id: number
    user: string
    text: string
}

const mockMessages: Message[] = [
    { id: 1, user: "StreetFan23", text: "Ces Jordan sont incroyables !" },
    { id: 2, user: "HypeBeast99", text: "Le prix monte vite sur ce hoodie Supreme" },
    { id: 3, user: "SneakerHead01", text: "Quelqu'un a déjà acheté sur ce site ?" }
]

export default function Chat() {
    const [messages, setMessages] = useState<Message[]>(mockMessages)
    const [newMessage, setNewMessage] = useState("")

    const handleSendMessage = () => {
        if (newMessage.trim() !== "") {
            setMessages([...messages, { id: messages.length + 1, user: "Vous", text: newMessage }])
            setNewMessage("")
        }
    }

    return (
        <div className="bg-gray-100 p-4 rounded-lg h-[600px] flex flex-col">
            <h2 className="text-2xl font-semibold mb-4">Chat en direct</h2>
            <ScrollArea className="flex-grow mb-4">
                {messages.map((message) => (
                    <div key={message.id} className="mb-2">
                        <span className="font-bold">{message.user}: </span>
                        <span>{message.text}</span>
                    </div>
                ))}
            </ScrollArea>
            <div className="flex gap-2">
                <Input
                    type="text"
                    placeholder="Votre message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button onClick={handleSendMessage}>Envoyer</Button>
            </div>
        </div>
    )
}

