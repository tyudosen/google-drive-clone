"use client";

import { useState } from "react";
import { FileGrid } from "@/components/file-grid";
import { Sidebar } from "@/components/sidebar";
import { Topbar } from "@/components/topbar";
import { mockFolders, mockFiles, mockRecentFiles } from "@/lib/mock-data";

export function Drive() {
  const [currentFolder, setCurrentFolder] = useState("My Drive");
  const [searchQuery, setSearchQuery] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");

  // Filter files based on search query
  const filteredFiles = mockFiles.filter((file) =>
    file.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        folders={mockFolders}
        recentFiles={mockRecentFiles}
        onFolderSelect={(folder) => setCurrentFolder(folder)}
        currentFolder={currentFolder}
      />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar
          currentFolder={currentFolder}
          onSearch={setSearchQuery}
          searchQuery={searchQuery}
          view={view}
          onViewChange={setView}
        />
        <div className="flex-1 overflow-auto p-6">
          <FileGrid files={filteredFiles} view={view} />
        </div>
      </div>
    </div>
  );
}
