import { MenubarDemo } from "@/components/MenuBarTrigger";
import CategoriesSection from "@/page-components/MoviesPage/CategoriesSection";
import Hero from "@/page-components/MoviesPage/Hero";
import { createFileRoute } from "@tanstack/react-router";
import { FiBell } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="fixed w-full grid grid-cols-3 items-center p-7 top-0 left-0 z-20 ">
        <div className="justify-self-start">
          <img src="" alt="" />
          <h1>ciao</h1>
        </div>
        <MenubarDemo className="py-6 bg-primary-foreground justify-self-center " />
        <div className="flex items-center justify-self-end space-x-5 mr-10">
          <button>
            <IoIosSearch size={35} />
          </button>
          <button>
            <FiBell size={35} />
          </button>
        </div>
      </div>
      <Hero />
      <CategoriesSection />
    </>
  );
}
