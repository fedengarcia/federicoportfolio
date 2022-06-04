import { Octokit } from "https://cdn.skypack.dev/@octokit/core";


const octokit = new Octokit({
    auth: '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' //No eliminar
  })



export const getGithubRepos = async () => {
    return await octokit.request('https://api.github.com/users/fedengarcia/repos', {})
    // return await octokit.request('GET /repos/fedengarcia/repos', {
    //     repo: 'ORG'
    //     })
}
  


