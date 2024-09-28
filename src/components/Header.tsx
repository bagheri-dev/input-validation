import { useState } from "react";
import { FaBars } from "react-icons/fa";


export default function Header() {

    const [isOpen , setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }


  return (
    <div className="w-full mb-10">
      <header className="container mx-auto flex justify-between py-7">
        <div className="w-full">
          <h1 className="text-3xl font-bold text-color-primery">LOGO</h1>
        </div>
        <div className="w-full xl:hidden">
          <nav className="xl:inline-block">
            <ul className={`${isOpen ? "top-[7%] absolute right-0 space-y-5 bg-white p-14" : "flex flex-col xl:flex-row -top-80 right-0 bg-white absolute z-10 gap-5 text-color-primery font-bold "}`}>
              <li>
                <a href="#">Compony</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Fin Tech Solutions</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li className="border-b-4 border-b-green-500">
                <a href="#">Contact us</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="w-full hidden xl:block">
          <nav className="w-full">
            <ul className="flex gap-5">
              <li>
                <a href="#">Compony</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Fin Tech Solutions</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li className="border-b-4 border-b-green-500">
                <a href="#">Contact us</a>
              </li>
            </ul>
          </nav>
        </div>
      <div className="text-3xl xl:hidden" onClick={toggleMenu}>
      <FaBars />
      </div>
      </header>
    </div>
  );
}
