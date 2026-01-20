# GITHUB ACTIONS PRACTICE

## Diff between artifacts and dependency caching in Github actions

- Caching: when you want to reuse files that do not change often between jobs and workflows runs such as build dependencies from package management systems  like npm, gradle or maven, etc
- Artifacts: when you want to save files produced by a job to view after a workflow run has eneded such as some build boundaries, test results, etc.

## Add Linter

- npm i eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin jiti -D
- npx eslint --init this genarates "eslint.config"
- npx eslint

## Test Pipeline Locally

- brew install act #install for testing pipeline locally
- execute npm run make-secrets and add the respective secrets bear in mind: 
- basic example: act -j test -s ACT=true
- in the [package.json](./package.json) yo will find more act commands, they start with `act` prefix

## Example to trigger api-build

client_payload should be your payload

```shell
curl --location 'https://api.github.com/repos/{{GITHUB_USER}}/{{GITHUB_REPOSITORY}}/dispatches' \
--header 'Authorization: Bearer YOUR_TOKEN' \
--header 'Content-Type: application/json' \
--data '{
    "event_type": "api-build",
    "client_payload": {
        "env": "staging",
        "version": "1.2.3"
    }
}'
```

## Steps to generate Github token

- GitHub → Settings → Developer settings → Personal access tokens
- select Fine-grained tokens
- generate a new token
- copy the token