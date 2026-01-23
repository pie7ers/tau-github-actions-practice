[![nightly build at 10 pm CO](https://github.com/pie7ers/tau-github-actions-practice/actions/workflows/nightly-build.yml/badge.svg)](https://github.com/pie7ers/tau-github-actions-practice/actions/workflows/nightly-build.yml)

# GITHUB ACTIONS PRACTICE

This practice was base on [tau-github-actions-for-testing](https://testautomationu.applitools.com/github-actions-for-testing/chapter1.html)


## CI/CD

- GitHub Actions is responsible for the CI pipeline, while Render handles the CD process by automatically redeploying the application on changes to the main branch.

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
- the workflow e2e-pipeline.yml does not work with act

## Requirements/Steps to use CodeQL

- the repo should be public
- go to settings → Security → Advanced security
- in the section Code Scanning (if is not visible check you repo is public)
- in CodeQL Analaysis clic on Setup button and select advanced
- Github will redirection you to a vie for creating a workflow, since the job already exists in the e2e-pipeline.yml, you just to cancel and do not create any other file
- run the workflow

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



## Send the request "trigger-tests" 

you can use the [example](#example-to-trigger-api-build) to sen the request to the other repo

other [option](#create-github-app-optional)

## Create Github APP (Optional)

- go to GitHub → Settings → Developer settings → Github Apps [here](https://github.com/settings/apps)
- configure accesses to both repos
- generate private key (save this)
- set secrets
    - APP_ID
    - APP_PRIVATE_KEY
- set workflow
```yml
- uses: actions/create-github-app-token@v2
  id: app-token
  with:
    app-id: ${{ vars.APP_ID }}
    private-key: ${{ secrets.PRIVATE_KEY }}
```