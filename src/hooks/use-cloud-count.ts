import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

/**
 * Persists an integer count in the media_items table using a config convention.
 * media_type = "config", media_url = stringified number.
 */
export function useCloudCount(storageKey: string, defaultValue: number) {
  const [count, setCount] = useState(defaultValue);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase
        .from("media_items")
        .select("media_url")
        .eq("storage_key", storageKey)
        .maybeSingle();

      if (data) {
        const parsed = parseInt(data.media_url, 10);
        if (!isNaN(parsed)) setCount(parsed);
      }
      setLoaded(true);
    };
    load();
  }, [storageKey]);

  const updateCount = useCallback(async (newCount: number) => {
    setCount(newCount);
    await supabase
      .from("media_items")
      .upsert(
        { storage_key: storageKey, media_url: String(newCount), media_type: "config" },
        { onConflict: "storage_key" }
      );
  }, [storageKey]);

  return { count, loaded, setCount: updateCount };
}
