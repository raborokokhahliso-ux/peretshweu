import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

export function useMedia(storageKey: string) {
  const [mediaUrl, setMediaUrl] = useState<string>("");
  const [loading, setLoading] = useState(true);

  // Load from database
  useEffect(() => {
    const load = async () => {
      const { data } = await supabase
        .from("media_items")
        .select("media_url")
        .eq("storage_key", storageKey)
        .maybeSingle();
      if (data) setMediaUrl(data.media_url);
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
      .upsert({ storage_key: storageKey, media_url: url }, { onConflict: "storage_key" });
    if (error) {
      console.error("Save error:", error);
      return;
    }
    setMediaUrl(url);
  }, [storageKey]);

  const remove = useCallback(async () => {
    await supabase
      .from("media_items")
      .delete()
      .eq("storage_key", storageKey);
    setMediaUrl("");
  }, [storageKey]);

  return { mediaUrl, loading, uploadFile, saveUrl, remove };
}