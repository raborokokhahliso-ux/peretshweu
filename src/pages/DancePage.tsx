import { useState } from "react";
import { useParams, Link } from "react-router-dom"; 
import { ArrowLeft, Music, Palette, Users, X, ChevronLeft, ChevronRight } from "lucide-react";
import VideoEmbed from "@/components/VideoEmbed";
import ImageEmbed from "@/components/ImageEmbed";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import hoKgibaImg from "@/assets/ho-kgiba.jpg";

import mohobeloImg from "@/assets/mohobelo.jpg";
import litolobonyaImg from "@/assets/litolobonya.jpg";
import gumbootsImg from "@/assets/gumboots.jpg";
import pharatlhatlhaImg from "@/assets/pharatlhatlha.jpg";
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
    subtitle: "Traditional Basotho Women's Dance",
    image: hoKgibaImg,
    history: "The mokgibo (also spelled mokhibo) is a traditional dance of the Basotho people, categorized as an indigenous performative genre specifically for women and young girls. In Sotho tradition, it is referred to as a papali (game or play), reflecting its role as a vital educational tool and a medium for social interaction. As a form of mmino wa setšo (traditional music and practices), the dance has been preserved through generations to maintain its cultural, philosophical, and spiritual integrity. The dance is unique because it is performed while sitting on the knees and lower legs — dancers move their heads and shoulders in unison to the rhythm while their hands are swept upwards and their bodies gently rise and fall. An informal choir typically stands behind the dancers, providing singing and rhythmic hand-clapping, and performers may use instruments such as drums (moropa), whistles (phala), and fly-whisks (lechoba).",
    significance: "In the Mangaung community and across the Free State, Mokhibo plays a vital role in ceremonies, festivals, and cultural celebrations. Historically, its shoulder and hand movements were designed to prepare young maidens (baroetsana) for domestic duties such as grinding grain and carrying and soothing a baby. The dance teaches essential morals and life skills to the younger generation. In modern contexts, it is used to promote social cohesion between Sotho and Zulu cultures — for instance, the Nquthu Local Municipality hosts annual competitions bringing together different cultural activities. Mokgibo continues to be a central feature of events like the Morija Arts & Cultural Festival and the Zindala Zombili festival.",
    artistic: "Mokhibo is characterised by rhythmic knee movements performed while kneeling, expressive arm movements, and call-and-response singing. Dancers traditionally wear vibrant, matching costumes rich in symbolic colour — including internal skirts (lithethana or litolobonya) beneath large outer skirts (lifirisekoto), traditional hats (likuoane), and colourful beads that intensify the symbolic meaning of the performance.",
    music: "An informal choir provides singing and rhythmic hand-clapping. Traditional drums (moropa), whistles (phala), and fly-whisks (lechoba) enhance the rhythm.",
    costumes: "Basotho blankets (seanamarena), large outer skirts (lifirisekoto), internal skirts (lithethana), traditional hats (likuoane), and colourful beaded accessories.",
    choreography: "Synchronised group formations performed while kneeling, with dynamic upper-body movements, rhythmic shoulder and hand gestures, and expressive rising and falling motions.",
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
  "pharatlhatlha": {
    title: "Setapa / Pharatlhatlha",
    subtitle: "Traditional Setswana Dance",
    image: pharatlhatlhaImg,
    history: "Setapa is a traditional Setswana dance that is also known as Pharatlhatlha in some communities. It comes from long-standing community celebrations across Setswana-speaking regions and is recognised for its lively rhythm, grounded movement, and energetic group performance. Over time, the dance has remained an important cultural expression at gatherings, ceremonies, and festive occasions.",
    significance: "In the Mangaung community, Setapa / Pharatlhatlha helps preserve Setswana identity, community memory, and shared celebration. It is performed at cultural events, heritage days, weddings, and public performances, where it brings generations together through movement, rhythm, and pride in tradition.",
    artistic: "Setapa / Pharatlhatlha is known for strong footwork, fast rhythmic patterns, coordinated group timing, and expressive body movement. The dance creates a powerful visual effect through repetition, tempo changes, and communal energy.",
    music: "Hand clapping, vocal calls, traditional percussion, and strong rhythmic chanting support the pace and energy of the dance.",
    costumes: "Traditional Setswana-inspired attire, patterned garments, skirts, blankets, beadwork, and accessories that emphasise movement and cultural identity.",
    choreography: "Energetic group formations with quick footwork, grounded steps, repeated rhythmic phrases, and coordinated movement that highlights stamina and unity.",
    photos: [],
  },
};

const EXTRA_PHOTO_SLOTS = 4;

const GalleryWithCustomPhotos = ({
  slug, builtInPhotos, title, onPhotoClick,
}: {
  slug: string; builtInPhotos: string[]; title: string;
  onPhotoClick: (src: string) => void;
}) => {
  const slots = [
    ...builtInPhotos.map((photo, index) => ({
      key: `dance-gallery-${slug}-${index + 1}`,
      fallback: photo,
      alt: `${title} photo ${index + 1}`,
    })),
    ...Array.from({ length: EXTRA_PHOTO_SLOTS }, (_, index) => ({
      key: `dance-gallery-${slug}-extra-${index + 1}`,
      fallback: undefined,
      alt: `${title} extra photo ${index + 1}`,
    })),
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {slots.map((slot) => (
        <ImageEmbed
          key={slot.key}
          storageKey={slot.key}
          fallbackSrc={slot.fallback}
          alt={slot.alt}
          className="aspect-square overflow-hidden rounded-lg border border-border"
          onImageClick={onPhotoClick}
        />
      ))}
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
              onPhotoClick={(src) => {
                setAllDisplayPhotos([src]);
                setLightboxIndex(0);
              }}
            />
          </div>

          {/* Lightbox */}
          {allDisplayPhotos.length > 0 && (
            <Dialog open={lightboxIndex !== null} onOpenChange={() => setLightboxIndex(null)}>
              <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 border-none bg-black/95 flex items-center justify-center">
                <button onClick={() => setLightboxIndex(null)} className="absolute top-3 right-3 z-50 text-white/70 hover:text-white">
                  <X className="h-6 w-6" />
                </button>
                {lightboxIndex !== null && allDisplayPhotos.length > 1 && (
                  <>
                    <button
                      onClick={() => setLightboxIndex((lightboxIndex - 1 + allDisplayPhotos.length) % allDisplayPhotos.length)}
                      className="absolute left-3 z-50 text-white/70 hover:text-white"
                    >
                      <ChevronLeft className="h-8 w-8" />
                    </button>
                    <button
                      onClick={() => setLightboxIndex((lightboxIndex + 1) % allDisplayPhotos.length)}
                      className="absolute right-12 z-50 text-white/70 hover:text-white"
                    >
                      <ChevronRight className="h-8 w-8" />
                    </button>
                  </>
                )}
                {lightboxIndex !== null && (
                  <img
                    src={allDisplayPhotos[lightboxIndex]}
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
