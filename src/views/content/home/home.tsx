import { useState } from "react";
import { Cake } from "../../../assets/cake";
import type { MenuItem } from "../../../types/types";
import { Cupcake } from "../../../assets/cupcake";
import { Candy } from "../../../assets/candy";
import { Waffle } from "../../../assets/waffle";
import { Donut } from "../../../assets/donut";
import { Interesting } from "../../../assets/interesting";

const Menu: MenuItem[] = [
  { name: "Торт", color: "red", ico: Cake },
  { name: "Пироженное", color: "", ico: Cupcake },
  { name: "Конфеты", color: "", ico: Candy },
  { name: "Вафли", color: "", ico: Waffle },
  { name: "Пончики", color: "", ico: Donut },
  { name: "Интересное", color: "", ico: Interesting },
];

const sliderData = [
  {
    name: "Велдон Вэнс",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
    image: "/face.jpg",
  },
  {
    name: "Василиса Важина",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
    image: "/face1.jpg",
  },
  {
    name: "Вилл Уостин",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
    image: "/face2.jpg",
  },
];

const slider = [
  {
    ticker: "/ticker.svg",
    name: "1 место",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
    image: "/pic1.jpg",
  },
  {
    ticker: "/ticker2.svg",
    name: "Гран-при",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
    image: "/pic2.jpg",
  },
  {
    ticker: "/ticker3.svg",
    name: "Сертификат",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
    image: "/pic3.jpg",
  },
];

export const Home = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(Menu);
  const toggleColor = (index: number) => {
    setMenuItems((prevItems) =>
      prevItems.map((item, i) => {
        return {
          ...item,
          color: i === index ? "red" : "",
        };
      })
    );
  };

  const [isPressed, setIsPressed] = useState(false);
  const [isPresseddv, setIsPresseddv] = useState(false);
  const [isPressedtr, setIsPressedtr] = useState(false);
  const [isPressedch, setIsPressedch] = useState(false);
  const handleClick = () => {
    setIsPressed(!isPressed);
  };

  const [offset, setOffset] = useState(35);
  const handlePrev = () => {
    if (offset != 35) {
      setOffset((prev) => prev + 35);
    }
  };
  const handleNext = () => {
    if (offset != -35) {
      setOffset((prev) => prev - 35);
    }
  };

  return (
    <div className=" bg-white">
      <div className="3xl:hidden custom:block hidden">
        <img
          src="/bg/8.png"
          alt=""
          className="absolute custom:w-[25%] custom:top-[-50px] custom:left-[-100px]"
        />
        <img
          src="/bg/3.png"
          alt=""
          className="absolute custom:w-[25%] custom:top-[60%] custom:left-[-100px]"
        />
        <img
          src="/bg/1.png"
          alt=""
          className="absolute custom:w-[25%] custom:top-[60%] custom:right-[-100px]"
        />
        <img
          src="/bg/3.png"
          alt=""
          className="absolute custom:w-[25%] custom:top-[340%] custom:left-[-100px]"
        />
        <img
          src="/bg/7.png"
          alt=""
          className="absolute custom:w-[25%] custom:top-[410%] custom:right-[-100px]"
        />
        <img
          src="/bg/8.png"
          alt=""
          className="absolute custom:w-[25%] custom:top-[625%] custom:left-[-100px]"
        />
        <img
          src="/bg/1.png"
          alt=""
          className="absolute custom:w-[25%] custom:top-[735%] custom:right-[-150px] -rotate-12"
        />
        <img
          src="/bg/2.png"
          alt=""
          className="absolute custom:w-[25%] custom:top-[770%] custom:left-[0px]"
        />
        <img
          src="/bg/6.png"
          alt=""
          className="absolute custom:w-[35%] custom:top-[810%] custom:right-[-100px]"
        />
        <img
          src="/bg/5.png"
          alt=""
          className="absolute custom:w-[25%] custom:top-[835%] custom:left-[0px]"
        />
      </div>
      <div className="pt-[20px] pb-[20px] max-w-[1234px] mx-auto ">
        <h1 className="font-[fontsDrops] text-center text-[48px] sm:text-[100px]">
          Fresh and <br />
          tasty deserts
        </h1>
        <p className="text-[18px] text-center font-extralight w-[70%] sm:w-[40%] mx-auto">
          10 лет радуем Вас свежими десертами и новыми вкусами.
          <br />
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
        <button
          className="bg-[#C5364B] flex rounded-full py-3 w-[50%] sm:w-[15%] mt-[30px]
        text-white mx-auto justify-center transition-transform duration-300 ease-in-out shadow-md shadow-[#C5364B]
             hover:scale-105 hover:shadow-lg hover:shadow-[#C5364B]"
        >
          Собрать корзину
        </button>
      </div>
      <div className="bg-cover bg-no-repeat ">
        <img src="/bgtop.png" alt="bg" className="w-full" />
        <div className="bg-[#FF8F8F] pt-[20px] pb-[20px] justify-center flex">
          <div className="max-w-[1234px] mx-[5%]">
            <h1 className="justify-center font-[fontsDrops] text-[48px] sm:text-[100px] flex ll:hidden text-center">
              Our Popular Deserts
            </h1>
            <div className="grid grid-cols-1 lm:grid-cols-2 md:grid-cols-4 ll:grid-cols-5 gap-4">
              {/* Первый блок */}
              <div className="bg-white rounded-[25px] md:rounded-[52px] w-[150px] sm:w-[150px] md:w-[150px] custom:w-[200px] shadow-xl mx-auto relative">
                <img
                  src="/1.jpg"
                  alt="1"
                  className="h-[170px] md:h-[200px] w-full custom:h-[250px] rounded-[25px] md:rounded-[52px] mx-auto"
                />
                <p className="text-[#808080] text-center mt-5 mb-5">
                  Цена: <span className="text-black">1 399р</span>
                </p>
                <div
                  onClick={handleClick} // Обработчик клика
                  className={`transition-transform duration-300 ease-in-out ${
                    isPressed ? "bg-[green]" : "bg-black"
                  } cursor-pointer flex text-white rounded-[5px] w-[25px] h-[25px] hover:scale-[1.2] absolute bottom-[-10px] right-[0] items-center justify-center`}
                >
                  <p className="flex mx-auto text-lg">+</p>
                </div>
              </div>

              {/* Второй блок */}
              <div className="bg-white rounded-[25px] md:rounded-[52px] w-[150px] sm:w-[150px] md:w-[150px] custom:w-[200px] shadow-xl mx-auto relative">
                <img
                  src="/2.jpg"
                  alt="2"
                  className="h-[170px] md:h-[200px] w-full custom:h-[250px] rounded-[25px] md:rounded-[52px] mx-auto"
                />
                <p className="text-[#808080] text-center mt-5 mb-5">
                  Цена: <span className="text-black">1 399р</span>
                </p>
                <div
                  onClick={() => {
                    setIsPresseddv(!isPresseddv);
                  }}
                  className={`transition-transform duration-300 ease-in-out ${
                    isPresseddv ? "bg-[green]" : "bg-black"
                  } cursor-pointer flex text-white rounded-[5px] w-[25px] h-[25px] hover:scale-[1.2] absolute bottom-[-10px] right-[0] items-center justify-center`}
                >
                  <p className="flex mx-auto text-lg">+</p>
                </div>
              </div>

              {/* Третий блок */}
              <div className="bg-white rounded-[25px] md:rounded-[52px] w-[150px] sm:w-[150px] md:w-[150px] custom:w-[200px] shadow-xl mx-auto relative">
                <img
                  src="/3.jpg"
                  alt="3"
                  className="h-[170px] md:h-[200px] w-full custom:h-[250px] rounded-[25px] md:rounded-[52px] mx-auto"
                />
                <p className="text-[#808080] text-center mt-5 mb-5">
                  Цена: <span className="text-black">1 399р</span>
                </p>
                <div
                  onClick={() => {
                    setIsPressedtr(!isPressedtr);
                  }}
                  className={`transition-transform duration-300 ease-in-out ${
                    isPressedtr ? "bg-[green]" : "bg-black"
                  } cursor-pointer flex text-white rounded-[5px] w-[25px] h-[25px] hover:scale-[1.2] absolute bottom-[-10px] right-[0] items-center justify-center`}
                >
                  <p className="flex mx-auto text-lg">+</p>
                </div>
              </div>

              {/* Четвертый блок */}
              <div className="bg-white rounded-[25px] md:rounded-[52px] w-[150px] sm:w-[150px] md:w-[150px] custom:w-[200px] shadow-xl mx-auto relative">
                <img
                  src="/4.jpg"
                  alt="4"
                  className="h-[170px] md:h-[200px] w-full custom:h-[250px] rounded-[25px] md:rounded-[52px] mx-auto"
                />
                <p className="text-[#808080] text-center mt-5 mb-5">
                  Цена: <span className="text-black">1 399р</span>
                </p>
                <div
                  onClick={() => {
                    setIsPressedch(!isPressedch);
                  }}
                  className={`transition-transform duration-300 ease-in-out ${
                    isPressedch ? "bg-[green]" : "bg-black"
                  } cursor-pointer flex text-white rounded-[5px] w-[25px] h-[25px] hover:scale-[1.2] absolute bottom-[-10px] right-[0] items-center justify-center`}
                >
                  <p className="flex mx-auto text-lg">+</p>
                </div>
              </div>

              <h1 className="text-end font-[fontsDrops] text-[80px] hidden ll:flex">
                Our <br />
                Popular <br />
                Deserts
              </h1>
            </div>
          </div>
        </div>
        <img src="/bgbotton.png" alt="bg" className="w-full" />
      </div>
      <div className="pt-[20px] pb-[20px] max-w-[1234px] mx-auto px-[5%]">
        <div className="flex flex-col md:flex-row items-center">
          <h1 className="font-[FontsDrops] text-[96px]">Menu</h1>
          <div
            className="border-[2px] w-full md:w-[40%] border-[#d29099]
          flex flex-row items-center rounded-[35px] py-[5px] px-2 mx-auto"
          >
            <img
              src="/search.png"
              alt=""
              className="w-[25px] h-[25px]  hover:scale-125"
            />
            <input
              type="text"
              placeholder="Поиск десертов и тд..."
              className="bg-transparent "
            />
          </div>
          <h1 className="font-[FontsDrops] text-[48px]">Recommended</h1>
        </div>
        <div className="flex flex-col max-custom:items-center custom:flex-row gap-3">
          <div className="w-[20%] hidden custom:block">
            {menuItems.map((menu, index) => {
              const IconComponent = menu.ico;
              return (
                <div
                  key={index}
                  className="border-[2px] gap-5 w-full flex items-center border-[#d29099] rounded-[35px] py-[6px] px-[6px] mb-6 cursor-pointer"
                  style={{
                    backgroundColor:
                      menu.color === "red" ? "#C5364B" : "transparent",
                    boxShadow:
                      menu.color === "red" ? "0 0 20px #C5364B" : "none",
                  }}
                  onClick={() => toggleColor(index)}
                >
                  <div
                    className="rounded-full flex w-[40px] h-[40px] items-center bg-[#C5364B]"
                    style={{
                      backgroundColor:
                        menu.color === "red" ? "#fff" : "#C5364B",
                      boxShadow:
                        menu.color === "red" ? "0 0 20px #C5364B" : "none",
                    }}
                  >
                    <div className="w-[24px] h-[24px] mx-auto">
                      <IconComponent color={menu.color} />
                    </div>
                  </div>
                  <p
                    style={{
                      color: menu.color === "red" ? "#fff" : "#000",
                    }}
                  >
                    {menu.name}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="custom:w-[55%] w-[90%] relative mx-auto">
            <div
              className="h-full bg-cover bg-no-repeat rounded-[40px] border-[0.5px] border-[#BEBEBE]"
              style={{
                backgroundImage: "url(/bgp1.jpg)",
                transform: "scaleX(-1)",
                backgroundPosition: "30% center",
                backgroundSize: "cover",
              }}
            >
              <div
                className="text-black text-end  px-[25px] py-[40px] flex flex-col gap-5"
                style={{
                  transform: "scaleX(-1)",
                }}
              >
                <h1 className="font-[FontsDrops]">Taste of a Week</h1>
                <p className="font-medium">Клубничный взрыв</p>
                <p className="font-light w-3/6 ml-auto">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
                <button
                  className="bg-gradient-to-r from-[#AB2220] to-[#FF7054] flex rounded-full py-3 px-7 mt-[30px] ml-auto
        text-white transition-transform duration-300 ease-in-out shadow-md
        shadow-[#C5364B] hover:scale-105 hover:shadow-lg hover:shadow-[#C5364B]
             "
                >
                  <p>Добавить в корзину</p>
                </button>
                <div className="flex flex-row items-start gap-4 justify-end">
                  <div className="flex flex-col items-end">
                    <p className="font-medium ">Заказы</p>
                    <p className="font-light">более 50 </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="font-medium ">Время приготовления</p>
                    <p className="font-light">4 часа</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="custom:w-1/5 w-[90%] flex flex-col justify-between gap-10 ">
            <div
              className="flex w-full h-[100px] custom:h-1/2 bg-cover bg-center rounded-[40px] border-[0.5px] border-[#BEBEBE]"
              style={{ backgroundImage: `url(/bgp2.jpg)` }}
            >
              <p className="text-white flex my-auto mx-auto">
                Ягодная лихорадка
              </p>
            </div>
            <div
              className="flex w-full h-[100px] custom:h-1/2 bg-cover bg-center rounded-[40px] border-[0.5px] border-[#BEBEBE]"
              style={{ backgroundImage: `url(/bgp3.jpg)` }}
            >
              <p className=" text-white custom:text-black my-auto mx-auto custom:mt-10 custom:ml-5">
                Черничный бриз
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-cover bg-no-repeat ">
        <img src="/bgtop.png" alt="bg" className="w-full" />
        <div className="bg-[#FF8F8F] pt-[20px] pb-[20px] justify-center flex">
          <div className="max-w-[1234px] mx-[5%]">
            <h1 className="justify-center font-[fontsDrops] text-[48px] sm:text-[100px] flex">
              Our Confectioners
            </h1>
            <div className="relative w-full mx-auto">
              <button
                className="absolute left-[35%] xl:left-[-5%] lg:left-[15%] custom:left-[20%]
                md:left-[23%] sm:left-[25%] lm:left-[31%] vrsm:left-[35%] 
                top-1/2 transform -translate-y-1/2 z-50
                   bg-[#FF8F8F] border-[#C5364B] border-[1px] w-[55px] h-[55px] rounded-full
                   shadow-xl hover:shadow-[#C5364B] transition duration-300"
                onClick={handlePrev}
              >
                &lt;
              </button>
              <div
                className="flex transition-transform duration-500 ease-in-out gap-[150px]"
                style={{ transform: `translateX(${offset}%)` }}
              >
                {sliderData.map((item, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 p-3 rounded-[70px] bg-[#de7c7c] shadow-lg shadow-[#0000004b] mx-2
                    border-[#FFA3A3] border-[1px]
                    transition-transform duration-300 ease-in-out 
             hover:scale-105 hover:shadow-lg hover:shadow-[#C5364B]"
                    style={{
                      minWidth: "280px",
                      maxWidth: "280px",
                      minHeight: "430px",
                      maxHeight: "430px",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[150px] h-[150px] rounded-full mx-auto shadow-lg shadow-[#00000082]
                      border-[#FFA3A3] border-[1px]"
                    />
                    <h3 className="font-bold text-lg text-center mt-10">
                      {item.name}
                    </h3>
                    <p className="text-center mb-4">{item.description}</p>
                    <button
                      className="bg-[#C5364B] text-white rounded-full px-4 py-2 flex 
                    mx-auto justify-center transition-transform duration-300 ease-in-out shadow-md shadow-[#C5364B]
             hover:scale-105 hover:shadow-lg hover:shadow-[#C5364B]"
                    >
                      Читать больше
                    </button>
                  </div>
                ))}
              </div>
              <button
                className="absolute right-[35%] xl:right-[-5%] lg:right-[15%] custom:right-[20%]
                md:right-[23%] sm:right-[25%] lm:right-[31%] vrsm:right-[35%] top-1/2 transform -translate-y-1/2 z-50
                   bg-[#FF8F8F] border-[#C5364B] border-[1px] w-[55px] h-[55px] rounded-full
                   shadow-xl hover:shadow-[#C5364B] transition duration-300"
                onClick={handleNext}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
        <img src="/bgbotton.png" alt="bg" className="w-full" />
      </div>
      <div className="pt-[20px] pb-[20px] max-w-[1234px] mx-auto px-[5%]">
        <h1 className="justify-center font-[fontsDrops] text-[48px] sm:text-[100px] flex ">
          Quality
        </h1>
        <div className="flex flex-col items-center custom:flex-row justify-between">
          <div className="w-2/3 custom:w-1/3 mt-auto mr-auto custom:mr-0">
            <h1 className="font-[fontsDrops] mb-3">Tasty</h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint
            </p>
          </div>
          <div className="relative inline-block w-[200px] custom:w-[300px] h-[200px] custom:h-[300px] rounded-full overflow-hidden">
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#C5364B] to-[#FFF] p-[10px]">
              <div
                className="w-full h-full rounded-full"
                style={{
                  backgroundImage: "url(/quality1.jpg)",
                  backgroundPosition: "30% center",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </div>
          <div className="w-2/3 custom:w-1/3 my-auto ml-auto custom:ml-0 max-custom:text-right">
            <h1 className="font-[fontsDrops] mb-3 ">Fresh</h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint
            </p>
          </div>
        </div>
        <div className="flex  flex-col items-center custom:flex-row justify-center gap-10">
          <div className="relative inline-block w-[200px] custom:w-[300px] h-[200px] custom:h-[300px] rounded-full overflow-hidden">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#C5364B] to-[#FFF] p-[10px]">
              <div
                className="w-full h-full rounded-full"
                style={{
                  backgroundImage: "url(/quality2.jpg)",
                  backgroundPosition: "30% center",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </div>
          <div className="w-2/3 custom:w-1/3 mt-auto mr-auto custom:mr-0 custom:hidden">
            <h1 className="font-[fontsDrops] mb-3">Natural</h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint
            </p>
          </div>
          <div className="relative inline-block w-[200px] custom:w-[300px] h-[200px] custom:h-[300px] rounded-full overflow-hidden">
            <div className="absolute inset-0 rounded-full bg-gradient-to-l from-[#C5364B] to-[#FFF] p-[10px]">
              <div
                className="w-full h-full rounded-full"
                style={{
                  backgroundImage: "url(/quality3.jpg)",
                  backgroundPosition: "30% center",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="w-2/3 custom:w-1/3 my-auto justify-self-center mt-10 flex flex-col custom:ml-0 max-custom:text-right max-custom:hidden">
          <h1 className="font-[fontsDrops] mb-3 ">Natural</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint
          </p>
        </div>
      </div>
      <div className="bg-cover bg-no-repeat ">
        <img src="/bgtop.png" alt="bg" className="w-full" />
        <div className="bg-[#FF8F8F] pt-[20px] pb-[20px] justify-center flex">
          <div className="max-w-[1234px] mx-[5%]">
            <h1 className="justify-center font-[fontsDrops] text-[48px] sm:text-[100px] flex">
              Our Awards
            </h1>
            <div className="relative w-full mx-auto">
              <button
                className="absolute left-[35%] xl:left-[-5%] lg:left-[15%] custom:left-[20%]
                md:left-[23%] sm:left-[25%] lm:left-[31%] vrsm:left-[35%] 
                top-1/2 transform -translate-y-1/2 z-50
                   bg-[#FF8F8F] border-[#C5364B] border-[1px] w-[55px] h-[55px] rounded-full
                   shadow-xl hover:shadow-[#C5364B] transition duration-300"
                onClick={handlePrev}
              >
                &lt;
              </button>
              <div
                className="flex transition-transform duration-500 ease-in-out gap-[150px]"
                style={{ transform: `translateX(${offset}%)` }}
              >
                {slider.map((item, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 p-3 rounded-[70px] bg-[#de7c7c] shadow-lg shadow-[#0000004b] mx-2
                    border-[#FFA3A3] border-[1px]
                    transition-transform duration-300 ease-in-out 
             hover:scale-105 hover:shadow-lg hover:shadow-[#C5364B]"
                    style={{
                      minWidth: "280px",
                      maxWidth: "280px",
                      minHeight: "430px",
                      maxHeight: "430px",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[150px] h-[150px] rounded-full mx-auto shadow-lg shadow-[#00000082]
                      border-[#FFA3A3] border-[1px]"
                    />
                    <div className="flex flex-row items-end justify-center mt-10">
                      <img
                        src={item.ticker}
                        alt={item.ticker}
                        className="w-[40px] h-[40px]"
                      />
                      <h3 className="font-bold text-lg text-center ">
                        {item.name}
                      </h3>
                    </div>
                    <p className="text-center mb-4">{item.description}</p>
                    <button
                      className="bg-[#C5364B] text-white rounded-full px-4 py-2 flex 
                    mx-auto justify-center transition-transform duration-300 ease-in-out shadow-md shadow-[#C5364B]
             hover:scale-105 hover:shadow-lg hover:shadow-[#C5364B]"
                    >
                      Читать больше
                    </button>
                  </div>
                ))}
              </div>
              <button
                className="absolute right-[35%] xl:right-[-5%] lg:right-[15%] custom:right-[20%]
                md:right-[23%] sm:right-[25%] lm:right-[31%] vrsm:right-[35%] top-1/2 transform -translate-y-1/2 z-50
                   bg-[#FF8F8F] border-[#C5364B] border-[1px] w-[55px] h-[55px] rounded-full
                   shadow-xl hover:shadow-[#C5364B] transition duration-300"
                onClick={handleNext}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
        <img src="/bgbotton.png" alt="bg" className="w-full" />
      </div>
      <div className="pt-[20px] pb-[20px] max-w-[1234px] mx-auto ">
        <div className="flex justify-center flex-col custom:flex-row items-center gap-6">
          <div className="w-1/2">
            <h1 className="font-[fontsDrops] max-custom:text-center text-[48px] sm:text-[100px]">
              The best <br />
              of taste
            </h1>
            <img
              src="/layout.png"
              alt="layout"
              className="w-1/3 custom:hidden mx-auto flex"
            />
            <p className="custom:w-2/3 max-custom:text-center w-[90%] max-custom:mx-auto flex text-[16px] sm:text-[24px] font-light">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </p>
            <button
              className="bg-[#C5364B] flex max-custom:mx-auto rounded-full py-3 w-[75%] custom:w-[25%] mt-[30px]
        text-white  justify-center transition-transform duration-300 ease-in-out shadow-md shadow-[#C5364B]
             hover:scale-105 hover:shadow-lg hover:shadow-[#C5364B]"
            >
              Выбрать
            </button>
          </div>
          <img
            src="/layout.png"
            alt="layout"
            className="w-1/3 max-custom:hidden"
          />
        </div>
      </div>
      <div className="bg-cover bg-no-repeat ">
        <img src="/bgtop.png" alt="bg" className="w-full" />
        <div className="bg-[#FF8F8F] pt-[20px] pb-[20px] justify-center flex">
          <div className="max-w-[1234px] custom:mx-[5%]">
            <h1 className="justify-center font-[fontsDrops] text-[48px] sm:text-[100px] flex">
              Delivery
            </h1>
            <p className="w-[90%] custom:w-[50%] text-[18px] custom:text-[24px] font-light mx-auto text-center">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim. Amet minim mollit non deserunt
              ullamco est sit aliqua dolor do amet sint. Velit officia consequat
              duis enim. Amet minim mollit non deserunt ullamco est sit aliqua
              dolor do amet sint. Velit officia consequat duis enim.
            </p>
            <div className="flex flex-col items-center custom:flex-row justify-center gap-10">
              <div className="mt-10">
                <img
                  src="/planet.png"
                  alt="planet"
                  className="custom:max-w-[300px] custom:min-w-[300px] 
                  transition-transform duration-300 ease-in-out hover:scale-[1.2]
                  custom:h-[300px] max-w-[200px] min-w-[200px]  h-[200px] flex custom:ml-auto custom:mr-10"
                />
              </div>
              <div className="custom:w-[40%] w-[90%] mt-10">
                <h1 className="text-[48px] font-normal max-custom:text-center">
                  Узнать стоимость доставки
                  <span className="font-semibold"> бесплатно</span>
                </h1>
                <p className="text-[24px] font-light mx-auto mt-5 max-custom:text-[16px] max-custom:w-2/3 max-custom:text-center">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim. Amet minim
                  mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                  Velit officia consequat duis enim.
                </p>
                <button
                  className="bg-[#C5364B] flex rounded-full mx-auto custom:mx-0
                  py-3 w-[35%] mt-[30px]
        text-white  justify-center transition-transform duration-300 ease-in-out shadow-md shadow-[#C5364B]
             hover:scale-105 hover:shadow-lg hover:shadow-[#C5364B]"
                >
                  Рассчитать
                </button>
              </div>
            </div>
          </div>
        </div>
        <img src="/bgbotton.png" alt="bg" className="w-full" />
      </div>
      <div className="pt-[20px] pb-[20px] max-w-[1234px] mx-auto ">
        <h1 className="justify-center font-[fontsDrops] text-[48px] sm:text-[100px] flex">
          Customer Reviews
        </h1>
        <div className="gap-5 flex flex-col custom:flex-row items-center justify-start custom:justify-start w-[100%] mt-5">
          <div className="relative transition-transform duration-300 ease-in-out hover:scale-[1.2] inline-block w-[200px] h-[200px] rounded-full overflow-hidden">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#C5364B] to-[#FFF] p-[10px]">
              <div
                className="w-full h-full rounded-full"
                style={{
                  backgroundImage: "url(/image.jpg)",
                  backgroundPosition: "30% center",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </div>
          <div className="gap-3 text-center custom:text-left justify-items-center custom:justify-items-start">
            <h1 className="text-[24px]">Вячеслав Васильевич В.</h1>
            <div className="flex flex-row">
              <img src="/star.png" alt="" className="w-[20px] h-[20px]" />
              <img src="/star.png" alt="" className="w-[20px] h-[20px]" />
              <img src="/star.png" alt="" className="w-[20px] h-[20px]" />
              <img src="/star.png" alt="" className="w-[20px] h-[20px]" />
              <img src="/star.png" alt="" className="w-[20px] h-[20px]" />
            </div>
            <p className="w-1/2">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </p>
          </div>
        </div>
        <div className="gap-5 flex flex-col custom:flex-row items-center justify-start custom:justify-end w-[100%] ml-auto mt-5">
          <div className="relative transition-transform duration-300 ease-in-out hover:scale-[1.2] inline-block w-[200px] h-[200px] rounded-full overflow-hidden custom:hidden">
            <div className="absolute inset-0 rounded-full bg-gradient-to-l from-[#C5364B] to-[#FFF] p-[10px]">
              <div
                className="w-full h-full rounded-full"
                style={{
                  backgroundImage: "url(/image2.jpg)",
                  backgroundPosition: "30% center",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </div>
          <div className="gap-3 text-center custom:text-right justify-items-center custom:justify-items-end">
            <h1 className="text-[24px]">Владимир Виллович В.</h1>
            <div className="flex flex-row ">
              <img src="/star.png" alt="" className="w-[20px] h-[20px]" />
              <img src="/star.png" alt="" className="w-[20px] h-[20px]" />
              <img src="/star.png" alt="" className="w-[20px] h-[20px]" />
              <img src="/star.png" alt="" className="w-[20px] h-[20px]" />
              <img src="/star.png" alt="" className="w-[20px] h-[20px]" />
            </div>
            <p className="w-1/2 ml-0 custom:ml-auto">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </p>
          </div>
          <div className="relative transition-transform duration-300 ease-in-out hover:scale-[1.2] hidden w-[200px] h-[200px] rounded-full overflow-hidden custom:inline-block">
            <div className="absolute inset-0 rounded-full bg-gradient-to-l from-[#C5364B] to-[#FFF] p-[10px]">
              <div
                className="w-full h-full rounded-full"
                style={{
                  backgroundImage: "url(/image2.jpg)",
                  backgroundPosition: "30% center",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="gap-5 flex flex-col custom:flex-row items-center justify-start custom:justify-start w-[100%] mt-5">
          <div className="relative transition-transform duration-300 ease-in-out hover:scale-[1.2] inline-block w-[200px] h-[200px] rounded-full overflow-hidden">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#C5364B] to-[#FFF] p-[10px]">
              <div
                className="w-full h-full rounded-full"
                style={{
                  backgroundImage: "url(/image3.jpg)",
                  backgroundPosition: "30% center",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </div>
          <div className="gap-3 text-center custom:text-left justify-items-center custom:justify-items-start">
            <h1 className="text-[24px]">Виктория Викторовна В.</h1>
            <div className="flex flex-row">
              <img src="/star.png" alt="" className="w-[20px] h-[20px]" />
              <img src="/star.png" alt="" className="w-[20px] h-[20px]" />
              <img src="/star.png" alt="" className="w-[20px] h-[20px]" />
              <img src="/star.png" alt="" className="w-[20px] h-[20px]" />
              <img src="/star.png" alt="" className="w-[20px] h-[20px]" />
            </div>
            <p className="w-1/2">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
