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

const HomePage = () => {
  const userInputRef = useRef<HTMLTextAreaElement>(null);
  const [expiresTime, setExpiresTime] = useState("");
  const navigate = useNavigate();
  const apiHelpers = useApiHelpers();

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
              <SelectValue className="" placeholder="Select Expire Time" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                <SelectItem value="1t">One Time Snippet</SelectItem>
                <SelectItem value="1h">Expire In 1 Hour</SelectItem>
                <SelectItem value="1d">Expire In 1 Day</SelectItem>
                <SelectItem value="1w">Expire In 1 Week</SelectItem>
                <SelectItem value="1m">Expire In 1 Month</SelectItem>
                <SelectItem value="1y">Expire In 1 Year</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full h-fit flex justify-end px-5">
          <Button onClick={handleSubmit}>Paste</Button>
        </div>
      </div>

      <div className="m-5 h-[70vh]">
        <Textarea
          ref={userInputRef}
          placeholder="Enter your snippet here..."
          className="h-full w-full mx-auto"
        />
      </div>
    </div>
  );
};

export default HomePage;
