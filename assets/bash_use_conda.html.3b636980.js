import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as i,b as n,d as t,f as c,e,r}from"./app.8b65c273.js";const d={},l=c(`<h2 id="issue" tabindex="-1"><a class="header-anchor" href="#issue" aria-hidden="true">#</a> Issue:</h2><p>When I try to run a bash script <code>TEST_activate_conda.sh</code> like following:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

conda activate py38_GR

samclip <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>where my base conda doesn&#39;t have the software <code>samclip</code>, but the <code>py38_GR</code> conda environment has the software.</p><p>I see the error:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">CommandNotFoundError</span><span class="token operator">:</span> Your shell has not been properly configured to use <span class="token string">&#39;conda activate&#39;</span><span class="token punctuation">.</span>
To initialize your shell<span class="token punctuation">,</span> run

    $ conda init <span class="token operator">&lt;</span><span class="token constant">SHELL_NAME</span><span class="token operator">&gt;</span>

Currently supported shells are<span class="token operator">:</span>
  <span class="token operator">-</span> bash
  <span class="token operator">-</span> fish
  <span class="token operator">-</span> tcsh
  <span class="token operator">-</span> xonsh
  <span class="token operator">-</span> zsh
  <span class="token operator">-</span> powershell

See <span class="token string">&#39;conda init --help&#39;</span> <span class="token keyword">for</span> more information and options<span class="token punctuation">.</span>

<span class="token constant">IMPORTANT</span><span class="token operator">:</span> You may need to close and restart your shell after running <span class="token string">&#39;conda init&#39;</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="solution" tabindex="-1"><a class="header-anchor" href="#solution" aria-hidden="true">#</a> Solution <sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></h2><p>Firstly, find the path to anaconda</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>conda <span class="token function">env</span> list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then modify the script like following</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">source</span> PATH_TO/anaconda3/etc/profile.d/conda.sh

conda activate py38_GR

samclip <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then we see</p><pre>samclip 0.4.0
</pre><h2 id="attempt-that-doesn-t-work" tabindex="-1"><a class="header-anchor" href="#attempt-that-doesn-t-work" aria-hidden="true">#</a> Attempt that doesn&#39;t work</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>conda init <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre>modified      PATH_TO_anaconda3/condabin/conda
modified      PATH_TO_anaconda3/bin/conda
modified      PATH_TO_anaconda3/bin/conda-env
no change     PATH_TO_anaconda3/bin/activate
no change     PATH_TO_anaconda3/bin/deactivate
no change     PATH_TO_anaconda3/etc/profile.d/conda.sh
no change     PATH_TO_anaconda3/etc/fish/conf.d/conda.fish
no change     PATH_TO_anaconda3/shell/condabin/Conda.psm1
no change     PATH_TO_anaconda3/shell/condabin/conda-hook.ps1
no change     PATH_TO_anaconda3/lib/python3.9/site-packages/xontrib/conda.xsh
no change     PATH_TO_anaconda3/etc/profile.d/conda.csh
no change     PATH_TO/.bashrc
</pre><p>Kill this terminal, start a new terminal but it doesn&#39;t work.</p><hr class="footnotes-sep">`,18),p={class:"footnotes"},h={class:"footnotes-list"},u={id:"footnote1",class:"footnote-item"},v={href:"https://stackoverflow.com/questions/61915607/commandnotfounderror-your-shell-has-not-been-properly-configured-to-use-conda",target:"_blank",rel:"noopener noreferrer"},m=e("https://stackoverflow.com/questions/61915607/commandnotfounderror-your-shell-has-not-been-properly-configured-to-use-conda"),b=e(),_=n("a",{href:"#footnote-ref1",class:"footnote-backref"},"\u21A9\uFE0E",-1);function f(k,g){const a=r("ExternalLinkIcon");return o(),i("div",null,[l,n("section",p,[n("ol",h,[n("li",u,[n("p",null,[n("a",v,[m,t(a)]),b,_])])])])])}const x=s(d,[["render",f],["__file","bash_use_conda.html.vue"]]);export{x as default};
