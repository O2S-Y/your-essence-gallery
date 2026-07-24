CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.contact_messages TO anon;
GRANT ALL ON public.contact_messages TO service_role;

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous contact form submissions" 
ON public.contact_messages FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow service role to manage contact messages" 
ON public.contact_messages FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE OR REPLACE FUNCTION public.update_updated_at_column() 
RETURNS TRIGGER AS $$ 
BEGIN NEW.updated_at = now(); RETURN NEW; END; 
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_contact_messages_updated_at 
BEFORE UPDATE ON public.contact_messages 
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();