import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageEmbed from "@/components/ImageEmbed";
import VideoEmbed from "@/components/VideoEmbed";

import hoKgibaImg from "@/assets/ho-kgiba.jpg";
import mohobeloImg from "@/assets/mohobelo.jpg";
import galleryImg from "@/assets/gallery-placeholder.jpg";

const defaultPhotos = [
  { key: "gallery-photo-1", fallback: hoKgibaImg, alt: "Ho Kgiba Performance" },
  { key: "gallery-photo-2", fallback: mohobeloImg, alt: "Mohobelo Warriors" },
  { key: "gallery-photo-3", fallback: galleryImg, alt: "Community Celebration" },
];

const GALLERY_COUNT_KEY = "gallery-photo-count";

const Gallery = () => {
  const [photoCount, setPhotoCount] = useState(() => {
    const saved = localStorage.getItem(GALLERY_COUNT_KEY);
    return saved ? Math.max(parseInt(saved, 10), defaultPhotos.length) : defaultPhotos.length;
  });

  useEffect(() => {
    localStorage.setItem(GALLERY_COUNT_KEY, String(photoCount));
  }, [photoCount]);

  const addSlot = () => setPhotoCount((c) => c + 1);

  const photoSlots = Array.from({ length: photoCount }, (_, i) => {
    const def = defaultPhotos[i];
    return {
      key: def?.key || `gallery-photo-${i + 1}`,
      fallback: def?.fallback,
      alt: def?.alt || `Gallery photo ${i + 1}`,
    };
  });

  return (
    <div>
      <section className="py-20 bg-earth text-earth-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-black mb-4">Gallery</h1>
          <p className="text-earth-foreground/80 max-w-xl mx-auto text-lg">
            Photos and videos documenting the dance traditions of the Mangaung Community.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Photos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {photoSlots.map((slot) => (
              <ImageEmbed
                key={slot.key}
                storageKey={slot.key}
                fallbackSrc={slot.fallback}
                alt={slot.alt}
                className="aspect-square rounded-xl overflow-hidden"
              />
            ))}

            {/* Add new photo slot button */}
            <button
              onClick={addSlot}
              className="aspect-square rounded-xl border-2 border-dashed border-border hover:border-primary/50 flex flex-col items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer bg-muted/30 hover:bg-muted/50"
            >
              <Plus className="h-8 w-8" />
              <span className="text-sm font-medium">Add Photo</span>
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Ho Kgiba Performance", "Mohobelo Initiation Dance", "Community Dance"].map((title) => (
              <VideoEmbed key={title} storageKey={`gallery-video-${title}`} title={title} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
