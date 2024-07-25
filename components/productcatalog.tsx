"use client";

import { useState, useMemo } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  category: string;
  size: string;
}

interface Filters {
  category: string[];
  size: string[];
  priceRange: [number, number];
}

export function ProductCatalog() {
  const [filters, setFilters] = useState<Filters>({
    category: [],
    size: [],
    priceRange: [0, 1000],
  });

  const products: Product[] = [
    {
      id: 1,
      image: "/dress1.png",
      title: "Deconstructed Asymmetric Dress",
      description: "Avant-garde design with unique silhouette",
      price: 450,
      category: "Dresses",
      size: "S",
    },
    {
      id: 2,
      image: "/jacket1.png",
      title: "Sculptural Origami Blouse",
      description: "Innovative folded fabric creates a striking look",
      price: 320,
      category: "Tops",
      size: "M",
    },
    {
      id: 3,
      image: "/shirt1.png",
      title: "Architectural Pleated Shirt",
      description: "Dramatic pleats and geometric lines",
      price: 280,
      category: "Skirts",
      size: "L",
    },
    {
      id: 4,
      image: "/model1.png",
      title: "Deconstructed Denim Jacket",
      description: "Unique patchwork design with raw edges",
      price: 400,
      category: "Jackets",
      size: "XS",
    },
    {
      id: 5,
      image: "/model2.png",
      title: "Avant-Garde Jumpsuit",
      description: "Sleek and modern silhouette with asymmetric details",
      price: 550,
      category: "Jumpsuits",
      size: "M",
    },
    {
      id: 6,
      image: "/model3.png",
      title: "Sculptural Leather Pants",
      description: "Innovative cut and paneling create a futuristic look",
      price: 650,
      category: "Pants",
      size: "S",
    },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (
        filters.category.length > 0 &&
        !filters.category.includes(product.category)
      ) {
        return false;
      }
      if (filters.size.length > 0 && !filters.size.includes(product.size)) {
        return false;
      }
      if (
        product.price < filters.priceRange[0] ||
        product.price > filters.priceRange[1]
      ) {
        return false;
      }
      return true;
    });
  }, [filters]);

  const handleFilterChange = (
    type: keyof Filters,
    value: string | [number, number]
  ) => {
    setFilters((prevFilters) => {
      if (type === "category" || type === "size") {
        const filterArray = prevFilters[type] as string[];
        const newFilterArray = filterArray.includes(value as string)
          ? filterArray.filter((item) => item !== value)
          : [...filterArray, value as string];
        return {
          ...prevFilters,
          [type]: newFilterArray,
        };
      } else if (type === "priceRange") {
        return {
          ...prevFilters,
          priceRange: value as [number, number],
        };
      }
      return prevFilters;
    });
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setFilters((prevFilters) => ({
      ...prevFilters,
      priceRange: [0, value],
    }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 p-4 md:p-8">
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <h2 className="text-2xl font-bold">Filters</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="category">
              <AccordionTrigger className="text-lg font-medium">
                Category
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  {[
                    "Dresses",
                    "Tops",
                    "Skirts",
                    "Jackets",
                    "Jumpsuits",
                    "Pants",
                  ].map((category) => (
                    <Label
                      key={category}
                      className="flex items-center gap-2 font-normal"
                    >
                      <Checkbox
                        checked={filters.category.includes(category)}
                        onCheckedChange={() =>
                          handleFilterChange("category", category)
                        }
                      />
                      {category}
                    </Label>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="size">
              <AccordionTrigger className="text-lg font-medium">
                Size
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  {["XS", "S", "M", "L"].map((size) => (
                    <Label
                      key={size}
                      className="flex items-center gap-2 font-normal"
                    >
                      <Checkbox
                        checked={filters.size.includes(size)}
                        onCheckedChange={() => handleFilterChange("size", size)}
                      />
                      {size}
                    </Label>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="price">
              <AccordionTrigger className="text-lg font-medium">
                Price Range
              </AccordionTrigger>
              <AccordionContent>
                <div className="w-full flex flex-col gap-2">
                  <Label>Max Price: ${filters.priceRange[1]}</Label>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={filters.priceRange[1]}
                    onChange={handlePriceChange}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-background rounded-lg overflow-hidden shadow-lg group relative"
          >
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View {product.title}</span>
            </Link>
            <Image
              src={product.image}
              alt={product.title}
              width={400}
              height={400}
              className="w-full object-cover group-hover:opacity-50 transition-opacity"
            />
            <div className="p-4 relative z-20">
              <h3 className="text-xl font-bold">{product.title}</h3>
              <p className="text-sm text-muted-foreground">
                {product.description}
              </p>
              <div className="flex items-center justify-between mt-4">
                <div className="text-lg font-medium">${product.price}</div>
                <Button variant="outline" size="sm">
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
