import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as i,b as a,d as n,f as r,e,r as l}from"./app.ee210548.js";const c={},p=r(`<p>All the following information is from <code>gatk (v4.2.6.1)</code> <sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><h3 id="_1-markduplicates-picard-identifies-duplicate-reads" tabindex="-1"><a class="header-anchor" href="#_1-markduplicates-picard-identifies-duplicate-reads" aria-hidden="true">#</a> 1. MarkDuplicates (Picard): Identifies duplicate reads <sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-jar</span> picard.jar MarkDuplicates <span class="token punctuation">\\</span>
      <span class="token parameter variable">-I</span> input.bam <span class="token punctuation">\\</span>
      <span class="token parameter variable">-O</span> marked_duplicates.bam <span class="token punctuation">\\</span>
      <span class="token parameter variable">-M</span> marked_dup_metrics.txt <span class="token punctuation">\\</span>
      <span class="token parameter variable">--REMOVE_DUPLICATES</span> TRUE <span class="token punctuation">\\</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Parameters</p><ul><li><code>marked_dup_metrics.txt</code> was created to store duplication metrics.</li><li><code>--REMOVE_DUPLICATES</code> is optional. If true do not write duplicates to the output file instead of writing them with appropriate flags set.</li></ul></div><h3 id="_2-addorreplacereadgroups-picard-assigns-all-the-reads-in-a-file-to-a-single-new-read-group" tabindex="-1"><a class="header-anchor" href="#_2-addorreplacereadgroups-picard-assigns-all-the-reads-in-a-file-to-a-single-new-read-group" aria-hidden="true">#</a> 2. AddOrReplaceReadGroups (Picard): Assigns all the reads in a file to a single new read-group. <sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup></h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-jar</span> picard.jar AddOrReplaceReadGroups <span class="token punctuation">\\</span>
       <span class="token assign-left variable">I</span><span class="token operator">=</span>input.bam <span class="token punctuation">\\</span>
       <span class="token assign-left variable">O</span><span class="token operator">=</span>output.bam <span class="token punctuation">\\</span>
       <span class="token assign-left variable">RGID</span><span class="token operator">=</span><span class="token number">4</span> <span class="token punctuation">\\</span>
       <span class="token assign-left variable">RGLB</span><span class="token operator">=</span>lib1 <span class="token punctuation">\\</span>
       <span class="token assign-left variable">RGPL</span><span class="token operator">=</span>ILLUMINA <span class="token punctuation">\\</span>
       <span class="token assign-left variable">RGPU</span><span class="token operator">=</span>unit1 <span class="token punctuation">\\</span>
       <span class="token assign-left variable">RGSM</span><span class="token operator">=</span>read_group_sample_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-baserecalibrator-generates-recalibration-table-for-base-quality-score-recalibration-bqsr" tabindex="-1"><a class="header-anchor" href="#_3-baserecalibrator-generates-recalibration-table-for-base-quality-score-recalibration-bqsr" aria-hidden="true">#</a> 3. BaseRecalibrator: Generates recalibration table for Base Quality Score Recalibration (BQSR) <sup class="footnote-ref"><a href="#footnote4">[4]</a><a class="footnote-anchor" id="footnote-ref4"></a></sup></h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gatk BaseRecalibrator <span class="token punctuation">\\</span>
   <span class="token parameter variable">-I</span> my_reads.bam <span class="token punctuation">\\</span>
   <span class="token parameter variable">-R</span> reference.fasta <span class="token punctuation">\\</span>
   --known-sites sites_of_variation.vcf <span class="token punctuation">\\</span>
   --known-sites another/optional/setOfSitesToMask.vcf <span class="token punctuation">\\</span>
   <span class="token parameter variable">-O</span> recal_data.table
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Parameters</p><ul><li><code>--known-sites</code>: One or more databases of known polymorphic sites used to exclude regions around known polymorphisms from analysis.</li></ul></div><h3 id="_4-applybqsr-apply-base-quality-score-recalibration" tabindex="-1"><a class="header-anchor" href="#_4-applybqsr-apply-base-quality-score-recalibration" aria-hidden="true">#</a> 4. ApplyBQSR: Apply base quality score recalibration <sup class="footnote-ref"><a href="#footnote5">[5]</a><a class="footnote-anchor" id="footnote-ref5"></a></sup></h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gatk ApplyBQSR <span class="token punctuation">\\</span>
   <span class="token parameter variable">-R</span> reference.fasta <span class="token punctuation">\\</span>
   <span class="token parameter variable">-I</span> input.bam <span class="token punctuation">\\</span>
   --bqsr-recal-file recalibration.table <span class="token punctuation">\\</span>
   <span class="token parameter variable">-O</span> output.bam
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-buildbamindex-picard-generates-a-bam-index-bai-file" tabindex="-1"><a class="header-anchor" href="#_5-buildbamindex-picard-generates-a-bam-index-bai-file" aria-hidden="true">#</a> 5. BuildBamIndex (Picard): Generates a BAM index &quot;.bai&quot; file <sup class="footnote-ref"><a href="#footnote6">[6]</a><a class="footnote-anchor" id="footnote-ref6"></a></sup></h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-jar</span> picard.jar BuildBamIndex <span class="token punctuation">\\</span>
      <span class="token assign-left variable">I</span><span class="token operator">=</span>input.bam
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr class="footnotes-sep">`,14),d={class:"footnotes"},u={class:"footnotes-list"},f={id:"footnote1",class:"footnote-item"},b={href:"https://gatk.broadinstitute.org/hc/en-us/articles/5358824293659--Tool-Documentation-Index",target:"_blank",rel:"noopener noreferrer"},h=e("https://gatk.broadinstitute.org/hc/en-us/articles/5358824293659--Tool-Documentation-Index"),m=e(),_=a("a",{href:"#footnote-ref1",class:"footnote-backref"},"\u21A9\uFE0E",-1),v={id:"footnote2",class:"footnote-item"},k={href:"https://gatk.broadinstitute.org/hc/en-us/articles/5358880192027-MarkDuplicates-Picard-",target:"_blank",rel:"noopener noreferrer"},g=e("https://gatk.broadinstitute.org/hc/en-us/articles/5358880192027-MarkDuplicates-Picard-"),x=e(),R=a("a",{href:"#footnote-ref2",class:"footnote-backref"},"\u21A9\uFE0E",-1),B={id:"footnote3",class:"footnote-item"},I={href:"https://gatk.broadinstitute.org/hc/en-us/articles/5358911906459-AddOrReplaceReadGroups-Picard-",target:"_blank",rel:"noopener noreferrer"},y=e("https://gatk.broadinstitute.org/hc/en-us/articles/5358911906459-AddOrReplaceReadGroups-Picard-"),A=e(),P=a("a",{href:"#footnote-ref3",class:"footnote-backref"},"\u21A9\uFE0E",-1),w={id:"footnote4",class:"footnote-item"},q={href:"https://gatk.broadinstitute.org/hc/en-us/articles/5358896138011-BaseRecalibrator",target:"_blank",rel:"noopener noreferrer"},O=e("https://gatk.broadinstitute.org/hc/en-us/articles/5358896138011-BaseRecalibrator"),G=e(),M=a("a",{href:"#footnote-ref4",class:"footnote-backref"},"\u21A9\uFE0E",-1),S={id:"footnote5",class:"footnote-item"},E={href:"https://gatk.broadinstitute.org/hc/en-us/articles/5358826654875-ApplyBQSR",target:"_blank",rel:"noopener noreferrer"},j=e("https://gatk.broadinstitute.org/hc/en-us/articles/5358826654875-ApplyBQSR"),D=e(),L=a("a",{href:"#footnote-ref5",class:"footnote-backref"},"\u21A9\uFE0E",-1),T={id:"footnote6",class:"footnote-item"},Q={href:"https://gatk.broadinstitute.org/hc/en-us/articles/5358886012443-BuildBamIndex-Picard-",target:"_blank",rel:"noopener noreferrer"},V=e("https://gatk.broadinstitute.org/hc/en-us/articles/5358886012443-BuildBamIndex-Picard-"),N=e(),U=a("a",{href:"#footnote-ref6",class:"footnote-backref"},"\u21A9\uFE0E",-1);function C(z,F){const s=l("ExternalLinkIcon");return o(),i("div",null,[p,a("section",d,[a("ol",u,[a("li",f,[a("p",null,[a("a",b,[h,n(s)]),m,_])]),a("li",v,[a("p",null,[a("a",k,[g,n(s)]),x,R])]),a("li",B,[a("p",null,[a("a",I,[y,n(s)]),A,P])]),a("li",w,[a("p",null,[a("a",q,[O,n(s)]),G,M])]),a("li",S,[a("p",null,[a("a",E,[j,n(s)]),D,L])]),a("li",T,[a("p",null,[a("a",Q,[V,n(s)]),N,U])])])])])}const K=t(c,[["render",C],["__file","filter_bam_gatk.html.vue"]]);export{K as default};