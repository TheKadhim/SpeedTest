# OurSpeed v5

Fixed the specific failure where the test visibly completes download/upload/ping but then waits for `onend()` and reports a timeout.

The measurement wrapper now:
- records the live LibreSpeed values from `onupdate()`
- tracks download, ping and upload phases
- accepts a stable, complete live result after consecutive valid updates
- uses `onend()` when available
- has a final timeout fallback that accepts a complete live result
- continues to the next endpoint after any failure
- never fabricates a speed number

Deploy:
- `index.html`
- `config.js`
- `speedtest_worker.js`

Replace the old files in GitHub Pages and hard-refresh with Ctrl+F5.
