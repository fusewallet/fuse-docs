#!/bin/bash

pnpm i

pnpm run lint

pnpm run build

wrangler pages deploy ./out
