// Handles the Supabase connection

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://ttssqpywstiupazsmouy.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0c3NxcHl3c3RpdXBhenNtb3V5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE2NjA4MDgsImV4cCI6MjA0NzIzNjgwOH0.CuYqMgZ-NfbNwLNxujpiONU1DTOyGq6KN5qXJgYqc5Q';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
console.log('Supabase initialized:', supabase);