import { FileExplorer } from "~/components/file-explorer"
import { Header } from "~/components/header"
import { Sidebar } from "~/components/sidebar"

export default function DrivePage() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-auto bg-gray-50">
          <FileExplorer />
        </main>
      </div>
    </div>
  )
}
