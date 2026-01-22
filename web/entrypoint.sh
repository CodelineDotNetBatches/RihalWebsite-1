#!/bin/sh
cd /app || exit 1

if [ ! -d node_modules ]; then
  pnpm install
fi

pnpm dev --host 0.0.0.0 --port 3000
