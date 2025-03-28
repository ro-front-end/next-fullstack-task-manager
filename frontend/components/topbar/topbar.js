import Link from "next/link";
import BurgerMenu from "./burgerMenu";

function Topbar() {
  return (
    <nav className="flex items-center justify-between bg-neutral-950 py-4 px-4 md:px-8">
      <Link
        href="/"
        className="font-semibold text-2xl lg:text-3xl bg-gradient-to-r from-orange-500 to-amber-300 bg-clip-text text-transparent uppercase"
      >
        Next Task Manager
      </Link>
      <BurgerMenu />
    </nav>
  );
}

export default Topbar;
