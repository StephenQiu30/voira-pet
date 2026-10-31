"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle({
  copy,
}: {
  copy: { label: string; light: string; dark: string; system: string };
}) {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative size-11"
          aria-label={copy.label}
        >
          <Sun className="size-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute size-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-muted shadow-none ring-0">
        <DropdownMenuItem className="min-h-11" onClick={() => setTheme("light")}>
          {copy.light}
        </DropdownMenuItem>
        <DropdownMenuItem className="min-h-11" onClick={() => setTheme("dark")}>
          {copy.dark}
        </DropdownMenuItem>
        <DropdownMenuItem className="min-h-11" onClick={() => setTheme("system")}>
          {copy.system}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
