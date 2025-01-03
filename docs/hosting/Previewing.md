---
sidebar_position: 1
---

# Previewing

When we raise a PR, we want to view the changes before merging them. The following Github workflow provides a way

### Add `preview.yml`

```yml title=".github/workflows/preview.yml"
# .github/workflows/preview.yml
name: Deploy PR previews

on:
  pull_request:
    types:
      - opened
      - reopened
      - synchronize
      - closed

concurrency: preview-${{ github.ref }}

jobs:
  deploy-preview:
    runs-on: ubuntu-20.04
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Install and Build

        if: github.event.action != 'closed'
        env:
          PR_NUMBER: ${{ github.event.number }}
        run: |
          npm install
          npm run build

      - name: Deploy preview
        uses: rossjrw/pr-preview-action@v1
        with:
          source-dir: ./build/
```

### Change config to set correct base url

```ts title="docusaurus.config.ts"
const BASE_URL =
  process.env.PR_NUMBER !== undefined
    ? `/pr-preview/pr-${process.env.PR_NUMBER}/`
    : "/";

const config: Config = {
  baseUrl: BASE_URL,
};
```
