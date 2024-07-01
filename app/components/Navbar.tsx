import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav
      className="bg-sell-dark rounded-xl px-4 py-3 w-[70%] mt-10
    flex flex-row justify-between items-center text-white font-dm"
    >
      <div className="flex flex-row justify-center items-center gap-2 cursor-pointer">
        <Image
          src="/icons/logo.svg"
          alt="Sell"
          width={100}
          height={100}
          className="size-7"
        />
        <h1 className="text-xl font-[500]">Sell</h1>
      </div>
      <div className="flex flex-row justify-center items-center gap-3 cursor-pointer">
        <BsTwitterX className="text-lg" />
        <h1>Follow us on Twitter</h1>
      </div>
    </nav>
  );
};

export default Navbar;
