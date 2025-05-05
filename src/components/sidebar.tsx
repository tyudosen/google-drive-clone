import {
  Clock,
  Computer,
  FileText,
  HardDrive,
  ImageIcon,
  Plus,
  Share2,
  Star,
  Trash2,
  Users,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Sidebar() {
  return (
    <div className="hidden w-64 flex-col border-r bg-white p-4 md:flex dark:border-gray-800 dark:bg-gray-950">
      <Button className="mb-6 justify-start gap-2 rounded-full px-3">
        <Plus className="h-4 w-4" />
        <span>New</span>
      </Button>
      <nav className="grid gap-1">
        <Link
          href="#"
          className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-500 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-white"
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
    </div>
  );
}
