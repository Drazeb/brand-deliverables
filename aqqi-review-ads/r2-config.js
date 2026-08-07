/* ===================================================================
   Config Round 2 — SOURCE UNIQUE partagée par les deux pages :
     - index.html  (review interne, Round 1 + Round 2)
     - canva.html  (équipe intégration, Round 2 seul)
   Modifier ICI met à jour les deux pages d'un coup.
   vars: variations dans l'ordre voulu ; n = nombre de cartes.
   projectFile = fichier source Claude Design de l'ad.
   canva = Fichier 2 Canva (équipe growth/intégration) par variation.
   =================================================================== */
window.DS_FILE = 'https://drive.google.com/file/d/1SrvTI4Y28Qex2iEWSi4AO1F2iRsn6g71/view?usp=sharing'; /* hébergé sur Drive (164 Mo, > limite GitHub) */
window.R2 = [
  { id:'ad1', num:1, name:'Prix barré', prefix:'ad01', projectFile:null,
    vars:[{L:'A',n:4,canva:'downloads/ad01-A-layers.zip'},{L:'C',n:4,canva:'downloads/ad01-C-layers.zip'},{L:'E',n:4,canva:'downloads/ad01-E-layers.zip'}] },
  { id:'ad2', num:2, name:'Camp adverse', prefix:'ad02', projectFile:'downloads/ad02-claude-design.zip',
    vars:[{L:'A',n:4,canva:'downloads/ad02-A-layers.zip'},{L:'B1',n:4,canva:'downloads/ad02-B1-layers.zip'},{L:'B2',n:4,canva:'downloads/ad02-B2-layers.zip'}] },
  { id:'ad3', num:3, name:'Payer au résultat', prefix:'ad03', projectFile:'downloads/ad03-claude-design.zip',
    vars:[{L:'C',n:2,canva:'downloads/ad03-C-layers.zip'},{L:'A',n:2,canva:'downloads/ad03-A-layers.zip'},{L:'B',n:2,canva:'downloads/ad03-B-layers.zip'}] },
  { id:'ad4', num:4, name:'Le bien invisible', prefix:'ad04', projectFile:'downloads/ad04-claude-design.zip',
    vars:[{L:'A',n:2,canva:'downloads/ad04-A-layers.zip'},{L:'B',n:2,canva:'downloads/ad04-B-layers.zip'},{L:'C',n:2,canva:'downloads/ad04-C-layers.zip'}] },
  { id:'ad5', num:5, name:'Tiers de confiance', prefix:'ad05', projectFile:'downloads/ad05-claude-design.zip',
    vars:[{L:'A',n:2,canva:'downloads/ad05-A-layers.zip'},{L:'B',n:2,canva:'downloads/ad05-B-layers.zip'},{L:'C',n:2,canva:'downloads/ad05-C-layers.zip'},{L:'D',n:2,canva:'downloads/ad05-D-layers.zip'}] },
  { id:'ad6', num:6, name:"N'achetez pas", prefix:'ad06', projectFile:'downloads/ad06-claude-design.zip',
    vars:[{L:'A',n:4,canva:'downloads/ad06-A-layers.zip'},{L:'B',n:3,canva:'downloads/ad06-B-layers.zip'},{L:'C',n:3,canva:'downloads/ad06-C-layers.zip'},{L:'D',n:3,canva:'downloads/ad06-D-layers.zip'}] }
];
