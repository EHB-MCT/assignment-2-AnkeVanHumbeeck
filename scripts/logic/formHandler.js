// Gets the data from the form and puts it in Supabase

"use strict";

import { supabase } from './supabaseConnection.js'; 

// Handles the form submission
document.getElementById('youtube-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    // Gathers the form data
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

    // Inserts the data into Supabase
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