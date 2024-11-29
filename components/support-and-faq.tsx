"use client"

import { useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const faqData = [
  {
    question: "Comment participer à un drop ?",
    answer: "Pour participer à un drop, assurez-vous d'être inscrit et connecté à votre compte. Surveillez les annonces de drops à venir sur notre page d'accueil ou nos réseaux sociaux. Le jour du drop, rendez-vous sur la page du produit à l'heure indiquée et soyez rapide pour ajouter l'article à votre panier et finaliser votre achat."
  },
  {
    question: "Comment placer une enchère ?",
    answer: "Pour placer une enchère, naviguez vers la section 'Auctions' de notre site. Choisissez l'article qui vous intéresse et cliquez sur 'Placer une enchère'. Entrez le montant de votre offre (qui doit être supérieur à l'enchère actuelle) et confirmez. Assurez-vous d'avoir des fonds suffisants dans votre compte pour couvrir votre enchère."
  },
  {
    question: "Quelle est la politique de remboursement ?",
    answer: "Nous offrons un remboursement complet pour les articles retournés dans leur état d'origine dans les 14 jours suivant la réception. Les frais de retour sont à la charge du client. Les articles des drops et des enchères sont généralement des ventes finales, sauf en cas de défaut du produit. Veuillez consulter notre page de politique de retour pour plus de détails."
  }
]

export default function SupportAndFAQ() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici, vous pouvez ajouter la logique pour envoyer le formulaire
    console.log('Formulaire soumis', { name, email, message })
    // Réinitialiser le formulaire
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Questions fréquentes</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Contactez-nous</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Nom</label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full"
              rows={4}
            />
          </div>
          <Button type="submit" className="w-full">Envoyer</Button>
        </form>
      </section>
    </div>
  )
}

