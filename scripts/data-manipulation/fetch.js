// Fetches the data from Supabase

"use strict";

// Fetches data from a Supabase database table via its REST API and returns the data in JSON format
export const fetchData = async () => {
  // Defines the API Endpoint and Key
  const url = 'https://ttssqpywstiupazsmouy.supabase.co/rest/v1/youtube_stats';
  const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0c3NxcHl3c3RpdXBhenNtb3V5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMTY2MDgwOCwiZXhwIjoyMDQ3MjM2ODA4fQ.zyrV36xz44g2G-1Akp_BLSONpwqpgSJ_RhFbBA9XmSg';

  // Make the API request
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'apikey': apiKey,
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
  });

  // Handles errors
  if (!response.ok) {
    console.error('Error fetching data:', response.statusText);
    return null;
  }

  // Processes the data
  const data = await response.json();
  return data;
};
