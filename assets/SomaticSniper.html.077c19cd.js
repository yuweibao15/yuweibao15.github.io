import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as i,b as e,d as a,f as r,e as s,r as c}from"./app.d483d77f.js";const l={},p=r(`<p>Here, we are learning how to use <code>SomaticSniper</code> to identify single nucleotide positions that are different between tumor and normal and further to filter variants using some provided Perl scripts <sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup> and <code>bam-readcount</code> <sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup>.</p><h2 id="_1-somaticsniper-v1-0-5-0" tabindex="-1"><a class="header-anchor" href="#_1-somaticsniper-v1-0-5-0" aria-hidden="true">#</a> 1. SomaticSniper (v1.0.5.0) <sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup></h2><h3 id="purpose" tabindex="-1"><a class="header-anchor" href="#purpose" aria-hidden="true">#</a> Purpose</h3><p><code>SomaticSniper</code> identifies single nucleotide positions that are different between tumor and normal.</p><h3 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Build dependencies for Ubuntu</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> build-essential git-core cmake zlib1g-dev libncurses-dev

<span class="token comment"># Clone the git repo</span>
<span class="token function">git</span> clone https://github.com/genome/somatic-sniper.git

<span class="token comment"># Build SomaticSniper</span>
<span class="token function">mkdir</span> somatic-sniper/build
<span class="token builtin class-name">cd</span> somatic-sniper/build
cmake <span class="token punctuation">..</span>/
<span class="token function">make</span> deps
<span class="token function">make</span> <span class="token parameter variable">-j</span>
<span class="token function">make</span> <span class="token builtin class-name">test</span>

<span class="token comment"># Add path to environment ~/.bashrc</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span>:/PATH_TO/somatic-sniper/build/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bam-somaticsniper <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token parameter variable">-f</span> <span class="token operator">&lt;</span>ref.fasta<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>tumor.bam<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>normal.bam<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>snv_output_file<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Recommended setting:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bam-somaticsniper <span class="token parameter variable">-Q</span> <span class="token number">40</span> <span class="token parameter variable">-G</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">-f</span> reference.fa tumor.bam normal.bam output.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Recommended seeting by GR paper author: <sup class="footnote-ref"><a href="#footnote4">[4]</a><a class="footnote-anchor" id="footnote-ref4"></a></sup></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bam-somaticsniper <span class="token parameter variable">-Q</span> <span class="token number">40</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">-f</span> reference.fa tumor.bam normal.bam output.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Parameters</p><p>-f FILE REQUIRED reference sequence in the FASTA format -Q INT filtering somatic snv output with somatic quality less than INT [15] -G FLAG do not report Gain of Referene variants as determined by genotypes -L FLAG do not report LOH variants as determined by genotypes</p></div><h2 id="_2-bam-readcount" tabindex="-1"><a class="header-anchor" href="#_2-bam-readcount" aria-hidden="true">#</a> 2. <code>bam-readcount</code></h2><p>TBA</p><h3 id="_3-basic-filtering-with-provided-perl-scripts" tabindex="-1"><a class="header-anchor" href="#_3-basic-filtering-with-provided-perl-scripts" aria-hidden="true">#</a> 3. Basic filtering with provided Perl scripts</h3><p>A small number of basic Perl scripts are included in the SomaticSniper package (located in src/scripts of the source code release) <sup class="footnote-ref"><a href="#footnote1">[1:1]</a><a class="footnote-anchor" id="footnote-ref1:1"></a></sup> TBA</p><hr class="footnotes-sep">`,18),d={class:"footnotes"},m={class:"footnotes-list"},u={id:"footnote1",class:"footnote-item"},h={href:"https://github.com/genome/somatic-sniper/tree/master/src/scripts",target:"_blank",rel:"noopener noreferrer"},f=s("https://github.com/genome/somatic-sniper/tree/master/src/scripts"),b=s(),v=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"\u21A9\uFE0E",-1),_=s(),g=e("a",{href:"#footnote-ref1:1",class:"footnote-backref"},"\u21A9\uFE0E",-1),k={id:"footnote2",class:"footnote-item"},x={href:"https://github.com/genome/bam-readcount",target:"_blank",rel:"noopener noreferrer"},S=s("https://github.com/genome/bam-readcount"),A=s(),T=e("a",{href:"#footnote-ref2",class:"footnote-backref"},"\u21A9\uFE0E",-1),y={id:"footnote3",class:"footnote-item"},L={href:"https://github.com/genome/somatic-sniper",target:"_blank",rel:"noopener noreferrer"},w=s("https://github.com/genome/somatic-sniper"),B=s(),P=e("a",{href:"#footnote-ref3",class:"footnote-backref"},"\u21A9\uFE0E",-1),I={id:"footnote4",class:"footnote-item"},E={href:"https://genome.cshlp.org/content/early/2021/06/24/gr.268441.120",target:"_blank",rel:"noopener noreferrer"},G=s("https://genome.cshlp.org/content/early/2021/06/24/gr.268441.120"),N=s(),R=e("a",{href:"#footnote-ref4",class:"footnote-backref"},"\u21A9\uFE0E",-1);function H(F,Q){const n=c("ExternalLinkIcon");return o(),i("div",null,[p,e("section",d,[e("ol",m,[e("li",u,[e("p",null,[e("a",h,[f,a(n)]),b,v,_,g])]),e("li",k,[e("p",null,[e("a",x,[S,a(n)]),A,T])]),e("li",y,[e("p",null,[e("a",L,[w,a(n)]),B,P])]),e("li",I,[e("p",null,[e("a",E,[G,a(n)]),N,R])])])])])}const q=t(l,[["render",H],["__file","SomaticSniper.html.vue"]]);export{q as default};
