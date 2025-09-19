import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://spceizsxpadgejoeliaq.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwY2VpenN4cGFkZ2Vqb2VsaWFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgwOTUwMzEsImV4cCI6MjA3MzY3MTAzMX0.pID5Tax6Yor9z1gjHSphwKi_NBuVk61BwJaZAkNqnTs"

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey)

export default supabase;


