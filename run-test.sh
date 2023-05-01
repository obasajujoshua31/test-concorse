#!/usr/bin/env bash

set -e -u -x

mv dependency-cache/node_modules test-example
cd test-example && npm test