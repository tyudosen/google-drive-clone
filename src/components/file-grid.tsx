"use client";

import { useState } from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  FileText,
  ImageIcon,
  FileSpreadsheet,
  FileCode,
  FileIcon,
  Folder,
  MoreVertical,
  Download,
  Trash2,
  Share2,
  Star,
  Pencil,
} from "lucide-react";
import type { File } from "@/lib/types";
import { formatFileSize, formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface FileGridProps {
  files: File[];
  view: "grid" | "list";
}

export function FileGrid({ files, view }: FileGridProps) {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const getFileIcon = (type: string) => {
    switch (type) {
      case "folder":
        return <Folder className="h-12 w-12 text-blue-500" />;
      case "document":
        return <FileText className="h-12 w-12 text-blue-500" />;
      case "image":
        return <ImageIcon className="h-12 w-12 text-green-500" />;
      case "spreadsheet":
        return <FileSpreadsheet className="h-12 w-12 text-green-500" />;
      case "code":
        return <FileCode className="h-12 w-12 text-purple-500" />;
      default:
        return <FileIcon className="h-12 w-12 text-gray-500" />;
    }
  };

  const renderContextMenu = (file: File) => (
    <ContextMenu>
      <ContextMenuTrigger>
        {view === "grid" ? (
          <Card
            className={`hover:bg-muted cursor-pointer transition-colors ${selectedFile === file.id ? "ring-primary ring-2" : ""}`}
            onClick={() => setSelectedFile(file.id)}
          >
            <CardContent className="flex flex-col items-center justify-center p-4">
              {getFileIcon(file.type)}
            </CardContent>
            <CardFooter className="flex-col items-start p-2">
              <div className="flex w-full items-center justify-between">
                <span className="max-w-[80%] truncate text-sm font-medium">
                  {file.name}
                </span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Share2 className="mr-2 h-4 w-4" />
                      <span>Share</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Download className="mr-2 h-4 w-4" />
                      <span>Download</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Pencil className="mr-2 h-4 w-4" />
                      <span>Rename</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Star className="mr-2 h-4 w-4" />
                      <span>Star</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="mr-2 h-4 w-4" />
                      <span>Delete</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <span className="text-muted-foreground text-xs">
                {file.type !== "folder"
                  ? formatFileSize(file.size)
                  : `${file.itemCount} items`}{" "}
                • {formatDate(file.modifiedAt)}
              </span>
            </CardFooter>
          </Card>
        ) : (
          <div
            className={`hover:bg-muted cursor-pointer transition-colors ${selectedFile === file.id ? "bg-muted" : ""}`}
            onClick={() => setSelectedFile(file.id)}
          >
            {file.name}
          </div>
        )}
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          <Share2 className="mr-2 h-4 w-4" />
          <span>Share</span>
        </ContextMenuItem>
        <ContextMenuItem>
          <Download className="mr-2 h-4 w-4" />
          <span>Download</span>
        </ContextMenuItem>
        <ContextMenuItem>
          <Pencil className="mr-2 h-4 w-4" />
          <span>Rename</span>
        </ContextMenuItem>
        <ContextMenuItem>
          <Star className="mr-2 h-4 w-4" />
          <span>Star</span>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem className="text-destructive">
          <Trash2 className="mr-2 h-4 w-4" />
          <span>Delete</span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );

  if (view === "grid") {
    return (
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {files.map((file) => (
          <div key={file.id}>{renderContextMenu(file)}</div>
        ))}
      </div>
    );
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[400px]">Name</TableHead>
            <TableHead>Owner</TableHead>
            <TableHead>Last Modified</TableHead>
            <TableHead>File Size</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {files.map((file) => (
            <TableRow
              key={file.id}
              className={selectedFile === file.id ? "bg-muted" : ""}
              onClick={() => setSelectedFile(file.id)}
            >
              <TableCell className="font-medium">
                <div className="flex items-center">
                  <div className="mr-2">
                    {file.type === "folder" ? (
                      <Folder className="h-5 w-5 text-blue-500" />
                    ) : file.type === "document" ? (
                      <FileText className="h-5 w-5 text-blue-500" />
                    ) : file.type === "image" ? (
                      <ImageIcon className="h-5 w-5 text-green-500" />
                    ) : file.type === "spreadsheet" ? (
                      <FileSpreadsheet className="h-5 w-5 text-green-500" />
                    ) : file.type === "code" ? (
                      <FileCode className="h-5 w-5 text-purple-500" />
                    ) : (
                      <FileIcon className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                  {file.name}
                </div>
              </TableCell>
              <TableCell>{file.owner}</TableCell>
              <TableCell>{formatDate(file.modifiedAt)}</TableCell>
              <TableCell>
                {file.type !== "folder"
                  ? formatFileSize(file.size)
                  : `${file.itemCount} items`}
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Share2 className="mr-2 h-4 w-4" />
                      <span>Share</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Download className="mr-2 h-4 w-4" />
                      <span>Download</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Pencil className="mr-2 h-4 w-4" />
                      <span>Rename</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Star className="mr-2 h-4 w-4" />
                      <span>Star</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="mr-2 h-4 w-4" />
                      <span>Delete</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
