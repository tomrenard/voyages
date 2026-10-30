"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";

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
import { siteConfig } from "@/lib/site";
import logoImg from "@/public/images/logo.png";
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

// "Nos voyages" (the dropdown) sits after the first two entries.
const linksBefore = [
  { title: "L'agence", href: "/reves-de-voyages" },
  { title: "Nos coups de cœur", href: "/nos-coups-de-coeur" },
];
const linksAfter = [
  { title: "Voyage sur mesure", href: "/voyage-sur-mesure" },
  { title: "Avis", href: "/avis" },
  { title: "Actualités", href: "/actualites" },
  { title: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const current = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`) ? "page" : undefined;

  const desktopLink = (link: { title: string; href: string }) => (
    <NavigationMenuItem key={link.href}>
      <NavigationMenuLink asChild>
        <Link
          href={link.href}
          aria-current={current(link.href)}
          className={navigationMenuTriggerStyle()}
        >
          {link.title}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );

  const mobileLink = (link: { title: string; href: string }) => (
    <Link
      key={link.href}
      href={link.href}
      aria-current={current(link.href)}
      className="aria-[current=page]:text-primary border-b border-gray-200 py-3 font-serif text-2xl"
      onClick={() => setIsOpen(false)}
    >
      {link.title}
    </Link>
  );

  return (
    <header className="bg-background/90 sticky top-0 z-50 w-full border-b border-gray-200 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between gap-6 px-4 md:px-8">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src={logoImg}
            alt="Rêves de Voyages, retour à l'accueil"
            width={180}
            height={80}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden xl:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {linksBefore.map(desktopLink)}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={
                    tripTypes.some((t) => current(t.href)) ? "text-primary" : ""
                  }
                >
                  Nos voyages
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] grid-cols-2 gap-1 p-3">
                    {tripTypes.map((trip) => (
                      <ListItem
                        key={trip.title}
                        title={trip.title}
                        href={trip.href}
                        aria-current={current(trip.href)}
                      >
                        {trip.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {linksAfter.map(desktopLink)}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden items-center gap-5 xl:flex">
          <a
            href={`tel:${siteConfig.phoneE164}`}
            className="hover:text-primary flex items-center gap-2 text-sm whitespace-nowrap text-gray-700 transition-colors"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {siteConfig.phone}
          </a>
          <Button asChild>
            <Link href="/devis">Devis gratuit</Link>
          </Button>
        </div>

        <button
          className="-mr-2 p-2 text-gray-800 xl:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <nav
          id="mobile-menu"
          aria-label="Menu principal"
          className="bg-background absolute top-20 left-0 flex h-[calc(100dvh-5rem)] w-full flex-col overflow-y-auto px-4 pt-2 pb-10 xl:hidden"
        >
          {linksBefore.map(mobileLink)}
          <div className="border-b border-gray-200 py-3">
            <p className="eyebrow mb-2">Nos voyages</p>
            <div className="grid grid-cols-2 gap-x-4">
              {tripTypes.map((trip) => (
                <Link
                  key={trip.href}
                  href={trip.href}
                  aria-current={current(trip.href)}
                  className="aria-[current=page]:text-primary py-2 text-lg text-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  {trip.title}
                </Link>
              ))}
            </div>
          </div>
          {linksAfter.map(mobileLink)}
          <Button
            size="lg"
            className="mt-8 w-full"
            asChild
            onClick={() => setIsOpen(false)}
          >
            <Link href="/devis">Demander un devis gratuit</Link>
          </Button>
          <a
            href={`tel:${siteConfig.phoneE164}`}
            className="mt-4 flex items-center justify-center gap-2 py-2 text-gray-700"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {siteConfig.phone}
          </a>
        </nav>
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
              "block space-y-1 p-3 leading-none no-underline transition-colors select-none hover:bg-gray-50 aria-[current=page]:bg-gray-50",
              className,
            )}
            {...props}
          >
            <div className="font-serif text-lg leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-gray-600">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = "ListItem";
