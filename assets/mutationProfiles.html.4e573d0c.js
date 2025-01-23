import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as i,f as e}from"./app.7f4d4b55.js";const a={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token function">git</span> clone https://github.com/nriddiford/mutationProfiles.git

<span class="token builtin class-name">cd</span> mutationProfiles

<span class="token comment"># BioPerl</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> cpanminus
<span class="token function">sudo</span> cpanm Bio::Perl

<span class="token comment"># vcfParse</span>
<span class="token function">git</span> clone https://github.com/nriddiford/vcfParse.git
<span class="token builtin class-name">cd</span> vcfParse

perl Makefile.PL
<span class="token function">make</span>
<span class="token function">make</span> <span class="token builtin class-name">test</span>
<span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[l];function t(o,d){return s(),i("div",null,c)}const m=n(a,[["render",t],["__file","mutationProfiles.html.vue"]]);export{m as default};
