"use client"

import { useState } from "react"
import {
  ChevronRight,
  Download,
  FileText,
  Folder,
  Grid,
  ImageIcon,
  Info,
  List,
  MoreVertical,
  Plus,
  Share2,
  Star,
  Upload,
} from "lucide-react"
import Image from "next/image"

import { Button } from "~/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { mockFiles, mockFolders } from "~/lib/mock-data"

export function FileExplorer() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold">My Drive</h2>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Info className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Upload className="h-4 w-4" />
            <span>Upload</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Plus className="h-4 w-4" />
            <span>New Folder</span>
          </Button>
          <div className="flex rounded-md border">
            <Button
              variant="ghost"
              size="icon"
              className={`h-8 w-8 rounded-none rounded-l-md ${viewMode === "list" ? "bg-gray-100" : ""}`}
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`h-8 w-8 rounded-none rounded-r-md ${viewMode === "grid" ? "bg-gray-100" : ""}`}
              onClick={() => setViewMode("grid")}
            >
              <Grid className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <span>My Drive</span>
          <ChevronRight className="h-4 w-4" />
          <span>Documents</span>
        </div>
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {mockFolders.map((folder) => (
            <FolderCard key={folder.id} folder={folder} />
          ))}
          {mockFiles.map((file) => (
            <FileCard key={file.id} file={file} />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border bg-white">
          <div className="grid grid-cols-12 border-b px-4 py-2 text-sm font-medium text-gray-500">
            <div className="col-span-6">Name</div>
            <div className="col-span-2">Owner</div>
            <div className="col-span-2">Last modified</div>
            <div className="col-span-1">Size</div>
            <div className="col-span-1"></div>
          </div>
          {mockFolders.map((folder) => (
            <FolderRow key={folder.id} folder={folder} />
          ))}
          {mockFiles.map((file) => (
            <FileRow key={file.id} file={file} />
          ))}
        </div>
      )}
    </div>
  )
}

function FolderCard({ folder }: { folder: any }) {
  return (
    <div className="group relative rounded-lg border bg-white p-4 transition-all hover:shadow-md">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Folder className="h-5 w-5 text-gray-400" />
          <span className="font-medium">{folder.name}</span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Share2 className="mr-2 h-4 w-4" />
              <span>Share</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Star className="mr-2 h-4 w-4" />
              <span>Add to starred</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Download className="mr-2 h-4 w-4" />
              <span>Download</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="text-xs text-gray-500">
        <div>{folder.items} items</div>
        <div>Modified {folder.modified}</div>
      </div>
    </div>
  )
}

function FileCard({ file }: { file: any }) {
  return (
    <div className="group relative rounded-lg border bg-white transition-all hover:shadow-md">
      <div className="aspect-video overflow-hidden rounded-t-lg bg-gray-100">
        {file.type === "image" ? (
          <Image
            src={file.thumbnail || "/placeholder.svg?height=200&width=300"}
            alt={file.name}
            width={300}
            height={200}
            className="h-full w-full object-cover"
          />
        ) : file.type === "document" ? (
          <div className="flex h-full items-center justify-center">
            <FileText className="h-12 w-12 text-gray-400" />
          </div>
        ) : (
          <div className="flex h-full items-center justify-center">
            <FileText className="h-12 w-12 text-gray-400" />
          </div>
        )}
      </div>
      <div className="p-3">
        <div className="mb-1 flex items-center justify-between">
          <div className="flex items-center gap-2 truncate">
            {file.type === "image" ? (
              <ImageIcon className="h-4 w-4 text-gray-400" />
            ) : (
              <FileText className="h-4 w-4 text-gray-400" />
            )}
            <span className="truncate font-medium">{file.name}</span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Share2 className="mr-2 h-4 w-4" />
                <span>Share</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Star className="mr-2 h-4 w-4" />
                <span>Add to starred</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Download className="mr-2 h-4 w-4" />
                <span>Download</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="text-xs text-gray-500">
          <div>Modified {file.modified}</div>
          <div>{file.size}</div>
        </div>
      </div>
    </div>
  )
}

function FolderRow({ folder }: { folder: any }) {
  return (
    <div className="grid grid-cols-12 items-center border-b px-4 py-2 text-sm hover:bg-gray-50">
      <div className="col-span-6 flex items-center gap-2">
        <Folder className="h-5 w-5 text-gray-400" />
        <span className="font-medium">{folder.name}</span>
      </div>
      <div className="col-span-2">Me</div>
      <div className="col-span-2">{folder.modified}</div>
      <div className="col-span-1">—</div>
      <div className="col-span-1 text-right">
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
              <Star className="mr-2 h-4 w-4" />
              <span>Add to starred</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Download className="mr-2 h-4 w-4" />
              <span>Download</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

function FileRow({ file }: { file: any }) {
  return (
    <div className="grid grid-cols-12 items-center border-b px-4 py-2 text-sm hover:bg-gray-50">
      <div className="col-span-6 flex items-center gap-2">
        {file.type === "image" ? (
          <ImageIcon className="h-5 w-5 text-gray-400" />
        ) : (
          <FileText className="h-5 w-5 text-gray-400" />
        )}
        <span className="font-medium">{file.name}</span>
      </div>
      <div className="col-span-2">Me</div>
      <div className="col-span-2">{file.modified}</div>
      <div className="col-span-1">{file.size}</div>
      <div className="col-span-1 text-right">
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
              <Star className="mr-2 h-4 w-4" />
              <span>Add to starred</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Download className="mr-2 h-4 w-4" />
              <span>Download</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
