import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as r,b as a,d as s,e,f as t,r as o}from"./app.ee210548.js";const c={},d=a("p",null,[e("Here are some notes about calling somatic mutations using GATK "),a("code",null,"mutect2"),e(".")],-1),p=a("h2",{id:"reference-gatk-tutorials",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#reference-gatk-tutorials","aria-hidden":"true"},"#"),e(" Reference - GATK tutorials:")],-1),u={href:"https://gatk.broadinstitute.org/hc/en-us/articles/360035894731-Somatic-short-variant-discovery-SNVs-Indels-",target:"_blank",rel:"noopener noreferrer"},m=e("GATK Somatic short variant discovery (SNVs + Indels)"),v={href:"https://gatk.broadinstitute.org/hc/en-us/articles/360035889791?id=11136",target:"_blank",rel:"noopener noreferrer"},h=e("Version I"),b={href:"https://gatk.broadinstitute.org/hc/en-us/articles/360035531132",target:"_blank",rel:"noopener noreferrer"},f=e("Version II"),g={href:"https://gatk.broadinstitute.org/hc/en-us/articles/360035890491?id=11127",target:"_blank",rel:"noopener noreferrer"},_=e("Related"),k=t(`<h2 id="_1-call-somatic-short-variants-and-generate-a-bamout-with-mutect2" tabindex="-1"><a class="header-anchor" href="#_1-call-somatic-short-variants-and-generate-a-bamout-with-mutect2" aria-hidden="true">#</a> 1. Call somatic short variants and generate a bamout with Mutect2</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gatk --java-options <span class="token string">&quot;-Xmx2g&quot;</span> Mutect2 <span class="token punctuation">\\</span>
    <span class="token parameter variable">-R</span> hg38/Homo_sapiens_assembly38.fasta <span class="token punctuation">\\</span>
    <span class="token parameter variable">-I</span> tumor.bam <span class="token punctuation">\\</span>
    <span class="token parameter variable">-I</span> normal.bam <span class="token punctuation">\\</span>
    <span class="token parameter variable">-tumor</span> HCC1143_tumor <span class="token punctuation">\\</span>
    <span class="token parameter variable">-normal</span> HCC1143_normal <span class="token punctuation">\\</span>
    <span class="token parameter variable">-pon</span> resources/chr17_pon.vcf.gz <span class="token punctuation">\\</span>
    --germline-resource resources/chr17_af-only-gnomad_grch38.vcf.gz <span class="token punctuation">\\</span>
    --af-of-alleles-not-in-resource <span class="token number">0.0000025</span> <span class="token punctuation">\\</span>
    --disable-read-filter MateOnSameContigOrNoMappedMateReadFilter <span class="token punctuation">\\</span>
    <span class="token parameter variable">-L</span> chr17plus.interval_list <span class="token punctuation">\\</span>
    <span class="token parameter variable">-O</span> 1_somatic_m2.vcf.gz <span class="token punctuation">\\</span>
    <span class="token parameter variable">-bamout</span> 2_tumor_normal_m2.bam
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">--disable-read-filter MateOnSameContigOrNoMappedMateReadFilter</p><p>We disable a specific read filter <code>--disable-read-filter MateOnSameContigOrNoMappedMateReadFilter</code> since this filter removes from analysis paired reads whose mate maps to a different contig. Otherwise, we may miss out on detecting SNVs and indels associated with alternate haplotypes.</p><p>This filter removes around 8-9% sample reads from the full data <sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p></div><h2 id="_2-create-a-sites-only-pon-with-createsomaticpanelofnormals" tabindex="-1"><a class="header-anchor" href="#_2-create-a-sites-only-pon-with-createsomaticpanelofnormals" aria-hidden="true">#</a> 2. Create a sites-only PoN with CreateSomaticPanelOfNormals</h2><ol><li>First, run Mutect2 in tumor-only mode on each normal sample.</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gatk Mutect2 <span class="token punctuation">\\</span>
    <span class="token parameter variable">-R</span> ~/Documents/ref/hg38/Homo_sapiens_assembly38.fasta <span class="token punctuation">\\</span>
    <span class="token parameter variable">-I</span> HG00190.bam <span class="token punctuation">\\</span>
    <span class="token parameter variable">-tumor</span> HG00190 <span class="token punctuation">\\</span>
    --disable-read-filter MateOnSameContigOrNoMappedMateReadFilter <span class="token punctuation">\\</span>
    <span class="token parameter variable">-L</span> chr17plus.interval_list <span class="token punctuation">\\</span>
    <span class="token parameter variable">-O</span> 3_HG00190.vcf.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Comments on select parameters</p><ul><li>One option that is not used here is to include a germline resource with <code>--germline-resource</code>.</li><li>An optional parameter <code>--max-population-af</code> (default 0.01) defines the cutoff for allele frequencies.</li></ul></div><ol start="2"><li>Second, collate all the normal VCFs into a single callset with <code>CreateSomaticPanelOfNormals</code>.</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gatk CreateSomaticPanelOfNormals <span class="token punctuation">\\</span>
    <span class="token parameter variable">-vcfs</span> 3_HG00190.vcf.gz <span class="token punctuation">\\</span>
    <span class="token parameter variable">-vcfs</span> 4_NA19771.vcf.gz <span class="token punctuation">\\</span>
    <span class="token parameter variable">-vcfs</span> 5_HG02759.vcf.gz <span class="token punctuation">\\</span>
    <span class="token parameter variable">-O</span> 6_threesamplepon.vcf.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-estimate-cross-sample-contamination-using-getpileupsummaries-and-calculatecontamination" tabindex="-1"><a class="header-anchor" href="#_3-estimate-cross-sample-contamination-using-getpileupsummaries-and-calculatecontamination" aria-hidden="true">#</a> 3. Estimate cross-sample contamination using GetPileupSummaries and CalculateContamination.</h2><ol><li>First, run <code>GetPileupSummaries</code> on the tumor BAM to summarize read support for a set number of known variant sites.</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gatk GetPileupSummaries <span class="token punctuation">\\</span>
    <span class="token parameter variable">-I</span> tumor.bam <span class="token punctuation">\\</span>
    <span class="token parameter variable">-V</span> resources/chr17_small_exac_common_3_grch38.vcf.gz <span class="token punctuation">\\</span>
    <span class="token parameter variable">-O</span> 7_tumor_getpileupsummaries.table
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Second, estimate contamination with <code>CalculateContamination</code></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gatk CalculateContamination <span class="token punctuation">\\</span>
    <span class="token parameter variable">-I</span> 7_tumor_getpileupsummaries.table <span class="token punctuation">\\</span>
    <span class="token parameter variable">-O</span> 8_tumor_calculatecontamination.table
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note: CalculateContamination can operate in two modes. The alternate mode incorporates the metrics for the matched normal, to enable a potentially more accurate estimate.</p><h3 id="what-if-i-find-high-levels-of-contamination" tabindex="-1"><a class="header-anchor" href="#what-if-i-find-high-levels-of-contamination" aria-hidden="true">#</a> What if I find high levels of contamination?</h3>`,16),w=e("Picard\u2019s "),C={href:"https://gatk.broadinstitute.org/hc/en-us/articles/360036364232-CrosscheckFingerprints-Picard-",target:"_blank",rel:"noopener noreferrer"},x=e("CrosscheckFingerprints"),O=t(`<p>This tool allows us to</p><ol><li>Check at the sample level that our tumor and normal are related, as it is imperative they should come from the same individual</li><li>Check at the read group level that each of the read group data come from the same individual.</li></ol><h2 id="_4-filter-for-confident-somatic-calls-using-filtermutectcalls" tabindex="-1"><a class="header-anchor" href="#_4-filter-for-confident-somatic-calls-using-filtermutectcalls" aria-hidden="true">#</a> 4. Filter for confident somatic calls using <code>FilterMutectCalls</code></h2><p>Filter the Mutect2 callset with FilterMutectCalls.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gatk FilterMutectCalls <span class="token punctuation">\\</span>
    <span class="token parameter variable">-V</span> somatic_m2.vcf.gz <span class="token punctuation">\\</span>
    --contamination-table tumor_calculatecontamination.table <span class="token punctuation">\\</span>
    <span class="token parameter variable">-O</span> 9_somatic_oncefiltered.vcf.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-optional-estimate-artifacts-with-collectsequencingartifactmetrics-and-filter-them-with-filterbyorientationbias" tabindex="-1"><a class="header-anchor" href="#_5-optional-estimate-artifacts-with-collectsequencingartifactmetrics-and-filter-them-with-filterbyorientationbias" aria-hidden="true">#</a> 5. (Optional) Estimate artifacts with CollectSequencingArtifactMetrics and filter them with FilterByOrientationBias</h2><ol><li>First, collect metrics on sequence context artifacts with <code>CollectSequencingArtifactMetrics</code>.</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gatk CollectSequencingArtifactMetrics <span class="token punctuation">\\</span>
    <span class="token parameter variable">-I</span> tumor.bam <span class="token punctuation">\\</span>
    <span class="token parameter variable">-O</span> 10_tumor_artifact <span class="token punctuation">\\</span>
    \u2013-FILE_EXTENSION <span class="token string">&quot;.txt&quot;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-R</span> ~/Documents/ref/hg38/Homo_sapiens_assembly38.fasta
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Results provide a global view across the genome that empowers decision making in ways that site-specific analyses cannot. The metrics can help decide whether to consider downstream filtering.</p><ol start="2"><li>Second, perform orientation bias filtering with <code>FilterByOrientationBias</code></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gatk FilterByOrientationBias <span class="token punctuation">\\</span>
    <span class="token parameter variable">-A</span> G/T <span class="token punctuation">\\</span>
    <span class="token parameter variable">-A</span> C/T <span class="token punctuation">\\</span>
    <span class="token parameter variable">-V</span> 9_somatic_oncefiltered.vcf.gz <span class="token punctuation">\\</span>
    <span class="token parameter variable">-P</span> tumor_artifact.pre_adapter_detail_metrics.txt <span class="token punctuation">\\</span>
    <span class="token parameter variable">-O</span> 11_somatic_twicefiltered.vcf.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-set-up-in-igv-to-review-somatic-calls" tabindex="-1"><a class="header-anchor" href="#_6-set-up-in-igv-to-review-somatic-calls" aria-hidden="true">#</a> 6. Set up in IGV to review somatic calls</h2><ol><li>First, load Human (hg38) as the reference in IGV. Then load these six files in order:</li></ol><pre>resources/chr17_pon.vcf.gz
resources/chr17af-only-gnomadgrch38.vcf.gz
11somatictwicefiltered.vcf.gz
2tumornormal_m2.bam
normal.bam
tumor.bam
</pre><ol start="2"><li>Second, navigate IGV to certain locus.</li><li>Third, tweak IGV settings that aid in visualizing reassembled alignments.</li></ol><h2 id="another-tutorial" tabindex="-1"><a class="header-anchor" href="#another-tutorial" aria-hidden="true">#</a> Another tutorial</h2><ol><li><code>Mutect2</code></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gatk Mutect2 <span class="token parameter variable">-R</span> ref.fasta <span class="token punctuation">\\</span>
        <span class="token parameter variable">-L</span> intervals.interval_list <span class="token punctuation">\\</span>
        <span class="token parameter variable">-I</span> tumor.bam <span class="token punctuation">\\</span>
        -germline-resource af-only-gnomad.vcf <span class="token punctuation">\\</span>
        <span class="token parameter variable">-pon</span> panel_of_normals.vcf   <span class="token punctuation">\\</span>
        --f1r2-tar-gz f1r2.tar.gz <span class="token punctuation">\\</span>
        <span class="token parameter variable">-O</span> unfiltered.vcf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><code>LearnReadOrientationModel</code></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gatk LearnReadOrientationModel <span class="token parameter variable">-I</span> f1r2.tar.gz <span class="token punctuation">\\</span>
        <span class="token parameter variable">-O</span> read-orientation-model.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>Run <code>GetPileupSummaries</code> to summarize read support for a set number of known variant sites.</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gatk GetPileupSummaries <span class="token punctuation">\\</span>
    <span class="token parameter variable">-I</span> tumor.bam <span class="token punctuation">\\</span>
    <span class="token parameter variable">-V</span> chr17_small_exac_common_3_grch38.vcf.gz <span class="token punctuation">\\</span>
    <span class="token parameter variable">-L</span> chr17_small_exac_common_3_grch38.vcf.gz <span class="token punctuation">\\</span>
    <span class="token parameter variable">-O</span> getpileupsummaries.table
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>where <code>-L variants.vcf</code> when specifying a VCF file containing variant records; their genomic coordinates will be used as intervals. <sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup> 4. Estimate contamination with CalculateContamination.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gatk CalculateContamination <span class="token punctuation">\\</span>
        <span class="token parameter variable">-I</span> getpileupsummaries.table <span class="token punctuation">\\</span>
        -tumor-segmentation segments.table <span class="token punctuation">\\</span>
        <span class="token parameter variable">-O</span> calculatecontamination.table
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr class="footnotes-sep">`,25),S={class:"footnotes"},M={class:"footnotes-list"},y={id:"footnote1",class:"footnote-item"},I={href:"https://gatk.broadinstitute.org/hc/en-us/articles/360035889791?id=11136",target:"_blank",rel:"noopener noreferrer"},z=e("https://gatk.broadinstitute.org/hc/en-us/articles/360035889791?id=11136"),N=e(),V=a("a",{href:"#footnote-ref1",class:"footnote-backref"},"\u21A9\uFE0E",-1),F={id:"footnote2",class:"footnote-item"},G={href:"https://gatk.broadinstitute.org/hc/en-us/articles/360035531852-Intervals-and-interval-lists",target:"_blank",rel:"noopener noreferrer"},T=e("https://gatk.broadinstitute.org/hc/en-us/articles/360035531852-Intervals-and-interval-lists"),A=e(),R=a("a",{href:"#footnote-ref2",class:"footnote-backref"},"\u21A9\uFE0E",-1);function H(P,q){const n=o("ExternalLinkIcon");return l(),r("div",null,[d,p,a("p",null,[a("a",u,[m,s(n)])]),a("p",null,[a("a",v,[h,s(n)])]),a("p",null,[a("a",b,[f,s(n)])]),a("p",null,[a("a",g,[_,s(n)])]),k,a("p",null,[w,a("a",C,[x,s(n)])]),O,a("section",S,[a("ol",M,[a("li",y,[a("p",null,[a("a",I,[z,s(n)]),N,V])]),a("li",F,[a("p",null,[a("a",G,[T,s(n)]),A,R])])])])])}const E=i(c,[["render",H],["__file","GATK_SNV.html.vue"]]);export{E as default};