export default async function handler(req, res) {

  // ✅ CORS fix
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // ✅ Preflight request handle
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const response = await fetch("https://api.retellai.com/v2/create-web-call", {
      method: "POST",
      headers: {
        "Authorization": "Bearer key_d55ff28a5a1f2176ad6226272044",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        agent_id: "agent_296e97f3a94cbe9c5e16904f7c"
      })
    });

    const data = await response.json();

    res.status(200).json(data);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}