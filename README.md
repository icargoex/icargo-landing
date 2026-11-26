# iCargoEx

Static marketing site for [icargoex.com](https://icargoex.com).

`index.html` is the homepage. Photos are in `img/` and warehouse tour videos are in `video/`.

## Preview locally

```bash
python3 -m http.server 8080
```

Open http://localhost:8080/.

## Deploy

Production is hosted on Netlify (site `beautiful-choux-24722a`). `www.icargoex.com` CNAMEs to that site, and `icargoex.com` points at Netlify. GitHub Pages is not enabled, and this repo has no GitHub Actions workflow.

`netlify.toml` publishes the repository root with an empty build command so Netlify serves these files as-is. That empty command overrides a Gatsby build command if one is still saved in the Netlify UI.
