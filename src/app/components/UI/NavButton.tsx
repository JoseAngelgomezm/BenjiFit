import React from "react";
import Link from "next/link";

interface NavButtonProps extends React.LiHTMLAttributes<HTMLLIElement> {
  href: string;
  text: string;
  icon: string;
}

const NavButton: React.FC<NavButtonProps> = ({
  href,
  text,
  icon,
  ...liProps
}) => {
  return (
    <li {...liProps}>
      <Link
        href={href}
        className="flex space-x-4 items-center text-lg text-red-500 hover:text-red-700 shadow-lg hover:shadow-2xl transition-shadow"
      >
        <i className={`${icon} text-black`}></i>
        <span>{text}</span>
      </Link>
    </li>
  );
};

export default NavButton;
