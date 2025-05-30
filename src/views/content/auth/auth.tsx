export const Auth = () => {
  return (
    <div className=" bg-white h-auto">
      <div className="pt-[50px] pb-[50px] max-w-[1234px] mx-auto">
        <div className="bg-[#ECDADA] w-2/4 px-[20px] sm:px-[50px] py-10 mx-auto border-[#FECFCF] border-[1px] rounded-[29px] text-left">
          <h1 className="text-[24px] font-medium">Вход в личный кабинет</h1>
          <p className="text-[16px] mt-[75px] font-medium">Логин</p>
          <input
            type="text"
            className="w-[100%] custom:w-[100%] bg-white rounded-full px-5 py-2 border-[#FFB2B2] border-[1px] mt-3 shadow-md shadow-gray-500"
          />
          <p className="text-[16px] mt-[20px] font-medium">Пароль</p>
          <input
            type="text"
            className="w-[100%] custom:w-[100%] bg-white rounded-full px-5 py-2 border-[#FFB2B2] border-[1px] mt-3 shadow-md shadow-gray-500"
          />

          <div className="flex flex-col custom:flex-row items-center mt-[30px] ">
            <button
              className="bg-[#C5364B] flex rounded-full py-3 w-[200px] 
        text-white justify-center transition-transform duration-300 ease-in-out shadow-md shadow-[#C5364B]
             hover:scale-105 hover:shadow-lg hover:shadow-[#C5364B]"
            >
              Войти
            </button>
            <a
              href=""
              className="text-[#5e5757] custom:ml-auto mt-2 custom:mt-0"
            >
              Забыли пароль?
            </a>
            <a href="" className="text-[#5e5757] custom:ml-5 mt-2 custom:mt-0">
              Регистрация
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
