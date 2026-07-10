"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  useState,
} from "react";

const tripTypes: { title: string; href: string; description: string }[] = [
  {
    title: "Séjours",
    href: "/nos-voyages/sejours",
    description: "Nos meilleures offres de séjours tout compris ou à la carte.",
  },
  {
    title: "Circuits",
    href: "/nos-voyages/circuits",
    description: "Découvrez le monde avec nos circuits organisés.",
  },
  {
    title: "Croisières",
    href: "/croisieres",
    description: "Naviguez sur les plus belles mers du monde.",
  },
  {
    title: "Week-end",
    href: "/nos-voyages/week-end",
    description: "Évadez-vous le temps d'un week-end inoubliable.",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-background relative z-50 w-full border-b">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Rêves de Voyages"
            width={180}
            height={80}
            className="h-16 w-auto object-contain"
            priority
          />
        </Link>

        <button
          className="p-2 text-gray-600 xl:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Ouvrir ou fermer le menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <div className="hidden xl:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/reves-de-voyages"
                    className={navigationMenuTriggerStyle()}
                  >
                    Rêves de voyages
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/nos-coups-de-coeur"
                    className={navigationMenuTriggerStyle()}
                  >
                    Nos coups de cœur
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Nos voyages</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {tripTypes.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/voyage-sur-mesure"
                    className={navigationMenuTriggerStyle()}
                  >
                    Voyage sur mesure
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/galerie"
                    className={navigationMenuTriggerStyle()}
                  >
                    Galerie
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/avis" className={navigationMenuTriggerStyle()}>
                    Avis
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/actualites"
                    className={navigationMenuTriggerStyle()}
                  >
                    Actualités
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className={navigationMenuTriggerStyle()}
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden items-center gap-4 xl:flex">
          <Button variant="default" size="sm" asChild>
            <Link href="/devis">Devis gratuit</Link>
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-20 left-0 flex w-full flex-col space-y-4 border-b bg-white px-4 py-4 shadow-lg xl:hidden">
          <Link
            href="/reves-de-voyages"
            className="border-b border-gray-100 py-2 text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            Rêves de voyages
          </Link>
          <Link
            href="/nos-coups-de-coeur"
            className="border-b border-gray-100 py-2 text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            Nos coups de cœur
          </Link>
          <div className="space-y-2">
            <p className="text-lg font-medium text-gray-900">Nos voyages</p>
            <div className="flex flex-col space-y-2 border-l-2 border-gray-100 pl-4">
              {tripTypes.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block py-1 text-gray-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="/voyage-sur-mesure"
            className="border-b border-gray-100 py-2 text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            Voyage sur mesure
          </Link>
          <Link
            href="/galerie"
            className="border-b border-gray-100 py-2 text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            Galerie
          </Link>
          <Link
            href="/avis"
            className="border-b border-gray-100 py-2 text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            Avis
          </Link>
          <Link
            href="/actualites"
            className="border-b border-gray-100 py-2 text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            Actualités
          </Link>
          <Link
            href="/contact"
            className="border-b border-gray-100 py-2 text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Button
            className="mt-4 w-full"
            asChild
            onClick={() => setIsOpen(false)}
          >
            <Link href="/devis">Devis gratuit</Link>
          </Button>
        </div>
      )}
    </header>
  );
}

const ListItem = forwardRef<ElementRef<"a">, ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none",
              className,
            )}
            {...props}
          >
            <div className="text-sm leading-none font-medium">{title}</div>
            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = "ListItem";
