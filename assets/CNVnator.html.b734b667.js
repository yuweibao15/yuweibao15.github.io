import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as l,b as e,d as s,e as n,f as t,r as i}from"./app.1eb191a1.js";const c={},d=e("p",null,[e("code",null,"CNVnator"),n(" is a tool for CNV discovery and genotyping from depth-of-coverage by mapped reads.")],-1),p=e("h2",{id:"installation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),n(" Installation")],-1),m=e("h3",{id:"pre-requirements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pre-requirements","aria-hidden":"true"},"#"),n(" Pre-requirements")],-1),h=n("Install "),u=e("code",null,"ROOT",-1),v=n(": "),b={href:"https://root.cern/install/",target:"_blank",rel:"noopener noreferrer"},_=n("https://root.cern/install/"),g=n("Set up "),k=e("code",null,"ROOT",-1),f=n(" environment variables: "),C={href:"https://root.cern.ch/root/html534/guides/users-guide/GettingStarted.html",target:"_blank",rel:"noopener noreferrer"},N=n("https://root.cern.ch/root/html534/guides/users-guide/GettingStarted.html"),V=n("Download readline library: "),x={href:"https://tiswww.case.edu/php/chet/readline/rltop.html",target:"_blank",rel:"noopener noreferrer"},y=n("https://tiswww.case.edu/php/chet/readline/rltop.html"),w=t(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Install ROOT package</span>
conda config <span class="token parameter variable">--set</span> channel_priority strict
conda create <span class="token parameter variable">-c</span> conda-forge <span class="token parameter variable">--name</span> CNVnaotr root
conda activate CNVnaotr
<span class="token comment"># Set up ROOT environment path on HP-UX system</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">SHLIB_PATH</span><span class="token operator">=</span><span class="token variable">$SHLIB_PATH</span><span class="token builtin class-name">:</span><span class="token variable">$ROOTSYS</span>/lib
<span class="token comment"># Check if system has GNU readline library installed</span>
dpkg <span class="token parameter variable">-l</span> <span class="token operator">|</span> <span class="token function">grep</span> libreadline-dev
<span class="token comment"># If system has it, ignore the following to download:</span>
<span class="token comment"># yum install readline-devel         # RPM-based systems</span>
<span class="token comment"># apt-get install libreadline-dev   # Debian-based systems</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cnvnator" tabindex="-1"><a class="header-anchor" href="#cnvnator" aria-hidden="true">#</a> CNVnator</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># wget https://github.com/abyzovlab/CNVnator/releases/download/v0.4.1/CNVnator_v0.4.1.zip</span>
conda <span class="token function">install</span> cnvnator <span class="token parameter variable">-c</span> bioconda <span class="token parameter variable">-c</span> conda-forge

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="doesn-t-work" tabindex="-1"><a class="header-anchor" href="#doesn-t-work" aria-hidden="true">#</a> Doesn&#39;t work</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Install CNVnator from Github</span>
<span class="token function">git</span> clone https://github.com/abyzovlab/CNVnator.git
<span class="token builtin class-name">cd</span> CNVnator
<span class="token comment"># Find the /path/to/src/samtools</span>
<span class="token function">which</span> samtools
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /path/to/src/samtools samtools
<span class="token function">make</span> <span class="token assign-left variable">OMP</span><span class="token operator">=</span>no
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre>Compiling with NO parallel support
g++ -O3 -std=c++11 -DCNVNATOR_VERSION=\\&quot;v0.4.1\\&quot;  -I/home/ybao2/anaconda3/envs/CNVnaotr/include      -Isamtools -c cnvnator.cpp -o obj/cnvnator.o
cc1plus: warning: samtools: not a directory
In file included from cnvnator.cpp:14:
AliParser.hh:10:10: fatal error: sam.h: No such file or directory
   10 | #include &quot;sam.h&quot;
      |          ^~~~~~~
compilation terminated.
make: *** [Makefile:70: obj/cnvnator.o] Error 1
</pre><h3 id="control-freec" tabindex="-1"><a class="header-anchor" href="#control-freec" aria-hidden="true">#</a> Control-FreeC</h3>`,7),E=n("Ref: "),O={href:"https://github.com/BoevaLab/FREEC",target:"_blank",rel:"noopener noreferrer"},R=n("https://github.com/BoevaLab/FREEC"),I=t(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/BoevaLab/FREEC.git
<span class="token builtin class-name">cd</span> FREEC/
<span class="token builtin class-name">cd</span> src/
<span class="token function">make</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Test:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>PATH_TO_FREEC/freec <span class="token parameter variable">-conf</span> myConfig.txt <span class="token parameter variable">-sample</span> sample.bam <span class="token parameter variable">-control</span> control.bam
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),T=n("Tutorial: "),L={href:"https://github.com/LangYeastEvoLab/ControlFreec",target:"_blank",rel:"noopener noreferrer"},S=n("https://github.com/LangYeastEvoLab/ControlFreec");function F(B,P){const a=i("ExternalLinkIcon");return r(),l("div",null,[d,p,m,e("ul",null,[e("li",null,[h,u,v,e("a",b,[_,s(a)])]),e("li",null,[g,k,f,e("a",C,[N,s(a)])]),e("li",null,[V,e("a",x,[y,s(a)])])]),w,e("p",null,[E,e("a",O,[R,s(a)])]),I,e("p",null,[T,e("a",L,[S,s(a)])])])}const A=o(c,[["render",F],["__file","CNVnator.html.vue"]]);export{A as default};
