import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, FileText } from "lucide-react";
import teamMbali from "@/assets/team-mbali.jpg";
import teamMabusha from "@/assets/team-mabusha.jpg";
import teamPrince from "@/assets/team-prince.jpg";
import teamCody from "@/assets/team-cody.jpg";
import teamKgaogelo from "@/assets/team-kgaogelo.jpg";
import teamKhahliso from "@/assets/team-khahliso.jpg";
import teamCalvin from "@/assets/team-calvin.jpg";

const teamRoles = [
  { name: "Mbali", role: "Project Manager", desc: "Oversees project timeline, deliverables, and team coordination.", photo: teamMbali },
  { name: "Mabusha", role: "Risk Manager", desc: "Identifies, assesses, and mitigates project risks.", photo: teamMabusha },
  { name: "Prince", role: "Communications Officer", desc: "Manages stakeholder engagement and project communications.", photo: teamPrince },
  { name: "Cody", role: "Financial Officer", desc: "Handles budget planning, tracking, and procurement.", photo: teamCody },
  { name: "Kgaogelo", role: "Content Director", desc: "Curates research content, multimedia, and written narratives.", photo: teamKgaogelo },
  { name: "Khahliso", role: "Technical Lead", desc: "Develops and maintains the digital platform.", photo: teamKhahliso },
  { name: "Calvin", role: "Technical Lead", desc: "Develops and maintains the digital platform.", photo: teamCalvin },
];

const researchDocuments = [
  {
    title: "Mokhibo / Mokgibo Dance",
    summary:
      "The mokgibo (also spelled mokhibo) is a traditional dance of the Basotho people, categorized as an indigenous performative genre specifically for women and young girls. In Sotho tradition, it is referred to as a papali (game or play), reflecting its role as a vital educational tool and a medium for social interaction. The dance is performed while sitting on the knees and lower legs, with dancers moving their heads and shoulders in unison to the rhythm. It served both domestic and moral functions — preparing young maidens for tasks like grinding grain and carrying babies, while also teaching morals and life skills at festivals. Mokgibo continues to be a central feature of cultural festivals such as the Morija Arts & Cultural Festival and is used to promote social cohesion between Sotho and Zulu cultures.",
    type: "Research Document",
  },
  {
    title: "Mohobelo Dance",
    summary:
      "The Mohobelo dance is a traditional Basotho men's dance defined by synchronized high-kicking, rhythmic stomping, and melodic chanting. While its roots lie in the mountains of Lesotho, Mangaung (Bloemfontein) has served as a critical urban crucible for the dance for over a century. It originated in the late 1800s in the Leribe district, developed by outposts of men guarding the Maluti Mountains after the Lifaqane wars. The dance traveled to the Free State through the migrant labor system. The hostels of Mangaung (such as Hostel 1, Dark City, and Silver City) were the primary incubators for the dance in the city, where it provided a sense of brotherhood and a way for Basotho men to assert their presence and dignity. Today, the Mangaung African Cultural Festival (MACUFE, est. 1997) is the premier platform for the dance.",
    type: "Research Document",
  },
  {
    title: "Litolobonya Dance",
    summary:
      "Litolobonya is a form of song and dance exclusively for girls and married women from Lesotho's rich cultural heritage. The girls' version is performed in the open, but the women's version is highly secretive and performed only by those who have given live birth, at social events called pitiki (celebrations following the birth of a child). The main instruments are the sekupu (a drum made of cowhide stretched over a 20-litre tin) and a whistle. The music gives women a platform to express their innermost concerns, empower newly married women, and transmit knowledge from one generation to the next. Litolobonya has influenced many genres of Basotho music, most significantly famo.",
    type: "Research Document",
  },
  {
    title: "Gumboot Dance (Isicathulo)",
    summary:
      "Gumboot dance originated in the late 19th century in the gold mines of South Africa, particularly around the Witwatersrand region. Migrant workers from Lesotho, Malawi, Zambia, Botswana, and Swaziland developed a system of rhythmic tapping and slapping their gumboots to communicate, as mine bosses banned workers from talking underground. During apartheid, the dance became a form of expression and resistance — miners used it to share stories, express frustration, mock mine bosses, and strengthen solidarity. Today it is one of the most iconic traditional dances in South Africa, combining rhythmic stomping, clapping, and slapping of boots, and is performed internationally.",
    type: "Research Document",
  },
  {
    title: "Setapa / Pharatlhatlha Dance",
    summary:
      "Setapa is one of the traditional dances that originate from the Tswana people of southern Africa, specifically the Bangwaketse tribe of Botswana. The name comes from the Setswana phrase 'go tapa tapa' describing the tapping motion of the feet. The dance was traditionally performed during the harvest season (lethafula), with all-night performances at the village kgotla. There are three types: Setapa sa dipitse (producing galloping horse sounds), Setapa sa phathisi (performed with tied trouser legs), and Setapa sa go goga maoto (dragging feet on the ground). In Mangaung, a district combining both Sesotho and Batswana people, the Batswana introduced this dance at after-school children's clubs, teaching children and entering competitions with other clubs.",
    type: "Research Document",
  },
];

const About = () => (
  <div>
    <section className="py-20 bg-earth text-earth-foreground">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-black mb-4">About the Project</h1>
        <p className="text-earth-foreground/80 max-w-2xl mx-auto text-lg">
          A Project Management III assignment exploring and documenting dance performances in the Mangaung Community.
        </p>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Project Objectives</h2>
        <ul className="space-y-4 text-muted-foreground text-lg">
          <li className="flex gap-3"><span className="text-primary font-bold">•</span> Identify and research at least three types of dances prevalent in the Mangaung Community.</li>
          <li className="flex gap-3"><span className="text-primary font-bold">•</span> Document historical background, cultural significance, and artistic elements of each dance.</li>
          <li className="flex gap-3"><span className="text-primary font-bold">•</span> Engage with community members and local cultural organisations for authentic insights.</li>
          <li className="flex gap-3"><span className="text-primary font-bold">•</span> Create a digital platform to showcase findings, performances, and multimedia content.</li>
          <li className="flex gap-3"><span className="text-primary font-bold">•</span> Develop comprehensive project management documentation throughout all phases.</li>
        </ul>
      </div>
    </section>

    {/* Research Documents Section */}
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-3 flex items-center gap-3">
          <BookOpen className="h-7 w-7 text-primary" /> Research Documents
        </h2>
        <p className="text-muted-foreground mb-8">
          The following research documents form the foundation of our project, providing in-depth analysis of each dance form's history, cultural significance, and artistic elements.
        </p>
        <div className="space-y-6">
          {researchDocuments.map((doc) => (
            <Card key={doc.title} className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0 mt-1">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-display font-bold text-lg">{doc.title}</h3>
                      <Badge variant="secondary" className="text-xs">{doc.type}</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{doc.summary}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-center">Team Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamRoles.map((member) => (
            <Card key={member.role} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <img src={member.photo} alt={member.name} loading="lazy" width={512} height={512} className="w-20 h-20 rounded-full object-cover mx-auto mb-4" />
                <h3 className="font-display font-bold text-lg">{member.name}</h3>
                <Badge className="bg-secondary text-secondary-foreground mb-2">{member.role}</Badge>
                <p className="text-muted-foreground text-sm mt-2">{member.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Stakeholder Engagement</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Our team has engaged with local dancers, cultural organisations, and community elders in Bloemfontein to gather authentic 
          insights into the dance traditions of the Mangaung region. Interviews, photography sessions, and performance documentation 
          form the backbone of our research methodology.
        </p>
        <div className="bg-muted rounded-xl p-8 text-center">
          <p className="text-muted-foreground italic">Stakeholder engagement evidence and interview transcripts will be added here.</p>
        </div>
      </div>
    </section>
  </div>
);

export default About;
