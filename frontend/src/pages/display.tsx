import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/ui/header";
import { Textarea } from "@/components/ui/textarea";
import { useApiHelpers } from "@/lib/api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DisplayPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const apiHelpers = useApiHelpers();

  const [isEdit, setEdit] = useState<boolean>(false);
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    apiHelpers.getPaste(id!).then((data) => {
      setContent(data.content);
    });
  }, []);

  const handleDelete = async () => {
    const data = await apiHelpers.deletePaste(id!);
    if (data) navigate("/");
  };
  return (
    <div className="h-full">
      <Header />
      <div className="flex justify-between flex-col">
        <div className="flex gap-3 px-2 py-3 ">
          <Button
            variant={"link"}
            disabled={isEdit}
            className="underline hover:text-blue-500"
            onClick={() => setEdit(true)}
          >
            Edit
          </Button>

          <Button
            variant={"link"}
            className="underline hover:text-blue-500"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </div>
      </div>
      <div className=" w-screen h-[75%] px-6 py-2 overflow-x-hidden ">
        {isEdit ? (
          <Textarea className="h-full" />
        ) : (
          <Card className="h-full overflow-y-scroll ">
            <CardContent className="h-fit">{content}</CardContent>
          </Card>
        )}
      </div>
      {isEdit && (
        <div
          className="flex w-full h-fit justify-end px-6"
          onClick={() => setEdit(false)}
        >
          <Button>Save Changes</Button>
        </div>
      )}
    </div>
  );
};

export default DisplayPage;
