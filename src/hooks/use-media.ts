import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

const REMOVED_MEDIA_TYPE = "removed";
const VIDEO_FILE_PATTERN = /\.(mp4|webm|ogg)(\?|$)/i;

function inferMediaType(url: string) {
  try {
    const parsed = new URL(url);
    if (["youtube.com", "youtu.be", "vimeo.com"].some((host) => parsed.hostname.includes(host))) {
      return "video";
    }
  } catch {
    // Ignore invalid URLs here — validation happens before save where needed.
  }

  return VIDEO_FILE_PATTERN.test(url) ? "video" : "image";
}

export function useMedia(storageKey: string) {
  const [mediaUrl, setMediaUrl] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [hasStoredValue, setHasStoredValue] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  // Load from database
  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const { data } = await supabase
        .from("media_items")
        .select("media_url, media_type")
        .eq("storage_key", storageKey)
        .maybeSingle();

      if (data) {
        const removed = data.media_type === REMOVED_MEDIA_TYPE;
        setHasStoredValue(true);
        setIsRemoved(removed);
        setMediaUrl(removed ? "" : data.media_url);
      } else {
        setHasStoredValue(false);
        setIsRemoved(false);
        setMediaUrl("");
      }

      setLoading(false);
    };

    load();
  }, [storageKey]);

  const uploadFile = useCallback(async (file: File): Promise<string | null> => {
    const ext = file.name.split(".").pop() || "bin";
    const path = `${storageKey}/${Date.now()}.${ext}`;

    const { error: uploadError } = await supabase.storage
      .from("media")
      .upload(path, file, { upsert: true });
    if (uploadError) {
      console.error("Upload error:", uploadError);
      return null;
    }

    const { data: urlData } = supabase.storage
      .from("media")
      .getPublicUrl(path);

    return urlData.publicUrl;
  }, [storageKey]);

  const saveUrl = useCallback(async (url: string) => {
    // Upsert into media_items
    const { error } = await supabase
      .from("media_items")
      .upsert(
        {
          storage_key: storageKey,
          media_url: url,
          media_type: inferMediaType(url),
        },
        { onConflict: "storage_key" }
      );

    if (error) {
      console.error("Save error:", error);
      return;
    }

    setMediaUrl(url);
    setHasStoredValue(true);
    setIsRemoved(false);
  }, [storageKey]);

  const remove = useCallback(async () => {
    const { error } = await supabase
      .from("media_items")
      .upsert(
        {
          storage_key: storageKey,
          media_url: "",
          media_type: REMOVED_MEDIA_TYPE,
        },
        { onConflict: "storage_key" }
      );

    if (error) {
      console.error("Remove error:", error);
      return;
    }

    setMediaUrl("");
    setHasStoredValue(true);
    setIsRemoved(true);
  }, [storageKey]);

  return { mediaUrl, loading, uploadFile, saveUrl, remove, hasStoredValue, isRemoved };
}