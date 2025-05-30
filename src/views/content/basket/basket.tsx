export const Basket = () => {
  return (
    <div className=" bg-white h-auto">
      <div className="pt-[50px] pb-[50px] max-w-[1234px] px-[5%] mx-auto flex flex-col custom:flex-row gap-10">
        <div className="bg-[#ECDADA] w-4/5 custom:w-3/5 px-[20px] lm:px-[50px] py-10 mx-auto border-[#FECFCF] border-[1px] rounded-[29px]">
          <div className="flex flex-row items-start text-[24px] font-medium">
            <p>Корзина</p>
            <p className="text-[12px] font-light">0</p>
          </div>
          <div className="mt-3 flex flex-row items-center gap-3">
            <input type="checkbox" className="bg-white" />
            <p className="text-[12px] font-light text-[#5e5757]">Выбрать все</p>
          </div>
          <p className="text-[12px] font-normal text-[#5e5757] text-center mt-[10px] custom:mt-[20%]">
            К сожалению, корзина пока пуста. <br />
            Перейдите в раздел{" "}
            <span className="font-medium text-black">меню</span>, чтобы начать
            покупки!
          </p>
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
          <p className="text-[16px] font-medium mt-8">Оплата картой</p>
          <div className="flex flex-col sm:flex-row sm:items-end text-[12px] lm:text-[16px] font-normal text-[#5e5757] gap-6 mt-3">
            <img src="/sber.png" alt="sber" className="w-[50px]" />
            <div className="flex flex-row gap-3">
              <p>000000******0000</p>
              <p>00/00</p>
            </div>
          </div>
          <div className="text-[16px] font-normal text-[#5e5757] mt-8">
            <div className="flex flex-row items-center justify-between">
              <p>Товары, 0 шт.</p>
              <p>0 рублей</p>
            </div>
            <div className="flex flex-row items-center justify-between mt-3">
              <p>Скидка, 0%</p>
              <p>0 рублей</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[24px] font-medium mt-8">
            <p>Итого</p>
            <p>0 рублей</p>
          </div>
          <div className="mt-3 flex flex-row items-center gap-3">
            <input type="checkbox" className="bg-white" />
            <p className="text-[12px] font-light text-[#5e5757]">
              Соглашаюсь с правилами пользования торговой площадкой и условиями
              доставки
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
