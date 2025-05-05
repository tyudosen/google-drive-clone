import { FileExplorer } from "@/components/file-explorer";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { ThemeProvider } from "@/providers/theme-provider";

export default function DrivePage() {
  return (
    <ThemeProvider defaultTheme="system">
      <div className="flex h-screen flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-50">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-900">
            <FileExplorer />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}
