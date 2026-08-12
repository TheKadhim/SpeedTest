# OurSpeed v8 — upload crash fixed

The previous build's browser error was:

`Failed to execute 'getRandomValues' ... byte length ... exceeds ... 65536`

That was caused by asking Web Crypto to generate a 2 MiB upload buffer in one call. The Web Crypto API limits `getRandomValues()` calls to 65,536 bytes in browsers.

v8 no longer does that. It creates the upload body from <=64 KiB chunks using a fast non-cryptographic PRNG. The payload is only test data; cryptographic randomness is unnecessary.

Other fixes retained:
- all 8 endpoints start concurrently
- CORS requests include `cors=true`
- fast endpoint reachability check
- per-phase timeouts
- failures do not stop other endpoints
- no synthetic measurement values
- failures identify the phase: `ping:`, `download:`, or `upload:`

Deploy only:
- `index.html`
- `config.js`

Hard-refresh the GitHub Pages site with Ctrl+F5 after deployment.

Note: LibreSpeed documents that `cors=true` causes its backend test endpoints to send the required CORS response headers, and that browser upload tests send garbage data to `empty.php`. citeturn522303search1
