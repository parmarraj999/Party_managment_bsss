import { createClient } from "@supabase/supabase-js";

const projectUrl = "https://wssqlchdxmwbmfkwuqbw.supabase.co";
const projectKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indzc3FsY2hkeG13Ym1ma3d1cWJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg1MjYzMDUsImV4cCI6MjAxNDEwMjMwNX0.M-R7GTYv1LCubCKU1r9JMM_adU4vRvxGMmx7fFWZQTA";
const supabase = createClient(
    `${projectUrl}`,
    `${projectKey}`
)