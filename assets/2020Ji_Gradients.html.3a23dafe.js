import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as i,b as e,d as n,f as l,e as s,r}from"./app.3dfb23b7.js";const c={},d=l(`<p>Paper title: Gradients do grow on trees: a linear-time O(N)-dimensional gradient for statistical phylogenetics <sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><h2 id="reproduce-the-analyses" tabindex="-1"><a class="header-anchor" href="#reproduce-the-analyses" aria-hidden="true">#</a> Reproduce the analyses</h2><p>Follow the instruction on <sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup>:</p><h3 id="setting-up-beagle" tabindex="-1"><a class="header-anchor" href="#setting-up-beagle" aria-hidden="true">#</a> Setting up BEAGLE</h3><p>Using Linux system, do the following <sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup> but get the <code>hmc-clock</code> branch.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> cmake build-essential autoconf automake libtool <span class="token function">git</span> pkg-config openjdk-11-jdk
<span class="token function">git</span> clone <span class="token parameter variable">-b</span> hmc-clock https://github.com/beagle-dev/beagle-lib.git
<span class="token builtin class-name">cd</span> beagle-lib
<span class="token function">mkdir</span> build
<span class="token builtin class-name">cd</span> build
cmake <span class="token parameter variable">-DCMAKE_INSTALL_PREFIX:PATH</span><span class="token operator">=</span><span class="token environment constant">$HOME</span> <span class="token punctuation">..</span>
<span class="token function">make</span> <span class="token function">install</span>
cmake <span class="token punctuation">..</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">LD_LIBRARY_PATH</span><span class="token operator">=</span><span class="token environment constant">$HOME</span>/lib:<span class="token variable">$LD_LIBRARY_PATH</span>
<span class="token function">make</span> <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="setting-up-beast" tabindex="-1"><a class="header-anchor" href="#setting-up-beast" aria-hidden="true">#</a> Setting up BEAST</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone <span class="token parameter variable">-b</span> hmc-clock https://github.com/beast-dev/beast-mcmc.git
<span class="token builtin class-name">cd</span> beast-mcmc
ant
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="reproducing-the-analyses" tabindex="-1"><a class="header-anchor" href="#reproducing-the-analyses" aria-hidden="true">#</a> Reproducing the analyses</h3><p>Prepare files and folders:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/suchard-group/hmc_clock_manuscript_supplement.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> test_results
<span class="token builtin class-name">cd</span> test_results
<span class="token assign-left variable">beast_path</span><span class="token operator">=</span>/media/XLStorage/ybao2/gradient_paper/
<span class="token assign-left variable">xml_path</span><span class="token operator">=</span>/media/XLStorage/ybao2/gradient_paper/hmc_clock_manuscript_supplement
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="west-nile-virus" tabindex="-1"><a class="header-anchor" href="#west-nile-virus" aria-hidden="true">#</a> West Nile Virus</h4><ul><li>Optimization <ul><li>Analytic gradient<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> <span class="token function">java</span> <span class="token parameter variable">-jar</span> <span class="token parameter variable">-Djava.library.path</span><span class="token operator">=</span>/usr/local/lib where_beast_is_git_cloned/beast-mcmc/build/dist/beast.jar <span class="token parameter variable">-beagle_SSE_off</span> <span class="token parameter variable">-load_state</span> where_this_repository_is_stored/xmls/WNV/WNV_skyline_optimization_save <span class="token parameter variable">-seed</span> <span class="token number">666</span> <span class="token parameter variable">-overwrite</span> where_this_repository_is_stored/xmls/WNV/WNV_HMC_skyline_MLE_Analytic.xml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li></ul><hr class="footnotes-sep">`,15),p={class:"footnotes"},u={class:"footnotes-list"},h={id:"footnote1",class:"footnote-item"},b=s("Ji X, Zhang Z, Holbrook A, Nishimura A, Baele G, Rambaut A, Lemey P, Suchard MA. 2019. Gradients do grow on trees: a linear-time O(N)-dimensional gradient for statistical phylogenetics. Available from: "),m={href:"https://arxiv.org/pdf/1905.12146.pdf",target:"_blank",rel:"noopener noreferrer"},_=s("https://arxiv.org/pdf/1905.12146.pdf"),f=s(". "),v=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"\u21A9\uFE0E",-1),g={id:"footnote2",class:"footnote-item"},k={href:"https://github.com/suchard-group/hmc_clock_manuscript_supplement",target:"_blank",rel:"noopener noreferrer"},x=s("https://github.com/suchard-group/hmc_clock_manuscript_supplement"),y=s(),A=e("a",{href:"#footnote-ref2",class:"footnote-backref"},"\u21A9\uFE0E",-1),L={id:"footnote3",class:"footnote-item"},N={href:"https://github.com/beagle-dev/beagle-lib/wiki/LinuxInstallInstructions",target:"_blank",rel:"noopener noreferrer"},w=s("https://github.com/beagle-dev/beagle-lib/wiki/LinuxInstallInstructions"),E=s(),I=e("a",{href:"#footnote-ref3",class:"footnote-backref"},"\u21A9\uFE0E",-1);function S(V,B){const a=r("ExternalLinkIcon");return o(),i("div",null,[d,e("section",p,[e("ol",u,[e("li",h,[e("p",null,[b,e("a",m,[_,n(a)]),f,v])]),e("li",g,[e("p",null,[e("a",k,[x,n(a)]),y,A])]),e("li",L,[e("p",null,[e("a",N,[w,n(a)]),E,I])])])])])}const P=t(c,[["render",S],["__file","2020Ji_Gradients.html.vue"]]);export{P as default};
