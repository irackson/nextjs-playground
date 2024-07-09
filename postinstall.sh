#!/bin/sh
echo "\nRunning Post-Install Script\n---------------------------"

# Check if the .git directory exists
if [ ! -d ".git" ]; then
	echo "No .git folder... aborting postinstall script"
	exit 1
fi

# create pre-commit hook in gitignored .git directory
cp .vscode/tracked-pre-commit.sh .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
echo "* Created Pre-Commit Hook"

echo "\n---------------------------\nPost-Install Script Complete\n"
