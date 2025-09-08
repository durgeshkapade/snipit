import { Link } from "react-router-dom";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header
      className={cn(
        "flex justify-between h-fit p-3 px-6 border shadow",
        className,
      )}
    >
      <Link to={"/"}>
        <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r             from-purple-400             via-pink-500             to-red-500 transform transition-transform duration-300 ease-in-out group-hover:scale-105">
          Snipit
        </h1>
      </Link>

      <div className="flex gap-2">
        <Link to={"/123"}>
          <Button variant={"ghost"}>About</Button>
        </Link>
        <Link to={"/history"}>
          <Button variant={"ghost"}>History</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
