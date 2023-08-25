import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as r,b as e,d as s,f as i,e as a,r as c}from"./app.a92a9d02.js";const l={},d=i(`<div class="custom-container warning"><p class="custom-container-title">Why?</p><p>GATK versions before 4.1.0.0 and 4.1.1.0 has big differences. There is some problem download and run gatk v4.1.0 directly.</p><p>Hightlights of the 4.1.1.0 release:</p><p>Major updates to Mutect2, including completely overhauled filtering and smarter handling of overlapping read pairs.</p></div><h2 id="regular-approach-to-download-gatk" tabindex="-1"><a class="header-anchor" href="#regular-approach-to-download-gatk" aria-hidden="true">#</a> Regular approach to download gatk</h2><p>System: Ubuntu 20.04.5 LTS It turned out it works ok on macOS 12.4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> https://github.com/broadinstitute/gatk/releases/download/4.1.0.0/gatk-4.1.0.0.zip
<span class="token function">unzip</span> gatk-4.1.0.0.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="issue" tabindex="-1"><a class="header-anchor" href="#issue" aria-hidden="true">#</a> Issue</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Test run</span>
PATH_TO_gatk/gatk-4.1.0.0/gatk Mutect2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre>    gatk:80: SyntaxWarning: &quot;is&quot; with a literal. Did you mean &quot;==&quot;?
  if len(args) is 0 or (len(args) is 1 and (args[0] == &quot;--help&quot; or args[0] == &quot;-h&quot;)):

  No local jar was found, please build one by running

    PATH_TO_gatk/gatk-4.1.0.0/gradlew localJar
or
    export GATK_LOCAL_JAR=path_to_local_jar
</pre><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>PATH_TO_gatk/gatk-4.1.0.0/gradlew localJar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre>FAILURE: Build failed with an exception.

* What went wrong:
Task &#39;localJar&#39; not found in root project &#39;ybao2&#39;.

* Try:
Run gradlew tasks to get a list of available tasks. Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 3s
</pre><p>According to online resource, this issue is related to dependency mismatch between <code>gradle</code> and <code>java</code>. Tried couple times to resolve it by upgrading <code>gradle</code> version but didn&#39;t work.</p><h2 id="download-gatk-4-1-0-0-docker-images" tabindex="-1"><a class="header-anchor" href="#download-gatk-4-1-0-0-docker-images" aria-hidden="true">#</a> Download gatk-4.1.0.0 docker images</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> pull broadinstitute/gatk:4.1.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="issue-1" tabindex="-1"><a class="header-anchor" href="#issue-1" aria-hidden="true">#</a> Issue</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Activate docker to run Mutect2 tumor only mode</span>
<span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">-t</span> broadinstitute/gatk:4.1.0.0 gatk Mutect2 <span class="token parameter variable">-R</span> <span class="token variable">$REF</span>.fa <span class="token punctuation">\\</span>
<span class="token parameter variable">-I</span> <span class="token variable">$tumor</span>.bam <span class="token punctuation">\\</span>
<span class="token parameter variable">-tumor</span> <span class="token variable">$tumor</span>.name <span class="token punctuation">\\</span>
--disable-read-filter MateOnSameContigOrNoMappedMateReadFilter <span class="token punctuation">\\</span>
<span class="token parameter variable">-O</span> <span class="token variable">$out</span>.vcf.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre>A USER ERROR has occurred: The specified fasta file (file:///PATH_TO_REF.fa) does not exist.
</pre><p>This issue related to that there is no access to server files while using docker images.</p><p>Following online instructions <sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>, try to grand docker images with server folder access by:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-v</span> /Users/YOUR_USER_NAME/mydata:/mnt/mydata myimage
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Now, <code>/mnt/mydata</code> inside the container will have access to <code>/Users/YOUR_USER_NAME/mydata</code> on my host. <sup class="footnote-ref"><a href="#footnote1">[1:1]</a><a class="footnote-anchor" id="footnote-ref1:1"></a></sup></p><p>However, this attempt ended with the same error.</p><h3 id="solution" tabindex="-1"><a class="header-anchor" href="#solution" aria-hidden="true">#</a> Solution</h3><p>After brainstorming/googling with my advisor, (Thanks!), this would work:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Grand docker image access to your folder FOLDER_YOU_NEED_ON_SERVER</span>
<span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">-v</span> FOLDER_YOU_NEED_ON_SERVER:FOLDER_YOU_NEED_ON_SERVER broadinstitute/gatk:4.1.0.0 gatk Mutect2 <span class="token parameter variable">-R</span> <span class="token variable">$REF</span>.fa <span class="token punctuation">\\</span>
<span class="token parameter variable">-I</span> <span class="token variable">$tumor</span>.bam <span class="token punctuation">\\</span>
<span class="token parameter variable">-tumor</span> <span class="token variable">$tumor</span>.name <span class="token punctuation">\\</span>
--disable-read-filter MateOnSameContigOrNoMappedMateReadFilter <span class="token punctuation">\\</span>
<span class="token parameter variable">-O</span> <span class="token variable">$out</span>.vcf.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bonus" tabindex="-1"><a class="header-anchor" href="#bonus" aria-hidden="true">#</a> Bonus</h2><p>Great! Now if you want to wrap the <code>gatk Mutect2</code> calls into a bash file and submit to slurm, you may face this issue:</p><pre>sudo: a terminal is required to read the password; either use the -S option to read from standard input or configure an askpass helper
</pre><p>In your terminal, if you do <code>docker run hello-world</code>, you will face some issue related to permission, which requires <code>sudo</code>.</p><h3 id="solution-1" tabindex="-1"><a class="header-anchor" href="#solution-1" aria-hidden="true">#</a> Solution</h3><p>Assuming that you have <code>sudo</code> rights, you can do:<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">groupadd</span> <span class="token function">docker</span>
<span class="token function">sudo</span> <span class="token function">usermod</span> <span class="token parameter variable">-aG</span> <span class="token function">docker</span> YOUR_USER_NAME
<span class="token function">su</span> - YOUR_USER_NAME

<span class="token function">docker</span> run hello-world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you still face the permission issue, you may need to reload reboot your shell process and possibly even restart your computer <sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">reboot</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre>Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the &quot;hello-world&quot; image from the Docker Hub.
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
</pre><hr class="footnotes-sep">`,34),u={class:"footnotes"},p={class:"footnotes-list"},h={id:"footnote1",class:"footnote-item"},m={href:"https://stackoverflow.com/questions/44876778/how-can-i-use-a-local-file-on-container",target:"_blank",rel:"noopener noreferrer"},f=a("https://stackoverflow.com/questions/44876778/how-can-i-use-a-local-file-on-container"),g=a(),k=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"\u21A9\uFE0E",-1),b=a(),v=e("a",{href:"#footnote-ref1:1",class:"footnote-backref"},"\u21A9\uFE0E",-1),_={id:"footnote2",class:"footnote-item"},w={href:"https://www.baeldung.com/linux/docker-run-without-sudo#:~:text=Running%20Docker%20commands%20with%20sudo,member%20of%20the%20docker%20group",target:"_blank",rel:"noopener noreferrer"},y=a("https://www.baeldung.com/linux/docker-run-without-sudo#:~:text=Running Docker commands with sudo,member of the docker group"),R=a(". "),x=e("a",{href:"#footnote-ref2",class:"footnote-backref"},"\u21A9\uFE0E",-1),E={id:"footnote3",class:"footnote-item"},T={href:"https://stackoverflow.com/questions/56305613/cant-add-user-to-docker-group",target:"_blank",rel:"noopener noreferrer"},O=a("https://stackoverflow.com/questions/56305613/cant-add-user-to-docker-group"),D=a(),A=e("a",{href:"#footnote-ref3",class:"footnote-backref"},"\u21A9\uFE0E",-1);function N(S,U){const n=c("ExternalLinkIcon");return t(),r("div",null,[d,e("section",u,[e("ol",p,[e("li",h,[e("p",null,[e("a",m,[f,s(n)]),g,k,b,v])]),e("li",_,[e("p",null,[e("a",w,[y,s(n)]),R,x])]),e("li",E,[e("p",null,[e("a",T,[O,s(n)]),D,A])])])])])}const I=o(l,[["render",N],["__file","docker.html.vue"]]);export{I as default};
