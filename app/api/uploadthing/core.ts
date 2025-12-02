import { createUploadthing, type FileRouter } from "uploadthing/next";
 
const f = createUploadthing();
 
// FileRouter: Mengatur jenis file apa yang boleh diupload
export const ourFileRouter = {
  // Route untuk upload gambar (Max 4MB, Max 1 file)
  imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload sukses url:", file.url);
      return { uploadedBy: "admin" };
    }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;