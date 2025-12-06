"use client";

import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contactez-nous</h3>
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 mt-1 shrink-0 text-indigo-400" />
              <p>
                7 rue Jean Mermoz,
                <br />
                35170 Bruz
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-indigo-400" />
              <p>02 23 50 18 52</p>
            </div>
            <div className="flex space-x-4 pt-2">
              <Link
                href="https://facebook.com"
                className="hover:text-white transition-colors"
              >
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://instagram.com"
                className="hover:text-white transition-colors"
              >
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-indigo-400" />
              Horaires d'ouverture
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Lundi :</span>
                <span>14:00 à 18:30</span>
              </li>
              <li className="flex justify-between">
                <span>Du mardi au vendredi :</span>
                <span>9:30 - 12:30 / 14:00 - 18:30</span>
              </li>
              <li className="flex justify-between">
                <span>Le samedi :</span>
                <span>10:00 à 12:30</span>
              </li>
              <li className="flex justify-between">
                <span>Le dimanche :</span>
                <span>Fermé</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Informations</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link
                href="/mentions-legales"
                className="hover:text-white transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-de-confidentialite"
                className="hover:text-white transition-colors"
              >
                Politique de confidentialité
              </Link>
              <Link
                href="/plan-du-site"
                className="hover:text-white transition-colors"
              >
                Plan de site
              </Link>
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Rêves de Voyages. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
