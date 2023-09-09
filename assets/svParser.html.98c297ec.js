import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as t,b as a,d as l,f as r,e,r as i}from"./app.1714ebeb.js";const c={},p=r(`<p>svParser <sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup> is a tool to filter, genotype, annotate and combine VCF files from structural variant callers <code>LUMPY</code>, <code>DELLY</code> and <code>novobreak</code>.</p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/nriddiford/svParser.git
<span class="token function">wget</span> -O- http://cpanmin.us <span class="token operator">|</span> perl - <span class="token parameter variable">-l</span> ~/perl5 App::cpanminus local::lib
<span class="token builtin class-name">eval</span> <span class="token variable"><span class="token variable">\`</span>perl <span class="token parameter variable">-I</span> ~/perl5/lib/perl5 -Mlocal::lib<span class="token variable">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Add the following lines to your <code>bash_profile</code> (or <code>.profile/.bashrc/</code>):</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">eval</span> <span class="token variable"><span class="token variable">\`</span>perl <span class="token parameter variable">-I</span> ~/perl5/lib/perl5 -Mlocal::lib<span class="token variable">\`</span></span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">MANPATH</span><span class="token operator">=</span><span class="token environment constant">$HOME</span>/perl5/man:<span class="token variable">$MANPATH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="summarize-variants" tabindex="-1"><a class="header-anchor" href="#summarize-variants" aria-hidden="true">#</a> Summarize variants</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>perl script/svParse.pl <span class="token parameter variable">-v</span> data/Droso_R7.lumpy.vcf <span class="token parameter variable">-m</span> l
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Important: Variants called by <code>LUMPY</code> must also be genotyped by <code>SVTyper</code></p><hr class="footnotes-sep">`,9),d={class:"footnotes"},b={class:"footnotes-list"},v={id:"footnote1",class:"footnote-item"},m={href:"https://github.com/bardin-lab/svParser",target:"_blank",rel:"noopener noreferrer"},h=e("https://github.com/bardin-lab/svParser"),u=e(),f=a("a",{href:"#footnote-ref1",class:"footnote-backref"},"\u21A9\uFE0E",-1);function _(k,g){const s=i("ExternalLinkIcon");return o(),t("div",null,[p,a("section",d,[a("ol",b,[a("li",v,[a("p",null,[a("a",m,[h,l(s)]),u,f])])])])])}const y=n(c,[["render",_],["__file","svParser.html.vue"]]);export{y as default};