/*
  Warnings:

  - The primary key for the `UserCourse` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `UserCourse` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserCourse" (
    "user_id" TEXT NOT NULL,
    "course_id" TEXT NOT NULL,
    "inscription_status_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,

    PRIMARY KEY ("user_id", "course_id"),
    CONSTRAINT "UserCourse_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserCourse_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Course" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserCourse_inscription_status_id_fkey" FOREIGN KEY ("inscription_status_id") REFERENCES "InscriptionStatus" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserCourse" ("course_id", "created_at", "inscription_status_id", "updated_at", "user_id") SELECT "course_id", "created_at", "inscription_status_id", "updated_at", "user_id" FROM "UserCourse";
DROP TABLE "UserCourse";
ALTER TABLE "new_UserCourse" RENAME TO "UserCourse";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
