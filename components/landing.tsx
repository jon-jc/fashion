import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Catalog from "./catalog";
import Hero from "./hero";

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
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Button size="lg">Explore Our Story</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
