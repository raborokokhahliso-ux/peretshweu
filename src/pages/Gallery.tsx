import galleryImg from "@/assets/gallery-placeholder.jpg";
import hoKgibaImg from "@/assets/ho-kgiba.jpg";

import mohobeloImg from "@/assets/mohobelo.jpg";
import VideoEmbed from "@/components/VideoEmbed";

const photos = [
  { src: hoKgibaImg, alt: "Ho Kgiba dancers", label: "Ho Kgiba Performance" },
  { src: pantsulaImg, alt: "Pantsula dancer", label: "Pantsula Street Dance" },
  { src: mohobeloImg, alt: "Mohobelo dancers", label: "Mohobelo Warriors" },
  { src: galleryImg, alt: "Dance celebration", label: "Community Celebration" },
];

const Gallery = () => (
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
          {photos.map((photo) => (
            <div key={photo.label} className="group relative overflow-hidden rounded-xl aspect-square">
              <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-primary-foreground text-sm font-semibold">{photo.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional placeholders */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-square bg-muted rounded-lg flex items-center justify-center border border-border">
              <span className="text-muted-foreground text-xs">Photo {i + 5}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Ho Kgiba Performance", "Pantsula Crew Battle", "Mohobelo Initiation Dance"].map((title) => (
            <VideoEmbed key={title} storageKey={`gallery-video-${title}`} title={title} />
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Gallery;
