# Basic Terminal Commands

## `ls` Commands

- `ls` --> Shows all files and folders in the current directory.
- `ls -l` --> Displays files in a detailed list format (including permissions, owner, size, and modification date).
- `ls -a` --> Shows all files, including hidden files (those starting with .).
- `ls -lh` --> Lists files with human-readable sizes (e.g., KB, MB, GB instead of bytes).
- `ls -la` --> Combines `-l` and `-a` to show a detailed list including hidden files.

## `pwd` Command

- `pwd` --> Displays the full absolute path of the directory you are currently in.
- It helps you know your exact location in the file system.
- Useful when navigating through directories in the terminal.

## `clear` Command

- `clear` --> Removes all previous commands and outputs from the terminal, giving a clean screen.
- It does not delete any files or processes; it only clears the visual display.
- Useful for improving readability and removing clutter while working in the terminal.

## `cd` / change directory Commands

- `cd <directory>` --> Moves into the specified child directory.
- `cd ..` --> Moves up one level to the parent directory.
- `cd ../..` --> Moves up two levels in the directory structure.
- `cd ~` --> Moves to the home directory.
- `cd /` --> Moves to the root directory.
- `cd -` --> Switches back to the previous directory.

## `mkdir` / make directory Commands

- `mkdir <directory-name>` --> Creates a new directory with the specified name in the current location.
- `mkdir dir1 dir2 dir3` --> Creates multiple directories at once.

## `--help` Option

- `<command-name> --help` --> Shows usage details, available options, and examples for the given command.
- Example:
  - `ls --help` --> Lists all options available for the `ls` command.
  - `git --help` --> Provides help on Git commands and usage.

## `touch` Commands

- `touch <file-name>` --> Creates a new empty file with the specified name.
- `touch file1 file2 file3` --> Creates multiple files at once.
- `touch <existing-file>` --> Updates the last modified timestamp of the file without changing its content.

## `rm` Commands

- `rm <file-name>` --> Deletes the specified file.
- `rm -i <file-name>` --> Asks for confirmation before deleting the file.
- `rm -r <directory-name>` --> Recursively deletes a directory and all its contents.
- `rm -rf <directory-name>` --> Forcefully deletes a directory and its contents without confirmation (use with caution).
- `rm *` --> Deletes all files in the current directory (does not delete subdirectories).

### Warning: `rm` permanently deletes files and directories; they cannot be recovered from the trash.
