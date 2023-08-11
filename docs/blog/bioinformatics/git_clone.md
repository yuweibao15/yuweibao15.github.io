---
title: Git clone from a private repo
icon: post
# This control sidebar order
order: 1
category:
  - Bioinformatics
tag:
  - Tool
---

## Standard git clone
```sh
git clone https://github.com/REPO_YOU_WANT_TO_GET.git
```

<pre>
Cloning into 'REPO_NAME'...
Username for 'https://github.com': INPUT_GITHUB_USER_NAME
Password for ...
remote: Support for password authentication was removed on August 13, 2021.
remote: Please see https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls for information on currently recommended modes of authentication.
fatal: Authentication failed for 'https://github.com/REPO_YOU_WANT_TO_GET.git/'
</pre>

## How to fix that?
**Long story short, the password above prompt asked was the token rather than the Github account password**
### Generate a token
On the Github page, go to `Settings -> Developer Settings -> Personal access tokens -> Tokens(classic) -> Generate new token`

Once generated a new token, go back to terminal, do
```sh
git clone https://github.com/REPO_YOU_WANT_TO_GET.git
```
And put the token as the password. DONE!


## Long attempt that doesn't work...
### 0. Checking for existing SSH keys [^check]
```sh
ls -al ~/.ssh # Lists the files in your .ssh directory, if they exist
```
- If you don't have a supported public and private key pair, or don't wish to use any that are available, generate a new SSH key.

- If you see an existing public and private key pair listed (for example, `id_rsa.pub` and `id_rsa`) that you would like to use to connect to GitHub, you can add the key to the ssh-agent.
  
### 1. Generating a new SSH key and adding it to the ssh-agent [^generate]

#### Generate

```sh
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```


<pre>
Generating public/private rsa key pair.
Enter file in which to save the key (~/.ssh/id_rsa): ~/.ssh/id_rsa_github
Enter passphrase (empty for no passphrase): PUT_SOMTHING_HERE
Enter same passphrase again: PUT_SOMTHING_HERE
Your identification has been saved in ~/.ssh//id_rsa_github
Your public key has been saved in ~/.ssh//id_rsa_github.pub
The key fingerprint is: SECRETE
The key's randomart image is:
</pre>

This step will generate private key `id_rsa` and public key `id_rsa.pub`.

### 2. Add SSH key to the ssh-agent
```sh
eval "$(ssh-agent -s)"
```

<pre>
Agent pid XXXX
</pre>

Then modify config file to automatically load keys into the ssh-agent and store passphrases in your keychain.

```sh
nano ~/.ssh/config
```

Inside `config`
```sh
Host github.com
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_rsa_github
```

Then
```sh
ssh-add ~/.ssh/id_rsa_github
```

### 3. Add a new SSH key to your GitHub account [^github]

After you generate an SSH key pair, you must add the public key to GitHub.com to enable SSH access for your account.

Obtain the public key:

```sh
cat ~/.ssh/id_rsa_github.pub
```

Then go to the Github page, `Settings -> SSH and GPG keys -> New SSH key`, paste the public key starting with `ssh-rsa`, then click `Add SHH key`

### Result:
This attempt failed when I tried to clone via SSH
```sh
git clone git@github.com:THE_REPO_I_WANT.git
```

<pre>
Cloning into 'GitRepo_name'...
~/.ssh/config: line 3: Bad configuration option: usekeychain
~/.ssh/config: terminating, 1 bad configuration options
fatal: Could not read from remote repository.
</pre>

[^check]:https://docs.github.com/en/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys
[^generate]:https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
[^github]:https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account