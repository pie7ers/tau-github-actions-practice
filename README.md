# GITHUB ACTIONS PRACTICE

## Diff between artifacts and dependency caching in Github actions

- Caching: when you want to reuse files that do not change often between jobs and workflows runs such as build dependencies from package management systems  like npm, gradle or maven, etc
- Artifacts: when you want to save files produced by a job to view after a workflow run has eneded such as some build boundaries, test results, etc.