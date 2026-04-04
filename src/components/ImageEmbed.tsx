import { useState, useRef, useCallback } from "react";
import { ImagePlus, X, Upload, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMedia } from "@/hooks/use-media";

interface ImageEmbedProps {
  storageKey: string;
  fallbackSrc?: string;
  alt?: string;
  className?: string;
  overlayClassName?: string;
  aspectRatio?: string;
  onImageClick?: (src: string) => void;
}

const ImageEmbed = ({
  storageKey,
  fallbackSrc,
  alt = "Image",
  className = "",
  overlayClassName = "",
  aspectRatio,
  onImageClick,
}: ImageEmbedProps) => {
  const { mediaUrl, loading, uploadFile, saveUrl, remove, hasStoredValue, isRemoved } = useMedia(storageKey);
  const [editing, setEditing] = useState(false);
  const [urlInput, setUrlInput] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const displaySrc = isRemoved ? "" : mediaUrl || (!hasStoredValue ? fallbackSrc || "" : "");

  const handleUrlSave = async () => {
    const trimmed = urlInput.trim();
    if (!trimmed) return;
    await saveUrl(trimmed);
    setEditing(false);
    setUrlInput("");
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const url = await uploadFile(file);
      if (url) {
        await saveUrl(url);
      }
      setEditing(false);
    } finally {
      setUploading(false);
    }
  };

  const handleRemove = async () => {
    await remove();
    setUrlInput("");
    setEditing(false);
  };

  if (loading) {
    return (
      <div className={`bg-muted rounded-xl flex items-center justify-center border border-border animate-pulse ${aspectRatio || ""} ${className}`}>
        <span className="text-muted-foreground text-sm">Loading...</span>
      </div>
    );
  }

  if (editing) {
    return (
      <div className={`bg-muted rounded-xl flex items-center justify-center border border-border p-6 z-30 relative ${aspectRatio || ""} ${className}`}>
        <div className="text-center w-full max-w-md">
          <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
            <ImagePlus className="h-6 w-6 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground font-medium mb-4">Add an image</p>

          {/* URL input */}
          <div className="flex gap-2 mb-3">
            <Input
              placeholder="Paste image URL"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleUrlSave()}
              className="text-sm"
            />
            <Button size="sm" onClick={handleUrlSave} disabled={!urlInput.trim()}>
              <LinkIcon className="h-4 w-4" />
            </Button>
          </div>

          {/* File upload */}
          <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFileUpload} />
          <Button size="sm" variant="outline" onClick={() => fileRef.current?.click()} className="w-full" disabled={uploading}>
            <Upload className="h-4 w-4 mr-2" /> {uploading ? "Uploading..." : "Upload from device"}
          </Button>

          {/* Cancel */}
          <Button size="sm" variant="ghost" onClick={() => setEditing(false)} className="mt-2 w-full text-muted-foreground">
            Cancel
          </Button>
        </div>
      </div>
    );
  }

  if (!displaySrc) {
    return (
      <div
        className={`bg-muted rounded-xl flex items-center justify-center border border-border cursor-pointer hover:bg-muted/80 transition-colors ${aspectRatio || ""} ${className}`}
        onClick={() => setEditing(true)}
      >
        <div className="text-center">
          <ImagePlus className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
          <span className="text-muted-foreground text-sm">Click to add image</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative group ${className}`}>
      <img
        src={displaySrc}
        alt={alt}
        className={`w-full h-full object-cover ${overlayClassName} ${onImageClick ? "cursor-pointer" : ""}`}
        onClick={() => onImageClick && displaySrc && onImageClick(displaySrc)}
      />
      <div className="absolute top-2 right-2 z-20 flex gap-1 opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100">
        <Button size="icon" variant="secondary" className="h-8 w-8 border-0 bg-foreground/70 text-background hover:bg-foreground/90" onClick={() => setEditing(true)}>
          <ImagePlus className="h-4 w-4" />
        </Button>
        {displaySrc && (
          <Button size="icon" variant="destructive" className="h-8 w-8" onClick={handleRemove}>
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default ImageEmbed;
