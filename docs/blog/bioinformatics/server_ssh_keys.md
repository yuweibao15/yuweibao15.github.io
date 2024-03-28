---
title: Set up passwordless ssh login to remote server
icon: post
order: 2
category:
  - Bioinformatics
tag:
  - Tool
---
:::tip
It is annoying to enter password every time when connecting to server using ssh. How can we avoid that?
:::

## Question
```sh
ssh remote_username@server_ip_address
```
For the first time connecting to a server, you may see:
<pre>
The authenticity of host 'server_ip_address' can't be established.
 key fingerprint is SOME_CONTENTS
This key is not known by any other names
Are you sure you want to continue connecting (yes/no/[fingerprint])?
</pre>
Then enter password to connect.

That step will create some files in the path `~/.ssh/`

Later on, to avoid entering password at each time logging in to the server, do the following:

## Solution
1. Generate SSH Public Key

Ref: https://git-scm.com/book/en/v2/Git-on-the-Server-Generating-Your-SSH-Public-Key
```sh
ssh-keygen
```
2. Add device ssh key to remote server

Ref1: https://linuxize.com/post/how-to-setup-passwordless-ssh-login/

Ref2: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
```sh
ssh-copy-id remote_username@server_ip_address
```
With entering password, there should be a notice
<pre>
Number of key(s) added:        1
</pre>
Then you can connect to server without password by doing `ssh remote_username@server_ip_address`
3. Make it even esier
```sh
nano ~/.ssh/config 
```
In the file `~/.ssh/config`, write down
```sh
Host THE_SERVER_NICKNAME
  HostName server_ip_address
  User remote_username
```
Then you can connect to server without password with the nickname `ssh THE_SERVER_NICKNAME`

<style>
pre {
  background-color:#38393d;
  /* color: #FF33F3; */
  color: #33F3FF;
}
</style>