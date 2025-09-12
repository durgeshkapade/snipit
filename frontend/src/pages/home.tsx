import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useApiHelpers } from "@/lib/api";
import { saveToLocal } from "@/lib/utils";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const userInputRef = useRef<HTMLTextAreaElement>(null);
  const [expiresTime, setExpiresTime] = useState("");
  const navigate = useNavigate();
  const apiHelpers = useApiHelpers();
  const { t } = useTranslation();

  const handleSubmit = async () => {
    const data = await apiHelpers.submitPaste(userInputRef, expiresTime);
    toast.success("Snippet pasted successfully!", {
      position: "bottom-right",
    });
    navigate("/" + data.id);
    saveToLocal(data);
  };

  return (
    <div className="h-fit max-h-screen">
      <div className=" h-fit flex flex-row  border-slate-200 justify-end items-center my-4 mx-5">
        <div className="">
          <Select onValueChange={setExpiresTime}>
            <SelectTrigger className="w-[180px]">
              <SelectValue
                className=""
                placeholder={t("home.select_expire_time")}
              />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                <SelectItem value="1h">
                  {t("home.expire_options.expire_in_1_hour")}
                </SelectItem>
                <SelectItem value="1d">
                  {t("home.expire_options.expire_in_1_day")}
                </SelectItem>
                <SelectItem value="1w">
                  {t("home.expire_options.expire_in_1_week")}
                </SelectItem>
                <SelectItem value="1m">
                  {t("home.expire_options.expire_in_1_month")}
                </SelectItem>
                <SelectItem value="1y">
                  {t("home.expire_options.expire_in_1_year")}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full h-fit flex justify-end px-5">
          <Button onClick={handleSubmit}>{t("home.paste_button")}</Button>
        </div>
      </div>

      <div className="m-5 h-[70vh]">
        <Textarea
          ref={userInputRef}
          placeholder={t("home.enter_snippet_placeholder")}
          className="h-full w-full mx-auto"
        />
      </div>
    </div>
  );
};

export default HomePage;
