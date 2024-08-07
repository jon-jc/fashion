import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Catalog from "./catalog";
import Hero from "./hero";
import { DiamondIcon, PaletteIcon } from "lucide-react";

export default function Landing() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <Hero />
        <Catalog />
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Crafted with Innovation and Passion
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                At the heart of our brand lies a commitment to pushing the
                boundaries of fashion. Our design team meticulously crafts each
                piece, blending cutting-edge techniques with the finest
                materials to create truly unique and transformative garments.
              </p>
            </div>
            <Link href="/about">
              <div className="mx-auto w-full max-w-sm space-y-2">
                <Button size="lg">Explore Our Story</Button>
              </div>
            </Link>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                    Craftsmanship &amp; Innovation
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Elevating the Art of Fashion
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    At the heart of our brand lies a deep commitment to
                    craftsmanship and innovation. Our design team meticulously
                    crafts each piece, using only the finest materials and
                    pushing the boundaries of whats possible in fashion.
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <DiamondIcon className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-semibold">
                      Uncompromising Quality
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    We source the most luxurious fabrics and materials, ensuring
                    each garment is built to last and exude timeless elegance.
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <PaletteIcon className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-semibold">
                      Avant-Garde Design
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    Our design team pushes the boundaries of fashion, creating
                    pieces that are not only beautiful but also innovative and
                    thought-provoking.
                  </p>
                </div>
              </div>
              <div className="relative h-[500px] overflow-hidden rounded-xl">
                <Image
                  src="/dress1.png"
                  alt="Craftsmanship"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
