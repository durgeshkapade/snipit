import { timeAgo } from "@/lib/utils";
import type { PasteData } from "@/types";
import { Link } from "react-router-dom";

const HistoryPage = () => {
  const stored = localStorage.getItem("items");
  const items: Array<PasteData> = stored ? JSON.parse(stored) : [];

  const aliveItems =
    items.filter((item) => new Date(item.expiresAt) > new Date()) ?? [];
  console.log(aliveItems);

  return (
    <div className="h-[90%] bg-gray-100 p-8 ">
      <div className="max-w-4xl w-full bg-white rounded-lg space-y-10">
        {aliveItems.map((item) => {
          return (
            <div className="p-6">
              <div className="flex justify-between items-center text-gray-500 text-sm">
                <Link className="text-blue-600 underline" to={"/" + item.id}>
                  Plain Text Snippet
                </Link>
                <span>Created {timeAgo(item.createdAt)}</span>
                <span>Expiry: {new Date(item.expiresAt).toLocaleString()}</span>
              </div>
              <hr className="my-4 border-gray-300" />
              <div className="text-gray-700 text-lg">
                <p className="whitespace-pre-wrap break-words">
                  {item.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HistoryPage;
