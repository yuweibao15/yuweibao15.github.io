import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as s,f as e}from"./app.589580af.js";const i={},t=e(`<p>If you want to use a public aviliable reference.fasta, eg. Drosophila Melanogaster r6.39 from FlyBase.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> Ref_genome
<span class="token builtin class-name">cd</span> Ref_genome
<span class="token function">wget</span> http://ftp.flybase.net/genomes/Drosophila_melanogaster/dmel_r6.39_FB2021_02/fasta/dmel-all-chromosome-r6.39.fasta.gz

<span class="token comment"># Unizip .gz</span>
gunzip dmel-all-chromosome-r6.39.fasta.gz
<span class="token comment"># Create .fai</span>
bwa index dmel-all-chromosome-r6.39.fasta
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This step creates</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">.</span>fasta<span class="token punctuation">.</span>amb
<span class="token punctuation">.</span>fasta<span class="token punctuation">.</span>ann
<span class="token punctuation">.</span>fasta<span class="token punctuation">.</span>bwt
<span class="token punctuation">.</span>fasta<span class="token punctuation">.</span>pac
<span class="token punctuation">.</span>fasta<span class="token punctuation">.</span>sa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[t];function c(o,p){return n(),s("div",null,l)}const u=a(i,[["render",c],["__file","prepare_fasta.html.vue"]]);export{u as default};
