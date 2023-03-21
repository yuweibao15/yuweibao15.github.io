---
title: sshfs
icon: post
# This control sidebar order
order: 1
category:
  - Bioinformatics
tag:
  - Tool
---

## Why `sshfs`?

SSHFS allows user to mount a remote filesystem using SFTP so a user can access the folders from server on the local machine. I personally have issue connect my Mac to server using Finder. You can follow this guide [^macOS] to see if you can connect using Finder.

If not, using `sshfs` will be a good option.

## Installation
I use `homebrew` [^homebrew] as my package manager for MacOS . You can check sshfs github page [^sshfs] for other installation options
```sh
brew install sshfs
```

## Usage
Prepare the folders:
```sh
# Enter the local location you want to store sshfs files
mkdir sshfs
cd sshfs
# Make a directory with the name of the server
mkdir SERVER_NAME
```

Actual usage:
```sh
sshfs USER_NAME@SERVER_IP:PATH_TO_THE_REMOTE_FOLDER_YOU_WANT_TO_ACCESS SERVER_NAME
```

Then you should be able to see a folder in Finder and access server path without downloading files to local. (If you want to download files to local, try `scp` [^scp])

## Trouble shooting

```sh
sshfs USER_NAME@SERVER_IP:PATH_TO_THE_REMOTE_FOLDER_YOU_WANT_TO_ACCESS SERVER_NAME
```

<pre>
mount_macfuse: mount point LOCAL_PATH/SERVER_NAME is itself on a macFUSE volume
</pre>

First, let's check if the it has been mounted already.
```sh
ls LOCAL_PATH/SERVER_NAME
```
<pre>
ls:SERVER_NAME: Device not configured
</pre>

**Solution:**

`umount` the server then do `sshfs`. Note: Make sure the remote files are not used when `umount`.
```sh
umount SERVER_NAME
sshfs USER_NAME@SERVER_IP:PATH_TO_THE_REMOTE_FOLDER_YOU_WANT_TO_ACCESS SERVER_NAME
```

The loading may be slow, which depends on the size of the remote server path you are trying to access.

<style>
pre {
  background-color:#38393d;
  /* color: #FF33F3; */
  color: #33F3FF;
}
</style>


[^macOS]:https://support.apple.com/guide/mac-help/connect-mac-shared-computers-servers-mchlp1140/mac#:~:text=In%20the%20Finder%20on%20your,Click%20Connect.
[^scp]:https://www.freecodecamp.org/news/scp-linux-command-example-how-to-ssh-file-transfer-from-remote-to-local/
[^sshfs]:https://github.com/libfuse/sshfs
[^homebrew]:https://brew.sh/