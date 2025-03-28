import { Montserrat } from "next/font/google";
import "./globals.css";
import Topbar from "@/frontend/components/topbar/topbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "800"],
});

export const metadata = {
  title: "To-Do-List",
  description:
    "Fullstack to-do-list using next, tailwind, express, mongoose, MongoDB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-background`}>
        <div className="bg-neutral-900 max-w-[160rem] min-h-screen m-auto">
          <div className="">
            <Topbar />
          </div>
          <div className="">{children}</div>
        </div>
      </body>
    </html>
  );
}
