import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as a,f as e}from"./app.4a9d5c55.js";const i={},c=e(`<h2 id="installation-v3-3-0" tabindex="-1"><a class="header-anchor" href="#installation-v3-3-0" aria-hidden="true">#</a> Installation (v3.3.0)</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> https://github.com/bioinform/somaticseq/archive/refs/tags/v3.3.0.zip
<span class="token function">unzip</span> v3.3.0.zip
<span class="token builtin class-name">cd</span> somaticseq-3.3.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> https://github.com/bioinform/somaticseq/archive/refs/tags/v3.7.3.zip
<span class="token function">unzip</span> v3.7.3.zip
<span class="token builtin class-name">cd</span> somaticseq-3.7.3
./setup.py <span class="token function">install</span>

conda activate py38_GR
conda <span class="token function">install</span> <span class="token parameter variable">-c</span> bioconda somaticseq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),t=[c];function l(o,d){return n(),a("div",null,t)}const p=s(i,[["render",l],["__file","SomaticSeq.html.vue"]]);export{p as default};
