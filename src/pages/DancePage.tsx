import { useState, useRef } from "react";
import { useParams, Link } from "react-router-dom"; 
import { ArrowLeft, Music, Palette, Users, X, ChevronLeft, ChevronRight, ImagePlus, Upload, Link as LinkIcon } from "lucide-react";
import VideoEmbed from "@/components/VideoEmbed";
import ImageEmbed from "@/components/ImageEmbed";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import hoKgibaImg from "@/assets/ho-kgiba.jpg";

import mohobeloImg from "@/assets/mohobelo.jpg";
import litolobonyaImg from "@/assets/litolobonya.jpg";
import gumbootsImg from "@/assets/gumboots.jpg";
import litolobonya1 from "@/assets/litolobonya-1.jpg";
import litolobonya2 from "@/assets/litolobonya-2.jpg";
import litolobonya3 from "@/assets/litolobonya-3.jpg";
import litolobonya4 from "@/assets/litolobonya-4.jpg";
import litolobonya5 from "@/assets/litolobonya-5.jpg";
import mokhibo1 from "@/assets/mokhibo-1.jpg";
import mokhibo2 from "@/assets/mokhibo-2.jpg";
import mokhibo3 from "@/assets/mokhibo-3.jpg";
import mokhibo4 from "@/assets/mokhibo-4.jpg";
import mohobelo1 from "@/assets/mohobelo-1.jpg";
import mohobelo2 from "@/assets/mohobelo-2.jpg";
import mohobelo3 from "@/assets/mohobelo-3.jpg";
import gumboots1 from "@/assets/gumboots-1.jpg";
import gumboots2 from "@/assets/gumboots-2.jpg";
import gumboots3 from "@/assets/gumboots-3.jpg";

const danceData: Record<string, {
  title: string; subtitle: string; image: string;
  history: string; significance: string; artistic: string;
  music: string; costumes: string; choreography: string;
  photos?: string[];
}> = {
  "mokhibo": {
    title: "Mokhibo",
    subtitle: "Traditional Sotho Dance",
    image: hoKgibaImg,
    history: "Mokhibo is a traditional Basotho women's dance that has been performed for centuries in the Free State region of South Africa. Rooted in the customs of the Basotho people, this dance form evolved from communal celebrations and rites of passage. It has been passed down through generations as an integral part of Sesotho cultural identity, adapting over time while maintaining its core movements and spiritual significance.",
    significance: "In the Mangaung community, Mokhibo plays a vital role in ceremonies such as weddings, harvest festivals, and initiation celebrations. The dance strengthens community bonds and serves as a form of storytelling, preserving the oral traditions and histories of the Basotho people. It is often performed to honour ancestors and mark important life transitions.",
    artistic: "Mokhibo is characterised by rhythmic knee movements performed while kneeling, expressive arm movements, and call-and-response singing. Performers wear traditional Basotho blankets, beaded jewellery, and grass skirts.",
    music: "Traditional drums (moropa), ululations, and call-and-response chanting form the musical backbone.",
    costumes: "Basotho blankets (seanamarena), beaded accessories, grass skirts, and mokorotlo (conical hat).",
    choreography: "Synchronised group formations with dynamic footwork, rhythmic stamping, and expressive upper-body movements.",
    photos: [mokhibo1, mokhibo2, mokhibo3, mokhibo4],
  },
  "mohobelo": {
    title: "Mohobelo",
    subtitle: "Traditional Basotho Men's Dance",
    image: mohobeloImg,
    history: "Mohobelo is an ancient Basotho men's dance that dates back to pre-colonial times. Originally performed by warriors returning from battle or by young men during initiation ceremonies, it showcases strength, agility, and masculine prowess. The dance has deep roots in Lesotho and the Free State, where Basotho communities have maintained this tradition for generations.",
    significance: "In Mangaung, Mohobelo is performed during cultural festivals, heritage celebrations, and community gatherings. It serves as a rite of passage for young men, teaching discipline, coordination, and cultural pride. The dance reinforces Basotho identity and connects the community to its ancestral traditions.",
    artistic: "Mohobelo features powerful stomping, high kicks, and dramatic leaps. The dancers move in formation, creating thunderous rhythms with their feet while performing acrobatic movements.",
    music: "Rhythmic chanting, whistles, and the lesiba (mouth bow) accompany the powerful stomping beats created by the dancers themselves.",
    costumes: "Traditional Basotho blankets, animal skins, bare feet, and mokorotlo hats. Ankle rattles amplify the footwork.",
    choreography: "Competitive formations with dramatic stomping sequences, high kicks, acrobatic leaps, and synchronised group movements.",
    photos: [mohobelo1, mohobelo2, mohobelo3],
  },
  "litolobonya": {
    title: "Litolobonya",
    subtitle: "Traditional Basotho Praise Dance",
    image: litolobonyaImg,
    history: "Litolobonya is a traditional Basotho dance form deeply rooted in the praise poetry (lithoko) tradition. Originating from the highlands of Lesotho and the Free State, this dance has been performed for centuries as an accompaniment to oral recitations honouring chiefs, ancestors, and community heroes. It evolved as a physical expression of the spoken word, combining movement with poetic rhythm.",
    significance: "In the Mangaung community, Litolobonya is performed during heritage celebrations, leadership ceremonies, and cultural festivals. It serves as a living archive of community history, with each performance retelling the stories of important figures and events. The dance reinforces respect for elders and traditional leadership structures.",
    artistic: "Litolobonya combines dramatic gestures, sweeping arm movements, and powerful stances that mirror the intensity of praise poetry. Performers embody the characters and events described in the lithoko, creating a visual narrative.",
    music: "Praise poetry recitation (lithoko), rhythmic clapping, and traditional drums provide the sonic landscape for the performance.",
    costumes: "Traditional Basotho blankets, animal-skin accessories, beaded ornaments, and ceremonial headwear reflecting status and heritage.",
    choreography: "Solo and group formations with dramatic poses, sweeping gestures, and rhythmic footwork synchronised to the cadence of praise poetry.",
    photos: [litolobonya1, litolobonya2, litolobonya3, litolobonya4, litolobonya5],
  },
  "gumboots": {
    title: "Gumboots",
    subtitle: "Isicathulo – Boot Dance",
    image: gumbootsImg,
    history: "Gumboot dance (Isicathulo) originated in the gold and coal mines of South Africa during the 19th and early 20th centuries. Migrant workers from across southern Africa, forced to work in harsh conditions, were often forbidden from speaking to one another. They developed a coded communication system using rhythmic boot slapping and stomping. Over time, this evolved into a celebrated dance form that spread to communities across the country, including Mangaung.",
    significance: "In Mangaung, Gumboot dance represents the resilience and creativity of South Africa's working-class communities. It is performed at cultural festivals, school events, and heritage celebrations, serving as a powerful reminder of the struggles endured during apartheid and the mining era. The dance fosters unity and collective identity among performers and audiences alike.",
    artistic: "Gumboot dance is characterised by rhythmic stamping, slapping of Wellington boots, and percussive body movements. Dancers create complex polyrhythmic patterns using their boots as instruments, often incorporating call-and-response elements.",
    music: "The boots themselves serve as the primary instrument, supplemented by clapping, chanting, and sometimes guitar or concertina accompaniment.",
    costumes: "Wellington rubber boots (gumboots), overalls or work clothes, hard hats, and sometimes colourful additions like beaded anklets or team uniforms.",
    choreography: "Highly synchronised group formations with intricate stamping patterns, boot-slapping sequences, leg lifts, and competitive freestyle sections.",
    photos: [gumboots1, gumboots2, gumboots3],
  },
};

/** Sub-component for gallery with user-added photos */
const GalleryWithCustomPhotos = ({
  slug, builtInPhotos, title, onPhotoClick,
}: {
  slug: string; builtInPhotos: string[]; title: string;
  onPhotoClick: (allPhotos: string[], index: number) => void;
}) => {
  const storageKey = `dance-gallery-${slug}`;
  const [customPhotos, setCustomPhotos] = useState<string[]>(() => {
    try { return JSON.parse(localStorage.getItem(storageKey) || "[]"); } catch { return []; }
  });
  const [adding, setAdding] = useState(false);
  const [urlInput, setUrlInput] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const allPhotos = [...builtInPhotos, ...customPhotos];

  const addUrl = () => {
    const trimmed = urlInput.trim();
    if (!trimmed) return;
    const next = [...customPhotos, trimmed];
    localStorage.setItem(storageKey, JSON.stringify(next));
    setCustomPhotos(next);
    setUrlInput("");
    setAdding(false);
  };

  const addFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const next = [...customPhotos, reader.result as string];
      localStorage.setItem(storageKey, JSON.stringify(next));
      setCustomPhotos(next);
      setAdding(false);
    };
    reader.readAsDataURL(file);
  };

  const removeCustom = (idx: number) => {
    const next = customPhotos.filter((_, i) => i !== idx);
    localStorage.setItem(storageKey, JSON.stringify(next));
    setCustomPhotos(next);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {allPhotos.map((photo, i) => (
        <div key={i} className="relative group aspect-square overflow-hidden rounded-lg border border-border cursor-pointer" onClick={() => onPhotoClick(allPhotos, i)}>
          <img src={photo} alt={`${title} photo ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          {i >= builtInPhotos.length && (
            <button
              className="absolute top-1 right-1 z-10 bg-destructive text-destructive-foreground rounded-full h-6 w-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={(e) => { e.stopPropagation(); removeCustom(i - builtInPhotos.length); }}
            >
              <X className="h-3 w-3" />
            </button>
          )}
        </div>
      ))}
      {/* Add photo card */}
      {adding ? (
        <div className="aspect-square bg-muted rounded-lg border border-border p-4 flex items-center justify-center">
          <div className="text-center w-full">
            <Input placeholder="Paste image URL" value={urlInput} onChange={(e) => setUrlInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && addUrl()} className="text-sm mb-2" />
            <Button size="sm" onClick={addUrl} disabled={!urlInput.trim()} className="w-full mb-2"><LinkIcon className="h-4 w-4 mr-1" /> Add URL</Button>
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={addFile} />
            <Button size="sm" variant="outline" onClick={() => fileRef.current?.click()} className="w-full mb-2"><Upload className="h-4 w-4 mr-1" /> Upload</Button>
            <Button size="sm" variant="ghost" onClick={() => setAdding(false)} className="w-full text-muted-foreground">Cancel</Button>
          </div>
        </div>
      ) : (
        <div
          className="aspect-square bg-muted rounded-lg border border-dashed border-border flex items-center justify-center cursor-pointer hover:bg-muted/80 transition-colors"
          onClick={() => setAdding(true)}
        >
          <div className="text-center">
            <ImagePlus className="h-8 w-8 text-muted-foreground mx-auto mb-1" />
            <span className="text-muted-foreground text-xs">Add Photo</span>
          </div>
        </div>
      )}
    </div>
  );
};

const DancePage = () => {
  const { slug } = useParams();
  const dance = danceData[slug || ""];
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [allDisplayPhotos, setAllDisplayPhotos] = useState<string[]>([]);

  if (!dance) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-display text-3xl font-bold mb-4">Dance not found</h1>
        <Button asChild><Link to="/">Go Home</Link></Button>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <ImageEmbed
          storageKey={`dance-banner-${slug}`}
          fallbackSrc={dance.image}
          alt={dance.title}
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent pointer-events-none" />
        <div className="relative z-10 container mx-auto px-4 pb-10">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-4 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <span className="block text-secondary text-sm font-bold uppercase tracking-widest mb-2">{dance.subtitle}</span>
          <h1 className="font-display text-4xl md:text-6xl font-black text-primary-foreground">{dance.title}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Historical Background */}
          <div className="mb-14">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <Users className="h-7 w-7 text-primary" /> Historical Background
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{dance.history}</p>
          </div>

          {/* Cultural Significance */}
          <div className="mb-14">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <Palette className="h-7 w-7 text-accent" /> Cultural Significance
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{dance.significance}</p>
          </div>

          {/* Artistic Elements */}
          <div className="mb-14">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <Music className="h-7 w-7 text-gold" /> Artistic Elements
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">{dance.artistic}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: "Music", icon: "🎵", text: dance.music },
                { label: "Costumes", icon: "👘", text: dance.costumes },
                { label: "Choreography", icon: "💃", text: dance.choreography },
              ].map((item) => (
                <div key={item.label} className="bg-muted rounded-xl p-6">
                  <span className="text-2xl mb-2 block">{item.icon}</span>
                  <h4 className="font-display font-bold text-lg mb-2">{item.label}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Video Placeholder */}
          <div className="mb-14">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Performance Video</h2>
            <VideoEmbed key={slug} storageKey={`dance-video-${slug}`} title={`${dance.title} Performance`} />
          </div>

          {/* Photo Gallery */}
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Photo Gallery</h2>
            <GalleryWithCustomPhotos
              slug={slug || ""}
              builtInPhotos={dance.photos || []}
              title={dance.title}
              onPhotoClick={(allPhotos, index) => {
                setAllDisplayPhotos(allPhotos);
                setLightboxIndex(index);
              }}
            />
          </div>

          {/* Lightbox */}
          {dance.photos && dance.photos.length > 0 && (
            <Dialog open={lightboxIndex !== null} onOpenChange={() => setLightboxIndex(null)}>
              <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 border-none bg-black/95 flex items-center justify-center">
                <button onClick={() => setLightboxIndex(null)} className="absolute top-3 right-3 z-50 text-white/70 hover:text-white">
                  <X className="h-6 w-6" />
                </button>
                {lightboxIndex !== null && dance.photos.length > 1 && (
                  <>
                    <button
                      onClick={() => setLightboxIndex((lightboxIndex - 1 + dance.photos!.length) % dance.photos!.length)}
                      className="absolute left-3 z-50 text-white/70 hover:text-white"
                    >
                      <ChevronLeft className="h-8 w-8" />
                    </button>
                    <button
                      onClick={() => setLightboxIndex((lightboxIndex + 1) % dance.photos!.length)}
                      className="absolute right-12 z-50 text-white/70 hover:text-white"
                    >
                      <ChevronRight className="h-8 w-8" />
                    </button>
                  </>
                )}
                {lightboxIndex !== null && (
                  <img
                    src={dance.photos[lightboxIndex]}
                    alt={`${dance.title} photo ${lightboxIndex + 1}`}
                    className="max-w-full max-h-[85vh] object-contain"
                  />
                )}
              </DialogContent>
            </Dialog>
          )}
        </div>
      </section>
    </div>
  );
};

export default DancePage;
