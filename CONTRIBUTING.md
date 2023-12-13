# Contributing

## Getting Started

Make sure you perform `git pull` before you checkout a new branch to avoid merge conflicts!!

1. Clone the repository
2. Install the dependencies
   ```bash
   npm install
   ```
3. Checkout to Dev branch
   ```bash
   git checkout Dev
   ```
3. Create a new branch
   ```bash
    git checkout -b feature-name
    ```
4. Make your changes
    
    Example- creating a new component
5. Add your updated files to git to stage them for commit
   ```bash
   git add .
   ```
6. Check your changes
   ```bash
   git status
   ```
7. Commit your changes
   ```bash
    git commit -m "commit message"
    ```
    <details>
    <summary>tip- use conventional commits</summary>
    Conventional commits are a great way to keep your commit messages organized and readable. You can read more about them <a src="https://www.conventionalcommits.org/en/v1.0.0/">here</a>.

    Here's an example of a conventional commit:
    ```bash
    git commit -m "feat: footer component"
    ```

    Here's another example of a conventional commit:
    ```bash
    git commit -m "fix: typo in footer component"
    ```

    </details>
8. **IMPORTANT⚠️** Make sure to perfrom a git pull before pushing your changes
   ```bash
   git pull
   ```
9. Push your changes to GitHub
   ```bash
   git push
   ```
10.  Open a pull request on GitHub
11. Wait for your pull request to be reviewed and merged!
12. Celebrate! 🎉


    
