import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ImageEmbed from "@/components/ImageEmbed";
import VideoEmbed from "@/components/VideoEmbed";
import { useCloudCount } from "@/hooks/use-cloud-count";

import hoKgibaImg from "@/assets/ho-kgiba.jpg";
import mohobeloImg from "@/assets/mohobelo.jpg";
import galleryImg from "@/assets/gallery-placeholder.jpg";

const defaultPhotos = [
  { key: "gallery-photo-1", fallback: hoKgibaImg, alt: "Ho Kgiba Performance" },
  { key: "gallery-photo-2", fallback: mohobeloImg, alt: "Mohobelo Warriors" },
  { key: "gallery-photo-3", fallback: galleryImg, alt: "Community Celebration" },
];

const defaultVideoTitles = [
  "Ho Kgiba Performance",
  "Mohobelo Initiation Dance",
  "Community Dance",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { count: photoCount, setCount: setPhotoCount } = useCloudCount("config-gallery-photo-count", defaultPhotos.length);
  const { count: videoCount, setCount: setVideoCount } = useCloudCount("config-gallery-video-count", defaultVideoTitles.length);

  const photoSlots = Array.from({ length: photoCount }, (_, i) => {
    const def = defaultPhotos[i];
    return {
      key: def?.key || `gallery-photo-${i + 1}`,
      fallback: def?.fallback,
      alt: def?.alt || `Gallery photo ${i + 1}`,
    };
  });

  const videoSlots = Array.from({ length: videoCount }, (_, i) => {
    const title = defaultVideoTitles[i] || `Gallery video ${i + 1}`;
    const storageKey = i < defaultVideoTitles.length ? `gallery-video-${defaultVideoTitles[i]}` : `gallery-video-${i + 1}`;

    return { title, storageKey };
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
          <div className="mb-8 flex items-center justify-between gap-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold">Photos</h2>
            <div className="flex items-center gap-2">
              <Button
                size="icon"
                variant="outline"
                className="h-8 w-8"
                onClick={() => setPhotoCount(Math.max(1, photoCount - 1))}
                disabled={photoCount <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-6 text-center text-sm font-medium">{photoCount}</span>
              <Button size="icon" variant="outline" className="h-8 w-8" onClick={() => setPhotoCount(photoCount + 1)}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {photoSlots.map((slot) => (
              <ImageEmbed
                key={slot.key}
                storageKey={slot.key}
                fallbackSrc={slot.fallback}
                alt={slot.alt}
                className="aspect-square rounded-xl overflow-hidden"
                onImageClick={setSelectedImage}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between gap-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold">Videos</h2>
            <div className="flex items-center gap-2">
              <Button
                size="icon"
                variant="outline"
                className="h-8 w-8"
                onClick={() => setVideoCount(Math.max(1, videoCount - 1))}
                disabled={videoCount <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-6 text-center text-sm font-medium">{videoCount}</span>
              <Button size="icon" variant="outline" className="h-8 w-8" onClick={() => setVideoCount(videoCount + 1)}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoSlots.map((slot) => (
              <VideoEmbed key={slot.storageKey} storageKey={slot.storageKey} title={slot.title} />
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-5xl border-0 bg-transparent p-0 shadow-none">
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Expanded gallery image"
              className="max-h-[85vh] w-full rounded-xl object-contain"
            />
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
  
       
             
