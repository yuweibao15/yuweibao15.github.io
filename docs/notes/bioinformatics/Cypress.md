---
title: Tulane Univsersity's HPC Cypress
icon: post
# This control sidebar order
order: 2
category:
  - Bioinformatics
tag:
  - Tool
#   - Guide
---

<!-- more -->

## What is Cypress?
It is Tulane's newest HPC cluster. You can find some basic information from [Cypress](https://wiki.hpc.tulane.edu/trac/wiki/cypress)
<!-- info tig warning danger details -->
## Having credential with Tulane University, how to use Cypress?
::: info Log in
```sh
# Log in with credential
ssh tulaneID@cypress1.tulane.edu
# Enter group's Lustre project directory
cd /lustre/project/<your-group-name>
```
:::

::: tip Common commands using server
Reference: [Cypress Using](https://wiki.hpc.tulane.edu/trac/wiki/cypress/using)


- Submit a job
```sh
sbatch TEST_FILE.sh
```

- Check job status
```sh
squeue # show all current running jobs
squeue -u tulaneID # shows ONLY your queued and running jobs
```

- Cancel a job
```sh
scancel JOB_ID # cancels ONLY jobID
scancel -u tulaneID # cancels ALL your queued and running jobs
```

- Show the jobs done today
```sh
sacct # show your "eligible" jobs since 00:00:00 today
```
- **File transfer using Scp**
  - Upload local file to Cypress (do this on your local terminal)
  ```sh
  scp FILE_FROM_LOCAL_PATH tulaneID@cypress.tulane.edu:/lustre/project/SPECIFIC_TO_PATH
  ```
  - Upload local folder to Cypress (do this on your local terminal)
  ```sh
  scp -r FOLDER_FROM_LOCAL_PATH tulaneID@cypress.tulane.edu:/lustre/project/SPECIFIC_TO_PATH
  ```

  - Pull Cypress file down to local machine (do this on your local terminal)

  To transfer file test.txt from your home directory on Cypress to your current directory on your local machine... (note the trailing dot ".")
  ```sh
  scp tulaneID@cypress.tulane.edu:~/test.txt .
  ```
:::
## Other information
::: tip How to get VSCode connect to Cypress?
Reference: [Remote Development with VSCode](https://wiki.hpc.tulane.edu/trac/wiki/cypress/VScode)
:::

::: details Contact the wonderful Cypress support team at
HPC Administrators <hpcadmin@tulane.edu>
:::