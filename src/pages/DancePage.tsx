import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Play, Music, Palette, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import hoKgibaImg from "@/assets/ho-kgiba.jpg";
import pantsulaImg from "@/assets/pantsula.jpg";
import mohobeloImg from "@/assets/mohobelo.jpg";

const danceData: Record<string, {
  title: string; subtitle: string; image: string;
  history: string; significance: string; artistic: string;
  music: string; costumes: string; choreography: string;
}> = {
  "ho-kgiba": {
    title: "Ho Kgiba",
    subtitle: "Traditional Sotho Dance",
    image: hoKgibaImg,
    history: "Ho Kgiba is a traditional Basotho dance that has been performed for centuries in the Free State region of South Africa. Rooted in the customs of the Basotho people, this dance form evolved from communal celebrations and rites of passage. It has been passed down through generations as an integral part of Sesotho cultural identity, adapting over time while maintaining its core movements and spiritual significance.",
    significance: "In the Mangaung community, Ho Kgiba plays a vital role in ceremonies such as weddings, harvest festivals, and initiation celebrations. The dance strengthens community bonds and serves as a form of storytelling, preserving the oral traditions and histories of the Basotho people. It is often performed to honour ancestors and mark important life transitions.",
    artistic: "Ho Kgiba is characterised by rhythmic foot-stamping, expressive arm movements, and call-and-response singing. Performers wear traditional Basotho blankets, beaded jewellery, and grass skirts.",
    music: "Traditional drums (moropa), ululations, and call-and-response chanting form the musical backbone.",
    costumes: "Basotho blankets (seanamarena), beaded accessories, grass skirts, and mokorotlo (conical hat).",
    choreography: "Synchronised group formations with dynamic footwork, rhythmic stamping, and expressive upper-body movements.",
  },
  "pantsula": {
    title: "Pantsula",
    subtitle: "Township Dance",
    image: pantsulaImg,
    history: "Pantsula emerged in the 1950s–1960s in the Black townships of South Africa, particularly in Johannesburg's Soweto. Born out of resistance and resilience during the apartheid era, it became a powerful cultural movement. The dance spread to communities across South Africa including Mangaung, where it was embraced by the youth as a form of self-expression and identity.",
    significance: "Pantsula is more than a dance — it's a lifestyle and cultural statement. In Mangaung, Pantsula crews represent community pride, discipline, and creativity. The dance has been instrumental in keeping youth engaged, fostering teamwork, and providing an alternative to street life. It remains a symbol of township culture and resilience.",
    artistic: "Pantsula is known for its fast, synchronised footwork, smooth gliding movements, and sharp body isolations. It draws from jazz, disco, and traditional African dance elements.",
    music: "Kwaito, house music, and jazz-influenced beats provide the rhythmic foundation for Pantsula performances.",
    costumes: "Smart-casual township fashion: Converse sneakers, Dickies pants, bucket hats, and coordinated crew outfits.",
    choreography: "Highly synchronised group routines with intricate footwork patterns, spins, and freestyle sections.",
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
            <div className="aspect-video bg-muted rounded-xl flex items-center justify-center border border-border">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <Play className="h-7 w-7 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Video placeholder — embed your performance video here</p>
              </div>
            </div>
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
