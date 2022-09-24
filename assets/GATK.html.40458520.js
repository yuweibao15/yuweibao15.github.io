import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as n,b as e,d as t,e as s,f as i,r as c}from"./app.bff710e9.js";const l="/assets/GATK_preprocessing.82a226f3.png",d="/assets/GATK_CNV.dd607f29.png",p={},h=e("p",null,"GATK is a Genome Analysis Toolkit. Here are some notes about GATK:",-1),_=e("h2",{id:"gatk-data-pre-processing",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#gatk-data-pre-processing","aria-hidden":"true"},"#"),s(" GATK data pre-processing")],-1),m={href:"https://gatk.broadinstitute.org/hc/en-us/articles/360035535912-Data-pre-processing-for-variant-discovery",target:"_blank",rel:"noopener noreferrer"},g=s("GATK data pre-processing"),u=i('<p>Here is a workflow from GATK:</p><p><img src="'+l+`" alt="GATK_preprocessing.png" loading="lazy"></p><ol><li>Raw Mapped Reads (Bam) -&gt; <code>MarkDuplicates</code> Check and compare results</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>samtools view BEFORE_MARKDUPLICATES.bam <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>
samtools view AFTER_MARKDUPLICATES.bam <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>-&gt; <code>BaseRecalibrator</code> + <code>ApplyBQSR</code> -&gt; Analysis-Ready Rads (Bam)</li></ol><h2 id="gatk-somatic-short-variant-discovery-snvs-indels" tabindex="-1"><a class="header-anchor" href="#gatk-somatic-short-variant-discovery-snvs-indels" aria-hidden="true">#</a> GATK Somatic short variant discovery (SNVs + Indels)</h2>`,6),f={href:"https://gatk.broadinstitute.org/hc/en-us/articles/360035894731-Somatic-short-variant-discovery-SNVs-Indels-",target:"_blank",rel:"noopener noreferrer"},v=s("GATK Somatic short variant discovery (SNVs + Indels)"),k=e("h2",{id:"cnv",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cnv","aria-hidden":"true"},"#"),s(" CNV")],-1),b=e("p",null,"Here is a workflow from GATK:",-1),A=e("img",{src:d,alt:"GATK CNV",loading:"lazy"},null,-1),T=s(" GATK tutorials: "),K={href:"https://gatk.broadinstitute.org/hc/en-us/articles/360035531092",target:"_blank",rel:"noopener noreferrer"},G=s("Part I"),y={href:"https://gatk.broadinstitute.org/hc/en-us/articles/360035890011",target:"_blank",rel:"noopener noreferrer"},w=s("Part II"),x={href:"https://mp.weixin.qq.com/s/Lvfy7Y352WhLMuzawMvroA",target:"_blank",rel:"noopener noreferrer"},R=s("Ref in Chinese");function I(N,S){const a=c("ExternalLinkIcon");return r(),n("div",null,[h,_,e("p",null,[e("a",m,[g,t(a)])]),u,e("p",null,[e("a",f,[v,t(a)])]),k,b,e("p",null,[A,T,e("a",K,[G,t(a)]),e("a",y,[w,t(a)])]),e("p",null,[e("a",x,[R,t(a)])])])}const C=o(p,[["render",I],["__file","GATK.html.vue"]]);export{C as default};
