import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Product() {
  return (
    <div className="flex flex-col">
      <section className="bg-gray-100 dark:bg-gray-950 py-12 md:py-24 lg:py-32">
        <div className="container grid gap-8 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1">
            <Image
              src="/blouse1.png"
              width={800}
              height={800}
              alt="Product Image"
              className="mx-auto aspect-square object-cover rounded-xl"
            />
          </div>
          <div className="order-1 md:order-2 space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
              Avant-Garde Silk Blouse
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Elevate your wardrobe with our exquisite silk blouse, crafted with
              meticulous attention to detail.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">Product Details</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Crafted from the finest 100% mulberry silk, this blouse features a
              unique asymmetric design and a delicate pleated accent. The
              luxurious fabric provides a soft, flowing drape that elevates any
              outfit.
            </p>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">Material:</span>
                <span>100% Mulberry Silk</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Sizing:</span>
                <span>XS - XL</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Care:</span>
                <span>Dry clean only</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Pricing &amp; Purchase
            </h2>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold">$199</span>
              <div className="flex items-center gap-4">
                <div className="w-24">
                  <Select defaultValue="1">
                    <SelectTrigger>
                      <SelectValue placeholder="Qty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button size="lg">Add to Cart</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 dark:bg-gray-950 py-12 md:py-24 lg:py-32">
        <div className="container">
          <div className="space-y-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Related Products</h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Explore more avant-garde fashion from our latest collection.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View</span>
              </Link>
              <Image
                src="/shirt2.png"
                alt="Related Product 1"
                width={500}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-bold text-xl">
                  Asymmetric Silk Button Up Shirt
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Avant-garde elegance
                </p>
                <h4 className="font-semibold text-lg md:text-xl">$299</h4>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View</span>
              </Link>
              <Image
                src="/model2.png"
                alt="Related Product 2"
                width={500}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-bold text-xl">Draped Satin Jumpsuit</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Effortless sophistication
                </p>
                <h4 className="font-semibold text-lg md:text-xl">$249</h4>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View</span>
              </Link>
              <Image
                src="/blouse1.png"
                alt="Related Product 3"
                width={500}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-bold text-xl">Sculptural Satin Blouse</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Architectural elegance
                </p>
                <h4 className="font-semibold text-lg md:text-xl">$179</h4>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View</span>
              </Link>
              <Image
                src="/dress1.png"
                alt="Related Product 4"
                width={500}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-bold text-xl">Pleated Silk Midi Skirt</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Timeless elegance
                </p>
                <h4 className="font-semibold text-lg md:text-xl">$149</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
