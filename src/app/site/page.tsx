import BlurIn from "@/components/ui/blur-in";
import { BorderBeam } from "@/components/ui/border-beam";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { pricingCards } from "@/lib/constants";
import clsx from "clsx";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <section className="min-h-screen w-full pt-[5rem] relative flex items-center flex-col overflow-hidden">
        <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"/>
        
        <p className="text-center font-semibold text-2xl">Take your agency to the next level</p>
        <BlurIn word="Astron" className="text-9xl font-bold text-center md:text-[300px]"/>
        {/* Contenedor para la imagen y el BorderBeam, con comportamiento responsivo */}
        <div className="relative flex justify-center items-center w-full max-w-[1200px] mx-auto px-4 md:mt-[-65px] mb-4">
          <div className="relative w-full max-w-full rounded-2xl">
            {/* BorderBeam responsivo */}
            <BorderBeam size={1200} borderWidth={2} colorFrom="#007adf" colorTo="#1f0b5b" />

            {/* Imagen responsiva */}
            <Image 
              src={"/assets/preview.png"} 
              alt={"preview"} 
              width={1200} 
              height={1200} 
              className="rounded-2xl object-cover w-full h-auto" 
            />
          </div>
                      
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
                "border-primary border-2": card.title === "Unlimited Saas",
              })}>
                  <CardHeader>
                    <CardTitle className={clsx("", {"text-muted-foreground": card.title !== "Unlimited Saas"})}>
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
                      {"!bg-muted-foreground": card.title !== "Unlimited Saas"})}>
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
