import { useState } from "react";
import { Play, Link as LinkIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function getEmbedUrl(url: string): { type: "iframe" | "video"; src: string } | null {
  try {
    const u = new URL(url);
    // YouTube
    const ytMatch =
      u.hostname.includes("youtube.com") ? new URLSearchParams(u.search).get("v") :
      u.hostname === "youtu.be" ? u.pathname.slice(1) : null;
    if (ytMatch) return { type: "iframe", src: `https://www.youtube.com/embed/${ytMatch}` };

    // Vimeo
    const vimeoMatch = u.hostname.includes("vimeo.com") && u.pathname.match(/\/(\d+)/);
    if (vimeoMatch) return { type: "iframe", src: `https://player.vimeo.com/video/${vimeoMatch[1]}` };

    // Direct video file
    if (/\.(mp4|webm|ogg)(\?|$)/i.test(url)) return { type: "video", src: url };

    return null;
  } catch {
    return null;
  }
}

interface VideoEmbedProps {
  storageKey: string;
  title?: string;
}

const VideoEmbed = ({ storageKey, title }: VideoEmbedProps) => {
  const [url, setUrl] = useState(() => localStorage.getItem(storageKey) || "");
  const [input, setInput] = useState("");
  const [editing, setEditing] = useState(!url);

  const embed = url ? getEmbedUrl(url) : null;

  const handleSave = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const parsed = getEmbedUrl(trimmed);
    if (!parsed) return;
    localStorage.setItem(storageKey, trimmed);
    setUrl(trimmed);
    setEditing(false);
  };

  const handleRemove = () => {
    localStorage.removeItem(storageKey);
    setUrl("");
    setInput("");
    setEditing(true);
  };

  if (!editing && embed) {
    return (
      <div className="relative group">
        <div className="aspect-video rounded-xl overflow-hidden border border-border">
          {embed.type === "iframe" ? (
            <iframe src={embed.src} className="w-full h-full" allowFullScreen allow="autoplay; encrypted-media" title={title || "Video"} />
          ) : (
            <video src={embed.src} className="w-full h-full" controls />
          )}
        </div>
        <Button
          size="icon"
          variant="destructive"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8"
          onClick={handleRemove}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <div className="aspect-video bg-muted rounded-xl flex items-center justify-center border border-border">
      <div className="text-center w-full max-w-md px-6">
        <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
          <Play className="h-6 w-6 text-primary" />
        </div>
        <p className="text-sm text-muted-foreground font-medium mb-4">
          {title || "Add a video"}
        </p>
        <div className="flex gap-2">
          <Input
            placeholder="Paste YouTube, Vimeo, or .mp4 URL"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSave()}
            className="text-sm"
          />
          <Button size="sm" onClick={handleSave} disabled={!input.trim()}>
            <LinkIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VideoEmbed;
