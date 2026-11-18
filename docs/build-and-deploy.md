# Build & deploy

Requires Node >= 26 (see `.nvmrc`).

```bash
npm install
npm run build        # src/ -> dist/
npm start            # build, then serve ./dist
npm run format       # Prettier --write
npm run format:check # also runs as the pre-commit hook
npm run lint         # htmlhint, stylelint, cspell
npm run lint:rules   # workspace rule checks; also runs as the pre-commit hook
```

There are no unit tests. `npm run lint`, `lint:rules`, `lint:a11y` and `lint:links` check the sources and the built site; then view the site in a browser (`npm start`, http://localhost:4173).

## Deploy

Pushing to `main` (or running the workflow manually) builds the site and rsyncs `dist/` to production over SSH (`.github/workflows/deploy.yml`). There is no approval step, so treat a merge to `main` as a live release. A push to `develop` deploys to a staging path (`deploy-staging.yml`).

Server credentials are GitHub secrets: `SSH_PRIVATE_KEY`, `SSH_KNOWN_HOSTS`, `SERVER_USER`, `SERVER_IP`, `SERVER_PATH`, `STAGING_SERVER_PATH`.

Branching: work on `feature/*` off `develop`; `main` is release-only.
