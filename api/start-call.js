export default async function handler(req, res) {
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
    res.status(200).json(data);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
