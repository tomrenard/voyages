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

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Séjours",
    href: "/nos-coups-de-coeur/sejours",
    description: "Nos meilleures offres de séjours tout compris ou à la carte.",
  },
  {
    title: "Circuits",
    href: "/nos-coups-de-coeur/circuits",
    description: "Découvrez le monde avec nos circuits organisés.",
  },
  {
    title: "Sur-mesure",
    href: "/nos-coups-de-coeur/sur-mesure",
    description: "Créez le voyage de vos rêves, entièrement personnalisé.",
  },
  {
    title: "Croisières",
    href: "/nos-coups-de-coeur/croisieres",
    description: "Naviguez sur les plus belles mers du monde.",
  },
  {
    title: "Week-end",
    href: "/nos-coups-de-coeur/week-end",
    description: "Évadez-vous le temps d'un week-end inoubliable.",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b bg-background relative z-50">
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
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <div className="hidden md:flex">
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
                <NavigationMenuTrigger>Nos coups de cœur</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {components.map((component) => (
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
                    href="/croisieres"
                    className={navigationMenuTriggerStyle()}
                  >
                    Croisières
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

        <div className="hidden md:flex items-center gap-4">
          <Button variant="default" size="sm" asChild>
            <Link href="/contact">Devis gratuit</Link>
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b shadow-lg py-4 px-4 flex flex-col space-y-4">
          <Link
            href="/reves-de-voyages"
            className="text-lg font-medium py-2 border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Rêves de voyages
          </Link>
          <div className="space-y-2">
            <p className="text-lg font-medium text-gray-900">
              Nos coups de cœur
            </p>
            <div className="pl-4 flex flex-col space-y-2 border-l-2 border-gray-100">
              {components.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-gray-600 py-1 block"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="/voyage-sur-mesure"
            className="text-lg font-medium py-2 border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Voyage sur mesure
          </Link>
          <Link
            href="/croisieres"
            className="text-lg font-medium py-2 border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Croisières
          </Link>
          <Link
            href="/galerie"
            className="text-lg font-medium py-2 border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Galerie
          </Link>
          <Link
            href="/avis"
            className="text-lg font-medium py-2 border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Avis
          </Link>
          <Link
            href="/actualites"
            className="text-lg font-medium py-2 border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Actualités
          </Link>
          <Link
            href="/contact"
            className="text-lg font-medium py-2 border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Button
            className="w-full mt-4"
            asChild
            onClick={() => setIsOpen(false)}
          >
            <Link href="/contact">Devis gratuit</Link>
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
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
