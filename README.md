# OurSpeed v7 — CORS-fixed parallel measurements

The main problem in v6 was the browser-side CORS contract.

LibreSpeed's server documentation states that `?cors=true` must be passed to its `garbage.php`, `empty.php`, and related test endpoints for the responses to include the CORS headers required by a browser. This version adds `cors=true` to every test request. citeturn571636search0

What this version does:
- Starts all 8 endpoints simultaneously.
- Measures real download, upload, latency and jitter.
- Uses a fast reachability test.
- Uses per-request timeouts.
- Continues if any public endpoint fails.
- Never creates fake speed values.
- Explicitly requests CORS-enabled LibreSpeed responses.

Deploy only:
- `index.html`
- `config.js`

No VPS or backend is needed.

Important: public third-party servers can still be offline, rate-limited, or incorrectly configured. Those are shown as failed rather than fabricated.
