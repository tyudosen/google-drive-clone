export interface FileSystemItem {
  id: string; // Unique identifier
  name: string; // Name of the file or folder
  type: "file" | "folder"; // "file" or "folder"

  // Hierarchy
  parent: string | null; // ID of the parent folder (null for the root)
  path: string; // Materialized Path (e.g., "/user_id/folder_id_1/item_id")

  // User and Metadata
  userId: string; // User ID this item belongs to
  createdAt: Date; // Timestamp of creation
  updatedAt: Date; // Timestamp of last update

  // File-specific properties (optional)
  filePath?: string; // Internal storage path
  size?: number; // Size in bytes
  mimeType?: string; // MIME type (e.g., "image/jpeg", "application/pdf")
  // uploadDate?: Date;

  // Order-specific associations (optional)
  // orderId?: string; // ID of the associated order
  // orderStep?: "develop" | "scan" | "print"; // Step within the order

  // Soft deletion (optional)
  // isTrashed?: boolean; // Indicates if the item is in the trash
  // trashedAt?: Date; // Timestamp when trashed
}
