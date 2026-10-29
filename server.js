const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// CORS-Header aktivieren, damit dein Blogger-Frontend (APRS-Karte) ohne Blockaden zugreifen kann
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Hauptendpunkt für deine APRS-Daten
app.get('/aprs-data', async (req, res) => {
  try {
    // Hier kannst du deine APRS-Daten abrufen (z. B. von aprs.fi API, einem lokalen APRS-IS Server oder Stationen)
    // Beispiel für eine strukturierte JSON-Antwort an dein Frontend:
    const aprsData = {
      status: "online",
      stations: [
        // Deine APRS-Stationsdaten oder geparsten Packet-Infos
      ],
      timestamp: new Date().toISOString()
    };

    res.json(aprsData);
  } catch (error) {
    console.error("Fehler beim Abrufen der APRS-Daten:", error);
    res.status(500).json({ error: "Fehler beim Laden der APRS-Daten" });
  }
});

app.listen(PORT, () => {
  console.log(`APRS Backend läuft auf Port ${PORT}`);
});
