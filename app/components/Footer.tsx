import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <nav className="w-[70%] mb-20 mt-28 flex flex-row justify-between items-center font-dm">
      <div className="flex flex-row justify-center items-center gap-2">
        <Image
          src="/icons/logo-dark.svg"
          alt="Sell"
          width={100}
          height={100}
          className="size-7 text-sell-dark rotate-180"
        />
        <h1 className="text-xl font-[500]">Sell</h1>
      </div>
      <ul className="flex flex-row justify-center items-center gap-5 font-[500] text-sm">
        {footerLinks.map((link, index) => (
          <Link key={index} href={link.href} className="relative group">
            <li>{link.title}</li>
            <span
              className="absolute bottom-0 left-0 h-[2px] w-0 bg-sell-dark
                      transition-all delay-0 duration-200 group-hover:w-full"
            />
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Footer;
