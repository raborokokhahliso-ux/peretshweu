import { useParams, Link } from "react-router-dom"; 
import { ArrowLeft, Music, Palette, Users } from "lucide-react";
import VideoEmbed from "@/components/VideoEmbed";
import { Button } from "@/components/ui/button";
import hoKgibaImg from "@/assets/ho-kgiba.jpg";

import mohobeloImg from "@/assets/mohobelo.jpg";
import litolobonyaImg from "@/assets/litolobonya.jpg";
import gumbootsImg from "@/assets/gumboots.jpg";
import litolobonya1 from "@/assets/litolobonya-1.jpg";
import litolobonya2 from "@/assets/litolobonya-2.jpg";
import litolobonya3 from "@/assets/litolobonya-3.jpg";
import litolobonya4 from "@/assets/litolobonya-4.jpg";
import litolobonya5 from "@/assets/litolobonya-5.jpg";

const danceData: Record<string, {
  title: string; subtitle: string; image: string;
  history: string; significance: string; artistic: string;
  music: string; costumes: string; choreography: string;
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
  },
};

const DancePage = () => {
  const { slug } = useParams();
  const dance = danceData[slug || ""];

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
        <img src={dance.image} alt={dance.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
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

          {/* Photo Gallery Placeholder */}
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Photo Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-square bg-muted rounded-lg flex items-center justify-center border border-border">
                  <span className="text-muted-foreground text-sm">Photo {i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DancePage;
