"use client";

import { useState } from "react";
import {
  Clock,
  Computer,
  FileText,
  HardDrive,
  ImageIcon,
  Menu,
  Plus,
  Share2,
  Star,
  Trash2,
  Users,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

// Separate the mobile trigger to avoid state management issues
export function MobileSidebarTrigger() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9 md:hidden"
        onClick={() => setOpen(true)}
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle sidebar</span>
      </Button>
      <SheetContent side="left" className="w-72 p-0 pt-10 sm:max-w-xs">
        <SheetHeader>
          <SheetTitle hideVisually>Sidebar</SheetTitle>
        </SheetHeader>
        <div className="h-full overflow-auto bg-white p-4 dark:bg-gray-950">
          <SidebarContent />
        </div>
      </SheetContent>
    </Sheet>
  );
}

// Separate the sidebar content to reuse in both mobile and desktop
function SidebarContent() {
  return (
    <>
      <Button className="mb-6 justify-start gap-2 rounded-full px-3">
        <Plus className="h-4 w-4" />
        <span>New</span>
      </Button>
      <nav className="grid gap-1">
        <Link
          href="#"
          className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-white"
        >
          <HardDrive className="h-4 w-4" />
          <span>My Drive</span>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <Computer className="h-4 w-4" />
          <span>Computers</span>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <Share2 className="h-4 w-4" />
          <span>Shared with me</span>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <Clock className="h-4 w-4" />
          <span>Recent</span>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <Star className="h-4 w-4" />
          <span>Starred</span>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <Trash2 className="h-4 w-4" />
          <span>Trash</span>
        </Link>
      </nav>
      <div className="mt-6 space-y-2">
        <h3 className="px-3 text-xs font-medium text-gray-500 dark:text-gray-400">
          Storage
        </h3>
        <div className="px-3">
          <div className="mb-1 flex items-center justify-between text-xs">
            <span>5.4 GB of 15 GB used</span>
            <span>36%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
            <div
              className="h-2 rounded-full bg-blue-500"
              style={{ width: "36%" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="mt-6 space-y-2">
        <h3 className="px-3 text-xs font-medium text-gray-500 dark:text-gray-400">
          Labels
        </h3>
        <nav className="grid gap-1">
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <FileText className="h-4 w-4" />
            <span>Documents</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <ImageIcon className="h-4 w-4" />
            <span>Images</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <Users className="h-4 w-4" />
            <span>Shared</span>
          </Link>
        </nav>
      </div>
    </>
  );
}

// Main sidebar component for desktop
export function Sidebar() {
  return (
    <div className="hidden w-64 flex-col border-r bg-white p-4 md:flex dark:border-gray-800 dark:bg-gray-950">
      <SidebarContent />
    </div>
  );
}
