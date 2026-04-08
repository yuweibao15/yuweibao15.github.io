---
title: Survival Analysis
icon: post
# This control sidebar order
order: 1
category:
  - Statistics
tag:
  - Definition
---

## Definition

Survival analysis refers to a class of statistical methods for analyzing **time-to-event data**, where the outcome is the time from a defined origin (e.g., randomization) to the occurrence of a specified event (e.g., death, disease progression).

Key characteristics of survival data:
- The outcome is **time until an event**, not just whether the event occurs
- Data are often **censored**, meaning the exact event time is not observed for all individuals

---

## Kaplan–Meier Estimation and Log-Rank Test

### Kaplan–Meier Estimator

The Kaplan–Meier (KM) method is a **nonparametric estimator** of the survival function:
\[
S(t) = P(T > t)
\]

- It produces a **step function** that decreases at observed event times  
- It accounts for **right-censored data**, allowing inclusion of patients with incomplete follow-up  
- The KM curve provides an estimate of the probability of remaining event-free over time  

This is the standard method for visualizing survival outcomes in clinical trials.

---

### Censoring

Censoring occurs when the exact event time is unknown but is known to exceed a certain time.

Common types:
- **Administrative censoring**: study ends before the event occurs  
- **Loss to follow-up**: patient exits the study early  

A key assumption:
> Censoring is **non-informative**, meaning censored individuals have the same future risk as those remaining under observation.

---

### Log-Rank Test

The log-rank test is a **nonparametric hypothesis test** used to compare survival distributions between groups.

- Null hypothesis: survival functions are identical across groups  
- It compares **observed vs expected events** over time  
- Most powerful when the **proportional hazards assumption holds**

---

## Cox Proportional Hazards Model

The Cox model is a **semi-parametric regression model** for time-to-event data:

\[
h(t \mid X) = h_0(t)\exp(\beta X)
\]

- \( h(t \mid X) \): hazard function (instantaneous event rate at time \(t\))  
- \( h_0(t) \): baseline hazard (unspecified)  
- \( \beta \): regression coefficients  

### Key concepts

- **Hazard**: instantaneous risk of experiencing the event at time \(t\), given survival up to \(t\)  
- **Hazard ratio (HR)**: relative hazard between groups  
- **Risk set**: individuals still at risk of the event just prior to time \(t\)  

### Assumption

> The Cox model assumes **proportional hazards**, meaning the hazard ratio between groups is constant over time.

---

## Clinical Context (Example: Oncology)

In oncology, survival outcomes are often analyzed using endpoints such as:
- **Overall Survival (OS)**: time to death from any cause  
- **Progression-Free Survival (PFS)**: time to disease progression or death  

Clinical covariates (e.g., TNM staging system) are often included in models:
- **T**: tumor size  
- **N**: lymph node involvement  
- **M**: metastasis  

These factors may be used as **prognostic variables** in survival models.

---

## Learn from the papers

### Reading Guide (Survival Analysis Papers)

**Study & Endpoint**
1. What is the primary endpoint? How is it defined (event, time origin)?
2. What are the secondary endpoints?

**Population**
3. What analysis population is used (ITT, per-protocol, subgroup)?

**Censoring & Follow-up**
4. What are the censoring rules?
5. What is the follow-up duration (median or range)?

**Methods**
6. What statistical methods are used (KM, log-rank, Cox)?
7. Is the analysis stratified? If yes, by what factors?

**Results Interpretation**
8. What is the hazard ratio (HR) and 95% CI?
9. How do the Kaplan–Meier curves behave (separation, crossing, convergence)?
10. Does the proportional hazards assumption appear reasonable?

**Subgroup & Robustness**
11. Are subgroup effects consistent?
12. Are interaction tests performed?

**Clinical Interpretation**
13. Is the effect clinically meaningful?
14. Any key limitations or biases?

### Paper Summary 1
**Reference:** Pembrolizumab versus Chemotherapy for PD-L1–Positive Non–Small-Cell Lung Cancer [^reck2016pembrolizumab]

| Category | Item | Summary |
|----------|------|--------|
| **Study** | Disease | Advanced NSCLC |
|  | Population | PD-L1 ≥ 50% |
|  | Design | Randomized controlled trial |
|  | Comparison | Pembrolizumab vs Chemotherapy |
| **Endpoints** | Primary | Progression-Free Survival (PFS) |
|  | Secondary | Overall Survival (OS), Objective Response Rate (ORR), Safety |
| **Censoring** | Rules | Censored if alive without progression at last follow-up or lost to follow-up |
|  | Assumption | Assume non-informative censoring |
| **Methods** | Survival estimation | Kaplan–Meier |
|  | Group comparison | Stratified log-rank test |
|  | Effect estimation | Cox proportional hazards model |
| **Results** | HR (PFS) | 0.50 (95% CI: 0.37–0.68) |
|  | P-value | < 0.001 |
|  | Interpretation | The Pembrolizumab group has ~50% lower risk of progression or death |
| **KM Curve** | Pattern | Early and sustained separation |
|  | PH assumption | Reasonable (no crossing) |
|  | Conclusion | Pembrolizumab consistently superior |
| **Subgroup** | Consistency | Generally consistent across subgroups |
|  | Limitation | Some wide CIs; no clear effect modification |
| **Clinical** | Interpretation | Strong, clinically meaningful benefit |
|  | Signal | Clean survival signal (early + sustained separation) |
| **Notes** | Limitations | Subgroups exploratory; PH not formally tested; OS may be immature |

### Paper Summary 2
**Reference:** Trastuzumab Deruxtecan in Previously Treated HER2-Low Advanced Breast Cancer
[^modi2022trastuzumab]

| Category | Item | Summary |
|----------|------|--------|
| **Study** | Disease | Unresectable or metastatic HER2-low breast cancer |
|  | Population | Patients with HER2-low disease, defined as IHC 1+ or IHC 2+/ISH-negative, previously treated with 1 or 2 lines of chemotherapy in the metastatic setting; 494 patients had hormone receptor (HR)-positive disease and 63 had HR-negative disease |
|  | Design | Phase 3, randomized, open-label trial |
|  | Comparison | Trastuzumab deruxtecan vs physician’s choice of chemotherapy |
| **Endpoints** | Primary | Progression-free survival (PFS) by blinded independent central review in the HR-positive cohort |
|  | Secondary | Overall survival (OS) in the HR-positive cohort; PFS in all patients; OS in all patients; objective response; safety |
| **Censoring** | Rules | For PFS, patients without documented progression or death were censored at the last adequate tumor assessment; sensitivity analyses also examined choices such as not censoring at new anticancer therapy, handling progression after missed assessments, and alternative censoring for randomized-but-untreated patients |
|  | Assumption | Assume non-informative censoring |
| **Methods** | Survival estimation | Kaplan–Meier |
|  | Group comparison | Stratified log-rank test |
|  | Effect estimation | Stratified Cox proportional-hazards model |
|  | Stratification factors | HER2 IHC status (1+ vs 2+/ISH-negative), number of prior chemotherapy lines in metastatic disease (1 vs 2), and HR/CDK4/6 status |
| **Results** | HR (PFS, primary endpoint) | 0.51 (95% CI: 0.40–0.64) in the HR-positive cohort |
|  | P-value | < 0.0001 |
|  | Interpretation | The trastuzumab deruxtecan group had about a 49% lower hazard of progression or death than the chemotherapy group in the HR-positive cohort |
|  | Median PFS | 10.1 months vs 5.4 months in the HR-positive cohort |
|  | Key OS result | HR for OS in the HR-positive cohort: 0.64 (95% CI: 0.48–0.86; P = 0.0028) |
| **KM Curve** | Pattern | Early and sustained separation favoring trastuzumab deruxtecan |
|  | PH assumption | Appears reasonable from the reported KM curves; no major crossing emphasized in the main report |
|  | Conclusion | Trastuzumab deruxtecan consistently outperformed chemotherapy on PFS and OS |
| **Subgroup** | Consistency | Benefit was generally consistent across prespecified subgroups |
|  | Limitation | The HR-negative subgroup was small, so those results are exploratory and less precise |
| **Clinical** | Interpretation | Strong, clinically meaningful improvement in both PFS and OS |
|  | Signal | Clear efficacy signal with improvement in both the primary endpoint and key secondary survival endpoints |
| **Notes** | Limitations | Open-label design; HR-negative subgroup underpowered for firm conclusions; PH assumption was not formally highlighted in the main paper; HRQoL was not powered for definitive conclusions |

### Paper Summary 3
**Reference:** Osimertinib in Untreated EGFR-Mutated Advanced Non–Small-Cell Lung Cancer [^soria2017osimertinib]

| Category | Item | Summary |
|----------|------|--------|
| **Study** | Disease | Advanced (locally advanced or metastatic) NSCLC |
|  | Population | Treatment-naïve patients with EGFR-mutated NSCLC (exon 19 deletion or L858R) |
|  | Design | Phase 3, randomized, double-blind controlled trial |
|  | Comparison | Osimertinib vs standard EGFR-TKI (gefitinib or erlotinib) |
| **Endpoints** | Primary | Progression-Free Survival (PFS) (investigator-assessed) |
|  | Secondary | Overall Survival (OS), Objective Response Rate (ORR), Duration of Response, Safety |
| **Censoring** | Rules | Patients without progression or death were censored at the date of last tumor assessment; censoring also applied for patients starting new anticancer therapy before progression |
|  | Assumption | Assumes non-informative censoring (implicit) |
| **Methods** | Survival estimation | Kaplan–Meier |
|  | Group comparison | Stratified log-rank test (by mutation type [exon 19 vs L858R] and race [Asian vs non-Asian]) |
|  | Effect estimation | Stratified Cox proportional hazards model |
| **Results** | HR (PFS) | 0.46 (95% CI: 0.37–0.57) |
|  | P-value | < 0.001 |
|  | Interpretation | The osimertinib group had about a 54% lower hazard of progression or death compared to standard EGFR-TKI in full analysis set |
|  | Median PFS | 18.9 months vs 10.2 months |
| **KM Curve** | Pattern | Early and sustained separation favoring osimertinib |
|  | PH assumption | Reasonable (no major crossing observed) |
|  | Conclusion | Osimertinib consistently outperformed standard EGFR-TKIs in delaying progression |
| **Subgroup** | Consistency | Treatment benefit consistent across major subgroups (mutation type, race, CNS metastases) |
|  | Limitation | Some subgroups have wider CIs; subgroup analyses are exploratory |
| **Clinical** | Interpretation | Strong and clinically meaningful improvement in PFS |
|  | Signal | Large magnitude benefit with durable separation of survival curves |
| **Notes** | Limitations | OS immature at initial publication; crossover and subsequent therapies may confound OS; PH assumption not formally tested |

### Paper Summary 4
Non-Proportional Hazards
**Reference:** Nivolumab versus Docetaxel in Advanced Nonsquamous Non–Small-Cell Lung Cancer[^borghaei2015nivolumab]

| Category | Item | Summary |
|----------|------|--------|
| **Study** | Disease | Advanced nonsquamous NSCLC |
|  | Population | Patients with advanced NSCLC who had disease progression during or after platinum-based chemotherapy |
|  | Design | Phase 3, randomized, open-label trial |
|  | Comparison | Nivolumab vs Docetaxel |
| **Endpoints** | Primary | Overall Survival (OS) |
|  | Secondary | Objective Response Rate (ORR), Progression-Free Survival (PFS), Safety |
| **Censoring** | Rules | Patients alive at last follow-up were censored at last known alive date; for PFS, patients without progression or death were censored at last tumor assessment |
|  | Assumption | Assumes non-informative censoring (implicit) |
| **Methods** | Survival estimation | Kaplan–Meier |
|  | Group comparison | Stratified log-rank test |
|  | Effect estimation | Stratified Cox proportional hazards model |
|  | Stratification factors | PD-L1 expression level, prior maintenance therapy |
| **Results** | HR (OS, primary endpoint) | 0.73 (95% CI: 0.59–0.89) |
|  | P-value | 0.002 |
|  | Interpretation | Nivolumab reduced the hazard of death by ~27% compared to docetaxel |
|  | Median OS | 12.2 months vs 9.4 months |
| **KM Curve** | Pattern | Delayed separation: curves overlap early, then diverge |
|  | PH assumption | Likely violated (non-proportional hazards suggested by delayed effect) |
|  | Conclusion | Nivolumab shows survival benefit despite delayed treatment effect |
| **Subgroup** | Consistency | Greater benefit observed in patients with higher PD-L1 expression |
|  | Limitation | Some subgroups have wide CIs; exploratory interpretation |
| **Clinical** | Interpretation | Clinically meaningful OS benefit with improved tolerability vs chemotherapy |
|  | Signal | Delayed but durable survival benefit characteristic of immunotherapy |
| **Notes** | Limitations | Evidence of non-proportional hazards; HR represents an average effect over time; alternative methods (e.g., RMST) not used; open-label design |

### Paper Summary 5
**Reference:** Pembrolizumab plus Chemotherapy in Metastatic Non–Small-Cell Lung Cancer[^gandhi2018pembrolizumab]

| Category | Item | Summary |
|----------|------|--------|
| **Study** | Disease | Metastatic nonsquamous NSCLC |
|  | Population | Previously untreated patients with metastatic nonsquamous NSCLC, without EGFR or ALK alterations |
|  | Design | Phase 3, randomized, double-blind, placebo-controlled trial |
|  | Comparison | Pembrolizumab + chemotherapy vs placebo + chemotherapy |
| **Endpoints** | Primary | Overall Survival (OS) and Progression-Free Survival (PFS) |
|  | Secondary | Objective Response Rate (ORR), Duration of Response, Safety |
| **Censoring** | Rules | Patients without event were censored at last known alive date (OS) or last tumor assessment (PFS); censoring applied for patients without progression or death at cutoff |
|  | Assumption | Assumes non-informative censoring (implicit) |
| **Methods** | Survival estimation | Kaplan–Meier |
|  | Group comparison | Stratified log-rank test |
|  | Effect estimation | Stratified Cox proportional hazards model |
|  | Stratification factors | PD-L1 tumor proportion score (<1% vs 1–49% vs ≥50%), choice of chemotherapy (cisplatin vs carboplatin) |
| **Results** | HR (OS, primary endpoint) | 0.49 (95% CI: 0.38–0.64) |
|  | P-value | < 0.001 |
|  | Interpretation | Pembrolizumab plus chemotherapy reduced the hazard of death by ~51% compared to chemotherapy alone in the overall population |
|  | Median OS | Not reached vs 11.3 months (at initial analysis) |
|  | HR (PFS) | 0.52 (95% CI: 0.43–0.64) |
| **KM Curve** | Pattern | Early separation with sustained benefit; slight early overlap possible but no crossing |
|  | PH assumption | Generally reasonable; no strong evidence of violation |
|  | Conclusion | Combination therapy consistently improved survival outcomes |
| **Subgroup** | Consistency | Benefit observed across PD-L1 subgroups (including <1%) |
|  | Limitation | Magnitude of effect varies by PD-L1 expression; subgroup analyses exploratory |
| **Clinical** | Interpretation | Strong and clinically meaningful improvement in both OS and PFS |
|  | Signal | Robust benefit across populations, including those with low PD-L1 expression |
| **Notes** | Limitations | Early OS data immature (median not reached); subgroup analyses exploratory; PH assumption not formally tested |

## 5-Paper Survival Analysis Comparison Sheet

| Paper # | Trial | Disease / Setting | Comparison | Primary Endpoint(s) | Main Survival Result | KM Pattern | PH Assumption | Key Survival Lesson |
|--------|------|-------------------|------------|---------------------|----------------------|-----------|--------------|--------------------|
| 1  | **reck2016pembrolizumab** [^reck2016pembrolizumab]  | Advanced NSCLC, PD-L1 ≥50%, first-line | Pembrolizumab vs Chemotherapy | PFS | HR (PFS) = 0.50 (95% CI: 0.37–0.68), p < 0.001 | Early and sustained separation | Reasonable | Textbook Kaplan–Meier + Cox example; clean PH case |
| 2 | **modi2022trastuzumab** [^modi2022trastuzumab] | Unresectable/metastatic HER2-low breast cancer | Trastuzumab deruxtecan vs physician’s choice chemotherapy | PFS in HR-positive cohort | HR (PFS, HR-positive cohort) = 0.51 (95% CI: 0.40–0.64), p < 0.0001 | Early and sustained separation | Reasonable | Strong example of defining endpoint and analysis population precisely |
| 3 | **soria2017osimertinib** [^soria2017osimertinib] | EGFR-mutated advanced NSCLC, first-line | Osimertinib vs gefitinib/erlotinib | PFS | HR (PFS, FAS) = 0.46 (95% CI: 0.37–0.57), p < 0.001 | Early and durable separation | Reasonable | Very clean targeted-therapy survival result; strong Cox interpretation |
| 4 | **borghaei2015nivolumab** [^borghaei2015nivolumab] | Advanced nonsquamous NSCLC after platinum chemotherapy | Nivolumab vs docetaxel | OS | HR (OS) = 0.73 (95% CI: 0.59–0.89), p = 0.002 | Delayed separation; early overlap | Likely violated | Example where HR is an average over time and may hide delayed immunotherapy effect |
| 5 | **gandhi2018pembrolizumab** [^gandhi2018pembrolizumab] | Metastatic nonsquamous NSCLC, untreated, no EGFR/ALK alteration | Pembrolizumab + chemotherapy vs placebo + chemotherapy | OS and PFS | HR (OS) = 0.49 (95% CI: 0.38–0.64), p < 0.001; HR (PFS) = 0.52 (95% CI: 0.43–0.64) | Early separation with sustained benefit; no major crossing | Generally reasonable | Example of subgroup heterogeneity without obvious PH violation |

## Main Takeaways Across the 5 Papers

| Theme | What I Learned |
|------|----------------|
| **Canonical workflow** | Most papers follow: Kaplan–Meier curves + log-rank test + Cox model + subgroup forest plot |
| **Need to specify endpoint and population** | Hazard ratios must be tied to a specific endpoint and analysis set (e.g., PFS in FAS, or PFS in HR-positive cohort) |
| **PH can hold cleanly** | reck2016pembrolizumab [^reck2016pembrolizumab], modi2022trastuzumab[^modi2022trastuzumab], and soria2017osimertinib[^soria2017osimertinib] are examples where Cox HR is straightforward to interpret |
| **HR can be imperfect** | borghaei2015nivolumab[^borghaei2015nivolumab] shows delayed effect and likely non-proportional hazards, so HR is only an average summary |
| **Subgroup heterogeneity vs non-PH** | gandhi2018pembrolizumab[^gandhi2018pembrolizumab] shows subgroup differences (PD-L1), which do not necessarily imply PH violation |
| **Regulatory-style reporting** | Survival results are typically reported using HR, 95% CI, p-value, median survival, and KM plots—even when assumptions are imperfect |

[^reck2016pembrolizumab]:https://www.nejm.org/doi/full/10.1056/NEJMoa1606774
[^modi2022trastuzumab]:https://www.nejm.org/doi/full/10.1056/NEJMoa2203690
[^soria2017osimertinib]:https://www.nejm.org/doi/full/10.1056/NEJMoa1713137
[^borghaei2015nivolumab]:https://www.nejm.org/doi/full/10.1056/NEJMoa1507643
[^gandhi2018pembrolizumab]:https://www.nejm.org/doi/full/10.1056/NEJMoa1801005