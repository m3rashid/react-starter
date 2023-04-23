#!/bin/bash

declare -a folders=( "node_modules" "build" "dist" ".idea" "target")

for i in "${folders[@]}"
do
  find . -name "$i" -type d -prune -exec rm -rf '{}' +
done
