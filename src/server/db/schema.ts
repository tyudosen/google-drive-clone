import {
  int,
  bigint,
  text,
  singlestoreTableCreator,
  index,
  timestamp,
} from "drizzle-orm/singlestore-core";

export const createTable = singlestoreTableCreator(
  (name) => `drive-tutorial_${name}`,
);

export const fileSystem = createTable(
  "file-system-table",
  {
    id: bigint("id", { mode: "bigint", unsigned: true })
      .primaryKey()
      .autoincrement(),
    name: text("name").notNull(),
    type: text("type"),
    // Hierarchy
    parent: text("parent"),
    path: text("path").notNull(),
    // User and Metadata
    userId: text("userId").notNull(), // User ID this item belongs to

    // File-specific properties (optional)
    filePath: text("filePath"), // Internal storage path
    size: int("size"), // Size in bytes
    mimeType: text("mimeType"), // MIME type (e.g., "image/jpeg", "application/pdf")
    createdAt: timestamp({ mode: "date" }).defaultNow().notNull(),
    updatedAt: timestamp({ mode: "date" }).defaultNow().onUpdateNow(),
  },
  (tempTable) => [
    // Existing index on parent
    index("parent_idx").on(tempTable.parent),

    // Important Indexes to Add:

    // Standalone Index on userId
    index("user_id_idx").on(tempTable.userId),

    // Standalone Index on path
    index("path_idx").on(tempTable.path),

    // Composite Index on (userId, parent)
    index("user_id_parent_idx").on(tempTable.userId, tempTable.parent),

    // Composite Index on (userId, path) - Crucial for descendant queries
    index("user_id_path_idx").on(tempTable.userId, tempTable.path),

    // Composite Index on (userId, type)
    index("user_id_type_idx").on(tempTable.userId, tempTable.type),

    // Add other optional composite indexes as needed based on query patterns
    // e.g., index("user_id_size_idx").on(tempTable.userId, tempTable.size), for sorting by size for a user
  ],
);
