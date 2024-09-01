import { useState } from "react";
import { Link } from "react-router-dom";
interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: number;
}

export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
          <Avatar name={authorName} />
          <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
            {authorName}
          </div>
          <div className="flex flex-col pl-2 justify-center">
            <Circle />
          </div>
          <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
            {publishedDate}
          </div>
        </div>
        <div className="text-xl font-semibold pt-2">{title}</div>
        <div className="text-md font-thin">{content.slice(0, 100) + "..."}</div>
        <div className="text-slate-500 text-sm font-thin pt-4">
          {`${Math.ceil(content.length / 100)} minute(s) read`}
        </div>
      </div>
    </Link>
  );
};

export function Circle() {
  return <div className="h-1 w-1 rounded-full bg-slate-500"></div>;
}

export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size?: "small" | "big";
}) {
  const [showOptions, setShowOptions] = useState(false);
  const handleShowOption = () => {
    setShowOptions((showOptions) => !showOptions);
  };
  return (
    <>
      <button
        id="dropdownAvatarNameButton"
        data-dropdown-toggle="dropdownAvatarName"
        className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${
          size === "small" ? "w-6 h-6" : "w-10 h-10"
        }`}
        onClick={handleShowOption}
      >
        <span
          className={`${
            size === "small" ? "text-xs" : "text-md"
          } font-extralight text-gray-600 dark:text-gray-300`}
        >
          {name[0]}
        </span>
      </button>
      <div
        id="dropdownAvatarName"
        className={`absolute z-10 ${
          showOptions ? "" : "hidden"
        }  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
      >
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div className="font-medium ">Pro User</div>
          <div className="truncate">name@flowbite.com</div>
        </div>

        <div className="py-2">
          <button
            // onClick={() => {
            //   localStorage.removeItem("token");
            // }}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Sign out
          </button>
        </div>
      </div>
    </>
  );
}
