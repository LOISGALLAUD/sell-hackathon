import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <nav className="w-[70%] mb-10 flex flex-row justify-between items-center">
      <div className="flex flex-row justify-center items-center gap-2">
        <Image
          src="/logo-dark.svg"
          alt="Sell"
          width={100}
          height={100}
          className="size-7 text-sell-dark rotate-180"
        />
        <h1 className="text-xl font-[500]">Sell</h1>
      </div>
      <ul className="flex flex-row justify-center items-center gap-5 font-[500] text-sm">
        {footerLinks.map((link, index) => (
          <Link key={index} href={link.href}>
            <li>{link.title}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Footer;
