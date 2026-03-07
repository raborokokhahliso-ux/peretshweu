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

    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-2 text-center">Project Timeline</h2>
        <p className="text-muted-foreground text-center mb-8">24 April 2026 Deadline</p>
        <div className="space-y-0 relative">
          {/* Vertical connector line */}
          <div className="absolute left-6 md:left-8 top-4 bottom-4 w-0.5 bg-primary/30 hidden sm:block" />
          {[
            { phase: "Initiation", dates: "Jan 2026", weeks: "Wk 1–2", pct: 10, desc: "Project Charter, Stakeholder Register, Problem Statement, Objectives & Scope", color: "bg-primary" },
            { phase: "Planning", dates: "Jan – Feb 2026", weeks: "Wk 3–6", pct: 25, desc: "WBS, Gantt Chart, Budget, Risk Register, Communication & Quality Plans, RACI Matrix", color: "bg-accent" },
            { phase: "Execution", dates: "Feb – Mar 2026", weeks: "Wk 7–12", pct: 40, desc: "Stakeholder engagement, multimedia collection, dance research & digital platform build", color: "bg-secondary" },
            { phase: "Monitoring & Control", dates: "Mar – Apr 2026", weeks: "Wk 10–14", pct: 20, desc: "Progress reports, updated Gantt Chart, risk mitigation & scope control evidence", color: "bg-primary" },
            { phase: "Closing", dates: "Apr 2026", weeks: "Wk 15–16", pct: 5, desc: "Final report, lessons learned, team reflection & stakeholder engagement evidence", color: "bg-accent" },
          ].map((item, i) => (
            <div key={item.phase} className="flex items-start gap-4 md:gap-6 py-4 relative">
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-card border-4 border-primary flex items-center justify-center shadow-md">
                <span className="font-display font-black text-primary text-sm md:text-base">{i + 1}</span>
              </div>
              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-display font-bold text-lg">{item.phase}</h3>
                  <Badge variant="outline" className="text-xs border-primary/40 text-primary">
                    <CalendarDays className="w-3 h-3 mr-1" />
                    {item.dates}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm mb-2">{item.desc}</p>
                {/* Gantt-style bar */}
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                  <div
                    className={`${item.color} h-full rounded-full transition-all duration-700`}
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground mt-1 inline-block">{item.weeks} · ~{item.pct}% of effort</span>
              </div>
            </div>
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
