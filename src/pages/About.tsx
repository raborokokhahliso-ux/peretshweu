import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";

const teamRoles = [
  { role: "Project Manager", desc: "Oversees project timeline, deliverables, and team coordination." },
  { role: "Risk Manager", desc: "Identifies, assesses, and mitigates project risks." },
  { role: "Communications Officer", desc: "Manages stakeholder engagement and project communications." },
  { role: "Financial Controller", desc: "Handles budget planning, tracking, and procurement." },
  { role: "Content Director", desc: "Curates research content, multimedia, and written narratives." },
  { role: "Technical Lead", desc: "Develops and maintains the digital platform." },
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


    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-center">Team Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamRoles.map((member) => (
            <Card key={member.role} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-xl font-bold text-primary">{member.role[0]}</span>
                </div>
                <Badge className="bg-secondary text-secondary-foreground mb-2">{member.role}</Badge>
                <p className="text-muted-foreground text-sm mt-2">{member.desc}</p>
                <p className="text-xs text-muted-foreground/60 mt-2 italic">Team member name TBD</p>
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
