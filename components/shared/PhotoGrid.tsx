"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface PhotoGridImage {
  src: string;
  alt: string;
  caption?: string;
}

interface PhotoGridProps {
  images: PhotoGridImage[];
}

export default function PhotoGrid({ images }: PhotoGridProps) {
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  if (!images || images.length === 0) return null;

  const handleImageError = (src: string) => {
    setImageErrors((prev) => new Set(prev).add(src));
  };

  const validImages = images.filter((img) => !imageErrors.has(img.src));

  if (validImages.length === 0) return null;

  // Layout logic
  const getGridLayout = () => {
    if (validImages.length === 1) {
      return "grid-cols-1";
    } else if (validImages.length === 2) {
      return "grid-cols-1 md:grid-cols-2";
    } else {
      // 3 images: 1 wide on top, 2 below
      return "grid-cols-1 md:grid-cols-2";
    }
  };

  return (
    <div className="mb-6">
      <div className={`grid ${getGridLayout()} gap-4 md:gap-5`}>
        {validImages.map((image, idx) => {
          // For 3 images, first one spans full width
          const spanFull = validImages.length === 3 && idx === 0;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                spanFull ? "md:col-span-2" : ""
              }`}
            >
              {/* Premium border and inner shadow */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 ring-inset z-10" />

              {/* Image container with aspect ratio */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onError={() => handleImageError(image.src)}
                />

                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Caption with premium styling */}
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent px-4 py-3 md:px-5 md:py-4">
                  <p className="text-xs md:text-sm text-white font-medium leading-snug drop-shadow-lg">
                    {image.caption}
                  </p>
                </div>
              )}

              {/* Accent corner for extra polish */}
              <div className="absolute top-3 right-3 w-2 h-2 bg-accent/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
