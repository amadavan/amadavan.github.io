#!/bin/bash
# Build script for website

set -e

echo "Building site with Cobalt (includes SASS compilation)..."
cobalt build

echo "Build complete!"
