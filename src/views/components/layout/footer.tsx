import React, { useState, useEffect } from "react";

export const Footer: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 981);
  const [menu, setMenu] = useState<boolean>(false);
  const handleResize = () => {
    setIsMobile(window.innerWidth < 800);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="flex flex-col">
      <div className="bg-cover bg-no-repeat flex-grow">
        <img src="/bgtop.png" alt="bg" className="w-full" />

        <div className="bg-[#FF8F8F] pt-[20px] pb-[20px] justify-center flex ">
          <div className="flex flex-row items-start gap-10 md:hidden">
            <div className="flex flex-col items-start gap-2">
              <div className="flex flex-row gap-1 items-center">
                <img src="/instagram.svg" alt="instagram" className="" />
                <h1 className="text-[16px]">@dfghjkvfgh235</h1>
              </div>
              <div className="flex flex-row gap-1 items-center">
                <img src="/tg.svg" alt="tg" className="" />
                <h1 className="text-[16px]">@dfghjkvfgh235</h1>
              </div>
              <div className="flex flex-row gap-1 items-center">
                <img src="/vk.svg" alt="vk" className="" />
                <h1 className="text-[16px]">@dfghjkvfgh235</h1>
              </div>
              <div className="flex gap-2">
                <h1 className="text-[16px]">8 000 000 00 00</h1>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <img src="/logo.png" alt="logo" className="w-[75px] mx-auto" />
              <p className="text-[10px] font-light text-center">
                Дом кондитерских <br />
                изделий
              </p>
            </div>
          </div>
          <div className="max-w-[1234px] px-[5%] mx-auto md:grid hidden grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="">
              <div className="flex flex-row gap-2">
                <img src="/instagram.svg" alt="instagram" className="" />
                <h1 className="text-[24px]">@dfghjkvfgh235</h1>
              </div>
              <p className="">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim.
              </p>
            </div>
            <div className="">
              <div className="flex flex-row gap-2">
                <img src="/tg.svg" alt="tg" className="" />
                <h1 className="text-[24px]">@dfghjkvfgh235</h1>
              </div>
              <p className="">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim.
              </p>
            </div>
            <div className="">
              <div className="flex flex-row gap-2">
                <img src="/vk.svg" alt="vk" className="" />
                <h1 className="text-[24px]">@dfghjkvfgh235</h1>
              </div>
              <p className="">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim.
              </p>
            </div>
            <div className="">
              <div className="">
                <h1 className="text-[24px]">8 000 000 00 00</h1>
              </div>
              <p className="">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
