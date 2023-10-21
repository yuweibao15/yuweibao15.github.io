import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as r,b as a,d as n,f as i,e as s,r as l}from"./app.8b65c273.js";const p={},c=i(`<p>A tool to tag reads in target bam based on other bam files <sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>conda create <span class="token parameter variable">--name</span> py38_readtagger <span class="token assign-left variable">python</span><span class="token operator">=</span><span class="token number">3.8</span>
conda activate py38_readtagger
<span class="token function">mkdir</span> readtagger
<span class="token builtin class-name">cd</span> readtagger
pip <span class="token function">install</span> <span class="token parameter variable">-r</span> requirements.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>requirements.txt</code> <sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>bcbio<span class="token operator">-</span>gff<span class="token operator">==</span><span class="token number">0.6</span><span class="token number">.6</span>
biopython<span class="token operator">==</span><span class="token number">1.74</span>
cached_property<span class="token operator">==</span><span class="token number">1.5</span><span class="token number">.1</span>
click<span class="token operator">==</span><span class="token number">7.0</span>
compare<span class="token operator">-</span>reads<span class="token operator">==</span><span class="token number">0.0</span><span class="token number">.1</span>
contextlib2<span class="token operator">==</span><span class="token number">0.6</span><span class="token number">.0</span><span class="token punctuation">.</span>post1
pandas<span class="token operator">==</span><span class="token number">1.0</span><span class="token number">.3</span>
pysam<span class="token operator">==</span><span class="token number">0.15</span><span class="token number">.4</span>
scipy<span class="token operator">==</span><span class="token number">1.3</span><span class="token number">.1</span>
sortedcontainers<span class="token operator">==</span><span class="token number">2.1</span><span class="token number">.0</span>
multiprocessing_logging<span class="token operator">==</span><span class="token number">0.3</span><span class="token number">.0</span>
edlib<span class="token operator">==</span><span class="token number">1.3</span><span class="token number">.4</span>
mappy<span class="token operator">==</span><span class="token number">2.17</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre>Successfully installed bcbio-gff-0.6.6 biopython-1.74 cached_property-1.5.1 click-7.0 compare-reads-0.0.1 contextlib2-0.6.0.post1 edlib-1.3.4 mappy-2.17 multiprocessing_logging-0.3.0 numpy-1.24.3 pandas-1.0.3 pysam-0.15.4 python-dateutil-2.8.2 pytz-2023.3 scipy-1.3.1 six-1.16.0 sortedcontainers-2.1.0
</pre><p>Then</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pip <span class="token function">install</span> readtagger
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>To tag reads in file a.bam with file b.bam and output to path output.bam</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>readtagger <span class="token parameter variable">--help</span>
readtagger <span class="token parameter variable">--tag_file</span> a.bam <span class="token parameter variable">--annotate_with</span> b.bam ----output_file output.bam
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr class="footnotes-sep">`,12),d={class:"footnotes"},b={class:"footnotes-list"},u={id:"footnote1",class:"footnote-item"},m={href:"https://github.com/bardin-lab/readtagger",target:"_blank",rel:"noopener noreferrer"},h=s("https://github.com/bardin-lab/readtagger"),v=s(),g=a("a",{href:"#footnote-ref1",class:"footnote-backref"},"\u21A9\uFE0E",-1),k={id:"footnote2",class:"footnote-item"},f={href:"https://github.com/bardin-lab/readtagger/blob/master/requirements.txt",target:"_blank",rel:"noopener noreferrer"},_=s("https://github.com/bardin-lab/readtagger/blob/master/requirements.txt"),x=s(),y=a("a",{href:"#footnote-ref2",class:"footnote-backref"},"\u21A9\uFE0E",-1);function q(N,V){const e=l("ExternalLinkIcon");return o(),r("div",null,[c,a("section",d,[a("ol",b,[a("li",u,[a("p",null,[a("a",m,[h,n(e)]),v,g])]),a("li",k,[a("p",null,[a("a",f,[_,n(e)]),x,y])])])])])}const E=t(p,[["render",q],["__file","readtagger.html.vue"]]);export{E as default};