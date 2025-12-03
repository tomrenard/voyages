"use client";

import * as React from "react";
import Link from "next/link";

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
  return (
    <header className="w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center space-x-2 font-bold text-xl"
        >
          <span>Voyages</span>
        </Link>

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
                    Sur mesure
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

        <div className="flex items-center gap-4">
          <Button variant="default" size="sm">
            Devis gratuit
          </Button>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
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
});
ListItem.displayName = "ListItem";
