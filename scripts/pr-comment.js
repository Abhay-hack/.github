const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN, 
});

async function postComment() {
  try {
    const { data: pr } = await octokit.pulls.list({
      owner: "Abhay-hack",
      repo: "Lumina",
    });

    for (const prItem of pr) {
      await octokit.issues.createComment({
        owner: "Abhay-hack", 
        repo: "Lumina", 
        issue_number: prItem.number, 
        body: "Thank you for your pull request! We will review it shortly.", 
      });
    }
  } catch (error) {
    console.error("Error posting comment: ", error);
  }
}
//Abhay
postComment();
