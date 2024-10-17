'use client';
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { cn } from "@/lib/utils";
import { BackgroundGradient } from "./background-gradient";
import { motion } from 'framer-motion';
import { Globe } from "./globe";
import { Globegrid } from "./Globegrid";
import { div } from "framer-motion/client";
import { useState } from "react";
import Lottie from "react";
import Button from "./Button";
import { IoCopyOutline } from "react-icons/io5";


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
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
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
  icon,
  header,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number | React.ReactNode;
  img?:string;
  imgClassName?:string;
  titleClassName?:string
  spareImg?: string;
}) => {

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('contact@tjha.com');
    setCopied(true);
  }
  return (
    <div
      className={cn(
        "row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: 'rgb(2,0,36)',
        backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(4,4,162,1) 40%, rgba(0,212,255,1) 100%)'
      }}
    >
      <div className={`${id===6} && 'flex justify-center h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, 'pbject-cover, object-center')}
              />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
            {spareImg && (
              <img 
                src={spareImg}
                alt={spareImg}
                className={'object-cover, object-center w-full h-full'}
              />
            )}
        </div>
        {id === 6 && (
          <BackgroundGradient>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold">
              Hello
            </div>
        </BackgroundGradient>
        )}

        <div className={cn(
          titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}>
          <div className="font-sans font-extralight text-neutral-600 text-sm md:text-xs lg:text-base z-10 ">
          {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
          {title}
          </div>
        

          {id === 2 && <Globegrid />}
      
          {id === 3 && (
          <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
            <div className="flex flex-col gap-3 lg:gap-8">
              {['React.JS, Next.JS, Express, Typescript'].map((item) => (
                <span key={item} className="py-2 lg:py-3 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] ">
                  {item}
                </span>
              ))}
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132e] "/>
            </div>
            <div className="flex flex-col gap-3 lg:gap-8">
              {['React.JS, Next.JS, Express, Typescript'].map((item) => (
                <span key={item} className="py-2 lg:py-3 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] ">
                  {item}
                </span>
              ))}
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132e] "/>
            </div>
          </div>

          )}

          {id === 6 && (
            <div className='mt-5 relative'>
              <div className={`absolute -bottom-5 right-0`}>
              {/* <Lottie options={{
                loop: copied,

              }} /> */}
            </div>
            <Button
              title={copied ? 'Email Copied' : 'copy my email'}
              icon={<IoCopyOutline/>}
              position='left'
              otherClasses='bg-[#161a31]'
              handleClick={handleCopy}
              />
          </div>
          )}
        </div>
      </div> 
    </div>
  );
};
