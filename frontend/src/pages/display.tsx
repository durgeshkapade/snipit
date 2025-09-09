import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/ui/header";
import { Textarea } from "@/components/ui/textarea";
import { useApiHelpers } from "@/lib/api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Error from "./error";
import { toast } from "sonner";

const DisplayPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const apiHelpers = useApiHelpers();

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [content, setContent] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadData() {
      const data = await apiHelpers.getPaste(id!);
      if (data) setContent(data.content);
      setLoading(false);
    }
    loadData();
  }, []);



  const handleDelete = async () => {
      toast("Are you sure you want to delete this paste?", {
          position: "top-center",
          action: {
            label: "Delete",
            onClick: async () => {
              const data = await apiHelpers.deletePaste(id!);
              if (data) {
                toast.success("Paste deleted", {
                  style: { backgroundColor: "#22c55e", color: "#fff" },
                  duration: 2000,
                });
                navigate("/");
              } else {
                toast.error("Failed to delete paste", {
                  style: { backgroundColor: "#ef4444", color: "#fff" },
                  duration: 2000,
                });
              } 
            },
          },
          cancel: {
            label: "Cancel",
            onClick: () => {
              toast.info("Action cancelled")
            },
          },
      })
  };



  return (
    <div className="h-full">
      <Header className="h-[10%]" />

      {loading ? (
        <div className="flex items-center justify-center h-[90%]">
          Loading... ⏳
        </div>
      ) : content ? (
        <>
          <div className="flex justify-between flex-col">
            <div className="flex gap-3 px-2 py-3 ">
              <Button
                variant={"link"}
                disabled={isEdit}
                className="underline hover:text-blue-500"
                onClick={() => setIsEdit(true)}
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
          <div className="w-screen h-[75%] px-6 py-2 overflow-x-hidden">
            {isEdit ? (
              <Textarea className="h-full" />
            ) : (
              <Card className="h-full overflow-y-scroll">
                <CardContent className="h-fit">{content}</CardContent>
              </Card>
            )}
          </div>
          {isEdit && (
            <div className="flex w-full h-fit justify-end px-6">
              <Button onClick={() => setIsEdit(false)}>Save Changes</Button>
            </div>
          )}
        </>
      ) : (
        <Error />
      )}
    </div>
  );
};

export default DisplayPage;
