import { useState } from "react";
import { Footer } from "../../components/layout/footer";

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
  const [isPressed, setIsPressed] = useState(false);
  const [isPresseddv, setIsPresseddv] = useState(false);
  const [isPressedtr, setIsPressedtr] = useState(false);
  const [isPressedch, setIsPressedch] = useState(false);
  const handleClick = () => {
    setIsPressed(!isPressed);
  };

  return (
    <div className=" bg-white mt-[150px]">
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
                  onClick={handleClick}
                  className={`transition-transform duration-300 ease-in-out ${
                    isPressed ? "bg-[green]" : "bg-black"
                  } cursor-pointer flex text-white rounded-full w-[30px] h-[30px] hover:scale-[1.2] absolute bottom-[-10px] right-[0] items-center justify-center`}
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
                  } cursor-pointer flex text-white rounded-full w-[30px] h-[30px] hover:scale-[1.2] absolute bottom-[-10px] right-[0] items-center justify-center`}
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
                  } cursor-pointer flex text-white rounded-full w-[30px] h-[30px] hover:scale-[1.2] absolute bottom-[-10px] right-[0] items-center justify-center`}
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
                  } cursor-pointer flex text-white rounded-full w-[30px] h-[30px] hover:scale-[1.2] absolute bottom-[-10px] right-[0] items-center justify-center`}
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
            <div className=" w-full mx-auto">
              <div className="flex gap-[10px] flex-col custom:flex-row">
                {slider.map((item, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 p-3 rounded-[70px] mx-auto mb-5 bg-[#de7c7c] shadow-lg shadow-[#0000004b] mx-2
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
      <Footer />
    </div>
  );
};
