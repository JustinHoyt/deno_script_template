#!/usr/bin/env -S deno run --allow-all --ext ts

import * as mod from "https://deno.land/std@0.209.0/assert/mod.ts";
import { parse } from "https://deno.land/std@0.200.0/flags/mod.ts";
import $ from "https://deno.land/x/dax@0.36.0/mod.ts";
import "https://deno.land/x/dax_extras@2.3.0-0.36.0/mod.ts";

interface Args {
}

async function main(args: Args): Promise<string> {
  return await $`ls`.quiet().lines();
}

if (import.meta.main) {
  const parsedArgs: Args = parse(Deno.args, {
    string: ["color"],
    default: { color: 'blue' },
  });

  console.log(await main(parsedArgs));
}

Deno.test('TODO', () => {
  mod.assertEquals(
    true,
    true,
  );
});
