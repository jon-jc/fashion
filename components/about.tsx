import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full pt-12 md:pt-24 lg:pt-32">
        <div className="container space-y-10 xl:space-y-16">
          <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16 pb-10">
            <div>
              <Image
                src="/model3.png"
                width="800"
                height="600"
                alt="Avant-Garde Fashion"
                className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover"
              />
            </div>
            <div className="flex flex-col items-start space-y-4">
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Redefining the Boundaries of Fashion
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                At our avant-garde fashion label, we are committed to pushing
                the limits of design and challenging the status quo. Our mission
                is to create bold, innovative garments that inspire and
                captivate, redefining the way you experience fashion.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Story
              </h2>
              <p className="mt-4 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                Founded in 2015 by a team of visionary designers and artists,
                our brand was born out of a shared passion for redefining the
                boundaries of fashion. Hailing from diverse backgrounds in art,
                architecture, and textile design, we came together with a
                mission to create garments that challenge convention and inspire
                a new era of self-expression.
              </p>
              <p className="mt-4 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                Through our innovative approach to design and meticulous
                attention to detail, we have established a reputation for
                crafting pieces that are not just fashionable, but true works of
                art. Our collections are a reflection of our commitment to
                pushing the limits of what is possible in the world of fashion,
                blending cutting-edge technology, sustainable materials, and
                boundless creativity.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/model1.png"
                width="400"
                height="400"
                alt="Avant-Garde Fashion"
                className="aspect-square overflow-hidden rounded-xl object-cover"
              />
              <Image
                src="/model2.png"
                width="400"
                height="400"
                alt="Avant-Garde Fashion"
                className="aspect-square overflow-hidden rounded-xl object-cover"
              />
              <Image
                src="/model3.png"
                width="400"
                height="400"
                alt="Avant-Garde Fashion"
                className="aspect-square overflow-hidden rounded-xl object-cover"
              />
              <Image
                src="/dress1.png"
                width="400"
                height="400"
                alt="Avant-Garde Fashion"
                className="aspect-square overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Creative Process
              </h2>
              <p className="mt-4 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                At the heart of our brand is a relentless pursuit of innovation
                and a deep respect for the art of fashion design. Our creative
                process is a dynamic, collaborative effort that brings together
                the diverse talents and perspectives of our team.
              </p>
              <p className="mt-4 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                From conceptualization to prototyping, we immerse ourselves in a
                world of experimentation, constantly challenging the boundaries
                of what is possible. Our design studio is a hub of creativity,
                where ideas are born, refined, and transformed into the bold,
                visionary garments that define our collections.
              </p>
              <Link
                href="#"
                className="inline-flex mt-6 h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Explore Our Design Process
              </Link>
            </div>
            <div>
              <Image
                src="/model1.png"
                width="600"
                height="400"
                alt="Avant-Garde Fashion Studio"
                className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Explore Our Latest Collection
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover the bold, innovative designs that define our brand and
                push the boundaries of fashion. Each piece in our latest
                collection is a testament to our commitment to crafting garments
                that inspire and captivate.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl">
              <Image
                src="/shirt1.png"
                width="300"
                height="400"
                alt="Avant-Garde Fashion Product"
                className="aspect-[3/4] overflow-hidden rounded-xl object-cover"
              />
              <Image
                src="/dress1.png"
                width="300"
                height="400"
                alt="Avant-Garde Fashion Product"
                className="aspect-[3/4] overflow-hidden rounded-xl object-cover"
              />
              <Image
                src="/jacket1.png"
                width="300"
                height="400"
                alt="Avant-Garde Fashion Product"
                className="aspect-[3/4] overflow-hidden rounded-xl object-cover"
              />
              <Image
                src="/shirt2.png"
                width="300"
                height="400"
                alt="Avant-Garde Fashion Product"
                className="aspect-[3/4] overflow-hidden rounded-xl object-cover"
              />
            </div>
            <Link
              href="#"
              className="inline-flex mt-6 h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              prefetch={false}
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
