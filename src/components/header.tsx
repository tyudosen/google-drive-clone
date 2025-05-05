import { Search } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileSidebarTrigger } from "@/components/sidebar";

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-4 md:px-6 dark:border-gray-800 dark:bg-gray-950">
      <div className="flex items-center gap-4">
        <MobileSidebarTrigger />
        <div className="flex items-center gap-2">
          <Image
            src="/placeholder.svg?height=32&width=32"
            alt="Drive Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <h1 className="text-xl font-semibold">Drive</h1>
        </div>
        <div className="relative hidden md:block md:w-96">
          <Search className="absolute top-2.5 left-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search in Drive"
            className="w-full bg-gray-100 pl-9 focus-visible:bg-white dark:bg-gray-800 dark:focus-visible:bg-gray-900"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Button variant="ghost" size="icon" className="rounded-full">
          <Image
            src="/placeholder.svg?height=32&width=32"
            alt="User Avatar"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full"
          />
          <span className="sr-only">User Account</span>
        </Button>
      </div>
    </header>
  );
}
