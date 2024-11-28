import { Button } from '@/components/ui/button'

export default function CTASection() {
    return (
        <div className="bg-gray-800 text-white rounded-lg mt-12 p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Rejoignez la communauté Drop the Street</h2>
            <p className="mb-6">Ne manquez aucun drop exclusif et participez aux enchères en direct !</p>
            <div className="space-x-4">
                <Button variant="secondary" size="lg">S'inscrire</Button>
                <Button variant="outline" size="lg">Se connecter</Button>
            </div>
        </div>
    )
}