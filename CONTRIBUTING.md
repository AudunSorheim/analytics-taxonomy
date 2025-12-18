# Contributing to Analytics Types

## Publishing to GitHub Packages

This project uses a manual publishing workflow to GitHub Packages.

### Prerequisites

1.  **Authenticate with GitHub Packages** (One-time setup)
    *   If you haven't already, you need to authenticate with GitHub Packages.
    *   Create a Personal Access Token (PAT) on GitHub with `write:packages`, `read:packages`, and `repo` scopes.
    *   Login to npm using your GitHub credentials:
        ```bash
        npm login --scope=@navikt --registry=https://npm.pkg.github.com
        ```
        *   **Username:** Your GitHub username
        *   **Password:** Your Personal Access Token (PAT)
        *   **Email:** Your public email address
    *   **Note:** If you have already configured your `~/.npmrc` with an auth token for `//npm.pkg.github.com/`, you can skip this step.

### Release Process

1.  **Prepare the Workspace**
    *   Ensure you are on the `main` branch and have the latest changes:
        ```bash
        git checkout main
        git pull origin main
        ```
    *   Make sure your working directory is clean.

2.  **Update Changelog**
    *   Update `CHANGELOG.md` with a summary of the changes in this release.
    *   Commit the changelog changes:
        ```bash
        git add CHANGELOG.md
        git commit -m "docs: Update changelog"
        ```

3.  **Bump Version**
    *   Run the `npm version` command to update `package.json`, create a git tag, and commit the change.
    *   Choose the appropriate semantic version bump:
        *   **Patch** (Bug fixes):
            ```bash
            npm version patch
            ```
        *   **Minor** (New features, backwards compatible):
            ```bash
            npm version minor
            ```
        *   **Major** (Breaking changes):
            ```bash
            npm version major
            ```

4.  **Verify Build**
    *   Ensure everything builds and tests pass before publishing:
        ```bash
        npm run test
        npm run build
        ```
    *   *(Note: `npm publish` will also run `prepublishOnly` which executes these checks, but it's good to verify manually first)*

5.  **Publish**
    *   Publish the package to the GitHub Registry:
        ```bash
        npm publish --registry=https://npm.pkg.github.com/
        ```

6.  **Push Changes**
    *   Push the new commits and tags to GitHub:
        ```bash
        git push && git push --tags
        ```
