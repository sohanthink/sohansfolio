import React from 'react'

const TechStack = () => {
    const leftLists = ["ReactJS", "Express", "Typescript"];
    const rightLists = ["NodeJS", "NextJS", "Tailwind"];
    const MiddleList = ["MongoDB", "Bootstraph", "ReactNative"];

  return (
    <div className="flex gap-1 lg:gap-2 w-fit top-3 absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 md:gap-3">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-3 lg:px-2 py-2 px-3 text-xs lg:text-sm opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-3 lg:px-2 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>

              <div className="flex flex-col gap-3 md:gap-3">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {MiddleList.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-3 lg:px-2 py-2 px-3 text-xs lg:text-sm opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-3 md:gap-3">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-3 lg:px-2 py-2 px-3 text-xs lg:text-sm opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
              </div>
    </div>
  )
}

export default TechStack