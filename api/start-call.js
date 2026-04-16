// Vercel backend mein yeh change karein
export default async function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  try {
    const response = await fetch("https://api.retellai.com/v2/create-web-call", {
      method: "POST",
      headers: {
        "Authorization": "Bearer key_9681e5ed0465244689602aa85e30",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        agent_id: "agent_6be1535fb51177b611066eb41b"
      })
    });

    const data = await response.json();
    
    // ✅ ALTERNATIVE URL format
    if (data.access_token) {
      data.call_url = `https://api.retellai.com/web-call/${data.access_token}`;
    }
    
    return res.status(200).json(data);

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
