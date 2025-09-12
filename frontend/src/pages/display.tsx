import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useApiHelpers } from "@/lib/api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Error from "@/components/error";
import { toast } from "sonner";
import Loader from "@/components/loader";
import type { PasteData } from "@/types";
import { getTimeRemaining } from "@/lib/utils";

const DisplayPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const apiHelpers = useApiHelpers();

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [paste, setPaste] = useState<PasteData>();
  const [updatedContent, setUpdatedContent] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadData() {
      const data = await apiHelpers.getPaste(id!);
      if (data) {
        setPaste(data);
        setUpdatedContent(data.content);
      } else {
        setPaste(undefined);
      }
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
              position: "bottom-right",
            });
            navigate("/");
          } else {
            toast.error("Failed to delete paste", {
              position: "bottom-right",
            });
          }
        },
      },
      cancel: {
        label: "Cancel",
        onClick: () => {
          toast.info("Action cancelled", {
            position: "bottom-right",
          });
        },
      },
    });
  };

  const handleEditSave = async () => {
    if (updatedContent === paste?.content) {
      setIsEdit(false);
      return;
    }

    const data = await apiHelpers.updatePaste(id!, updatedContent!);
    if (data) {
      toast.success("Paste updated Successfully ✔️");
      setPaste(data);
    } else {
      toast.error("Failed to update paste", {
        style: { backgroundColor: "#ef4444", color: "#fff" },
        duration: 2000,
      });
    }

    setIsEdit(false);
  };

  return (
    <div className="h-[90%]">
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <Loader />
        </div>
      ) : paste?.content ? (
        <>
          <div className="flex justify-between items-center w-fit gap-4">
            <div className="flex  px-2 py-3 ">
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
            <div>Expires in: {getTimeRemaining(paste.expiresAt)}</div>
          </div>
          <div className="w-screen h-[75vh] px-6 py-2 overflow-x-hidden">
            {isEdit ? (
              <Textarea
                className="h-full"
                value={updatedContent}
                onChange={(e) => setUpdatedContent(e.target.value)}
              />
            ) : (
              <Card className="h-full overflow-y-scroll">
                <CardContent className="h-fit">{paste.content}</CardContent>
              </Card>
            )}
          </div>
          {isEdit && (
            <div className="flex w-full h-fit justify-end px-6">
              <Button onClick={handleEditSave}>Save Changes</Button>
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
