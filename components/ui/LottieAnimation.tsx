'use client'

import React, { useState } from 'react'
import MagicButton from './MagicButton'
import { IoCopyOutline } from 'react-icons/io5';
// nstall this from npm i --save-dev @types/react-lottie
import Lottie from 'react-lottie';
import animationData from '@/data/confettie.json'

const LottieAnimation = () => {

    const [copied, setCopied] = useState(false);

    const defaultOptions = {
      loop: copied,
      autoplay: copied,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
  
    const handleCopy = () => {
      const text = "sohaneftekhar@gmail.com";
      navigator.clipboard.writeText(text);
      setCopied(true);
    };

  return (
    <div className="mt-5 relative">
      <div className={`absolute -bottom-5 -left-[127px] md:-left-[143px] mb-5 ${copied ? "block" : "block" }`}>
          <Lottie options={defaultOptions} height={200} width={400} />
          <MagicButton
          title={copied ? "Email is Copied!" : "Copy my email address"}
          icon={<IoCopyOutline />}
          position="left"
          handleClick={handleCopy}
          otherClasses="!bg-[#161A31] nowrap z-50"
        />
      </div>
   </div>
  )
}

export default LottieAnimation