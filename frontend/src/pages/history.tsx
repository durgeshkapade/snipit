import { timeAgo } from "@/lib/utils";
import type { PasteData } from "@/types";
import { useEffect } from "react";

const HistoryPage = () => {
  const stored = localStorage.getItem("items");
  const items: Array<PasteData> = JSON.parse(stored!);
  useEffect(() => {
    items.map((item) => {
      console.log(item);
    });
  }, []);

  return (
    <div className="h-fit">
      <div className="h-[90vh]">
        {stored && (
          <div>
            {items.map((item) => {
              return (
                <div id={item.id}>
                  {item.content} {timeAgo(item.createdAt)}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryPage;
