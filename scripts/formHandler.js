"use strict";

console.log("working")
// Initialize Supabase client

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://ttssqpywstiupazsmouy.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0c3NxcHl3c3RpdXBhenNtb3V5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE2NjA4MDgsImV4cCI6MjA0NzIzNjgwOH0.CuYqMgZ-NfbNwLNxujpiONU1DTOyGq6KN5qXJgYqc5Q';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
console.log('Supabase initialized:', supabase);

// Handle form submission
document.getElementById('youtube-form').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const formData = {
        youtube_url: document.getElementById('youtube_url').value,
        title: document.getElementById('title').value,
        time: document.getElementById('time').value,
        youtuber: document.getElementById('youtuber').value,
        main_topic: document.getElementById('main_topic').value,
        learned: document.getElementById('learned').value,
        reason: document.getElementById('reason').value,
        anxiety: document.querySelector('input[name="anxiety"]:checked')?.value === "Yes"
    };

    // Insert data into Supabase
    const { data, error } = await supabase
        .from('youtube_stats')
        .insert([formData]);

    if (error) {
        console.error('Error inserting data:', error);
        alert('There was an error submitting the form. Please try again.');
    } else {
        console.log('Data inserted successfully:', data);
        alert('Form submitted successfully!');
    }
});