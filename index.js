import { getInput } from '@actions/core';
import { createPullRequestForIssue } from '@widmoser/agent';

const repository = getInput('repository');
const branch = getInput('branch');
const apiKey = getInput('openrouter_api_key');
const model = getInput('model');
const githubToken = getInput('github_token');

await createPullRequestForIssue(repository, branch, apiKey, model, githubToken);

export {};