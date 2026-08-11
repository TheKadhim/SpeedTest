# OurSpeed — public endpoint edition

No VPS and no backend. The browser performs real HTTP transfers against public LibreSpeed-compatible servers.

Deploy `index.html` and `config.js` to Netlify. No build command; publish directory is `.`.

The current LibreSpeed public service lists multiple locations in Europe, the US and Asia. This project uses a small set of those compatible endpoints. Public endpoints are third-party infrastructure: they can be unavailable, congested, changed, or rate-limited. Failed tests are excluded; the site never invents a number.

There is no Iraqi endpoint in the selected public list, so the UI deliberately says `IRAQ — NO PUBLIC NODE`. Tehran is labelled `NEARBY / IRAN`, not Iraq.

Measurements are real browser transfers: download from `garbage.php`, upload to `empty.php`, and repeated latency requests. Regional medians are calculated locally in the browser.

The official LibreSpeed public site discloses that its configured instance may collect test results, IP address, ISP information, approximate location, user agent/browser locale and test logs. Check each endpoint's policy before treating the service as a privacy-sensitive tool.
