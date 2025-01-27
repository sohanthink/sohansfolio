import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { div } from "framer-motion/client";
import {GridGlobe} from "./GridGlobe";
import { MotionGlobalConfig } from "framer-motion";
import TechStack from "./TechStack";
import { BackgroundBeamsWithCollision } from "./BgCollison";
import Lottie from "./LottieAnimation";
import LottieAnimation from "./LottieAnimation";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id:number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        id === 0 ? ' mt-20 row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 relative overflow-visible' : 'row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 relative overflow-hidden', 
        className
      )}
      style={{
        background:'rgb(4,7,29)',
        backgroundColor:'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)'
      }}>

        <div className={`${id === 6 ? "flex flex-col justify-center items-center" : ""} ${ id === 0 ? "flex justify-center items-center relative" : "" } h-full`}>

            <div className={`{id === 0 && relative} w-full h-full absolute top-0 left-0`}>
                {img &&(
                    <img src={img} alt={img} className={cn(imgClassName,
                        id === 0 ? 'object-cover object-center h-[120px]' : 'object-cover object-center h-full')} />
                )}
            </div>

            <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}>
                {
                    spareImg && (
                        <img src={spareImg} alt={spareImg} className='object-cover object-center h-full w-full' />
                        )
                }
            </div>
            
            {
                id === 6 && (
                    <BackgroundGradientAnimation>
                        <div className="absolute inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none"></div>
                    </BackgroundGradientAnimation>
                )
            }

            <div className={cn( titleClassName, "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 group-hover/bento:z-10")}>

                <div className={`${id === 0 ? 'md:max-w-full md:pt-2 pt-4' : 'md:max-w-32'} font-sans font-extralight  md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10`}>
                    {description}
                </div>

                <div className={`${id === 0 && 'md:max-w-full md:pt-2 pt-4'} font-sans text-lg lg:text-3xl max-w-96 font-bold hover:z-10 z-10`}>
                    {title}
                </div>

            </div>


            {
               id === 0 && (
                <BackgroundBeamsWithCollision>
                    <div></div>
                </BackgroundBeamsWithCollision>
                ) 
            }

            {
               id === 2 && (
                <GridGlobe />
                ) 
            }

            {
                id === 3 && (
                    <TechStack/>
                )
            }

            {id === 6 && (<LottieAnimation/>)}



        </div>
    </div>
  );
};
