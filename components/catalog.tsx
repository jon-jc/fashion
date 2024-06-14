import Image from "next/image";
import Link from "next/link";
import React from "react";

const Catalog = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Featured Products
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Discover Our Avant Garde Collection
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore our carefully curated selection of cutting-edge fashion
              pieces that redefine style and push the boundaries of traditional
              design.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <Link
              href="/products"
              className="absolute inset-0 z-10"
              prefetch={false}
            >
              <span className="sr-only">View Product</span>
            </Link>
            <Image
              src="/dress1.png"
              alt="Product 1"
              width={500}
              height={500}
              className="object-cover w-full h-64"
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="font-bold text-xl">Avant Garde Dress</h3>
              <p className="text-sm text-gray-500">Unique and Transformative</p>
              <h4 className="font-semibold text-lg md:text-xl">$299.99</h4>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <Link
              href="/products"
              className="absolute inset-0 z-10"
              prefetch={false}
            >
              <span className="sr-only">View Product</span>
            </Link>
            <Image
              src="/jacket1.png"
              alt="Product 2"
              width={500}
              height={500}
              className="object-cover w-full h-64"
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="font-bold text-xl">Avant Garde Jacket</h3>
              <p className="text-sm text-gray-500">Innovative and Versatile</p>
              <h4 className="font-semibold text-lg md:text-xl">$199.99</h4>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <Link
              href="/products"
              className="absolute inset-0 z-10"
              prefetch={false}
            >
              <span className="sr-only">View Product</span>
            </Link>
            <Image
              src="/shirt1.png"
              alt="Product 3"
              width={500}
              height={500}
              className="object-cover w-full h-64"
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="font-bold text-xl">Avant Garde Shirt</h3>
              <p className="text-sm text-gray-500">
                Cutting-Edge and Comfortable
              </p>
              <h4 className="font-semibold text-lg md:text-xl">$149.99</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
