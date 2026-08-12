# OurSpeed v4

Fixes both previous issues:
- Uses LibreSpeed onupdate + onend and accepts the last valid measurement.
- Every endpoint has a 30 second timeout; failures do not stop the remaining endpoints.
- Only successful real measurements enter regional medians.

Deploy: index.html, config.js, speedtest_worker.js. Replace the old files and hard-refresh with Ctrl+F5.
