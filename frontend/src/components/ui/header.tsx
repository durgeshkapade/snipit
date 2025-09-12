import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { ClipboardCopy } from "lucide-react";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  const path = useLocation().pathname;
  const id = path.includes("history") || path.includes("about") ? null : path;
  const [url, setUrl] = useState(window.location.href);
  const location = useLocation();
  const [showCopyTooltip, setShowCopyTooltip] = useState(false);
  useEffect(() => {
    setUrl(window.location.href);
  }, [location]);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setShowCopyTooltip(true);
    setTimeout(() => {
      setShowCopyTooltip(false);
    }, 2000);
  };

  return (
    <header
      className={cn(
        "flex justify-between h-fit p-4 px-6 border shadow bg-white",
        className,
      )}
    >
      <div className="flex items-center h-fit gap-6 w-fit">
        <Link
          to={"/"}
          className="text-3xl font-bold tracking-tight bg-clip-text transform transition-transform duration-300 ease-in-out group-hover:scale-105"
        >
          Snipit
        </Link>
        {id && id.length > 1 && (
          <span className="flex items-center h-fit gap-2">
            <p>{url}</p>
            <ClipboardCopy
              onClick={handleCopy}
              className="hover:cursor-pointer active:translate-y-0.5"
            />
            {showCopyTooltip && (
              <span className="font-normal text-lg">Copied!</span>
            )}
          </span>
        )}
      </div>
      <div className="flex gap-2">
        <Link to={"/about"}>
          <Button variant={"ghost"}>About</Button>
        </Link>
        <Link to={"/history"}>
          <Button variant={"ghost"}>History</Button>
        </Link>
        {path.length > 1 && (
          <Link to={"/"}>
            <Button variant={"outline"}>New Snippet</Button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
