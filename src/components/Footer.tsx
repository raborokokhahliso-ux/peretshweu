import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-earth text-earth-foreground py-10">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display text-xl font-bold text-gold mb-3">Pere e Tshweu Sengangata</h3>
          <p className="text-sm opacity-80">
            Exploring and documenting the rich dance heritage of the Mangaung Community, Bloemfontein.
          </p>
        </div>
        <div>
          <h4 className="font-display font-bold mb-3">Quick Links</h4>
          <ul className="space-y-1 text-sm opacity-80">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
            <li><Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold mb-3">Dances</h4>
          <ul className="space-y-1 text-sm opacity-80">
            <li><Link to="/dances/mokhibo" className="hover:text-gold transition-colors">Mokhibo</Link></li>
            <li><Link to="/dances/mohobelo" className="hover:text-gold transition-colors">Mohobelo</Link></li>
            <li><Link to="/dances/litolobonya" className="hover:text-gold transition-colors">Litolobonya</Link></li>
            <li><Link to="/dances/gumboots" className="hover:text-gold transition-colors">Gumboots</Link></li>
            
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-earth-foreground/20 text-center text-sm opacity-60">
        © 2026 Dance Performances in Mangaung Community. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
