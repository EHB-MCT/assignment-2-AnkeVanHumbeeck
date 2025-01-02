const fetchData = async () => {
    const url = 'https://ttssqpywstiupazsmouy.supabase.co/rest/v1/youtube_stats';
    const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0c3NxcHl3c3RpdXBhenNtb3V5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMTY2MDgwOCwiZXhwIjoyMDQ3MjM2ODA4fQ.zyrV36xz44g2G-1Akp_BLSONpwqpgSJ_RhFbBA9XmSg';
  
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'apikey': apiKey,
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'no-cors',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
      },
    });
  
    if (!response.ok) {
      console.error('Error fetching data:', response.statusText);
      return;
    }
  
    const data = await response.json();
    console.log('Data:', data);
  };
  
  fetchData();