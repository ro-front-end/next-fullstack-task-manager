import Image from "next/image";
import "./globals.css";
import TasksPage from "./tasks-page/page";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full m-auto h-[86vh] flex flex-col items-center justify-center ">
      <h1 className="text-3xl uppercase font-semibold m-4">task manager</h1>
      <Link href="tasks-page">
        <button className="cursor-pointer hover:-translate-y-2 transition-all duration-300 ease-in-out m-4 text-lg font-semibold bg-gradient-to-r from-orange-500 to-amber-500 py-4 px-6 rounded-full">
          Go to Task Manager
        </button>
      </Link>
    </div>
  );
}
