---
sidebar_position: 2
---

# Deploying

When we merge a PR to main or push changes to main, we want a github workflow to run and deploy site to Github pages.

### Add `deploy.yml`

```yml title=".github/workflows/deploy.yml"
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches:
      - main
jobs:
  deploy-main:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm i && npm run build
      - uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: ./build/
          branch: gh-pages
          clean-exclude: pr-preview
          force: false
```
