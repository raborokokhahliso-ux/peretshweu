import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/dances/mokhibo", label: "Mokhibo" },
  
  { to: "/dances/mohobelo", label: "Mohobelo" },
  { to: "/dances/litolobonya", label: "Litolobonya" },
  { to: "/dances/gumboots", label: "Gumboots" },
  { to: "/dances/pharatlhatlha", label: "Setapa / Pharatlhatlha" },
  
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-earth text-earth-foreground shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="font-display text-xl font-bold tracking-wide text-gold">
          Pere e Tshweu Sengangata
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center justify-end gap-1 flex-1 ml-4 flex-wrap">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`px-2.5 py-2 rounded-md text-xs lg:text-sm font-semibold transition-colors hover:bg-primary hover:text-primary-foreground ${
                  location.pathname === l.to ? "bg-primary text-primary-foreground" : ""
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-earth-foreground hover:bg-primary/20"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden bg-earth border-t border-border/20 px-4 pb-4">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-semibold transition-colors hover:bg-primary hover:text-primary-foreground ${
                  location.pathname === l.to ? "bg-primary text-primary-foreground" : ""
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
