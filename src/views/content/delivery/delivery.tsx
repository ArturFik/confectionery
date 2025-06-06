import { useEffect, useState } from "react";

export const Delivery = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [alert, setAlert] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setAlert("Анкета отправлена!");
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
      <div className="bg-[#FF8F8F] h-auto">
        <div className="bg-[#FF8F8F] pt-[20px] pb-[20px] justify-center flex ">
          <div className="max-w-[1234px] custom:mx-[5%] mt-[150px]">
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
                  onClick={() => setIsModalOpen(true)}
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
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-[999999999]">
          <div className="bg-[#fff] w-[90%] lg:w-2/4 px-[20px] sm:px-[50px] py-10 border-[#FECFCF] border-[1px] rounded-[29px] text-left">
            <div className="flex flex-row items-center justify-between relative">
              <h2 className="custom:text-[24px] text-[18px] font-medium text-center">
                Заполните анкету, чтобы рассчитать стоимость доставки
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
                <p className="text-[12px] custom:text-[16px] mt-[10px] custom:mt-[20px] font-medium">
                  Имя и Фамилия
                </p>
                <input
                  type="text"
                  className="w-[100%] bg-[#ffe9e9] rounded-full px-5 py-2 mt-3"
                />
                <p className="text-[12px] custom:text-[16px] mt-[10px] custom:mt-[20px] font-medium">
                  Адрес доставки
                </p>
                <input
                  type="text"
                  className="w-[100%] bg-[#ffe9e9] rounded-full px-5 py-2 mt-3"
                />
                <p className="text-[12px] custom:text-[16px] mt-[10px] custom:mt-[20px] font-medium">
                  Дата доставки
                </p>
                <input
                  type="text"
                  className="w-[100%] bg-[#ffe9e9] rounded-full px-5 py-2 mt-3"
                />
                <p className="text-[12px] custom:text-[16px] mt-[10px] custom:mt-[20px] font-medium">
                  E-mail
                </p>
                <input
                  type="text"
                  className="w-[100%] bg-[#ffe9e9] rounded-full px-5 py-2 mt-3"
                />
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
                <p className="text-center mt-2 mx-auto custom:hidden flex w-[70%] custom:w-[30%] custom:ml-[5%] text-[12px]">
                  В течении 24 часов на вашу почту придет ответ с рассчетом
                  доставки до вашего адреса!
                </p>
                <div className="custom:hidden flex justify-center mt-[40px] custom:mt-[60px] relative">
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
              <p className="text-center mx-auto hidden custom:flex w-[70%] custom:w-[30%] custom:ml-[5%] text-[12px]">
                В течении 24 часов на вашу почту придет ответ с рассчетом
                доставки до вашего адреса!
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col">
        <div className="bg-cover bg-no-repeat flex-grow">
          <img
            src="/bgbotton.png"
            alt="bg"
            className="w-full custom:flex hidden"
          />

          <div className="bg-[#FF8F8F] custom:bg-[#fff] pt-[20px] pb-[20px] justify-center flex flex-col">
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
