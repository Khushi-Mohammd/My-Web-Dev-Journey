# Git Commands

## `git config` Commands

- `git config --global user.name "Your Name"` --> Sets your name for all repositories.
- `git config --global user.email "your.email@example.com"` --> Sets your email for all repositories.
- `git config --global core.editor "vim"` --> Sets the default text editor for Git.
- `git config --global --list` --> Displays all globally configured settings.
- `git config --local --list` --> Shows Git configurations for the current repository only.
- `git config --system --list` --> Displays system-wide Git configurations.
- `git config --list` --> Displays all Git configuration settings, including user details, editor preferences, and aliases.

## `git clone` Commands

- `git clone <repository-url` --> Clones the repository from the given URL into a new directory.
- `git clone <repository-url> <directory-name>` --> Clones the repository into a specific directory.
- `git clone --depth=1 <repository-url>` --> Clones only the latest commit (useful for large repositories to save time).

## `git status` Command

- `git status` --> Displays:
  - Modified, added, or deleted files.
  - Files staged for commit.
  - Untracked files.
  - The current branch and whether it's up to date with the remote repository.

## `git add` Commands

- `git add <file-name>` --> Stages a specific file.
- `git add .` --> Stages all modified and new files in the current directory.
- `git add -A` --> Stages all changes, including deletions.
- `git add -p` --> Interactively stages specific parts of a file.

## `git commit` Commands

- `git commit -m "Your commit message"` --> Commits staged changes with a descriptive message.
- `git commit -am "Your commit message"` --> Stages and commits all modified and tracked files in one step (skips git add).
- `git commit --amend -m "New commit message"` --> Modifies the last commit message.
- `git commit --no-edit --amend` --> Updates the last commit without changing its message.

## `git push` Commands

- `git push <remote> <branch>` --> Pushes the specified branch to the remote repository.
- `git push origin main` --> Pushes the main branch to the origin remote.
- `git push -u origin <branch>` --> Pushes a branch and sets it as the default upstream for future pushes.
- `git push --force` or `git push -f` --> Forcefully pushes changes (use with caution, as it overwrites history).
- `git push --all` --> Pushes all branches to the remote.
- `git push --set-upstream origin <branch-name>` -->
  - This command sets the upstream (tracking) branch for the local branch and pushes it to the remote repository.
  - After running this command once, you can simply use `git push` or `git pull` without specifying the remote and branch name.

## `git init` Commands

- `git init` --> Creates a new Git repository in the current directory.
- `git init <directory-name>` --> Initializes a repository in a specific directory.

## `git remote` Commands

- `git remote -v` --> Lists all remote repositories linked to your project.
- `git remote add <name> <url>` --> Adds a new remote repository with a given name.
  - Example: `git remote add origin https://github.com/user/repo.git`
- `git remote remove <name>` --> Removes a remote repository.
- `git remote rename <old-name> <new-name>` --> Renames a remote repository.
- `git remote show <name>` --> Displays detailed information about a specific

## `git branch` Commands

- `git branch` --> Lists all local branches.
- `git branch <branch-name>` --> Creates a new branch.
- `git branch -d <branch-name>` --> Deletes a branch (if it’s already merged).
- `git branch -D <branch-name>` --> Force deletes a branch (even if not merged).
- `git branch -m <old-name> <new-name>` --> Renames a branch.
- `git branch -a` --> Lists all branches, including remote ones.
- `git branch -M <new-name>` --> Renames the current branch to `<new-name>`.
- `git branch -M <old-name> <new-name>` --> Renames a specific branch from `<old-name>` to `<new-name>`.

### Why use `-M` instead of `-m`?

- `-m` (lowercase) renames the branch but fails if the new branch name already exists.
- `-M` (uppercase) forcefully renames the branch, even if the new name already exists, overwriting it.

## `git checkout` Commands

- Switching Branches (Legacy Method)

  - `git checkout <branch-name>` --> Switches to an existing branch.
  - `git checkout -b <new-branch>` --> Creates and switches to a new branch.

- Restoring Files
  - `git checkout -- <file-name>` --> Discards changes in a file and restores it to the last committed version.
  - `git checkout <commit-hash> -- <file-name>` --> Restores a specific file from a past commit.

### Note:

- `git checkout` was commonly used to switch branches, but in newer Git versions, `git switch` is preferred for this purpose.
- To restore files, `git restore` is now recommended.

## `git diff` Commands

- `git diff` --> Shows unstaged changes (differences between the working directory and the last commit).
- `git diff --staged` --> Shows changes that have been staged (differences between the staging area and the last commit).
- `git diff <commit-hash1> <commit-hash2>` --> Compares two commits.
- `git diff <branch-name>` --> Compares the current branch with another branch.
- `git diff -- <file-name>` --> Shows changes for a specific file.

## `git merge` Commands

- `git merge <branch-name>` --> Merges the specified branch into the current branch.
- `git merge --no-ff <branch-name>` --> Creates a merge commit even if a fast-forward merge is possible.
- `git merge --abort` --> Cancels a merge if conflicts occur.

## `git pull` Commands

- `git pull <remote> <branch>` --> Fetches updates from the specified remote branch and merges them.
- `git pull origin main` --> Pulls the latest changes from the `main` branch of the `origin` remote.
- `git pull --rebase` --> Fetches changes and applies them on top of local commits instead of merging.
- `git pull --ff-only` --> Only performs a fast-forward merge if possible (fails if manual merge is needed).

## `git reset` Commands

- `git reset <file-name>` -->

  - Unstages a specific file from the staging area but keeps the changes in the working directory.
  - Does not affect commits or modify the file's content.

- `git reset` (Equivalent to `git reset --mixed HEAD`) -->

  - Unstages all files that were added to the staging area (moves them back to modified state).
  - Does not delete changes from the working directory.

- `git reset HEAD~1` -->

  - Moves HEAD back by one commit, undoing the last commit but keeping changes as unstaged.
  - Equivalent to `git reset --mixed HEAD~1` (default behavior).

- `git reset <commit-hash>` -->

  - Moves HEAD to the specified commit and unstages changes made after that commit.
  - Keeps the changes in the working directory (default mixed mode).

- `git reset --hard <commit-hash>` -->
  - Moves HEAD to the specified commit and completely erases all changes after that commit.
  - Files in the working directory are deleted and cannot be recovered easily.
