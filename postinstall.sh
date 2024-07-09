#!/bin/sh
echo "\nRunning Post-Install Script\n---------------------------"

## create pre-commit hook in gitignored .git directory
cat postinstall.sh
mkdir -p .git/hooks
cp .vscode/tracked-pre-commit.sh .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
echo "Created Pre-Commit Hook"

echo "\n---------------------------\nPost-Install Script Complete\n"
#
