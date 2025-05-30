import React, { useState, useEffect } from "react";

export const Header: React.FC = () => {
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
    <>
      {isMobile ? (
        <>
          <header className="px-[5%] py-[1%] h-auto font-[300] line-[]">
            <div className="items-center flex justify-between mx-auto ">
              <div>
                <img src="./logo.png" alt="logo" className="w-[75px] mx-auto" />
                <p className="text-[10px] text-center">
                  Дом кондитерских
                  <br />
                  изделий
                </p>
              </div>
              <div className="flex flex-row items-center gap-[20px]">
                <img
                  src="./menu.svg"
                  alt="menu"
                  className="m-auto h-[12px]"
                  onClick={() => setMenu(!menu)}
                />
                <div className="w-[45px] h-[45px] rounded-full bg-[#C5364B] flex items-center">
                  <img
                    src="./Vector.png"
                    alt="vector"
                    className="m-auto w-[25px] h-[25px]"
                  />
                </div>
              </div>
            </div>
          </header>
          {menu && (
            <>
              <div className="absolute w-[40%] h-full top-0 right-0 shadow-lg z-10 bg-[#C5364B] p-[3%]">
                <img
                  src="./close.png"
                  alt="close"
                  className=" w-[25px] ml-auto h-[25px]"
                  onClick={() => setMenu(!menu)}
                />
                <div className="flex flex-col text-white mt-6 gap-4 text-[18px]">
                  <a href="#">Доставка</a>
                  <a href="/menu">Меню</a>
                  <a href="#">Отзывы</a>
                  <a href="#">Контакты</a>
                </div>
              </div>
              <div className="absolute w-full top-0 h-full bg-black opacity-20"></div>
            </>
          )}
        </>
      ) : (
        <header className="bg-[#D2787836] p-6 gap-2">
          <div className="max-w-[1234px] font-[300] items-center flex justify-center mx-auto gap-5">
            <div className="flex flex-row items-center gap-3 w-[275px] justify-end">
              <a className="hover:underline" href="">
                Преимущества
              </a>
              <a className="hover:underline" href="/menu">
                Меню
              </a>
              <a className="hover:underline" href="">
                Отзывы
              </a>
            </div>
            <a href="/main" className="">
              <img src="./logo.png" alt="logo" className="w-[100px] mx-auto" />
              <p className="text-[10px] text-center">
                Дом кондитерских изделий
              </p>
            </a>
            <div className="flex flex-row items-center gap-3 w-[275px]">
              <a className="hover:underline" href="">
                Контакты
              </a>
              <a href="/auth" className="font-[500] hover:underline">
                Личный кабинет
              </a>
              <div className="relative">
                <a
                  href="/basket"
                  className="w-[50px] h-[50px] rounded-[15px] bg-[#C5364B] flex items-center relative"
                >
                  <img src="./Vector.png" alt="vector" className="m-auto" />
                  <div
                    className={`transition-transform duration-300 ease-in-out cursor-pointer flex text-white rounded-full w-[20px] h-[20px] hover:scale-[1.2] 
                  absolute bottom-[-7px] right-[0] items-center justify-center
                  bg-black`}
                  >
                    <p className="flex mx-auto text-lg text-[10px]">0</p>
                  </div>
                </a>
                <img
                  src="./menu.svg"
                  alt="menu"
                  className="h-[12px] absolute top-[40%] right-[-50px]"
                  onClick={() => setMenu(!menu)}
                />
              </div>
            </div>
            {menu && (
              <>
                <div
                  className="absolute w-[227px] h-[300px] top-[100px] md:right-[2%] lg:right-[8%] ll:right-[13%]  xl:right-[17%] z-10  p-[3%]"
                  style={{
                    backgroundImage: "url(/Rectangle.png)",
                    backgroundPosition: "100% center",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="flex flex-col text-white mt-[49px] gap-4 text-[18px]">
                    <a
                      className="transition-transform duration-300 ease-in-out 
             hover:scale-105"
                      href="#"
                    >
                      Доставка
                    </a>
                    <a
                      className="transition-transform duration-300 ease-in-out 
             hover:scale-105"
                      href="/menu"
                    >
                      Меню
                    </a>
                    <a
                      className="transition-transform duration-300 ease-in-out 
             hover:scale-105"
                      href="#"
                    >
                      Отзывы
                    </a>
                    <a
                      className="transition-transform duration-300 ease-in-out 
             hover:scale-105"
                      href="#"
                    >
                      Контакты
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </header>
      )}
    </>
  );
};
