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

`netlify.toml` copies `index.html`, `img/`, and `video/` into `public/` and publishes that directory. The copy is there because this Netlify site still has the Essential Gatsby plugin, which rejects a publish directory of the repository root. `NETLIFY_SKIP_GATSBY_BUILD_PLUGIN=true` tells that plugin to skip its Gatsby step. The build command also overrides a Gatsby build command if one is still saved in the Netlify UI.
