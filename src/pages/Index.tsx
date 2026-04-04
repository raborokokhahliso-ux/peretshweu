import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import VideoEmbed from "@/components/VideoEmbed";
import ImageEmbed from "@/components/ImageEmbed";
import heroImg from "@/assets/hero-dance.jpg";
import hoKgibaImg from "@/assets/ho-kgiba.jpg";

import mohobeloImg from "@/assets/mohobelo.jpg";
import litolobonyaImg from "@/assets/litolobonya.jpg";
import gumbootsImg from "@/assets/gumboots.jpg";
import pharatlhatlhaImg from "@/assets/pharatlhatlha.jpg";


const dances = [
  {
    title: "Mokhibo",
    subtitle: "Traditional Sotho Dance",
    image: hoKgibaImg,
    link: "/dances/mokhibo",
    description: "A vibrant traditional dance of the Basotho people, expressing joy and cultural pride through rhythmic movement.",
  },
  {
    title: "Mohobelo",
    subtitle: "Basotho Men's Dance",
    image: mohobeloImg,
    link: "/dances/mohobelo",
    description: "A powerful traditional men's dance featuring dramatic stomping and athletic choreography.",
  },
  {
    title: "Litolobonya",
    subtitle: "Basotho Praise Dance",
    image: litolobonyaImg,
    link: "/dances/litolobonya",
    description: "A traditional praise dance combining dramatic movement with oral poetry to honour ancestors and community leaders.",
  },
  {
    title: "Gumboots",
    subtitle: "Isicathulo – Boot Dance",
    image: gumbootsImg,
    link: "/dances/gumboots",
    description: "Born in the mines, Gumboot dance uses rhythmic boot-slapping and stomping as a powerful form of communication and cultural expression.",
  },
  {
    title: "Setapa / Pharatlhatlha",
    subtitle: "Traditional Setswana Dance",
    image: pharatlhatlhaImg,
    link: "/dances/pharatlhatlha",
    description: "Setapa is a traditional Setswana dance, also known as Pharatlhatlha, celebrated for its fast footwork, rhythm, and strong communal energy.",
  },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <ImageEmbed
          storageKey="home-hero-banner"
          fallbackSrc={heroImg}
          alt="Traditional dancers performing in Mangaung"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80 pointer-events-none" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Mangaung Community
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-black text-primary-foreground leading-tight mb-6">
            Dance Performances in Mangaung
          </h1>
          <p className="text-primary-foreground/85 text-lg sm:text-xl max-w-2xl mx-auto mb-8 font-body">
            Exploring the rich cultural heritage and vibrant dance traditions of the Mangaung Community in Bloemfontein, Free State.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base">
              <Link to="/dances/mokhibo">
                Explore Dances <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-bold text-base">
              <Link to="/about">About the Project</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-background pattern-african">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Celebrating Our Heritage
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Mangaung, meaning "Place of Cheetahs" in Sesotho, is a metropolitan municipality in the Free State province of South Africa. 
            Home to a diverse community, the region boasts a rich tapestry of cultural traditions, with dance playing a central role in ceremonies, 
            celebrations, and everyday life. This project documents and showcases five iconic dance forms rooted in this vibrant community.
          </p>
        </div>
      </section>

      {/* Featured Dances */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">Featured Dances</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Discover the five dance traditions we've researched and documented from the Mangaung community.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {dances.map((dance, i) => (
              <Link to={dance.link} key={dance.title} className="group">
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card">
                  <div className="relative h-64 overflow-hidden">
                    <ImageEmbed
                      storageKey={`home-dance-card-${dance.title}`}
                      fallbackSrc={dance.image}
                      alt={dance.title}
                      className="w-full h-64"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                        {dance.subtitle}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">{dance.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{dance.description}</p>
                    <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm mt-4 group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Reel */}
      <section className="py-20 bg-earth text-earth-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Highlight Reel</h2>
          <p className="opacity-80 mb-10 max-w-xl mx-auto">
            Watch our 2-minute highlight reel showcasing the best moments from our dance documentation journey.
          </p>
          <div className="max-w-3xl mx-auto">
            <VideoEmbed storageKey="home-highlight-reel" title="Upload your highlight reel" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
