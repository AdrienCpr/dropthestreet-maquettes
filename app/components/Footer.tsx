import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Drop the Street</h3>
                        <p className="text-gray-400">La marketplace ultime pour le streetwear en direct avec drops et enchères.</p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Liens rapides</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-200">À propos</Link></li>
                            <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors duration-200">FAQ</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Légal</h4>
                        <ul className="space-y-2">
                            <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">Conditions générales d'utilisation</Link></li>
                            <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">Politique de confidentialité</Link></li>
                            <li><Link href="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200">Politique de cookies</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Drop the Street. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    )
}

