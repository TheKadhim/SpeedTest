# OurSpeed v3 — real multi-region measurement

This version fixes the previous final-measurement bug.

The important change is that LibreSpeed's `onupdate()` callback is used to capture the actual final result when `testState === 4`, and all returned values are explicitly converted to numbers before validation.

Files to deploy:
- `index.html`
- `config.js`
- `speedtest_worker.js`

The page loads the official LibreSpeed JavaScript engine and uses public LibreSpeed-compatible backends. It does not generate or estimate a speed value.

Replace the old files in the GitHub Pages repository with these three files. Hard-refresh the browser after deployment (`Ctrl+F5`).

Third-party endpoints can still genuinely fail or be unavailable. OurSpeed will mark those endpoints failed and calculate regional medians from successful measurements only.
