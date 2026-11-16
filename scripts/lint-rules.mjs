import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const checker = path.resolve(
  root,
  '..',
  '..',
  '..',
  '.claude',
  'skills',
  'enforcing-rules',
  'scripts',
  'index.mjs',
);

// The shared checker lives outside this repo; without it (fresh clone, CI) skip instead of failing.
if (!existsSync(checker)) {
  console.warn(
    'lint:rules skipped: shared checker not found at ../../../.claude/skills/enforcing-rules/scripts/',
  );
  process.exit(0);
}

const result = spawnSync(process.execPath, [checker, root], { stdio: 'inherit' });
process.exit(result.status ?? 1);
