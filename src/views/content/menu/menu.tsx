import type { MenuItem } from "../../../types/types";
import { Cake } from "../../../assets/cake";
import { Cupcake } from "../../../assets/cupcake";
import { Candy } from "../../../assets/candy";
import { Waffle } from "../../../assets/waffle";
import { Donut } from "../../../assets/donut";
import { Interesting } from "../../../assets/interesting";
import { useEffect, useState } from "react";
import { Footer } from "../../components/layout/footer";

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
    name: "Пироженное Август",
    price: "799",
    description: "Вкус позднего лета с нежным шоколадом",
    image: "/menu.jpg",
  },
  {
    name: "Торт Princes",
    price: "2799",
    description: "Вкус позднего лета с нежным шоколадом",
    image: "/menu1.jpg",
  },
  {
    name: "Бенто торт Birthday",
    price: "999",
    description: "Вкус позднего лета с нежным шоколадом",
    image: "/menu2.jpg",
  },
  {
    name: "Вафли Ягодный микс",
    price: "899",
    description: "Вкус позднего лета с нежным шоколадом",
    image: "/menu3.jpg",
  },
  {
    name: "Пончики Классические",
    price: "1199",
    description: "Вкус позднего лета с нежным шоколадом",
    image: "/menu4.jpg",
  },
  {
    name: "Конфеты Орешик",
    price: "1599",
    description: "Вкус позднего лета с нежным шоколадом",
    image: "/menu5.jpg",
  },
];

export const MenuPage = () => {
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
  const [currentUser, setCurrentUser] = useState<{
    login: string;
    cart: { name: string; price: number; quantity: number }[];
  } | null>(null);
  const [cart, setCart] = useState<
    { name: string; price: number; quantity: number }[]
  >([]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const loggedUser = users.find(
      (user: { login: string }) =>
        user.login === localStorage.getItem("loggedUser")
    );
    if (loggedUser) {
      setCurrentUser(loggedUser);
      setCart(loggedUser.cart || []);
    }
  }, []);

  const addToCart = (itemName: string, itemPrice: number) => {
    if (currentUser) {
      const existingItemIndex = cart.findIndex(
        (item) => item.name === itemName
      );

      let updatedCart;
      if (existingItemIndex > -1) {
        const updatedItem = {
          ...cart[existingItemIndex],
          quantity: cart[existingItemIndex].quantity + 1,
        };
        updatedCart = [
          ...cart.slice(0, existingItemIndex),
          updatedItem,
          ...cart.slice(existingItemIndex + 1),
        ];
      } else {
        updatedCart = [
          ...cart,
          { name: itemName, price: itemPrice, quantity: 1 },
        ];
      }

      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const updatedUsers = users.map((user: any) => {
        if (user.login === currentUser.login) {
          return { ...user, cart: updatedCart };
        }
        return user;
      });

      localStorage.setItem("users", JSON.stringify(updatedUsers));
      setCurrentUser((prevUser) =>
        prevUser ? { ...prevUser, cart: updatedCart } : null
      );
      setCart(updatedCart);
    }
  };

  return (
    <div className="bg-white h-auto">
      <div className="pt-[20px] pb-[20px] max-w-[1234px] mx-auto px-[5%]">
        <h1 className="font-[FontsDrops] max-custom:text-center text-[96px] custom:mt-[150px]">
          Menu
        </h1>
        <div className="flex flex-col items-start custom:flex-row mt-4">
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
          <div className="w-[75%] relative mx-auto grid grid-cols-1 sm:grid-cols-2 custom:grid-cols-3 gap-5">
            {sliderData.map((item, i) => (
              <div
                key={i}
                className="w-full bg-[#ffc6c6] rounded-[45px] border-[1px] border-[#F59696] max-w-[250px] mx-auto flex flex-col h-full"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full rounded-t-[45px] h-[175px]"
                />
                <div className="px-3 py-2 flex-grow">
                  <div className="flex flex-row justify-between text-[15px]">
                    <p className="font-medium">{item.name}</p>
                    <p className="font-light">от {item.price}р</p>
                  </div>
                  <p className="text-[11px] font-light w-3/4">
                    {item.description}
                  </p>
                </div>
                <div className="mb-4 flex flex-row justify-between px-2">
                  <button className="w-[48%] py-[10px] rounded-full bg-[red] text-white transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-[white]">
                    Купить
                  </button>
                  {cart.find((cartItem) => cartItem.name === item.name) ? (
                    <button className="w-[48%] py-[10px] rounded-full bg-green-500 text-white transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-[#C5364B]">
                      Добавлено
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        addToCart(
                          item.name,
                          parseFloat(item.price.replace(/\s/g, ""))
                        )
                      }
                      className="w-[48%] py-[10px] rounded-full bg-white text-black transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-[#C5364B]"
                    >
                      В корзину
                    </button>
                  )}
                </div>
                <div className="mb-4 flex flex-row justify-between px-2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
