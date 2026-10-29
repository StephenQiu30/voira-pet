import { Menu } from "lucide-react";
import { pets } from "@/app/pets";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function GitHubMark() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.65 7.65 0 0 1 8 3.87c.68.003 1.36.092 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 bg-background">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-2 px-4 py-2 md:px-8">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="size-11 md:hidden"
              aria-label="打开导航"
            >
              <Menu className="size-4" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="border-0 shadow-none data-[side=left]:border-r-0"
          >
            <SheetHeader>
              <SheetTitle>目录</SheetTitle>
            </SheetHeader>
            <nav aria-label="目录" className="flex flex-col gap-1 px-4">
              <SheetClose asChild>
                <a
                  href="https://github.com/StephenQiu30/voira-pet"
                  className={buttonVariants({
                    variant: "ghost",
                    className: "min-h-11 justify-start",
                  })}
                >
                  GitHub 仓库
                </a>
              </SheetClose>
              <SheetClose asChild>
                <a
                  href="#install"
                  className={buttonVariants({
                    variant: "ghost",
                    className: "min-h-11 justify-start",
                  })}
                >
                  安装
                </a>
              </SheetClose>
              {pets.map((pet) => (
                <SheetClose asChild key={pet.id}>
                  <a
                    href={`#${pet.id}`}
                    className={buttonVariants({
                      variant: "ghost",
                      className: "min-h-11 justify-start",
                    })}
                  >
                    {pet.navLabel}
                  </a>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <Button variant="ghost" className="min-h-11" asChild>
          <a href="#top">Voira Pet</a>
        </Button>
        <NavigationMenu
          viewport={false}
          aria-label="目录"
          className="hidden max-w-none flex-1 md:flex"
        >
          <NavigationMenuList className="justify-center">
            <NavigationMenuItem>
              <NavigationMenuLink href="#install" className="min-h-11 px-3">
                安装
              </NavigationMenuLink>
            </NavigationMenuItem>
            {pets.map((pet) => (
              <NavigationMenuItem key={pet.id}>
                <NavigationMenuLink
                  href={`#${pet.id}`}
                  className="min-h-11 px-3"
                >
                  {pet.navLabel}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex items-center md:ml-0">
          <Button variant="ghost" size="icon" className="size-11" asChild>
            <a
              href="https://github.com/StephenQiu30/voira-pet"
              aria-label="GitHub 仓库"
            >
              <GitHubMark />
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
