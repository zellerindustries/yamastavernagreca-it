# Build & deploy

Requires Node >= 24 (see `.nvmrc`).

```bash
npm install
npm run build        # src/ -> dist/
npm start            # build, then serve ./dist
npm run format       # Prettier --write
npm run format:check # also runs as the pre-commit hook
```

There are no tests or linter. Check changes by building and viewing the site in a browser.

## Deploy

Pushing to `main` (or running the workflow manually) builds the site and rsyncs `dist/` to production over SSH (`.github/workflows/deploy.yml`). There is no staging environment or approval step, so treat a merge to `main` as a live release.

Server credentials are GitHub secrets: `SSH_PRIVATE_KEY`, `SSH_KNOWN_HOSTS`, `SERVER_USER`, `SERVER_IP`, `SERVER_PATH`.

Branching: work on `feature/*` off `develop`; `main` is release-only.
