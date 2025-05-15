import { FileExplorer } from "@/components/file-explorer";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { ThemeProvider } from "@/providers/theme-provider";
import { eq } from "drizzle-orm";
import { db } from "~/server/db";
import { fileSystem as fileSystemTable } from "~/server/db/schema";

const FILE_SYSTEM_ITEM_TYPE = {
  FOLDER: "folder",
  FILE: "file",
} as const;

export default async function DrivePage() {
  const folders = await db.select().from(fileSystemTable).where(eq(fileSystemTable.type, FILE_SYSTEM_ITEM_TYPE.FOLDER))
  const files = await db.select().from(fileSystemTable).where(eq(fileSystemTable.type, FILE_SYSTEM_ITEM_TYPE.FILE))




  return (
    <ThemeProvider defaultTheme="system">
      <div className="flex h-screen flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-50">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-900">
            <FileExplorer fileSystem={{ files, folders }} />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}
