#!/usr/bin/env -S deno run --allow-all --ext ts

import * as mod from "https://deno.land/std@0.209.0/assert/mod.ts";
import { parse } from "https://deno.land/std@0.200.0/flags/mod.ts";
import $ from "https://deno.land/x/dax@0.36.0/mod.ts";

async function main(TODO: string): Promise<string> {
  console.log(await $`ls`.quiet().lines());
  return TODO;
}

if (import.meta.main) {
  const parsedArgs = parse(Deno.args, {
    string: ["color"],
    default: { color: 'blue' },
  });

  console.log(await main(parsedArgs.color));
}

Deno.test('TODO', async () => {
  mod.assertEquals(
    await main('red'),
    "red",
  );
});
