# Development prompt

You are an expert software engineer, tasked with implementing a new node.js web app.

The project specification can be found in `spec.md`, and I have a plan for implementing in `implementation-plan.md`.

Look at the implementation plan and work your way through each of the iterations sequentially. Development may have already begun, so review the `changelog.md` to refresh your context (create one if it doesn't exist).

You should start at the first iteration not marked as complete in the implementation plan.

## Implementation instructions:
* Implement with TDD to always ensure correctness.
* Consider common libraries on npm where possible.
* Keep `changelog.md` file up-to-date after every change.
* Make sure all dependencies are being installed via npm.
* Install all required type dependencies for new packages.
* For any new functionality added update the unit tests to cover it.

Upon developing each iteration, I want you to do the following:
1. Run the application unit tests. If they fail, try and fix, if you don’t fix them after the first attempt. Stop and ask me to fix manually.
2. Update the implementation file with steps for that iteration, as well as estimated costs in dollars.
3. Update the project’s readme.
4. Create a new git branch for this iteration’s changes
5. Perform a git commit for all the files added/changed. Generate a suitable commit message based upon the changes for that iteration.
6. Push to git remote.
7. Do not make any further changes. Stop, provide a short summary of the changes and ask me to manually test. I will prompt you to continue when I am ready.
