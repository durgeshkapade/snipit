import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CopyButton } from "@/components/ui/shadcn-io/copy-button";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  const path = useLocation().pathname;
  const id = path.includes("history") || path.includes("about") ? null : path;
  const [url, setUrl] = useState(window.location.href);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(
    localStorage.getItem("lang") || "en",
  );

  useEffect(() => {
    setUrl(window.location.href);
  }, [location]);

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem("lang", language);
  }, [language, i18n]);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
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
            <CopyButton
              onCopy={handleCopy}
              content="Medium size"
              size="default"
              variant="outline"
            />
          </span>
        )}
      </div>
      <div className="flex gap-2">
        <Link to={"/about"}>
          <Button variant={"ghost"}>{t("header.about")}</Button>
        </Link>
        <Link to={"/history"}>
          <Button variant={"ghost"}>{t("header.history")}</Button>
        </Link>
        <Select onValueChange={setLanguage}>
          <SelectTrigger className="w-[180px]">
            <SelectValue className="" placeholder="Select Language" />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              <SelectItem defaultChecked value="en">
                English
              </SelectItem>
              <SelectItem value="mr">Marathi</SelectItem>
              <SelectItem value="hi">Hindi</SelectItem>
              <SelectItem value="ja">Japanese</SelectItem>
              <SelectItem value="de">German</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {path.length > 1 && (
          <Link to={"/"}>
            <Button variant={"outline"}>{t("header.newnippet")}</Button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
