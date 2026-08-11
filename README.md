# OurSpeed — fixed public LibreSpeed edition

Replace the previous site files with the files in this ZIP.

Use these four files:
- `index.html`
- `config.js`
- `speedtest_worker.js`

`index.html` loads the official LibreSpeed `speedtest.js` from jsDelivr and uses the official LibreSpeed worker engine. The worker file is local and imports the matching public worker, so the browser can create the worker from the OurSpeed origin.

The server definitions are copied from the current official LibreSpeed public server list, including the correct endpoint paths. LibreSpeed's engine supports multiple test points and browser CORS handling.

Deploy all three files to the Netlify site root. No VPS, Node.js, database, or build step is required.

Third-party public servers can fail or be rate-limited. OurSpeed excludes failed endpoints and never invents a result.

There is no Iraqi public node in the selected current list, so Tehran is labelled Nearby/Iran rather than Iraq.
