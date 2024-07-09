#!/bin/sh
# Add .gitkeep files to empty directories
# find . -type d -empty -exec touch {}/.gitkeep \;
# Add the .gitkeep files to the staging area
# git add -A .

echo "hello from pre-commit!"
