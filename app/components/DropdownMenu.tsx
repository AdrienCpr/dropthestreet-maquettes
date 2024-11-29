"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {User} from 'lucide-react';
import { BadgeEuro, Settings } from 'lucide-react';

export default function DropdownMenu() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (!event.target || !(event.target as HTMLElement).closest('.profile-dropdown')) {
                setDropdownOpen(false);
            }
        };

        if (dropdownOpen) {
            document.addEventListener('click', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [dropdownOpen]);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    return (
        <div className="relative profile-dropdown">
            <button
                onClick={toggleDropdown}
                className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200 focus:outline-none"
            >
                <User className="w-6 h-6" />
            </button>
            {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md z-10">
                    <Link
                        href="/profile"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center"
                    >
                        <Settings className="w-5 h-5 mr-2" />
                        Parameters
                    </Link>
                    <Link
                        href="/sellers"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center"
                    >
                        <BadgeEuro className="w-5 h-5 mr-2" />
                        Vendeur
                    </Link>
                </div>
            )}
        </div>
    );
}
