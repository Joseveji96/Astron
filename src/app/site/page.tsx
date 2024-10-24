import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { pricingCards } from "@/lib/constants";
import clsx from "clsx";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <section className="min-h-screen w-full pt-[5rem] relative flex items-center flex-col">
          <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"/>
          
          <p className="text-center font-semibold text-2xl">Take your agency to the next level</p>
          
          <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
            <h1 className="text-9xl font-bold text-center md:text-[300px]">Astron</h1>
          </div>

          <div className="flex justify-center items-center relative md:mt-[-65px] mb-4"> 
            <Image 
              src={"/assets/preview.png"} 
              alt={"preview"} 
              width={1200} 
              height={1200} 
              className="rounded-2xl border-muted object-cover max-w-full h-auto" 
            />
            
            <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
          </div>
      </section>

      <section className="flex justify-center items-center flex-col gap-4 mt-0 sm:mt-10 md:mt-24 lg:mt-28 pb-20">
        <h2 className="text-4xl text-center">
          Choose what fits you right
        </h2>
        <p className="text-muted-foreground text-center">
          Our pricing plans are tailored to meet your needs. If you're not <br/> ready to commit, you can get started for free.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
            {pricingCards.map((card) =>(
              <Card key={card.title} className={clsx("w-[300px] flex flex-col justify-between", {
                "border-primary border-2": card.title === "Unlimited SaaS",
              })}>
                  <CardHeader>
                    <CardTitle className={clsx("", {"text-muted-foreground": card.title !== "Unlimited SaaS"})}>
                      {card.title}
                    </CardTitle>
                    <CardDescription>{card.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="font-bold text-4xl">{card.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start gap-3 ">
                    <div>{card.features.map((feature) => (
                      <div key={feature} className="flex gap-2 items-center">
                        <Check className="text-muted-foreground"/>
                        <p>{feature}</p>
                      </div>
                    ))}</div>
                    <Link href={`/agency?plan=${card.priceId}`} 
                      className={clsx("w-full text-center text-white font-semibold bg-primary p-2 rounded-md", 
                      {"!bg-muted-foreground": card.title !== "Unlimited SaaS"})}>
                        Get plan
                    </Link>
                  </CardFooter>
              </Card>
            ))}
        </div>
      </section>
    </>
  );
}
