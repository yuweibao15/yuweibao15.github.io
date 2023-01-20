---
title: Run GATK older version by docker images
icon: post
# This control sidebar order
order: 2
category:
  - Bioinformatics
tag:
  - Tool
---

:::warning Why?
GATK versions before 4.1.0.0 and 4.1.1.0 has big differences. There is some problem download and run gatk v4.1.0 directly.

Hightlights of the 4.1.1.0 release:

Major updates to Mutect2, including completely overhauled filtering and smarter handling of overlapping read pairs.
:::

## Regular approach to download gatk

System: Ubuntu 20.04.5 LTS
It turned out it works ok on macOS 12.4

```sh
wget https://github.com/broadinstitute/gatk/releases/download/4.1.0.0/gatk-4.1.0.0.zip
unzip gatk-4.1.0.0.zip
```

### Issue

```sh
# Test run
PATH_TO_gatk/gatk-4.1.0.0/gatk Mutect2
```
<pre>
    gatk:80: SyntaxWarning: "is" with a literal. Did you mean "=="?
  if len(args) is 0 or (len(args) is 1 and (args[0] == "--help" or args[0] == "-h")):

  No local jar was found, please build one by running

    PATH_TO_gatk/gatk-4.1.0.0/gradlew localJar
or
    export GATK_LOCAL_JAR=path_to_local_jar
</pre>

```sh
PATH_TO_gatk/gatk-4.1.0.0/gradlew localJar
```

<pre>
FAILURE: Build failed with an exception.

* What went wrong:
Task 'localJar' not found in root project 'ybao2'.

* Try:
Run gradlew tasks to get a list of available tasks. Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 3s
</pre>

According to online resource, this issue is related to dependency mismatch between `gradle` and `java`. Tried couple times to resolve it by upgrading `gradle` version but didn't work.

## Download gatk-4.1.0.0 docker images

```sh
sudo docker pull broadinstitute/gatk:4.1.0.0
```

### Issue
```sh
# Activate docker to run Mutect2 tumor only mode
sudo docker run -t broadinstitute/gatk:4.1.0.0 gatk Mutect2 -R $REF.fa \
-I $tumor.bam \
-tumor $tumor.name \
--disable-read-filter MateOnSameContigOrNoMappedMateReadFilter \
-O $out.vcf.gz
```
<pre>
A USER ERROR has occurred: The specified fasta file (file:///PATH_TO_REF.fa) does not exist.
</pre>

This issue related to that there is no access to server files while using docker images.

Following online instructions [^docker_access_files], try to grand docker images with server folder access by:
```sh
docker run -v /Users/YOUR_USER_NAME/mydata:/mnt/mydata myimage
```
Now, `/mnt/mydata` inside the container will have access to `/Users/YOUR_USER_NAME/mydata` on my host. [^docker_access_files]

However, this attempt ended with the same error.

### Solution
After brainstorming/googling with my advisor, (Thanks!), this would work:

```sh
# Grand docker image access to your folder FOLDER_YOU_NEED_ON_SERVER
sudo docker run -v FOLDER_YOU_NEED_ON_SERVER:FOLDER_YOU_NEED_ON_SERVER broadinstitute/gatk:4.1.0.0 gatk Mutect2 -R $REF.fa \
-I $tumor.bam \
-tumor $tumor.name \
--disable-read-filter MateOnSameContigOrNoMappedMateReadFilter \
-O $out.vcf.gz
```

## Bonus
Great! Now if you want to wrap the `gatk Mutect2` calls into a bash file and submit to slurm, you may face this issue:

<pre>
sudo: a terminal is required to read the password; either use the -S option to read from standard input or configure an askpass helper
</pre>

In your terminal, if you do `docker run hello-world`, you will face some issue related to permission, which requires `sudo`.

### Solution
Assuming that you have `sudo` rights, you can do:[^docker_without_sudo]

```sh
sudo groupadd docker
sudo usermod -aG docker YOUR_USER_NAME
su - YOUR_USER_NAME

docker run hello-world
```

If you still face the permission issue, you may need to reload reboot your shell process and possibly even restart your computer [^reboot]

```sh
sudo reboot
```

<pre>
Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
</pre>

<style>
pre {
  background-color:#38393d;
  /* color: #FF33F3; */
  color: #33F3FF;
}
</style>

[^gatk.v4.1.0.0]: https://gatk.broadinstitute.org/hc/en-us/sections/360007374491-4-1-0-0?page=1#articles

[^docker_access_files]: https://stackoverflow.com/questions/44876778/how-can-i-use-a-local-file-on-container

[^docker_without_sudo]:https://www.baeldung.com/linux/docker-run-without-sudo#:~:text=Running%20Docker%20commands%20with%20sudo,member%20of%20the%20docker%20group.

[^reboot]:https://stackoverflow.com/questions/56305613/cant-add-user-to-docker-group


