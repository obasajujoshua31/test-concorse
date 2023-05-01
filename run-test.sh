#!/usr/bin/env bash

set -e -u -x

mv dependency-cache/node_modules test_example
cd test_example && npm test