import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as n,b as t,d as i,w as e,f as r,e as o,r as c}from"./app.62a40fba.js";const d={},h=r('<h2 id="bioinformatics" tabindex="-1"><a class="header-anchor" href="#bioinformatics" aria-hidden="true">#</a> Bioinformatics</h2><h3 id="variant-calling-related" tabindex="-1"><a class="header-anchor" href="#variant-calling-related" aria-hidden="true">#</a> Variant calling related</h3><p><strong>I. Single nucleotide variants and short insertions/deletions (SNVs and INDELs)</strong></p><h4 id="gatk" tabindex="-1"><a class="header-anchor" href="#gatk" aria-hidden="true">#</a> GATK</h4>',4),_=o("GATK Data Pre-processing"),u=o("GATK Somatic Short Variant Discovery"),f=o("GATK Somatic copy number variant discovery (CNVs)"),m=o("Run GATK older version by docker images"),b=t("h4",{id:"from-fastqs-to-bam",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#from-fastqs-to-bam","aria-hidden":"true"},"#"),o(" From fastqs to bam")],-1),g=o("Quality control for fastqs"),p=t("h4",{id:"filter-bam",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#filter-bam","aria-hidden":"true"},"#"),o(" Filter bam")],-1),S=o("Filter bam using samtools"),v=o("Filter bam using gatk"),x=t("h4",{id:"other",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#other","aria-hidden":"true"},"#"),o(" Other")],-1),y=o("Different variant callers"),V=o("GEM: Reference genome mappability"),G=o("freebayes: Bayesian genetic variant detector"),T=o("SomaticSniper: SNVs and short Indel caller"),k=o("Strelka: SNVs and short Indel caller"),D=o("RTG Tools: compare vcf"),I=t("p",null,[t("strong",null,"II. Structural variants (SV)")],-1),N=t("h4",{id:"tools",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#tools","aria-hidden":"true"},"#"),o(" Tools")],-1),A=o("LUMPY: SV caller"),R=o("DELLY: SV caller"),P=o("svtools: comprehensive utilities for SV"),B=o("novoBreak: a structural variant breakpoint detection tool"),C=o("svParser: a tool to deal with SV output vcf"),L=o("Manta: SV caller"),K=o("GRIDSS2: SV caller"),E=o("SURVIVOR: merge SVs"),J=o("gGnome: post-visualization tool for SV"),M=t("h3",{id:"toolbox",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#toolbox","aria-hidden":"true"},"#"),o(" Toolbox")],-1),q=o("SRA: Download data from NCBI"),w=o("Cypress: Tulane HPC"),F=o("sshfs: Mount a remote server"),H=t("h3",{id:"programming",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#programming","aria-hidden":"true"},"#"),o(" Programming")],-1),O=t("h4",{id:"linux",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#linux","aria-hidden":"true"},"#"),o(" Linux")],-1),j=o("Linux basics"),U=o("Basic shell scripting"),W=t("h4",{id:"python",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#python","aria-hidden":"true"},"#"),o(" Python")],-1),Y=o("Python scipy.integrate for numerical integration"),z=t("h4",{id:"java",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#java","aria-hidden":"true"},"#"),o(" Java")],-1),Q=o("IntellJ: Java IDEA"),X=t("h3",{id:"format",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#format","aria-hidden":"true"},"#"),o(" Format")],-1),Z=o("Enhanced styles"),$=t("h2",{id:"statistics",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#statistics","aria-hidden":"true"},"#"),o(" Statistics")],-1),tt=o("Detailed Balance Condition"),ot=o("Stochastic Processes"),lt=o("Stochastic HW2 Graph"),it=o("Gibss sampler"),et=o("Kingman\u2019s coalescent"),at=t("h3",{id:"research-related-papers",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#research-related-papers","aria-hidden":"true"},"#"),o(" Research related papers")],-1),st=o("Statistical phylogenetics study resources"),nt=o("2020Ji - Gradients Do Grow on Trees: A Linear-Time O(N)-Dimensional Gradient for Statistical Phylogenetics"),rt=t("h2",{id:"tulane-footprint",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#tulane-footprint","aria-hidden":"true"},"#"),o(" Tulane footprint")],-1),ct=o("Tulane Courses");function dt(ht,_t){const l=c("RouterLink");return s(),n("div",null,[h,t("ul",null,[t("li",null,[i(l,{to:"/blog/bioinformatics/GATK_preprocessing.html"},{default:e(()=>[_]),_:1})]),t("li",null,[i(l,{to:"/blog/bioinformatics/GATK_SNV.html"},{default:e(()=>[u]),_:1})]),t("li",null,[i(l,{to:"/blog/bioinformatics/GATK_CNV.html"},{default:e(()=>[f]),_:1})]),t("li",null,[i(l,{to:"/blog/bioinformatics/docker.html"},{default:e(()=>[m]),_:1})])]),b,t("ul",null,[t("li",null,[i(l,{to:"/blog/bioinformatics/fastqc_fastp.html"},{default:e(()=>[g]),_:1})])]),p,t("ul",null,[t("li",null,[i(l,{to:"/blog/bioinformatics/filter_bam_samtools.html"},{default:e(()=>[S]),_:1})]),t("li",null,[i(l,{to:"/blog/bioinformatics/filter_bam_gatk.html"},{default:e(()=>[v]),_:1})])]),x,t("ul",null,[t("li",null,[i(l,{to:"/blog/bioinformatics/variant_callers.html"},{default:e(()=>[y]),_:1})]),t("li",null,[i(l,{to:"/blog/bioinformatics/GEM_mappability.html"},{default:e(()=>[V]),_:1})]),t("li",null,[i(l,{to:"/blog/bioinformatics/freebayes.html"},{default:e(()=>[G]),_:1})]),t("li",null,[i(l,{to:"/blog/bioinformatics/SomaticSniper.html"},{default:e(()=>[T]),_:1})]),t("li",null,[i(l,{to:"/blog/bioinformatics/Strelka.html"},{default:e(()=>[k]),_:1})]),t("li",null,[i(l,{to:"/blog/bioinformatics/rtgTools.html"},{default:e(()=>[D]),_:1})])]),I,N,t("ul",null,[t("li",null,[i(l,{to:"/blog/bioinformatics/Lumpy.html"},{default:e(()=>[A]),_:1})]),t("li",null,[i(l,{to:"/blog/bioinformatics/Delly.html"},{default:e(()=>[R]),_:1})]),t("li",null,[i(l,{to:"/blog/bioinformatics/svtools.html"},{default:e(()=>[P]),_:1})]),t("li",null,[i(l,{to:"/blog/bioinformatics/novoBreak.html"},{default:e(()=>[B]),_:1})]),t("li",null,[i(l,{to:"/blog/bioinformatics/svParser.html"},{default:e(()=>[C]),_:1})]),t("li",null,[i(l,{to:"/blog/bioinformatics/Manta.html"},{default:e(()=>[L]),_:1})]),t("li",null,[i(l,{to:"/blog/bioinformatics/GRIDSS2.html"},{default:e(()=>[K]),_:1})]),t("li",null,[i(l,{to:"/blog/bioinformatics/survivor.html"},{default:e(()=>[E]),_:1})]),t("li",null,[i(l,{to:"/blog/bioinformatics/gGnome.html"},{default:e(()=>[J]),_:1})])]),M,t("ul",null,[t("li",null,[i(l,{to:"/blog/bioinformatics/SRA.html"},{default:e(()=>[q]),_:1})]),t("li",null,[i(l,{to:"/blog/bioinformatics/Cypress.html"},{default:e(()=>[w]),_:1})]),t("li",null,[i(l,{to:"/blog/bioinformatics/sshfs.html"},{default:e(()=>[F]),_:1})])]),H,O,t("ul",null,[t("li",null,[i(l,{to:"/blog/bioinformatics/linux.html"},{default:e(()=>[j]),_:1})]),t("li",null,[i(l,{to:"/blog/bioinformatics/shell_scripting.html"},{default:e(()=>[U]),_:1})])]),W,t("ul",null,[t("li",null,[i(l,{to:"/blog/coding/Python/integration.html"},{default:e(()=>[Y]),_:1})])]),z,t("ul",null,[t("li",null,[i(l,{to:"/blog/coding/Java/IntelliJ.html"},{default:e(()=>[Q]),_:1})])]),X,t("ul",null,[t("li",null,[i(l,{to:"/blog/bioinformatics/styles.html"},{default:e(()=>[Z]),_:1})])]),$,t("ul",null,[t("li",null,[i(l,{to:"/blog/statistics/detailed_balance_condition.html"},{default:e(()=>[tt]),_:1})]),t("li",null,[i(l,{to:"/blog/statistics/stochastic_processes.html"},{default:e(()=>[ot]),_:1})]),t("li",null,[i(l,{to:"/blog/statistics/stochastic_HW2.html"},{default:e(()=>[lt]),_:1})]),t("li",null,[i(l,{to:"/blog/statistics/gibbs_sampler.html"},{default:e(()=>[it]),_:1})]),t("li",null,[i(l,{to:"/blog/statistics/felsenstein_coalescent.html"},{default:e(()=>[et]),_:1})])]),at,t("ul",null,[t("li",null,[i(l,{to:"/blog/statistics/paper/resources.html"},{default:e(()=>[st]),_:1})]),t("li",null,[i(l,{to:"/blog/statistics/paper/2020Ji_Gradients.html"},{default:e(()=>[nt]),_:1})])]),rt,t("ul",null,[t("li",null,[i(l,{to:"/blog/Tulane/classes.html"},{default:e(()=>[ct]),_:1})])])])}const mt=a(d,[["render",dt],["__file","index.html.vue"]]);export{mt as default};
