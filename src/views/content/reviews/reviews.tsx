import { useEffect, useState } from "react";
import { Footer } from "../../components/layout/footer";

export const Reviews = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [alert, setAlert] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setAlert("Отзыв отправлен!");
  };

  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1000);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1000);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="bg-white h-auto">
        <div className="3xl:hidden custom:block hidden z-0">
          <img
            src="/bg/2.png"
            alt=""
            className="absolute custom:w-[25%] custom:top-[20%] custom:left-[0px]"
          />
          <img
            src="/bg/6.png"
            alt=""
            className="absolute custom:w-[35%] custom:top-[60%] custom:right-[-100px]"
          />
          <img
            src="/bg/5.png"
            alt=""
            className="absolute custom:w-[25%] custom:top-[90%] custom:left-[0px]"
          />
        </div>
        <div className="pt-[20px] pb-[20px] max-w-[1234px] mx-auto custom:mt-[150px]">
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
          <div className="gap-5 flex flex-col custom:flex-row items-center justify-start custom:justify-end w-[100%] ml-auto mt-1">
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
          <div className="gap-5 flex flex-col custom:flex-row items-center justify-start custom:justify-start w-[100%] mt-1">
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
          <div
            onClick={() => setIsModalOpen(true)}
            className="bg-[#C5364B] flex rounded-full mx-auto
                  py-3 w-[40%] custom:w-[200px] mt-[30px]
        text-white  justify-center transition-transform duration-300 ease-in-out shadow-md shadow-[#C5364B]
             hover:scale-105 hover:shadow-lg hover:shadow-[#C5364B]"
          >
            Оставить отзыв
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-[999999999]">
          <div className="bg-[#fff] w-3/4 lg:w-2/4 px-[20px] sm:px-[50px] py-10 border-[#FECFCF] border-[1px] rounded-[29px] text-left">
            <div className="flex flex-row items-center justify-between relative">
              <h2 className="text-[24px] font-medium text-center">
                Заполните анкету, чтобы оставить отзыв
              </h2>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setAlert("");
                  setError("");
                }}
                className="text-[32px] text-[#5e5757] transition-transform duration-300 ease-in-out cursor-pointer hover:scale-[1.2]"
              >
                ×
              </button>
            </div>
            <div className="flex flex-col custom:flex-row items-center w-full">
              <form className="custom:w-[60%] w-full" onSubmit={handleSubmit}>
                <p className="text-[16px] mt-[20px] font-medium">
                  Имя и Фамилия
                </p>
                <input
                  type="text"
                  className="w-[100%] bg-[#ffe9e9] rounded-full px-5 py-2 mt-3"
                />
                <p className="text-[16px] mt-[20px] font-medium">E-mail</p>
                <input
                  type="text"
                  className="w-[100%] bg-[#ffe9e9] rounded-full px-5 py-2 mt-3"
                />
                <p className="text-[16px] mt-[20px] font-medium">Ваш отзыв</p>
                <textarea className="w-[100%] bg-[#ffe9e9] rounded-full px-5 py-2 mt-3" />
                <div className="hidden custom:flex justify-end mt-[20px] custom:mt-[60px] relative">
                  {error && (
                    <p className="text-red-500 top-[-40px] absolute">{error}</p>
                  )}
                  {alert && (
                    <p className="text-green-400 top-[-40px] absolute">
                      {alert}
                    </p>
                  )}
                  <button
                    type="submit"
                    className="bg-[#C5364B] py-2 px-4 rounded-full text-white transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                  >
                    Отправить
                  </button>
                </div>
              </form>
              <p className="text-center flex w-[70%] custom:w-[30%] custom:ml-[5%]">
                Мы с нетерпением ждем от Вас обратной связи и обязательно
                разместим ваш отзыв на нашем сайте!
              </p>
              <div className="custom:hidden flex justify-center mt-[20px] custom:mt-[60px] relative">
                {error && (
                  <p className="text-red-500 top-[-40px] absolute">{error}</p>
                )}
                {alert && (
                  <p className="text-green-400 top-[-40px] absolute">{alert}</p>
                )}
                <button
                  type="submit"
                  className="bg-[#C5364B] py-2 px-4 rounded-full text-white transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                >
                  Отправить
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col">
        <div className="bg-cover bg-no-repeat flex-grow">
          <img
            src="/bgtop.png"
            alt="bg"
            className="w-full custom:flex hidden"
          />

          <div className="custom:bg-[#FF8F8F] bg-[#fff] pt-[20px] pb-[20px] justify-center flex flex-col">
            {isMobile && (
              <div className="flex flex-col items-center w-full">
                <div className="grid grid-cols-2 gap-x-10 gap-y-4 max-w-[350px] w-full">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-baseline gap-2">
                      <img
                        src="/instagram.svg"
                        alt="instagram"
                        className="w-5 h-5 self-end relative top-[-5px]"
                      />
                      <span className="text-[13px] leading-tight">
                        @confectioneryhouse
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <img
                        src="/tg.svg"
                        alt="tg"
                        className="w-5 h-5 self-end relative top-[-5px]"
                      />
                      <span className="text-[13px] leading-tight">
                        @confectioneryhouse
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-baseline gap-2">
                      <img
                        src="/vk.svg"
                        alt="vk"
                        className="w-5 h-5 self-end relative top-[-5px]"
                      />
                      <span className="text-[13px] leading-tight">
                        @confectioneryhouse
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <div className="w-5 h-5 self-end relative top-[-5px]"></div>
                      <span className="text-[13px] leading-tight">
                        8 000 000 00 00
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {!isMobile && (
              <div className="max-w-[1300px] px-[5%] mx-auto grid grid-cols-4 gap-14">
                <div className="flex items-end">
                  <div className="flex items-end gap-2">
                    <img
                      src="/instagram.svg"
                      alt="instagram"
                      className="w-6 h-6 self-end relative top-[-5px]"
                    />
                    <span className="text-[18px]">@confectioneryhouse</span>
                  </div>
                </div>

                <div className="flex items-end">
                  <div className="flex items-end gap-2">
                    <img
                      src="/tg.svg"
                      alt="tg"
                      className="w-6 h-6 self-end relative top-[-5px]"
                    />
                    <span className="text-[18px]">@confectioneryhouse</span>
                  </div>
                </div>

                <div className="flex items-end">
                  <div className="flex items-end gap-2">
                    <img
                      src="/vk.svg"
                      alt="vk"
                      className="w-6 h-6 self-end relative top-[-5px]"
                    />
                    <span className="text-[18px]">@confectioneryhouse</span>
                  </div>
                </div>

                <div className="flex items-end">
                  <div className="flex items-end gap-2">
                    <div className="w-6 h-6 self-end relative top-[-5px]"></div>
                    <span className="text-[18px]">8 000 000 00 00</span>
                  </div>
                </div>
              </div>
            )}
            <div className="flex-col items-center text-center mx-auto mt-10 mb-10 lg:flex hidden">
              <div className="text-center text-[18px] max-w-2xl px-4">
                Используйте наши социальные сети, чтобы связаться с нами или
                оставить отзыв о нашей продукции! Наши сотрудники оперативно
                ответят вам и помогут с вашими вопросами.
                <br />
                <br />
                Колл-центр принимает звонки с <strong>9:00 до 23:00</strong>.
                Ждем ваших вопросов, предложений и отзывов!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
