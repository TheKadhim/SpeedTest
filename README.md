# OurSpeed v6 — parallel direct measurements

All eight configured endpoints start at the same time.

This version does not depend on the LibreSpeed JavaScript worker. It directly measures the public LibreSpeed-compatible HTTP backends:
- download transfer
- upload transfer
- repeated latency
- jitter from latency variation
- packet loss from failed latency samples

A fast reachability/CORS check rejects a dead endpoint in about 2.5 seconds rather than letting it sit for 30 seconds. Each throughput phase has its own 12-second timeout.

The endpoint definitions use the current LibreSpeed public server list. Public third-party servers can still refuse browser CORS or be offline; in that case OurSpeed reports the endpoint as unavailable rather than inventing data.

Because all eight run concurrently, they share the user's Internet connection. This is a same-time global connectivity snapshot, not eight independent maximum-speed tests.

Deploy only `index.html` and `config.js` to GitHub Pages. No backend, VPS or build step is required.
