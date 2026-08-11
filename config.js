// Real public LibreSpeed-compatible endpoints.
// Failed endpoints are excluded; no fake values are generated.
window.OURSPEED_SERVERS = [
  {
    "id": "fra",
    "region": "EU",
    "name": "Frankfurt, Germany",
    "base": "https://fra.speedtest.clouvider.net/backend"
  },
  {
    "id": "ams",
    "region": "EU",
    "name": "Amsterdam, Netherlands",
    "base": "https://ams.speedtest.clouvider.net/backend"
  },
  {
    "id": "lon",
    "region": "EU",
    "name": "London, UK",
    "base": "https://lon.speedtest.clouvider.net/backend"
  },
  {
    "id": "chi",
    "region": "US",
    "name": "Chicago, USA",
    "base": "https://il1.us.backend.librespeed.org"
  },
  {
    "id": "nyc",
    "region": "US",
    "name": "New York, USA",
    "base": "https://ny2.us.backend.librespeed.org"
  },
  {
    "id": "la",
    "region": "US",
    "name": "Los Angeles, USA",
    "base": "https://la1.us.backend.librespeed.org"
  },
  {
    "id": "tehran",
    "region": "NEAR",
    "name": "Tehran, Iran",
    "base": "https://speedme.ir"
  },
  {
    "id": "tokyo",
    "region": "ASIA",
    "name": "Tokyo, Japan",
    "base": "https://librespeed.a573.net"
  }
];
window.OURSPEED_SETTINGS = {
  latencySamples: 5,
  throughputSamples: 2,
  downloadBytes: 12 * 1024 * 1024,
  uploadBytes: 6 * 1024 * 1024,
  timeoutMs: 10000
};
