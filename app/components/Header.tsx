import Link from 'next/link';
import { Bell, Home, Search, Droplet, Zap, Heart, ShoppingCart } from 'lucide-react';
import { Input } from '@/components/ui/input';
import DropdownMenu from './DropdownMenu';
export default function Header() {
    return (
        <header className="bg-white shadow-lg border-b border-gray-200">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-3xl font-extrabold text-gray-800 hover:text-gray-600 transition-colors duration-200"
                    >
                        Drop the Street
                    </Link>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <Input
                                type="search"
                                placeholder="Rechercher..."
                                className="pl-10 pr-4 py-2 w-64 bg-gray-100 border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                            />
                        </div>
                        <nav className="hidden md:flex items-center space-x-6">
                            <Link href="/" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
                                <Home className="w-6 h-6" />
                            </Link>
                            <Link
                                href="/drops"
                                className="text-gray-600 hover:text-gray-800 transition-colors duration-200 flex items-center"
                            >
                                <Droplet className="w-5 h-5 mr-1" />
                                Drops
                            </Link>
                            <Link
                                href="/auctions"
                                className="text-gray-600 hover:text-gray-800 transition-colors duration-200 flex items-center"
                            >
                                <Zap className="w-5 h-5 mr-1" />
                                Enchères
                            </Link>
                            <Link
                                href="/favorites"
                                className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
                            >
                                <Heart className="w-6 h-6" />
                            </Link>
                            <Link
                                href="/panier"
                                className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
                            >
                                <ShoppingCart  className="w-6 h-6" />
                            </Link>
                            <DropdownMenu /> {/* Utilisation du composant dropdown */}
                            <Link
                                href="/notifications"
                                className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
                            >
                                <Bell className="w-6 h-6" />
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}
