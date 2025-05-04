"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  List,
  Grid,
  Info,
  Settings,
  ChevronRight,
  Upload,
  FolderPlus,
} from "lucide-react";

interface TopbarProps {
  currentFolder: string;
  onSearch: (query: string) => void;
  searchQuery: string;
  view: "grid" | "list";
  onViewChange: (view: "grid" | "list") => void;
}

export function Topbar({
  currentFolder,
  onSearch,
  searchQuery,
  view,
  onViewChange,
}: TopbarProps) {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="flex items-center text-lg font-semibold">
          {currentFolder}
        </div>

        <div className="ml-auto flex items-center space-x-2">
          <div className="relative w-64">
            <Search className="text-muted-foreground absolute top-2.5 left-2.5 h-4 w-4" />
            <Input
              type="search"
              placeholder="Search in Drive"
              className="bg-muted w-full rounded-full pl-8 md:w-[300px] lg:w-[400px]"
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>

          <Button variant="ghost" size="icon">
            <Info className="h-4 w-4" />
          </Button>

          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>

          <div className="flex items-center space-x-1">
            <Button
              variant={view === "list" ? "secondary" : "ghost"}
              size="icon"
              onClick={() => onViewChange("list")}
            >
              <List className="h-4 w-4" />
            </Button>
            <Button
              variant={view === "grid" ? "secondary" : "ghost"}
              size="icon"
              onClick={() => onViewChange("grid")}
            >
              <Grid className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex items-center border-t px-4 py-2">
        <div className="text-muted-foreground flex items-center text-sm">
          <span>My Drive</span>
          <ChevronRight className="mx-1 h-4 w-4" />
          <span>{currentFolder}</span>
        </div>

        <div className="ml-auto flex items-center space-x-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Upload className="h-4 w-4" />
            <span>Upload</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            <FolderPlus className="h-4 w-4" />
            <span>New Folder</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
