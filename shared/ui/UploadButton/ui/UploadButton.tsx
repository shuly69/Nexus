"use client";

import { UploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";

export default function UploadImage({
  onUpload,
  onError,
}: {
  onUpload: (url: string) => void;
  onError: (message: string) => void;
}) {
  return (
    <UploadButton<OurFileRouter, "imageUploader">
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        const file = res[0];
        const url = file.ufsUrl ?? file.url;
        onUpload(url);
      }}
      onUploadError={(e) => {
        onError(e.message); 
      }}
    />
  );
}



