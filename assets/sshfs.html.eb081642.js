import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as r,b as e,d as n,f as i,e as s,r as c}from"./app.9daea0be.js";const l={},d=i(`<h2 id="why-sshfs" tabindex="-1"><a class="header-anchor" href="#why-sshfs" aria-hidden="true">#</a> Why <code>sshfs</code>?</h2><p>SSHFS allows user to mount a remote filesystem using SFTP so a user can access the folders from server on the local machine. I personally have issue connect my Mac to server using Finder. You can follow this guide <sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup> to see if you can connect using Finder.</p><p>If not, using <code>sshfs</code> will be a good option.</p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p>I use <code>homebrew</code> <sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup> as my package manager for MacOS . You can check sshfs github page <sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup> for other installation options</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew <span class="token function">install</span> sshfs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>Prepare the folders:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Enter the local location you want to store sshfs files</span>
<span class="token function">mkdir</span> sshfs
<span class="token builtin class-name">cd</span> sshfs
<span class="token comment"># Make a directory with the name of the server</span>
<span class="token function">mkdir</span> SERVER_NAME
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Actual usage:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>sshfs USER_NAME@SERVER_IP:PATH_TO_THE_REMOTE_FOLDER_YOU_WANT_TO_ACCESS SERVER_NAME
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then you should be able to see a folder in Finder and access server path without downloading files to local. (If you want to download files to local, try <code>scp</code> <sup class="footnote-ref"><a href="#footnote4">[4]</a><a class="footnote-anchor" id="footnote-ref4"></a></sup>)</p><h2 id="trouble-shooting" tabindex="-1"><a class="header-anchor" href="#trouble-shooting" aria-hidden="true">#</a> Trouble shooting</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>sshfs USER_NAME@SERVER_IP:PATH_TO_THE_REMOTE_FOLDER_YOU_WANT_TO_ACCESS SERVER_NAME
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre>mount_macfuse: mount point LOCAL_PATH/SERVER_NAME is itself on a macFUSE volume
</pre><p>First, let&#39;s check if the it has been mounted already.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ls</span> LOCAL_PATH/SERVER_NAME
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre>ls:SERVER_NAME: Device not configured
</pre><p><strong>Solution:</strong></p><p><code>umount</code> the server then do <code>sshfs</code>. Note: Make sure the remote files are not used when <code>umount</code>.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">umount</span> SERVER_NAME
sshfs USER_NAME@SERVER_IP:PATH_TO_THE_REMOTE_FOLDER_YOU_WANT_TO_ACCESS SERVER_NAME
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The loading may be slow, which depends on the size of the remote server path you are trying to access.</p><hr class="footnotes-sep">`,23),h={class:"footnotes"},f={class:"footnotes-list"},u={id:"footnote1",class:"footnote-item"},p={href:"https://support.apple.com/guide/mac-help/connect-mac-shared-computers-servers-mchlp1140/mac#:~:text=In%20the%20Finder%20on%20your,Click%20Connect",target:"_blank",rel:"noopener noreferrer"},_=s("https://support.apple.com/guide/mac-help/connect-mac-shared-computers-servers-mchlp1140/mac#:~:text=In the Finder on your,Click Connect"),m=s(". "),b=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"\u21A9\uFE0E",-1),v={id:"footnote2",class:"footnote-item"},g={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},E=s("https://brew.sh/"),R=s(),k=e("a",{href:"#footnote-ref2",class:"footnote-backref"},"\u21A9\uFE0E",-1),w={id:"footnote3",class:"footnote-item"},S={href:"https://github.com/libfuse/sshfs",target:"_blank",rel:"noopener noreferrer"},A=s("https://github.com/libfuse/sshfs"),T=s(),x=e("a",{href:"#footnote-ref3",class:"footnote-backref"},"\u21A9\uFE0E",-1),y={id:"footnote4",class:"footnote-item"},N={href:"https://www.freecodecamp.org/news/scp-linux-command-example-how-to-ssh-file-transfer-from-remote-to-local/",target:"_blank",rel:"noopener noreferrer"},M=s("https://www.freecodecamp.org/news/scp-linux-command-example-how-to-ssh-file-transfer-from-remote-to-local/"),O=s(),V=e("a",{href:"#footnote-ref4",class:"footnote-backref"},"\u21A9\uFE0E",-1);function C(F,I){const o=c("ExternalLinkIcon");return a(),r("div",null,[d,e("section",h,[e("ol",f,[e("li",u,[e("p",null,[e("a",p,[_,n(o)]),m,b])]),e("li",v,[e("p",null,[e("a",g,[E,n(o)]),R,k])]),e("li",w,[e("p",null,[e("a",S,[A,n(o)]),T,x])]),e("li",y,[e("p",null,[e("a",N,[M,n(o)]),O,V])])])])])}const L=t(l,[["render",C],["__file","sshfs.html.vue"]]);export{L as default};