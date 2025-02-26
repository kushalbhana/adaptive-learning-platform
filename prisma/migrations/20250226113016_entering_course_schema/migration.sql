-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL,
    "courseName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CoursePage" (
    "id" TEXT NOT NULL,
    "pageNumber" INTEGER NOT NULL,
    "data" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,

    CONSTRAINT "CoursePage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Course_id_key" ON "Course"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Course_courseName_key" ON "Course"("courseName");

-- CreateIndex
CREATE UNIQUE INDEX "CoursePage_id_key" ON "CoursePage"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CoursePage_pageNumber_key" ON "CoursePage"("pageNumber");

-- AddForeignKey
ALTER TABLE "CoursePage" ADD CONSTRAINT "CoursePage_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
