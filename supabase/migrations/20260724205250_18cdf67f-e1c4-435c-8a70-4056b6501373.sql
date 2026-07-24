REVOKE INSERT ON public.contact_messages FROM anon;
DROP POLICY IF EXISTS "Allow anonymous contact form submissions" ON public.contact_messages;
DROP POLICY IF EXISTS "Allow service role to manage contact messages" ON public.contact_messages;

GRANT ALL ON public.contact_messages TO service_role;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can manage contact messages" 
ON public.contact_messages FOR ALL TO service_role USING (true) WITH CHECK (true);