"use client";

import { FolderPlus, Upload } from "lucide-react";

import { Button } from "@/components/ui/button";
import { EmptyFolderIllustration } from "@/components/empty-folder-illustration";

interface EmptyStateProps {
  title?: string;
  description?: string;
  showActions?: boolean;
  onUpload?: () => void;
  onCreateFolder?: () => void;
}

export function EmptyState({
  title = "No files or folders",
  description = "You don't have any files or folders in this location yet.",
  showActions = true,
  onUpload,
  onCreateFolder,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-12 text-center">
      <div className="mx-auto mb-6 flex h-40 w-40 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
        <EmptyFolderIllustration />
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="mb-8 max-w-md text-gray-500 dark:text-gray-400">
        {description}
      </p>

      {showActions && (
        <div className="flex flex-wrap justify-center gap-4">
          <Button onClick={onUpload} className="gap-2">
            <Upload className="h-4 w-4" />
            Upload files
          </Button>
          <Button onClick={onCreateFolder} variant="outline" className="gap-2">
            <FolderPlus className="h-4 w-4" />
            Create folder
          </Button>
        </div>
      )}
    </div>
  );
}
