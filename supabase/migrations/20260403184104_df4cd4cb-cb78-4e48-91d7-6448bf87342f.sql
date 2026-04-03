CREATE TABLE public.media_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  storage_key TEXT NOT NULL UNIQUE,
  media_url TEXT NOT NULL,
  media_type TEXT NOT NULL DEFAULT 'image',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.media_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view media" ON public.media_items FOR SELECT USING (true);
CREATE POLICY "Anyone can insert media" ON public.media_items FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can update media" ON public.media_items FOR UPDATE USING (true);
CREATE POLICY "Anyone can delete media" ON public.media_items FOR DELETE USING (true);

INSERT INTO storage.buckets (id, name, public) VALUES ('media', 'media', true);

CREATE POLICY "Anyone can view media files" ON storage.objects FOR SELECT USING (bucket_id = 'media');
CREATE POLICY "Anyone can upload media files" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'media');
CREATE POLICY "Anyone can update media files" ON storage.objects FOR UPDATE USING (bucket_id = 'media');
CREATE POLICY "Anyone can delete media files" ON storage.objects FOR DELETE USING (bucket_id = 'media');

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_media_items_updated_at
  BEFORE UPDATE ON public.media_items
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();