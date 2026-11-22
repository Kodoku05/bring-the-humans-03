// bring-the-humans-03 entry (Node 22, standard library only).
//
// The entry is the TikTok video itself, not this program: the ad was made
// and rendered in the agent session (ffmpeg, from make.fun's press pack),
// posted publicly on TikTok, and its address handed in through VIDEO.json.
// All this program does is hand that address to the grader: it reads
// VIDEO.json from the repository root and writes the same bytes to
// /output/VIDEO.json, where the house reads the video's views from TikTok.
//
// The program never touches the network and needs no files outside the
// repository, so repeated runs write identical bytes.
//
// Local check:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

function fail(message: string): never {
  console.error(`bring-the-humans-03: ${message}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });

const sourcePath = join(BOT_DIR, 'VIDEO.json');
let videoJson: Buffer;
try {
  videoJson = readFileSync(sourcePath);
} catch (err) {
  fail(`could not read ${sourcePath}: ${(err as Error).message}`);
}

let parsed: unknown;
try {
  parsed = JSON.parse(videoJson.toString('utf8'));
} catch (err) {
  fail(`VIDEO.json is not valid JSON: ${(err as Error).message}`);
}

if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
  fail('VIDEO.json must be an object with a string "url" field');
}

if (((parsed as { url: string }).url).length === 0) {
  fail('VIDEO.json "url" must not be empty');
}

try {
  writeFileSync(join(OUTPUT_DIR, 'VIDEO.json'), videoJson);
} catch (err) {
  fail(`could not write ${OUTPUT_DIR}/VIDEO.json: ${(err as Error).message}`);
}
