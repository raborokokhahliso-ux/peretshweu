import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, MessageSquare } from "lucide-react";

const Contact = () => (
  <div>
    <section className="py-20 bg-earth text-earth-foreground">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-black mb-4">Contact & Community</h1>
        <p className="text-earth-foreground/80 max-w-xl mx-auto text-lg">
          We'd love to hear from you! Share your thoughts, feedback, or stories about Mangaung's dance traditions.
        </p>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="font-display text-2xl font-bold mb-6">Get in Touch</h2>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Share your thoughts, feedback, or stories..." rows={5} className="mt-1" />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                Send Message
              </Button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <h2 className="font-display text-2xl font-bold mb-6">Project Information</h2>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold">Location</h4>
                <p className="text-muted-foreground text-sm">Mangaung Metropolitan Municipality, Bloemfontein, Free State, South Africa</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold">Email</h4>
                <p className="text-muted-foreground text-sm">project@example.com (placeholder)</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold">Community</h4>
                <p className="text-muted-foreground text-sm">Join the conversation — share your experiences with Mangaung's dance culture in the comments section.</p>
              </div>
            </div>

            <div className="bg-muted rounded-xl p-6 mt-8">
              <h4 className="font-display font-bold mb-2">Community Feedback</h4>
              <p className="text-muted-foreground text-sm italic">Community comments and discussions will appear here.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Contact;
