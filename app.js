const approachData = {
  longread: {
    tag: 'Molecule-resolved response', title: 'Nanopore long-read perturbomics',
    body: 'Sequence full-length cDNA or native RNA after genetic, chemical or environmental perturbation. Long reads preserve exon connectivity and can expose consequences invisible in gene-level summaries.',
    strengths: ['Full-length transcript isoforms','Direct target-edit evidence','Alternative polyadenylation','Native-RNA signal potential'],
    examples: [['Single-cell CRISPR isoforms','https://doi.org/10.1186/s13059-021-02554-1'],['CRISPore-seq','https://doi.org/10.1101/2025.11.25.690515']], art: 'molecule'
  },
  singlecell: {
    tag: 'Pooled genetic screens', title: 'Perturb-seq, CROP-seq and direct capture',
    body: 'Assign guides to thousands of individual cells and read the transcriptional consequences. These methods excel at cell-state heterogeneity, regulatory networks and large pooled genetic perturbation libraries.',
    strengths: ['High cell throughput','Guide-to-cell assignment','Rare-state discovery','Combinatorial perturbations'],
    examples: [['Perturb-seq','https://doi.org/10.1016/j.cell.2016.11.038'],['CROP-seq','https://doi.org/10.1038/nmeth.4177']], art: 'cells'
  },
  chemical: {
    tag: 'Arrayed pharmacology', title: 'DRUG-seq, L1000 and dose-response atlases',
    body: 'Apply defined compounds and doses in separate wells, barcode early and pool libraries. The result is a clean causal map from chemical structure and exposure to gene-expression response.',
    strengths: ['Very high compound scale','Known dose and condition','Mechanism clustering','Cost-efficient gene counts'],
    examples: [['DRUG-seq','https://doi.org/10.1038/s41467-018-06500-x'],['VCPI open dataset','https://datapoints.ginkgo.bio/updates/vcpi-launches-first-open-source-transcriptomics-dataset']], art: 'plate'
  },
  imaging: {
    tag: 'Phenotypic profiling', title: 'Cell Painting and morphological perturbomics',
    body: 'Multiplexed fluorescent stains convert organelle shape, texture and localization into high-dimensional profiles. Imaging captures phenotypes that may not be proportional to RNA abundance.',
    strengths: ['Organelle-level phenotype','Very high throughput','Chemical and genetic profiles','Strong multimodal complement'],
    examples: [['JUMP Cell Painting','https://jump-cellpainting.broadinstitute.org/'],['JUMP public data','https://jump-cellpainting.broadinstitute.org/more-info']], art: 'image'
  },
  spatial: {
    tag: 'Context-preserving screens', title: 'Spatial and optical pooled perturbation',
    body: 'Decode perturbations in fixed cells or tissues while retaining morphology, neighbourhood and microenvironment. These methods answer where a response occurs, not only whether it occurs.',
    strengths: ['Tissue architecture','Cell-neighbour effects','Imaging phenotypes','In situ guide decoding'],
    examples: [['Optical pooled screens','https://doi.org/10.1016/j.cell.2019.03.009'],['Spatial Perturb-seq','https://doi.org/10.1038/s41587-023-01919-4']], art: 'spatial'
  },
  virtual: {
    tag: 'Predictive biology', title: 'Virtual-cell and perturbation-response models',
    body: 'Models learn transitions from baseline cell state and perturbation to a predicted molecular response. Their reliability depends on causal, standardized and out-of-distribution benchmark data.',
    strengths: ['Unseen-perturbation prediction','Cross-dataset integration','Counterfactual screening','Benchmark-driven development'],
    examples: [['Biohub Virtual Cells Platform','https://virtualcellmodels.cziscience.com/'],['Ginkgo VCPI','https://datapoints.ginkgo.bio/updates/vcpi-launches-first-open-source-transcriptomics-dataset']], art: 'network'
  }
};

const datasets = [
  {name:'Single-cell CRISPR-modified transcript isoforms', subtitle:'Jurkat-Cas9; splice-site and splicing-factor perturbations', tags:['nanopore'], platform:'ONT cDNA + Illumina', perturbation:'CRISPR', accession:'PRJNA708300', access:'Raw + code', url:'https://www.ncbi.nlm.nih.gov/bioproject/PRJNA708300'},
  {name:'Isoform-level single-cell CRISPRi benchmark', subtitle:'K562; DDX6, GEMIN5 and GFI1B knockdown', tags:['nanopore'], platform:'ONT + PacBio + Illumina', perturbation:'CRISPRi', accession:'GSE330222', access:'Raw + matrices', url:'https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE330222'},
  {name:'SMG1 inhibitor direct-RNA perturbation', subtitle:'HEK293T; DMSO versus 300 nM SMG1i for 4 hours', tags:['nanopore','direct-rna'], platform:'PromethION direct RNA', perturbation:'Small molecule', accession:'GSE254289', access:'Raw + counts', url:'https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE254289'},
  {name:'UPF1 knockdown direct-RNA sequencing', subtitle:'HEK293T; siRNA perturbation of nonsense-mediated decay', tags:['nanopore','direct-rna'], platform:'PromethION direct RNA', perturbation:'siRNA', accession:'GSE296644', access:'Raw + TSV', url:'https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE296644'},
  {name:'SRSF1 depletion × ionizing radiation', subtitle:'MDA-MB-231; 4 conditions with 3 biological replicates', tags:['nanopore'], platform:'PromethION cDNA', perturbation:'siRNA + 10 Gy', accession:'GSE252534', access:'Raw + processed', url:'https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE252534'},
  {name:'Stress-responsive long-read transcriptomes', subtitle:'HeLa; untreated, sodium arsenite and heat shock', tags:['nanopore'], platform:'PromethION cDNA', perturbation:'Cell stress', accession:'GSE277764', access:'Raw + FLAIR', url:'https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE277764'},
  {name:'PRMT1 inhibitor full-length transcriptomics', subtitle:'WiDr; DMSO versus GSK715, 96-hour treatment', tags:['nanopore'], platform:'PromethION cDNA', perturbation:'Small molecule', accession:'GSE335198', access:'Raw + counts', url:'https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE335198'},
  {name:'m6A-isoSC-seq and RNA surveillance', subtitle:'Single-cell isoform context plus SMG1/UPF1 perturbations', tags:['nanopore','direct-rna'], platform:'ONT + Illumina + DRS', perturbation:'Drug + knockdown', accession:'GSE239765', access:'Raw + processed', url:'https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE239765'},
  {name:'Original DRUG-seq compound atlas', subtitle:'433 compounds across eight concentrations', tags:['short-read'], platform:'Plate-based RNA-seq', perturbation:'Small molecules', accession:'GSE120222', access:'Raw + matrix', url:'https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE120222'},
  {name:'Virtual Cell Pharmacology Initiative', subtitle:'First release profiles more than 2,200 compounds in THP-1 cells', tags:['short-read','virtual-cell'], platform:'DRUG-seq', perturbation:'Dose-resolved drugs', accession:'VCPI release 1', access:'Open dataset', url:'https://datapoints.ginkgo.bio/updates/vcpi-launches-first-open-source-transcriptomics-dataset'},
  {name:'JUMP Cell Painting', subtitle:'Public chemical and genetic morphological profiles', tags:['imaging'], platform:'Multiplexed microscopy', perturbation:'Drug + genetic', accession:'cpg0016', access:'Images + profiles', url:'https://jump-cellpainting.broadinstitute.org/'},
  {name:'Connectivity Map / L1000', subtitle:'Large reference collection of chemical and genetic signatures', tags:['short-read','virtual-cell'], platform:'Landmark-gene assay', perturbation:'Drug + genetic', accession:'CLUE', access:'Public portal', url:'https://clue.io/'},
  {name:'Biohub Virtual Cells Platform', subtitle:'Models, standardized datasets and biological benchmarks', tags:['virtual-cell'], platform:'AI model ecosystem', perturbation:'Predictive', accession:'VCP', access:'Data + models', url:'https://virtualcellmodels.cziscience.com/'},
  {name:'CRISPore-seq', subtitle:'Long-read multimodal screen of 15 RNA-binding proteins', tags:['nanopore'], platform:'ONT + short-read + protein', perturbation:'CRISPRi', accession:'Preprint', access:'Verify release', url:'https://doi.org/10.1101/2025.11.25.690515'}
];

const panel = document.querySelector('#approach-panel');
function renderApproach(key){
  const d=approachData[key];
  const links=d.examples.map(([t,u])=>`<a href="${u}" target="_blank" rel="noreferrer">${t} ↗</a>`).join(' · ');
  const art = d.art === 'molecule' ? '<div class="art-molecule"><i></i><i></i><i></i><i></i></div>' :
    d.art === 'cells' ? `<div class="art-cells">${'<i></i>'.repeat(18)}</div>` :
    d.art === 'plate' ? `<div class="art-plate">${'<i></i>'.repeat(48)}</div>` :
    d.art === 'image' ? '<div class="art-image"></div>' :
    d.art === 'spatial' ? '<div class="art-spatial"></div>' : `<div class="art-network">${'<i></i>'.repeat(5)}</div>`;
  panel.innerHTML=`<div class="approach-content"><span class="approach-tag">${d.tag}</span><h3>${d.title}</h3><p>${d.body}</p><ul>${d.strengths.map(x=>`<li>${x}</li>`).join('')}</ul><div class="examples"><b>Examples:</b> ${links}</div></div><div class="approach-art"><span class="art-label">Response layer</span><div class="art-center">${art}</div></div>`;
}
renderApproach('longread');
document.querySelectorAll('.approach-tabs button').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.approach-tabs button').forEach(x=>x.setAttribute('aria-selected','false'));
  btn.setAttribute('aria-selected','true'); renderApproach(btn.dataset.tab);
}));

let activeFilter='all';
const list=document.querySelector('#dataset-list'); const count=document.querySelector('#dataset-count'); const search=document.querySelector('#dataset-search');
function renderDatasets(){
  const q=search.value.toLowerCase().trim();
  const rows=datasets.filter(d=>(activeFilter==='all'||d.tags.includes(activeFilter)) && (!q||Object.values(d).flat().join(' ').toLowerCase().includes(q)));
  count.textContent=`${rows.length} dataset${rows.length===1?'':'s'}`;
  list.innerHTML=rows.length?rows.map(d=>`<a class="dataset-row" href="${d.url}" target="_blank" rel="noreferrer"><div class="dataset-title"><strong>${d.name}</strong><span>${d.subtitle}</span></div><div class="dataset-cell"><small>Platform</small><span>${d.platform}</span></div><div class="dataset-cell"><small>Perturbation</small><span>${d.perturbation}</span></div><div class="dataset-cell"><small>Accession / access</small><span>${d.accession}</span><span class="dataset-access">${d.access}</span></div><div class="dataset-arrow">↗</div></a>`).join(''):'<div class="empty-state">No datasets match these filters.</div>';
}
renderDatasets(); search.addEventListener('input',renderDatasets);
document.querySelectorAll('.filter-buttons button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter-buttons button').forEach(x=>x.classList.remove('active'));btn.classList.add('active');activeFilter=btn.dataset.filter;renderDatasets()}));

const recommendation=document.querySelector('#recommendation');
const checks=[...document.querySelectorAll('#question-stack input')];
function updateRecommendation(){
  const selected=new Set(checks.filter(x=>x.checked).map(x=>x.value)); let title='Hybrid perturbation programme', text='Use a scalable discovery assay first, then deploy Nanopore on the conditions where complete-molecule information will change interpretation.', reasons=['Balanced scale and biological depth','Reduces long-read sequencing burden','Supports causal follow-up'];
  if(selected.has('native')){title='Nanopore direct RNA–centred design';text='Native-RNA features are the non-negotiable readout. Use direct RNA sequencing on a focused set of well-replicated perturbations, with cDNA or short reads for depth.';reasons=['Preserves native RNA signal','Supports modification-aware analysis','Allows poly(A)-tail interrogation'];}
  else if(selected.has('isoform') && selected.has('singlecell')){title='Single-cell Nanopore perturbomics';text='Use a barcoded short-read library for efficient cell and guide assignment, then sequence the same cDNA with Nanopore for full-length isoforms and direct edit evidence.';reasons=['Links cell state to transcript structure','Captures hidden splice effects','Hybrid depth is cost-efficient'];}
  else if(selected.has('isoform')){title='Nanopore full-length cDNA design';text='Prioritize biological replicates and dose/time structure, then sequence full-length cDNA to quantify differential transcript usage and isoform switching.';reasons=['Direct exon connectivity','Alternative start/end detection','Gene-level and isoform-level outputs'];}
  else if(selected.has('scale') && selected.has('morphology')){title='DRUG-seq + Cell Painting screen';text='Use high-throughput transcriptomic and morphological profiling for the full library, then send mechanistically interesting hits into Nanopore follow-up.';reasons=['Maximizes initial scale','Captures orthogonal phenotype','Focuses long-read budget on hits'];}
  else if(selected.has('scale')){title='DRUG-seq or Perturb-seq discovery';text='Start with a high-throughput gene-level screen. Predefine a Nanopore validation tier for hits where isoforms or target-edit fidelity could change the conclusion.';reasons=['Lowest cost per perturbation','Strong ranking and clustering','Clear path to deep follow-up'];}
  else if(selected.has('spatial')){title='Spatial perturbation + targeted long reads';text='Preserve tissue context using spatial or optical pooled screening, then isolate selected states or regions for targeted Nanopore transcript analysis.';reasons=['Maintains neighbourhood context','Connects location to mechanism','Adds complete-molecule validation'];}
  else if(selected.has('morphology')){title='Cell Painting–first programme';text='Use multiplexed imaging to discover phenotypic classes, followed by DRUG-seq and Nanopore on representative conditions to explain the molecular basis.';reasons=['Broad cellular phenotype','Very high throughput','Molecular follow-up remains targeted'];}
  recommendation.querySelector('h3').textContent=title; recommendation.querySelector(':scope > p').textContent=text; document.querySelector('#rec-reasons').innerHTML=reasons.map(x=>`<li>${x}</li>`).join('');
}
checks.forEach(x=>x.addEventListener('change',updateRecommendation));

const modal=document.querySelector('#image-modal'); const modalImg=modal.querySelector('img');
document.querySelectorAll('.figure-image').forEach(btn=>btn.addEventListener('click',()=>{modalImg.src=btn.dataset.image;modal.showModal()}));
modal.querySelector('.modal-close').addEventListener('click',()=>modal.close()); modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});

const menu=document.querySelector('.menu-button'), mobile=document.querySelector('#mobile-nav');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));mobile.hidden=open});
mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobile.hidden=true;menu.setAttribute('aria-expanded','false')}));
window.addEventListener('scroll',()=>document.querySelector('.site-header').classList.toggle('scrolled',scrollY>10));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.09});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
