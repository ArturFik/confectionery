import { useEffect, useState } from "react";
import { Footer } from "../../components/layout/footer";

export const Basket = () => {
  const [cartItems, setCartItems] = useState<
    { name: string; price: number; quantity: number }[]
  >([]);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [alert, setAlert] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setAlert("Заказ отправлен!");
  };

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const loggedUser = users.find(
      (user: { login: string }) =>
        user.login === localStorage.getItem("loggedUser")
    );
    setCartItems(loggedUser?.cart || []);
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const removeFromCart = (itemName: string) => {
    const updatedCart = cartItems.filter((item) => item.name !== itemName);
    setCartItems(updatedCart);
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const loggedUser = users.find(
      (user: { login: string }) =>
        user.login === localStorage.getItem("loggedUser")
    );

    if (loggedUser) {
      loggedUser.cart = updatedCart;
      localStorage.setItem("users", JSON.stringify(users));
    }
  };

  return (
    <>
      <div className="bg-white h-auto">
        <div className="pt-[50px] pb-[50px] max-w-[1234px] custom:mt-[150px] px-[5%] mx-auto flex flex-col custom:flex-row gap-10">
          <div className="bg-[#ECDADA]  w-4/5 custom:w-3/5 px-[20px] lm:px-[50px] py-10 mx-auto border-[#FECFCF] border-[1px] rounded-[29px]">
            <div className="flex flex-row items-start text-[24px] font-medium">
              <p>Корзина</p>
              <p className="text-[12px] font-light">{cartItems.length}</p>
            </div>

            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center justify-between mt-3"
                >
                  <div className="flex flex-row items-center">
                    <p className="text-[16px] font-medium">{item.name}</p>
                    <p className="text-[16px] font-medium ml-2">
                      {item.quantity} x {item.price} рублей
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.name)}
                    className="text-red-500 hover:text-red-700 transition-colors duration-200"
                  >
                    ✖️
                  </button>
                </div>
              ))
            ) : (
              <p className="text-[12px] font-normal text-[#5e5757] text-center mt-[10px]">
                К сожалению, корзина пока пуста. <br />
                Перейдите в раздел{" "}
                <span className="font-medium text-black">меню</span>, чтобы
                начать покупки!
              </p>
            )}
          </div>
          <div className="bg-[#ECDADA] w-4/5 custom:w-2/5 px-[20px] lm:px-[50px] py-10 mx-auto border-[#FECFCF] border-[1px] rounded-[29px] gap-5">
            <p className="text-[16px] font-medium">
              Адрес доставки
              <span className="font-light text-[#5e5757]"> (по умолчанию)</span>
            </p>
            <p className="text-[16px] font-normal text-[#5e5757] mt-3">
              г. Москва, ул. 800-летия Москвы, д. 28к1
            </p>
            <p className="text-[16px] font-normal mt-3">22-28 апреля</p>
            <div className="text-[16px] font-normal text-[#5e5757] mt-8">
              <div className="flex flex-row items-center justify-between">
                <p>Товары, {cartItems.length} шт.</p>
                <p>{calculateTotal()} рублей</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[24px] font-medium mt-8">
              <p>Итого</p>
              <p>{calculateTotal()} рублей</p>
            </div>

            <div className="mt-3 flex flex-row items-center gap-3">
              <input type="checkbox" className="bg-white" />
              <p className="text-[12px] font-light text-[#5e5757]">
                Соглашаюсь с правилами пользования торговой площадкой и
                условиями доставки
              </p>
            </div>
            <div
              onClick={() => setIsModalOpen(true)}
              className="bg-[#C5364B] flex rounded-full mx-auto
                  py-3 w-[40%] custom:w-[200px] mt-[30px]
        text-white  justify-center transition-transform duration-300 ease-in-out shadow-md shadow-[#C5364B]
             hover:scale-105 hover:shadow-lg hover:shadow-[#C5364B]"
            >
              Заказать
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-[999999999]">
          <div className="bg-[#fff] w-3/4 lg:w-2/4 px-[20px] sm:px-[50px] py-10 border-[#FECFCF] border-[1px] rounded-[29px] text-left">
            <div className="flex flex-row items-center justify-between relative">
              <h2 className="custon:text-[24px] text-[18px] font-medium text-center">
                Заполните анкету, чтобы сделать заказ
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
                <p className="custon:text-[16px] text-[12px] mt-[10px] custon:mt-[20px] font-medium">
                  Имя и Фамилия
                </p>
                <input
                  type="text"
                  className="w-[100%] bg-[#ffe9e9] custom:bg-white rounded-full px-5 py-2 custom:border-[#FFB2B2] border-[1px] mt-3 shadow-md shadow-[#FFB2B2]"
                />
                <p className="custon:text-[16px] text-[12px] mt-[10px] custon:mt-[20px] font-medium">
                  Номер телефона
                </p>
                <input
                  type="text"
                  className="w-[100%] bg-[#ffe9e9] custom:bg-white rounded-full px-5 py-2 custom:border-[#FFB2B2] border-[1px] mt-3 shadow-md shadow-[#FFB2B2]"
                />
                <p className="custon:text-[16px] text-[12px] mt-[10px] custon:mt-[20px] font-medium">
                  Пожелания к заказу
                </p>
                <textarea className="w-[100%] bg-[#ffe9e9] custom:bg-white rounded-full px-5 py-2 custom:border-[#FFB2B2] border-[1px] mt-3 shadow-md shadow-[#FFB2B2]" />

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
                <p className="text-center custom:text-[18px] mx-auto text-[12px] custom:hidden flex w-[70%] custom:w-[30%] custom:ml-[5%]">
                  Мы свяжемся с вами для уточнения деталей заказа, как только
                  получим вашу заявку на заказ!
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
              <p className="text-center custom:text-[18px] text-[12px] hidden custom:flex w-[70%] custom:w-[30%] custom:ml-[5%]">
                Мы свяжемся с вами для уточнения деталей заказа, как только
                получим вашу заявку на заказ!
              </p>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};
