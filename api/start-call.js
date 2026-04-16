export default async function handler(req, res) {
  // ✅ CORS headers - MUST be first thing
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Max-Age", "86400");

  // ✅ Handle preflight OPTIONS request
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  // ✅ Allow only GET or POST
  if (req.method !== "GET" && req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
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
    
    // ✅ Manually add call_url if not present
    if (data.access_token && !data.call_url) {
      data.call_url = `https://webcall.retellai.com/${data.access_token}`;
    }
    
    return res.status(200).json(data);

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
