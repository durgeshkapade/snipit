import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import { Textarea } from "@/components/ui/textarea";
import { useApiHelpers } from "@/lib/api";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const HomePage = () => {
  const userInputRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();
  const apiHelpers = useApiHelpers();
  const handleSubmit = async () => {
    const id = await apiHelpers.submitPaste(userInputRef);
    toast.success("Snippet pasted successfully!", {
      position: "bottom-right",
    });

    navigate("/" + id);
  };

  return (
    <div className="h-full ">
      <Header />
      <div className="m-5 h-[75%]">
        <Textarea
          ref={userInputRef}
          placeholder="Enter your snippet here..."
          className="h-full w-full mx-auto"
        />
      </div>
      <div className="w-full h-fit flex justify-end px-5">
        <Button onClick={handleSubmit}>Paste</Button>
      </div>
    </div>
  );
};

export default HomePage;
