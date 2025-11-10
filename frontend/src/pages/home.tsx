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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ChevronDownIcon, Sparkles, Hash } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { IdType } from "@/types";

const HomePage = () => {
  const userInputRef = useRef<HTMLTextAreaElement>(null);
  const [expiresTime, setExpiresTime] = useState("");
  const [textValue, setTextValue] = useState("");

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [customId, setCustomId] = useState("");
  const navigate = useNavigate();
  const apiHelpers = useApiHelpers();
  const { t } = useTranslation();

  const handleSubmit = async (selectedIdType: IdType, providedId?: string) => {
    const data = await apiHelpers.submitPaste(
      userInputRef,
      expiresTime,
      selectedIdType,
      providedId,
    );
    toast.success(`Snippet pasted with ${selectedIdType} ID!`, {
      position: "bottom-right",
    });
    navigate("/" + data.id);
    saveToLocal(data);
  };

  const handleDynamicIdClick = () => {
    setIsDialogOpen(true);
  };

  const handleDialogSubmit = () => {
    if (customId.trim()) {
      handleSubmit("dynamic", customId.trim());
      setIsDialogOpen(false);
      setCustomId("");
    }
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                disabled={!textValue.length}
                className="flex items-center gap-2"
              >
                {t("home.paste_button")}
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem
                onClick={handleDynamicIdClick}
                className="cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <Hash className="h-4 w-4 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <span className="font-medium">
                      {t("home.paste_dynamic_id")}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Choose your own ID
                    </span>
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleSubmit("system")}
                className="cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <Sparkles className="h-4 w-4 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <span className="font-medium">
                      {t("home.paste_system_id")}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Auto-generate ID
                    </span>
                  </div>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter Custom ID</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <Input
              placeholder="Enter your custom ID..."
              value={customId}
              onChange={(e) => setCustomId(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleDialogSubmit()}
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleDialogSubmit} disabled={!customId.trim()}>
              Create Snippet
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="m-5 h-[70vh]">
        <Textarea
          ref={userInputRef}
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          placeholder={t("home.enter_snippet_placeholder")}
          className="h-full w-full mx-auto"
        />
      </div>
    </div>
  );
};

export default HomePage;
