import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as i,b as e,d as a,f as c,e as s,r}from"./app.521806a9.js";const l={},p=c(`<h2 id="survivor" tabindex="-1"><a class="header-anchor" href="#survivor" aria-hidden="true">#</a> SURVIVOR <sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></h2><p>It can be used to identify consensus calling or to compare SVs across samples.</p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/fritzsedlazeck/SURVIVOR.git
<span class="token builtin class-name">cd</span> SURVIVOR/Debug
<span class="token function">make</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><p>It is a common practice to use multiple callers for one sample <sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup> First, we collect all files that we want to merge in a file. You might want to consider sorting the vcf files prior to merging.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ls</span> *vcf <span class="token operator">&gt;</span> sample_files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then use <code>SURVIVOR</code> to obtain a call set. Using the parameters suggested by this paper <sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup>:</p><p>Consensus somatic SVs from multiple somatic SV callsets were generated using \u201Cmerge\u201D function of SURVIVOR (version: 1.0.7) with the parameters \u201Cmax distance between breakpoints = 1000,\u201D \u201CMinimum number of supporting caller = 2,\u201D and \u201CMinimum size of SVs to be taken into account = 50.\u201D</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./SURVIVOR merge sample_files <span class="token number">1000</span> <span class="token number">2</span> <span class="token number">1</span> <span class="token number">1</span> <span class="token number">0</span> <span class="token number">50</span> sample_merged.vcf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Parameters</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>File <span class="token keyword">with</span> <span class="token constant">VCF</span> names and paths
max distance between <span class="token function">breakpoints</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token operator">-</span><span class="token number">1</span> percent <span class="token keyword">of</span> length<span class="token punctuation">,</span> <span class="token number">1</span><span class="token operator">-</span> number <span class="token keyword">of</span> bp<span class="token punctuation">)</span> 
Minimum number <span class="token keyword">of</span> supporting caller
Take the type into <span class="token function">account</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">==</span>yes<span class="token punctuation">,</span> <span class="token keyword">else</span> no<span class="token punctuation">)</span>
Take the strands <span class="token keyword">of</span> SVs into <span class="token function">account</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">==</span>yes<span class="token punctuation">,</span> <span class="token keyword">else</span> no<span class="token punctuation">)</span>
Disabled<span class="token punctuation">.</span>
Minimum size <span class="token keyword">of</span> SVs to be taken into account<span class="token punctuation">.</span>
Output <span class="token constant">VCF</span> filename
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>This will merge all the vcf files specified in sample_files together using a maximum allowed distance of 1kb, as measured pairwise between breakpoints (begin1 vs begin2, end1 vs end2). Furthermore we ask SURVIVOR only to report calls supported by 2 callers and they have to agree on the type (1) and on the strand (1) of the SV. Note you can change this behavior by altering the numbers from 1 to e.g. 0. In addition, we told SURVIVOR to only compare SV that are at least 30bp long and print the output in sample_merged.vcf.<sup class="footnote-ref"><a href="#footnote2">[2:1]</a><a class="footnote-anchor" id="footnote-ref2:1"></a></sup></p><hr class="footnotes-sep">`,13),d={class:"footnotes"},u={class:"footnotes-list"},f={id:"footnote1",class:"footnote-item"},h={href:"https://github.com/fritzsedlazeck/SURVIVOR",target:"_blank",rel:"noopener noreferrer"},m=s("https://github.com/fritzsedlazeck/SURVIVOR"),b=s(),k=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"\u21A9\uFE0E",-1),v={id:"footnote2",class:"footnote-item"},_={href:"https://github.com/fritzsedlazeck/SURVIVOR/wiki",target:"_blank",rel:"noopener noreferrer"},g=s("https://github.com/fritzsedlazeck/SURVIVOR/wiki"),V=s(),w=e("a",{href:"#footnote-ref2",class:"footnote-backref"},"\u21A9\uFE0E",-1),R=s(),S=e("a",{href:"#footnote-ref2:1",class:"footnote-backref"},"\u21A9\uFE0E",-1),y={id:"footnote3",class:"footnote-item"},I={href:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9648002/#Sec11",target:"_blank",rel:"noopener noreferrer"},x=s("https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9648002/#Sec11"),O=s(),U=e("a",{href:"#footnote-ref3",class:"footnote-backref"},"\u21A9\uFE0E",-1);function z(C,M){const n=r("ExternalLinkIcon");return o(),i("div",null,[p,e("section",d,[e("ol",u,[e("li",f,[e("p",null,[e("a",h,[m,a(n)]),b,k])]),e("li",v,[e("p",null,[e("a",_,[g,a(n)]),V,w,R,S])]),e("li",y,[e("p",null,[e("a",I,[x,a(n)]),O,U])])])])])}const T=t(l,[["render",z],["__file","survivor.html.vue"]]);export{T as default};
