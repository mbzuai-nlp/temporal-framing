# Temporal Framing Corpus Datasheet

2026

## Abstract

This document provides structured documentation for the **Temporal Framing Corpus**, following the principles of Datasheets for Datasets [1,2](#ref-1) and Microsoft Aether data documentation. The corpus comprises English and German news articles annotated at the sentence level for rhetorical uses of temporal language, capturing how references to time are employed to frame interpretation and persuasion rather than to report chronology alone. This datasheet describes the corpus’s motivation, scope, composition, collection and annotation procedures, intended uses, limitations, and legal and ethical considerations, with the goal of supporting transparency, reproducibility, and responsible research use.

## Corpus Overview

**Corpus name:** Temporal Framing  
**Version:** 1.0 (2026)  
**Languages:** English, German  
**Annotation level:** Sentence-level, multi-label  
**Release venue:** Controlled access for non-commercial research use  

The Temporal Framing corpus is a multilingual collection of annotated online news articles designed to support research on rhetorical uses of time in journalistic discourse. Articles are segmented into sentences and annotated for the presence and type of temporal framing using a theory-informed taxonomy. The corpus focuses on how temporal references are used to persuade, rather than on temporal expressions as factual or chronological signals.

## Motivation and Scope

Temporal language plays a key role in persuasive communication, particularly in news discourse. While prior NLP research has extensively modeled time as chronology (e.g., tense, aspect, temporal expression extraction, event ordering), the rhetorical and framing functions of temporal references remain comparatively underexplored.

This corpus was created to:
- Enable systematic study of temporal framing as a persuasive device in news
- Support sentence-level detection and classification of rhetorical temporal frames
- Bridge computational linguistics with social-scientific theories of time and framing

The corpus is designed for analytical and research purposes and is not intended to be representative of overall news production.

## Corpus Composition

### Content Summary

The corpus consists of news articles segmented into sentences, with sentence-level annotations indicating the presence and type of temporal framing. Most sentences do not exhibit persuasive temporal framing; annotations are therefore intentionally sparse. Table 1 summarizes corpus statistics by language.

|              | English | German |
|--------------|---------|--------|
| Documents    | 238     | 220    |
| Sentences    | 8,750   | 11,909 |
| Annotated sentences | 1,748 | 617 |
| Total annotations | 2,334 | 696 |

*Table 1: Corpus statistics by language.*

### Temporal Framing Taxonomy

Each sentence may receive zero, one, or multiple labels from the taxonomy shown in Table 2. The datasheet includes only concise frame descriptions; detailed operational definitions, edge cases, and annotated examples are provided in the accompanying paper and annotation guidelines.

| Frame | Description |
|------|-------------|
| Primacy | Significance attributed to being first in time |
| Recency | Significance attributed to the most recent events |
| Urgency | Emphasis on limited time or imminent consequences or threats |
| Temporal Anchoring | Framing the discussion through the lens of past events |
| Nostalgia | Invocation of a cherished past |
| Temporal Contrast | Juxtaposition of “then” versus “now” |
| Continuity | Persistence across time |
| Skeptical | Casting doubt about the future |

*Table 2: Temporal framing taxonomy.*

## Data Collection

### Sources

Article URLs were retrieved from the GDELT Global Knowledge Graph [3](#ref-3). Retrieval focused on online news articles published between 2024 and 2025. The resulting corpus spans political, economic, cultural, commercial, and crisis-related reporting.

### Collection Pipeline

Data collection followed a multi-stage pipeline combining large-scale event-based retrieval, automated extraction, heuristic filtering, and controlled sampling. Key steps included:

<div class="pipeline-h-mini" role="presentation" aria-hidden="true">
  <span>Retrieve URLs</span><span class="ph-ar">→</span><span>Extract text</span><span class="ph-ar">→</span><span>Dedup &amp; sample</span><span class="ph-ar">→</span><span>Segment</span>
</div>

1. Large-scale URL retrieval and thematic filtering via GDELT restricted to a curated set of recognized news outlets per language.  
   <span style="color:#465F7D; font-style:italic; font-size:0.9em;">
   Rationale: This is done to prioritize sources with broad readership and consistent visibility, and to reduce noise from potentially low-traffic or spam-like outlets.
   </span>

2. Stratified sampling by language, outlet, and publication month.  
   <span style="color:#465F7D; font-style:italic; font-size:0.9em;">
   Rationale: This is done to prevent overrepresentation of individual outlets or short-term news bursts.
   </span>

3. Article text extraction using Trafilatura [4](#ref-4) with metadata capture.
4. Automated detection and removal of failed or severely garbled extractions.
5. Exact duplicate removal using URL matching and normalized-text hashing.
6. Near-duplicate removal using MinHash locality-sensitive hashing to identify highly similar articles.
7. Document-level classification of articles as opinionated or non-opinionated using a large language model (LLM), applied solely to guide which articles will be included in the corpus.  
   <span style="color:#465F7D; font-style:italic; font-size:0.9em;">
   Note: LLM-based document classifications were not used as labels in the released corpus and did not influence human annotations of sentence-level temporal framing.
   </span>

8. Stratified sampling of articles by language, outlet, and publication month combined with opinionated-article upsmapling with a target ratio of approximately 70% opinionated articles.  
   <span style="color:#465F7D; font-style:italic; font-size:0.9em;">
   Note: We retain a substantial portion of non-opinionated articles to account for potential noise in the “opinion” vs. “non-opinion” article classifications generated by the LLM.
   </span>

9. Sentence segmentation using Stanza [5](#ref-5) with language-specific tokenization models.

## Annotation Process

Annotations were produced by trained annotators affiliated with the authors’ institutions. Annotation was not crowdsourced. The annotation workflow included:
- Sentence-level, multi-label annotation
- A shared written guideline document defining the taxonomy and decision criteria
- Explicit instructions to avoid annotating quoted or indirect speech
- Weekly calibration meetings to ensure conceptual consistency
- Annotation and adjudication conducted using the INCEpTION platform [6](#ref-6)

Inter-annotator agreement was measured using Krippendorff’s α [7](#ref-7) with results reported in the accompanying paper.

## Preprocessing

Preprocessing steps applied uniformly across languages included:
- Automated text extraction
- Sentence segmentation
- Removal of empty, extremely short, or punctuation-only segments
- Inclusion of article titles as leading sentences when not present in the extracted body text

All preprocessing steps were implemented using reproducible scripts and are documented in the corpus repository.

## Intended Uses

The corpus is intended for:
- Research on rhetorical and persuasive language in news
- Temporal framing detection and classification
- Evaluation of NLP models’ pragmatic understanding of time
- Interdisciplinary research combining NLP and social science

## Out-of-Scope and Misuse Considerations

The corpus is not designed for, and should not be used in, applications involving individual-level profiling, automated persuasion, or real-world decision-making about people. It should not be used to assess factual correctness, veracity, or ideological bias of news content.

Due to its focus on political conflict and crises, some content may be distressing or polarizing.

## Legal and Licensing

The corpus is derived from publicly available news articles. Due to copyright constraints, the dataset is distributed under controlled access and includes full article text solely for non-commercial academic research purposes. Copyright for the original articles remains with their respective publishers. Redistribution or commercial use of the article text is not permitted. Users are responsible for ensuring compliance with the terms of use of the original news sources.

The **annotations** included in the corpus are released under the **Creative Commons Attribution 4.0 International (CC BY 4.0)** license.

## Distribution

The corpus is distributed via controlled access for non-commercial academic research use. Access is granted upon request and subject to agreement with the stated data use conditions, including restrictions on redistribution and commercial use.

## Ethical Considerations

The corpus is released to support modeling and analysis of persuasive language in news. As with other framing corpora, there is a risk of misuse for optimizing persuasive communication. The corpus is therefore released with explicit documentation of its intended scope, limitations, and research-only purpose.

## Maintenance and Versioning

The corpus is maintained by the authors. Future versions may extend language coverage, refine annotations, or correct identified errors. Updates and known issues will be documented in the public repository, and earlier versions will remain accessible to support reproducibility.

## References

<a id="ref-1"></a>
**[1]** Timnit Gebru, Jamie Morgenstern, Briana Vecchione, Jennifer Wortman Vaughan, Hanna Wallach, Hal Daumé III, and Kate Crawford.  
*Datasheets for Datasets*. Communications of the ACM, 64(12), 2021.  
https://doi.org/10.1145/3458723

<a id="ref-2"></a>
**[2]** Amy K. Heger, Liz B. Marquis, Mihaela Vorvoreanu, Hanna Wallach, and Jennifer Wortman Vaughan.  
*Understanding Machine Learning Practitioners’ Data Documentation Perceptions, Needs, Challenges, and Desiderata*. PACM HCI, 6(CSCW2), 2022.  
https://doi.org/10.1145/3555760

<a id="ref-3"></a>
**[3]** Kalev Leetaru and Philip A. Schrodt.  
*GDELT: Global Data on Events, Location, and Tone*. ISA Annual Convention, 2013.  
http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.686.6605

<a id="ref-4"></a>
**[4]** Adrien Barbaresi.  
*Trafilatura: A Web Scraping Library and Command-Line Tool for Text Discovery and Extraction*. ACL 2021 System Demonstrations.  
https://aclanthology.org/2021.acl-demo.15/

<a id="ref-5"></a>
**[5]** Peng Qi, Yuhao Zhang, Yuhui Zhang, Jason Bolton, and Christopher D. Manning.  
*Stanza: A Python Natural Language Processing Toolkit for Many Human Languages*. ACL 2020 System Demonstrations.  
https://aclanthology.org/2020.acl-demos.14/

<a id="ref-6"></a>
**[6]** Jan-Christoph Klie, Michael Bugert, Beto Boullosa, Richard Eckart de Castilho, and Iryna Gurevych.  
*The INCEpTION Platform*. COLING 2018 System Demonstrations.  
https://aclanthology.org/C18-2002/

<a id="ref-7"></a>
**[7]** University of Pennsylvania ASC.  
*Computing Krippendorff’s Alpha Reliability*. 2021.  
https://www.asc.upenn.edu/sites/default/files/2021-03/Computing%20Krippendorff%27s%20Alpha-Reliability.pdf
