import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as i,b as e,d as o,f as r,e as a,r as l}from"./app.7f4d4b55.js";const c={},d=r(`<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation <sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> https://github.com/BoevaLab/FREEC/archive/refs/tags/v11.6.tar.gz
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> v11.6.tar.gz

<span class="token builtin class-name">cd</span> PATH_TO/FREEC-11.6/src/
<span class="token function">make</span>

PATH_TO/FREEC-11.6/src/freec <span class="token parameter variable">--help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><h3 id="running-control-freec-on-a-test-data" tabindex="-1"><a class="header-anchor" href="#running-control-freec-on-a-test-data" aria-hidden="true">#</a> Running Control-FREEC on a test data</h3><p>Download a test dataset for HCC1143 and HCC1143-BL (from Chiang et al., 2009):</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> test_FREEC
<span class="token builtin class-name">cd</span> test_FREEC
<span class="token function">wget</span> http://xfer.curie.fr/get/l4nQtrIsGmo/test.zip
PATH_TO/FREEC-11.6/src/freec <span class="token parameter variable">-conf</span> myConfig.txt <span class="token parameter variable">-sample</span> sample.bam <span class="token parameter variable">-control</span> control.bam
<span class="token comment"># Or</span>
<span class="token comment"># PATH_TO/FREEC-11.6/src/freec -conf myConfig.txt (if BAM files are provided directly in the config file)</span>

	/PATH_TO_FREEC/freec <span class="token parameter variable">-conf</span> config_ctrl.txt

to run it without a control sample <span class="token punctuation">(</span>50kb window<span class="token punctuation">)</span>:
	/PATH_TO_FREEC/freec <span class="token parameter variable">-conf</span> config_GC.txt

to run it only <span class="token keyword">for</span> the normal sample <span class="token punctuation">(</span>50kb window<span class="token punctuation">)</span>:
	/PATH_TO_FREEC/freec <span class="token parameter variable">-conf</span> config_BL.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="prepare-input-files" tabindex="-1"><a class="header-anchor" href="#prepare-input-files" aria-hidden="true">#</a> Prepare input files</h2><h3 id="generate-a-chromosome-length-file-from-a-fasta-file" tabindex="-1"><a class="header-anchor" href="#generate-a-chromosome-length-file-from-a-fasta-file" aria-hidden="true">#</a> Generate a chromosome length file from a fasta file</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>samtools faidx your_file.fasta
<span class="token function">cut</span> -f1,2 your_file.fasta.fai <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-w</span> <span class="token parameter variable">-E</span> <span class="token string">&#39;(2R|2L|3R|3L|X|Y|4)&#39;</span> <span class="token operator">&gt;</span> filtered_chromosomes.txt

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr class="footnotes-sep">`,10),p={class:"footnotes"},f={class:"footnotes-list"},m={id:"footnote1",class:"footnote-item"},u={href:"http://boevalab.inf.ethz.ch/FREEC/tutorial.html",target:"_blank",rel:"noopener noreferrer"},h=a("http://boevalab.inf.ethz.ch/FREEC/tutorial.html"),v=a(),b=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"\u21A9\uFE0E",-1);function _(g,k){const n=l("ExternalLinkIcon");return t(),i("div",null,[d,e("section",p,[e("ol",f,[e("li",m,[e("p",null,[e("a",u,[h,o(n)]),v,b])])])])])}const x=s(c,[["render",_],["__file","Control_FreeC.html.vue"]]);export{x as default};
