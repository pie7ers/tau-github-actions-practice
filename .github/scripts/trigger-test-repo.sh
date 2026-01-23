#!/usr/bin/env bash

set -e

if [ -z "$GITHUB_APP_TOKEN" ]; then
  echo "ERROR: GITHUB_APP_TOKEN is not set"
  exit 1
fi

#get through variables set in the job/step
#OWNER="org"
REPO="tau-github-actions-practice-tests"
#same trigger set in the wf of the other repo:
#on:
#  repository_dispatch:
#    types: [trigger-tests]
EVENT_TYPE="trigger-tests"

curl -X POST \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer $GITHUB_APP_TOKEN" \
  "https://api.github.com/repos/$OWNER/$REPO/dispatches" \
  -d "{
    \"event_type\": \"$EVENT_TYPE\"
  }"
