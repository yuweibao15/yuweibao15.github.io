---
title: A/B Testing
icon: post
# This control sidebar order
order: 2
category:
  - Statistics
tag:
  - Notes
---

## Overview

A/B testing (also called **split testing** or **controlled experiment**) is a randomized controlled experiment where two or more variants of a variable are shown to different segments of users simultaneously, and statistical analysis is used to determine which variant performs better for a given conversion goal.

> **Key Idea:** Change one thing at a time, measure the difference, and let the data decide.

---

## 1. Core Concepts

### 1.1 Hypothesis

Before running any experiment, you need two hypotheses:

| Hypothesis | Definition | Example |
|---|---|---|
| **Null Hypothesis (H₀)** | No difference between control and treatment | CTR(A) = CTR(B) |
| **Alternative Hypothesis (H₁)** | There IS a meaningful difference | CTR(A) ≠ CTR(B) |

### 1.2 Control vs. Treatment

- **Control (Group A):** The existing version — baseline behavior.
- **Treatment (Group B):** The new/modified version being tested.

Users are randomly assigned to each group to eliminate selection bias.

### 1.3 Metric Types

| Type | Description | Examples |
|---|---|---|
| **Primary Metric** | The main success criterion you optimize for | Click-through rate (CTR), Conversion rate, Revenue per user |
| **Secondary Metrics** | Supporting signals to understand full impact | Session duration, Bounce rate, Pages per session |
| **Guardrail Metrics** | Safety metrics that must NOT degrade | Latency, Error rate, User retention |

### 1.4 Statistical Significance

**p-value:** The probability of observing a result at least as extreme as the one seen, assuming H₀ is true.

- Typical threshold: **α = 0.05** (5% significance level)
- If `p < α` → reject H₀ → statistically significant result
- If `p ≥ α` → fail to reject H₀ → no significant difference detected

> ⚠️ Statistical significance ≠ practical significance. Always evaluate **effect size** too.

### 1.5 Statistical Power

**Power (1 - β):** The probability of correctly detecting a true effect when it exists.

- Typically set to **80%** or **90%**
- Higher power requires larger sample size
- β = Type II error rate (false negative rate)

### 1.6 Type I and Type II Errors

|  | H₀ is True | H₀ is False |
|---|---|---|
| **Reject H₀** | ❌ Type I Error (False Positive) | ✅ Correct (Power) |
| **Fail to Reject H₀** | ✅ Correct | ❌ Type II Error (False Negative) |

- **Type I Error (α):** Declaring a winner when there isn't one → wasted resources on a bad change
- **Type II Error (β):** Missing a real improvement → missed opportunity

### 1.7 Effect Size & Minimum Detectable Effect (MDE)

**Minimum Detectable Effect (MDE):** The smallest change that is practically meaningful to detect.

- MDE must be defined **before** the experiment (not after)
- Smaller MDE → larger required sample size
- Example: "We want to detect at least a 2% relative lift in conversion rate"

### 1.8 Sample Size Calculation

$$n = \frac{2(z_{\alpha/2} + z_{\beta})^2 \cdot p(1-p)}{\delta^2}$$

Where:
- $p$ = baseline conversion rate
- $\delta$ = MDE (absolute difference)
- $z_{\alpha/2}$ = critical value for significance level (e.g., 1.96 for α=0.05)
- $z_{\beta}$ = critical value for power (e.g., 0.84 for 80% power)

---

## 2. A/B Testing Workflow

The following diagram illustrates the end-to-end workflow:

```
┌─────────────────────────────────────────────────────────┐
│                    A/B TESTING WORKFLOW                  │
└─────────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────┐
│  1. IDENTIFY    │  ← Define the problem and opportunity
│     PROBLEM     │    "Why do we need this experiment?"
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  2. FORMULATE   │  ← Write H₀ and H₁
│   HYPOTHESIS    │    "What change do we expect and why?"
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  3. DEFINE      │  ← Choose primary, secondary, guardrail metrics
│    METRICS      │    "What does success look like?"
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  4. CALCULATE   │  ← Set α, power, MDE → compute n per group
│   SAMPLE SIZE   │    "How many users do we need?"
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  5. DESIGN &    │  ← Randomize users, set up logging/tracking
│    RANDOMIZE    │    "How do we split users fairly?"
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  6. RUN THE     │  ← Launch experiment for planned duration
│   EXPERIMENT    │    "Let it run. Don't peek early!"
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  7. CHECK       │  ← Sanity checks: SRM, novelty effect,
│   DATA QUALITY  │    instrumentation correctness
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  8. ANALYZE     │  ← Run statistical test, compute p-value,
│    RESULTS      │    confidence interval, effect size
└────────┬────────┘
         │
    ┌────┴────┐
    │         │
    ▼         ▼
 p < α     p ≥ α
    │         │
    ▼         ▼
┌───────┐  ┌───────┐
│SIGNIF-│  │  NO   │
│ICANT  │  │SIGNIF-│
│RESULT │  │ICANCE │
└───┬───┘  └───┬───┘
    │           │
    ▼           ▼
┌─────────┐  ┌─────────┐
│ 9. SHIP │  │ 9. ITER-│
│  or     │  │  ATE or │
│ ITERATE │  │  ACCEPT │
└─────────┘  │ STATUS  │
             │  QUO    │
             └─────────┘
         │
         ▼
┌─────────────────┐
│  10. DOCUMENT   │  ← Record findings, learnings, and decisions
│   & SHARE       │    "Close the loop with stakeholders"
└─────────────────┘
```

### Step-by-Step Explanation

**Step 1 – Identify the Problem:**
Start with data or user research showing a gap. E.g., "Our checkout page has a 68% drop-off rate."

**Step 2 – Formulate Hypothesis:**
Use the format: *"If we [change], then [metric] will [increase/decrease] because [reason]."*
Example: *"If we simplify the checkout form from 8 fields to 4, then completion rate will increase because fewer steps reduce friction."*

**Step 3 – Define Metrics:**
- Primary: Checkout completion rate
- Secondary: Revenue per user, time-on-page
- Guardrail: Page load time, error rate

**Step 4 – Calculate Sample Size:**
Use a power calculator. If baseline = 32%, MDE = 2pp, α = 0.05, power = 80% → need ~3,800 users per group.

**Step 5 – Randomize:**
Assign users to groups using a hash function (e.g., `hash(user_id + experiment_id) % 100`). Ensure:
- **Independence:** Assignment doesn't affect assignment of others
- **Consistency:** Same user always sees same variant (sticky assignment)

**Step 6 – Run the Experiment:**
- Run for at least **1–2 full business cycles** (usually 1–2 weeks)
- Avoid stopping early (peeking problem inflates false positive rate)

**Step 7 – Data Quality Checks:**
- **Sample Ratio Mismatch (SRM):** Verify groups are the expected size. If A has 1,000 users but B has 1,300, something went wrong with randomization.
- **Novelty Effect:** New features often get a bump just from being new — watch for decay over time.
- **Instrumentation:** Confirm events are logged correctly before analyzing.

**Step 8 – Analyze Results:**
Run a two-sample t-test (continuous) or Z-test for proportions (binary). Compute:
- p-value
- 95% Confidence Interval around the lift
- Effect size (Cohen's d or relative % lift)

**Step 9 – Decision:**
| Outcome | Action |
|---|---|
| Significant + practical lift | Ship the change |
| Significant but small lift | Weigh cost vs. benefit |
| Not significant | Keep status quo or iterate |
| Significant but guardrail violated | Do NOT ship |

**Step 10 – Document:**
Record in an experiment wiki: hypothesis, results, decision, learnings. This builds institutional knowledge.

---

## 3. Key Statistical Tests

### 3.1 Z-Test for Proportions (Binary Metrics)

Used when the metric is a proportion (e.g., conversion rate, CTR).

$$z = \frac{\hat{p}_B - \hat{p}_A}{\sqrt{\hat{p}(1-\hat{p})\left(\frac{1}{n_A} + \frac{1}{n_B}\right)}}$$

Where $\hat{p} = \frac{x_A + x_B}{n_A + n_B}$ is the pooled proportion.

### 3.2 Two-Sample T-Test (Continuous Metrics)

Used for continuous metrics like revenue, time-on-site, session length.

$$t = \frac{\bar{X}_B - \bar{X}_A}{\sqrt{\frac{s_A^2}{n_A} + \frac{s_B^2}{n_B}}}$$

### 3.3 Confidence Intervals

A 95% CI means: if we ran this experiment 100 times, the true effect would fall within our interval 95 times.

$$\text{CI} = (\hat{p}_B - \hat{p}_A) \pm z_{\alpha/2} \cdot SE$$

> Prefer reporting CIs over just p-values — they convey both significance AND magnitude.

---

## 4. Common Pitfalls & Solutions

### 4.1 Peeking Problem (Optional Stopping)

**Problem:** Checking results before reaching planned sample size inflates Type I error.
**Solution:** Commit to sample size upfront. Or use sequential testing methods (e.g., always-valid p-values).

### 4.2 Multiple Testing Problem

**Problem:** Running many tests simultaneously — some will appear significant by chance (with α=0.05, expect 1 false positive per 20 tests).
**Solution:** Apply **Bonferroni correction** (divide α by number of tests) or **Benjamini-Hochberg** for FDR control.

### 4.3 Network Effects / Interference

**Problem:** User A's exposure affects user B's behavior (e.g., social networks, marketplaces).
**Solution:** Use **cluster randomization** (randomize at group level, not individual level).

### 4.4 Novelty Effect

**Problem:** Users behave differently with new features just because they're new — effect fades over time.
**Solution:** Run experiment long enough to see stabilized behavior (2+ weeks). Focus on new users only if possible.

### 4.5 Simpson's Paradox

**Problem:** Aggregated data can show opposite trends to sub-group data.
**Solution:** Always segment and stratify results. Check if groups are balanced across key dimensions.

### 4.6 Sample Ratio Mismatch (SRM)

**Problem:** Actual split differs from intended split → biased results.
**Causes:** Bot traffic, logging bugs, redirect issues, self-selection.
**Detection:** Run a chi-square test on group sizes. If p < 0.01, there's an SRM.

---

## 5. Advanced Topics

### 5.1 Multi-Armed Bandit (MAB)

Instead of a fixed split, MAB algorithms dynamically allocate more traffic to better-performing variants.

| | A/B Test | Multi-Armed Bandit |
|---|---|---|
| **Goal** | Inference (learn what's better) | Optimization (maximize reward) |
| **Traffic allocation** | Fixed (e.g., 50/50) | Dynamic (exploit better arm) |
| **Best for** | Long-term decisions | Short-lived campaigns, recommendations |
| **Regret** | Higher during experiment | Minimized through exploration-exploitation |

Common algorithms: **ε-greedy**, **UCB (Upper Confidence Bound)**, **Thompson Sampling**.

### 5.2 Bayesian A/B Testing

Instead of p-values, compute the **posterior probability** that variant B is better than A.

$$P(B > A | \text{data}) = \int_0^1 \int_0^p_B f(p_B|\text{data}) \cdot f(p_A|\text{data}) \, dp_A \, dp_B$$

**Advantages:** Intuitive interpretation ("95% probability that B is better"), can incorporate prior knowledge, allows early stopping with less risk.

### 5.3 CUPED (Controlled-experiment Using Pre-Experiment Data)

Reduces variance by using pre-experiment data as a covariate.

$$Y^{\text{CUPED}} = Y - \theta \cdot (X - \mathbb{E}[X])$$

Where $X$ is a pre-experiment covariate correlated with the outcome $Y$, and $\theta = \frac{\text{Cov}(Y, X)}{\text{Var}(X)}$.

**Effect:** Reduces variance, increases power without increasing sample size. Used heavily at Microsoft, Netflix, Airbnb.

### 5.4 A/A Testing

Running the same version against itself to:
- Validate your randomization is unbiased
- Estimate false positive rate in practice
- Check instrumentation is working correctly

> If an A/A test shows significant differences, something is wrong with your setup.

---

## 6. Case Studies

### Case Study 1: Amazon — Button Color Test 🛒

**Context:** Amazon tested changing the "Add to Cart" button color.

**Setup:**
- Control (A): Orange button
- Treatment (B): Yellow button
- Primary metric: Add-to-cart rate
- Sample size: ~500,000 users per group
- Duration: 2 weeks

**Result:** Yellow button showed +2.1% lift in add-to-cart rate (p < 0.001, 95% CI: [1.4%, 2.8%]).

**Decision:** Shipped. At Amazon's scale, even a 2% lift translates to hundreds of millions in revenue.

**Lesson:** Small, seemingly cosmetic changes can have large business impact at scale.

---

### Case Study 2: Booking.com — Urgency Messaging 🏨

**Context:** Booking.com tested showing "Only 2 rooms left!" messages on hotel listings.

**Setup:**
- Control (A): No urgency message
- Treatment (B): Scarcity/urgency badge
- Primary metric: Booking conversion rate
- Secondary metric: User satisfaction score (post-stay survey)
- Duration: 3 weeks, ~1.2M users

**Result:**
- Booking conversion: +4.3% (significant)
- User satisfaction: -1.1% (significant, guardrail violated!)

**Decision:** Did NOT ship the feature. Despite conversion gains, the trust/satisfaction damage was unacceptable.

**Lesson:** Always define and monitor guardrail metrics. Short-term gains can mask long-term harm.

---

### Case Study 3: LinkedIn — Newsfeed Algorithm Change 📊

**Context:** LinkedIn tested a new ranking algorithm for the professional news feed.

**Setup:**
- Control (A): Chronological feed
- Treatment (B): Relevance-ranked feed (ML model)
- Primary metric: Weekly Active Users (WAU), feed engagement (likes/comments/shares)
- Guardrail: Viral K-factor (network effects monitoring)
- Duration: 4 weeks (extended due to network effects)

**Challenge:** Users are connected to each other — standard randomization would create **interference** (if user A sees more engaging content and comments, their connections in control group benefit too).

**Solution:** Used **ego-cluster randomization** — all connections of a seed user were assigned to the same group.

**Result:** +6.1% engagement, +2.3% WAU. No degradation to guardrails.

**Decision:** Shipped globally.

**Lesson:** Social networks require special randomization strategies to avoid interference bias.

---

### Case Study 4: Airbnb — Search Ranking with CUPED 🏠

**Context:** Airbnb tested a new search ranking model.

**Primary metric:** Booking rate per search session

**Challenge:** High variance in booking rate (weekly/seasonal patterns) made standard tests slow to reach significance.

**Solution:** Applied CUPED using the user's previous 30-day booking behavior as a covariate. This reduced variance by ~35%, cutting the required experiment duration from 4 weeks to ~2.5 weeks.

**Result:** +3.8% booking rate lift (statistically significant with CUPED; borderline without).

**Lesson:** Variance reduction techniques like CUPED can dramatically speed up experimentation velocity.

---

### Case Study 5: Microsoft Bing — Feature Interaction Test 🔍

**Context:** Bing was simultaneously testing a new autocomplete model and a new result ranking algorithm.

**Problem:** Running both as separate A/B tests could lead to **interaction effects** — the combined behavior might differ from either test alone.

**Solution:** **2×2 Factorial Design:**

| | Ranking A (old) | Ranking B (new) |
|---|---|---|
| **Autocomplete A (old)** | Group 1 (control) | Group 2 |
| **Autocomplete B (new)** | Group 3 | Group 4 (both new) |

**Findings:** Both features had positive individual effects, but together they had a **subadditive interaction** — the combined lift was less than A + B individually.

**Decision:** Shipped both features, but the interaction finding informed future roadmap prioritization.

**Lesson:** When testing multiple changes simultaneously, factorial designs reveal interaction effects that sequential testing would miss.

---

## 7. Quick Reference: A/B Testing Checklist

### Pre-Experiment
- [ ] Business problem clearly defined
- [ ] Hypothesis written in "If-Then-Because" format
- [ ] Primary, secondary, and guardrail metrics defined
- [ ] Sample size calculated with stated α, power, and MDE
- [ ] Experiment duration planned (minimum 1 business cycle)
- [ ] Randomization unit chosen (user, session, device, cluster)
- [ ] A/A test passed (validates setup)

### During Experiment
- [ ] Not peeking at results early
- [ ] Monitoring for major anomalies (not for significance)
- [ ] Checking for instrumentation issues in first 24h

### Post-Experiment
- [ ] Sample Ratio Mismatch (SRM) check passed
- [ ] Statistical test run correctly (t-test vs Z-test)
- [ ] p-value AND confidence interval reported
- [ ] Effect size evaluated for practical significance
- [ ] Guardrail metrics checked
- [ ] Segments analyzed (mobile vs. desktop, new vs. returning users)
- [ ] Results documented in experiment wiki

---

## 8. Formula Summary

| Concept | Formula |
|---|---|
| Sample size (proportions) | $n = \frac{2(z_{\alpha/2} + z_\beta)^2 p(1-p)}{\delta^2}$ |
| Z-test statistic | $z = \frac{\hat{p}_B - \hat{p}_A}{\sqrt{\hat{p}(1-\hat{p})(1/n_A + 1/n_B)}}$ |
| T-test statistic | $t = \frac{\bar{X}_B - \bar{X}_A}{\sqrt{s_A^2/n_A + s_B^2/n_B}}$ |
| 95% Confidence Interval | $\text{lift} \pm 1.96 \cdot SE$ |
| Relative lift | $\frac{\hat{p}_B - \hat{p}_A}{\hat{p}_A} \times 100\%$ |
| CUPED adjusted outcome | $Y^{cuped} = Y - \theta(X - \mathbb{E}[X])$ |
| CUPED variance reduction | $1 - \rho^2(Y, X)$ |
| Bonferroni correction | $\alpha^* = \alpha / m$ (m = # of tests) |

---

## 9. Key Terms Glossary

| Term | Definition |
|---|---|
| **A/B Test** | Randomized controlled experiment comparing two variants |
| **Control** | Existing baseline version |
| **Treatment** | New variant being tested |
| **p-value** | Probability of observed result under H₀ |
| **α (alpha)** | Significance level; acceptable Type I error rate |
| **β (beta)** | Type II error rate (1 - power) |
| **Power** | Probability of detecting a true effect |
| **MDE** | Minimum Detectable Effect — smallest practically meaningful change |
| **Confidence Interval** | Range likely containing the true effect |
| **SRM** | Sample Ratio Mismatch — unintended imbalance in group sizes |
| **CUPED** | Variance reduction using pre-experiment covariates |
| **MAB** | Multi-Armed Bandit — adaptive traffic allocation algorithm |
| **Novelty Effect** | Temporary behavior change due to unfamiliarity with new feature |
| **Interference** | When one user's treatment affects another user's outcome |
| **Factorial Design** | Testing multiple factors simultaneously across crossed groups |

---

## 10. Study & Review Notes

### Key Intuitions to Remember

1. **Randomization is everything.** Without proper randomization, you can't make causal claims. All bias controls flow from this.

2. **Statistical significance ≠ practical significance.** With millions of users, even meaningless 0.01% lifts become "significant." Always ask: "Is this lift worth the engineering cost?"

3. **The peeking problem is subtle but serious.** Every time you "check" early, you inflate your false positive rate. If you check at 5 interim points, your effective α can balloon from 5% to ~18%.

4. **Guardrail metrics are non-negotiable.** Never ship a feature that significantly degrades user experience, trust, or safety metrics, even if primary metrics look great.

5. **Duration matters, not just sample size.** Run for at least one full business cycle (7 days) to capture weekly patterns. Two weeks is the typical standard.

6. **Document learnings, not just decisions.** The long-term value of experimentation is building knowledge about your users and product, not just optimizing individual features.

### Common Interview Questions

**Q: What's the difference between statistical significance and practical significance?**
A: Statistical significance (p < α) means the observed effect is unlikely due to chance. Practical significance means the effect is large enough to matter for the business. At large scale, tiny effects become statistically significant but may not justify implementation cost.

**Q: What would you do if your A/B test shows p = 0.04 but your pre-planned sample size hasn't been reached?**
A: Do NOT stop early. Continue to the pre-planned sample size. Early stopping inflates the false positive rate — this is the peeking problem.

**Q: How do you handle network effects in A/B testing?**
A: Use cluster randomization (randomize at the group level, e.g., school, city, or social cluster) rather than individual-level randomization, to prevent treatment spillover into control.

**Q: What is CUPED and why is it useful?**
A: CUPED uses pre-experiment data as a covariate to reduce variance in the outcome metric. Lower variance → higher power → smaller required sample size or shorter experiment duration, without increasing false positive rate.

**Q: What is an SRM and how do you detect it?**
A: Sample Ratio Mismatch occurs when the actual group sizes differ from the intended split. Detect by running a chi-square goodness-of-fit test on group sizes. If p < 0.01, investigate logging, redirect, or bot filtering bugs before trusting any results.

---

*Content drafted with assistance from [Claude](https://claude.ai) (Anthropic).*
