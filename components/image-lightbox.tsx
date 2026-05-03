"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"

interface LightboxImage {
  src: string
  alt: string
  title: string
  description: string
  colSpan?: string
  aspectRatio?: string
}

interface ImageLightboxProps {
  images: LightboxImage[]
  gridClassName?: string
}

export function ImageLightbox({ images, gridClassName }: ImageLightboxProps) {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <>
      <div className={gridClassName ?? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"}>
        {images.map((img) => (
          <div
            key={img.src}
            className={`bg-gray-800 rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer ${img.colSpan ?? ""}`}
            onClick={() => setSelected(img.src)}
          >
            <div className={`relative ${img.aspectRatio ?? "aspect-[4/5]"}`}>
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-4">
              <h3 className="font-medium">{img.title}</h3>
              <p className="text-sm text-gray-400">{img.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
          <div className="relative w-full max-h-[80vh] flex items-center justify-center">
            {selected && (
              <Image
                src={selected}
                alt="Product view"
                width={1200}
                height={900}
                className="object-contain max-h-[80vh] rounded-lg"
              />
            )}
            <DialogClose className="absolute top-2 right-2 bg-black/60 rounded-full p-2 hover:bg-black/80">
              <X className="h-6 w-6" />
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
