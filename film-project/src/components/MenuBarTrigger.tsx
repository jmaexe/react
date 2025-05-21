import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

export function MenubarDemo({ className }: { className?: string }) {
  return (
    <Menubar className={className}>
      <MenubarMenu>
        <MenubarTrigger className="">Home</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Movies & Shows </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Support</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Subscriptions</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}
