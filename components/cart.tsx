import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Cart() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 bg-gray-50 dark:bg-gray-900">
        <section className="container mx-auto py-12 md:py-16 lg:py-20">
          <div className="grid gap-8 md:gap-12 lg:gap-16">
            <div className="grid gap-6 md:gap-8 lg:gap-10">
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Your Cart
              </h1>
              <div className="grid gap-6 md:gap-8 lg:gap-10">
                <div className="grid gap-4 md:gap-6 lg:gap-8">
                  <div className="grid grid-cols-[80px_1fr_80px] items-center gap-4 md:gap-6 lg:gap-8">
                    <div>
                      <Image
                        src="/shirt1.png"
                        alt="Product Image"
                        width={80}
                        height={80}
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-lg font-semibold tracking-tight">
                        Avant-Garde Jumpsuit
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Black, Size M
                      </p>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <MinusIcon className="h-4 w-4" />
                      </Button>
                      <span className="text-lg font-semibold">1</span>
                      <Button variant="ghost" size="icon">
                        <PlusIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-[80px_1fr_80px] items-center gap-4 md:gap-6 lg:gap-8">
                    <div>
                      <Image
                        src="/shirt2.png"
                        alt="Product Image"
                        width={80}
                        height={80}
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-lg font-semibold tracking-tight">
                        Avant-Garde Dress
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        White, Size S
                      </p>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <MinusIcon className="h-4 w-4" />
                      </Button>
                      <span className="text-lg font-semibold">2</span>
                      <Button variant="ghost" size="icon">
                        <PlusIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-[80px_1fr_80px] items-center gap-4 md:gap-6 lg:gap-8">
                    <div>
                      <Image
                        src="/dress1.png"
                        alt="Product Image"
                        width={80}
                        height={80}
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-lg font-semibold tracking-tight">
                        Avant-Garde Coat
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Gray, Size L
                      </p>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <MinusIcon className="h-4 w-4" />
                      </Button>
                      <span className="text-lg font-semibold">1</span>
                      <Button variant="ghost" size="icon">
                        <PlusIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4 md:gap-6 lg:gap-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
                      Order Summary
                    </h2>
                    <div className="flex items-center gap-2">
                      <TagIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Apply Coupon
                      </span>
                    </div>
                  </div>
                  <div className="grid gap-2 md:gap-3 lg:gap-4">
                    <div className="flex items-center justify-between">
                      <span className="text-base font-medium text-gray-500 dark:text-gray-400">
                        Subtotal
                      </span>
                      <span className="text-base font-medium">$599.97</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-base font-medium text-gray-500 dark:text-gray-400">
                        Discount
                      </span>
                      <span className="text-base font-medium text-green-500">
                        -$59.99
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-base font-medium text-gray-500 dark:text-gray-400">
                        Shipping
                      </span>
                      <span className="text-base font-medium">$9.99</span>
                    </div>
                    <div className="flex items-center justify-between border-t pt-4 md:pt-6 lg:pt-8">
                      <span className="text-xl font-bold">Total</span>
                      <span className="text-xl font-bold">$549.97</span>
                    </div>
                  </div>
                  <Button size="lg" className="w-full">
                    Proceed to Checkout
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function MinusIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  );
}

function MountainIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function PlusIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function TagIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  );
}
