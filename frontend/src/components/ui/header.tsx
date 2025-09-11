import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { ClipboardCopy } from "lucide-react";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  const id = useLocation().pathname;
  const [url, setUrl] = useState(window.location.href);
  const location = useLocation();
  useEffect(() => {
    setUrl(window.location.href);
  }, [location]);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
  };

  return (
    <header
      className={cn(
        "flex justify-between h-fit p-3 px-6 border shadow bg-white",
        className,
      )}
    >
      <h1 className="text-3xl font-bold tracking-tight bg-clip-text transform transition-transform duration-300 ease-in-out group-hover:scale-105">
        {id.length > 1 ? (
          <span className="flex items-center h-fit gap-2">
            <Link to={"/"}>{url}</Link>
            <ClipboardCopy
              onClick={handleCopy}
              className="hover:cursor-pointer active:translate-y-0.5"
            />
          </span>
        ) : (
          <>Snipit</>
        )}
      </h1>

      <div className="flex gap-2">
        <Link to={"/about"}>
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
