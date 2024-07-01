import { IconType } from "react-icons";
import { FaEarthAfrica, FaFire, FaPiggyBank, FaStar } from "react-icons/fa6";

// footer
export const footerLinks: { title: string; href: string }[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Agencies",
    href: "/agencies",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "My Shortlist",
    href: "/shortlist",
  },
];

// hero
export const avatars: { src?: string; alt: string; color: string }[] = [
  {
    src: "/images/avatar-1.png",
    alt: "avatar-1",
    color: "F9CF7F",
  },
  {
    src: "/images/avatar-2.png",
    alt: "avatar-2",
    color: "4DA8CC",
  },
  {
    src: "/images/avatar-3.png",
    alt: "avatar-3",
    color: "F09B83",
  },
  {
    src: "/images/avatar-4.png",
    alt: "avatar-4",
    color: "E6BF9F",
  },
  {
    alt: "avatar-5",
    color: "E7EAFF",
  },
];

// Features
export const features: {
  icon: IconType;
  iconColor: string;
  title: string;
  description: string;
}[] = [
  {
    icon: FaPiggyBank,
    iconColor: "#F9CF7F",
    title: "Save time & Reduce cost",
    description:
      "Building your own online store, shopping cart, checkout, and licensing is time-consuming ",
  },
  {
    icon: FaStar,
    iconColor: "#4DA8CC",
    title: "Packed with Features",
    description:
      "We simplify all that by combining all of the features and solutions you need to sell.",
  },
  {
    icon: FaFire,
    iconColor: "#F09B83",
    title: "Boost Your Best Sellers",
    description:
      "Designed from the ground up to be easy to use and quick to set up for sellers",
  },
  {
    icon: FaEarthAfrica,
    iconColor: "#E6BF9F",
    title: "Go Global",
    description:
      "Expand into new global markets with ease when you automatically display popular pricing",
  },
];
