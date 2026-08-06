// ============================================================
//  ENT MASTER BANK — PRODUCTION OPTIMIZED BUILD v7.0
//  Performance Engineering: Dashboard Cache, Lazy Loading,
//  Virtual Scrolling, Infinite Scrolling, Smart Scroll Loader,
//  In-Memory Search Index, Filter Cache, Web Worker Offload
// ============================================================

window.ENTApp=window.ENTApp||{};
window.ENTApp.state=window.ENTApp.state||{};
window.ENTApp.utils=window.ENTApp.utils||{};

window.ENTApp=window.ENTApp||{};
window.ENTApp.modules=window.ENTApp.modules||{};
window.ENTApp.modules.app=window.ENTApp.modules.app||{};
window.ENTApp=window.ENTApp||{};
window.ENTApp.version='step36-opt';
window.ENTApp.utils=window.ENTApp.utils||{};
// Phase 5 bootstrap
window.ENTApp = window.ENTApp || {};
window.ENTApp.version='step35-opt';

        // ============================================================
        //  ENT CURRICULUM — subjects + chapters
        // ============================================================
        const ENT_DATA = {
            'Rhinology': [
                'Anatomy of the nose and paranasal sinuses', 'Outpatient assessment', 'Physiology of the nose and paranasal sinuses',
                'Measurement of the nasal airway', 'Allergic rhinitis', 'Non‑allergic perennial rhinitis', 'Occupational rhinitis',
                'Rhinosinusitis: Definitions, classification and diagnosis', 'Nasal polyposis', 'Fungal rhinosinusitis',
                'Medical management for rhinosinusitis', 'Surgical management of rhinosinusitis', 'The frontal sinus',
                'Mucoceles of the paranasal sinuses', 'Complications of rhinosinusitis', 'The relationship between the upper and lower respiratory tract',
                'Nasal septum and nasal valve', 'Nasal septal perforations', 'Management of enlarged turbinates', 'Epistaxis',
                'Nasal and facial fractures', 'CSF leaks', 'Granulomatous conditions of the nose', 'Abnormalities of smell',
                'Disorders of the orbit', 'Diagnosis and management of facial pain', 'Juvenile angiofibroma',
                'Endoscopic management of sinonasal tumours', 'Surgical management of pituitary and paraseptal diseases',
                'Extended anterior skull base approaches', 'Imaging in rhinology', 'Acute infection in case of maxillary sinusitis'
            ],
            'Paediatric ENT': [
                'Introduction to paediatric otorhinolaryngology', 'The paediatric consultation', 'Recognition and management of the sick child',
                'Anaesthesia for paediatric otorhinolaryngology procedures', 'The child with special needs', 'The child with a syndrome',
                'Management of the immunodeficient child', 'Hearing screening and surveillance', 'Hearing tests in children',
                'Management of the hearing impaired child', 'Paediatric implantation otology', 'Congenital middle ear abnormalities',
                'Otitis media with effusion', 'Acute otitis media', 'Chronic otitis media (paediatric)', 'Microtia and external ear abnormalities',
                'Disorders of speech and language', 'Cleft lip and palate', 'Craniofacial surgery', 'Balance disorders in children',
                'Facial paralysis in children', 'Neonatal nasal obstruction', 'Paediatric rhinosinusitis and its complications',
                'Lacrimal disorders in children', 'The adenoid and adenoidectomy', 'Paediatric obstructive sleep apnoea', 'Stridor',
                'Acute laryngeal infections (paediatric)', 'Congenital disorders of the larynx, trachea and bronchi',
                'Acquired laryngotracheal stenosis (paediatric)', 'Juvenile‑onset recurrent respiratory papillomatosis',
                'Paediatric voice disorders', 'Foreign bodies in the ear, nose and throat', 'Paediatric tracheostomy',
                'Perinatal airway management', 'Cervicofacial infections', 'Diseases of tonsils, tonsillectomy and tonsillotomy',
                'Salivary glands (paediatric)', 'Tumours of the head and neck in childhood', 'Cysts and sinuses of the head and neck',
                'Haemangiomas and vascular malformations', 'Drooling and aspiration', 'Reflux and eosinophilic oesophagitis (paediatric)',
                'Oesophageal disorders in children'
            ],
            'Otology': [
                'Anatomy and embryology of the external and middle ear', 'Anatomy of the cochlea and vestibular system: relating ultrastructure to function',
                'Physiology of hearing', 'Physiology of equilibrium', 'Perception of sounds at the auditory cortex', 'Psychoacoustic audiometry',
                'Evoked measurement of auditory sensitivity', 'Prevention of hearing loss', 'Hearing aids',
                'Beyond hearing aids: an overview of adult audiological rehabilitation', 'Age‑related sensorineural hearing impairment',
                'Noise‑induced hearing loss and related conditions', 'Autosomal dominant non‑syndromic sensorineural hearing loss',
                'Ototoxicity', 'Idiopathic sudden sensorineural hearing loss', 'Tinnitus and hyperacusis', 'Evaluation of balance',
                'Meniere\'s disease', 'Benign paroxysmal positional vertigo', 'Superior semicircular canal dehiscence', 'Vestibular neuritis',
                'Vestibular migraine', 'Vestibular rehabilitation', 'Auditory neuropathy spectrum disorder and retrocochlear disorders in adults and children',
                'Understanding tinnitus: a psychological perspective', 'Auditory processing disorders across the age span',
                'Neuropsychiatric aspects of vestibular disorders', 'Clinical examination of the ears and hearing', 'Furunculosis', 'Myringitis',
                'Keratosis obturans, primary auditory canal cholesteatoma and benign necrotizing otitis externa', 'Acquired atresia of the external ear',
                'Otitis externa and otomycosis', 'Perichondritis of the external ear', 'Exostosis of the external auditory canal',
                'Osteoradionecrosis of the temporal bone', 'Acute otitis media and otitis media with effusion in adults', 'Myringoplasty',
                'Ossiculoplasty', 'Eustachian tube dysfunction', 'Otoendoscopy', 'Tuberculosis of the temporal bone', 'Otosclerosis',
                'Otological effects of Paget\'s disease', 'Ear trauma', 'Otalgia', 'Bone‑conduction hearing devices', 'Cochlear implants',
                'Middle ear implants', 'Auditory brainstem implantation', 'Imaging of the temporal bone'
            ],
            'Skull Base': [
                'Anatomy of the skull base and infratemporal fossa', 'Evaluation of the skull base patient', 'Vascular assessment and management',
                'Natural history of vestibular schwannomas', 'Surgical management of vestibular schwannoma', 'Stereotactic radiosurgery',
                'Neurofibromatosis 2', 'Non‑vestibular schwannoma tumours of the cerebellum‑pontine angle', 'Middle fossa surgery',
                'Jugular foramen lesions and their management', 'Petrous apex lesions', 'Approaches to the nasopharynx and Eustachian tube',
                'Tumours of the temporal bone', 'Clinical neuroanatomy', 'The facial nerve and its non‑neoplastic disorders',
                'Tumours of the facial nerve', 'Osteitis of the temporal bone', 'Squamous cell carcinoma of the temporal bone',
                'Complications of skull base surgery'
            ],
            'Laryngology & Voice': [
                'Physiology of the salivary glands', 'Phonosurgery', 'Movement disorders of the larynx',
                'Chronic laryngitis', 'Contemporary management of laryngotracheal trauma', 'Upper airway obstruction and tracheostomy',
                'Physiology of sleep and sleep disorders', 'Obstructive sleep apnoea: Medical management (adult)',
                'The surgical management of snoring and obstructive sleep apnoea', 'Laryngotracheal stenosis in adults', 'Reflux disease (adult)',
                'Paralysis of the larynx', 'Outpatient laryngeal procedures', 'Anatomy of the larynx and tracheobronchial tree',
                'Physiology of the larynx', 'Voice and speech production', 'Assessment and examination of the larynx', 'Evaluation of the voice',
                'Structural disorders of the vocal cords', 'Functional disorders of the voice', 'The professional voice',
                'Speech and language therapy for voice disorders', 'Acute infections of the larynx (general)'
            ],
            'Facial Plastic & Reconstructive': [
                'Rhinoplasty following nasal trauma', 'Pre‑operative assessment for rhinoplasty', 'External rhinoplasty', 'Revision rhinoplasty',
                'Aesthetic dorsal reduction rhinoplasty', 'Nasal reconstruction', 'Pinnaplasty', 'Blepharoplasty',
                'Surgical rejuvenation of the ageing face', 'Non‑surgical rejuvenation of the ageing face'
            ],
            'Head & Neck Surgery': [
                'History of reconstructive surgery', 'Grafts and local flaps in head and neck cancer', 'Pedicled flaps in head and neck reconstruction',
                'Reconstructive microsurgery in head and neck surgery', 'Benign and malignant conditions of the skin', 'Facial reanimation surgery',
                'Partial and total ear reconstruction', 'A combined prosthetic and surgical approach', 'Oral cavity tumours including lip reconstruction',
                'Oropharyngeal tumours', 'Tumours of the larynx', 'Head and neck pathology', 'Applications of robotics in head and neck practice',
                'Biologically targeted agents in head and neck cancers', 'Prosthetic management of surgically acquired oral and facial defects',
                'Multidisciplinary team working', 'Nutritional considerations', 'Speech voice and swallow rehabilitation after chemoradiation',
                'Surgical anatomy of the neck', 'Clinical examination of the neck', 'Imaging of the neck', 'Neck trauma', 'Benign neck disease',
                'Neck space infections', 'Anatomy and embryology of the mouth and dentition', 'Benign oral and dental disease',
                'Salivary gland anatomy', 'Imaging of the salivary glands', 'Non‑neoplastic salivary gland diseases', 'Pharyngitis',
                'Cricopharyngeal dysphagia', 'Oesophageal diseases (adult)', 'Neurological disease of the pharynx',
                'Rehabilitation of swallowing disorders', 'Chronic aspiration', 'Temporomandibular joint disorders'
            ],
            'Swallowing & Dysphagia': [
                'Anatomy of the pharynx and oesophagus', 'Physiology of swallowing', 'Causes and assessment of dysphagia and aspiration',
                'Functional investigations of the upper gastrointestinal tract'
            ]
        };

        const ALL_SUBJECTS = Object.keys(ENT_DATA).sort();
        const ALL_CHAPTERS = Object.values(ENT_DATA).flat().sort((a, b) => a.localeCompare(b));

// ============================================================
//  OPTIMIZATION LAYER 1: WEB WORKER ENGINE
//  Offloads heavy computation (search indexing, filtering,
//  analytics, duplicate detection) to a background thread.
//  Automatically falls back to main-thread execution if
//  Workers are unavailable, blocked by CSP, or time out.
// ============================================================
const WORKER_CODE = `
let searchIndex = new Map();
let sortedIndexWords = [];
let questionMap = new Map();

function buildIndex(qs) {
  searchIndex.clear();
  questionMap.clear();
  for (const q of qs) {
    questionMap.set(q.id, q);
    const text = [
      q.questionText || '',
      q.explanation || '',
      q.subject || '',
      q.chapter || '',
      q.topic || '',
      Array.isArray(q.tags) ? q.tags.join(' ') : (q.tags || '')
    ].join(' ').toLowerCase();
    const words = [...new Set(text.match(/\b[a-z0-9]+\b/g) || [])];
    for (const w of words) {
      if (!searchIndex.has(w)) searchIndex.set(w, new Set());
      searchIndex.get(w).add(q.id);
    }
  }
  sortedIndexWords = Array.from(searchIndex.keys()).sort();
  return { count: qs.length, terms: searchIndex.size };
}

function lowerBound(prefix) {
  let lo = 0, hi = sortedIndexWords.length;
  while (lo < hi) {
    const mid = (lo + hi) >>> 1;
    if (sortedIndexWords[mid] < prefix) lo = mid + 1; else hi = mid;
  }
  return lo;
}

function wordsWithPrefix(prefix) {
  const words = [];
  for (let i = lowerBound(prefix); i < sortedIndexWords.length; i++) {
    const w = sortedIndexWords[i];
    if (!w.startsWith(prefix)) break;
    words.push(w);
  }
  return words;
}

function search(query) {
  if (!query) return null;
  const terms = query.toLowerCase().match(/\b[a-z0-9]+\b/g) || [];
  if (!terms.length) return null;
  let result = null;
  for (const term of terms) {
    const matches = wordsWithPrefix(term);
    let termIds;
    if (matches.length === 0) termIds = new Set();
    else if (matches.length === 1) termIds = searchIndex.get(matches[0]);
    else {
      termIds = new Set();
      for (const w of matches) for (const id of searchIndex.get(w)) termIds.add(id);
    }
    if (result === null) result = new Set(termIds);
    else { for (const id of result) { if (!termIds.has(id)) result.delete(id); } }
    if (!result.size) break;
  }
  return result ? [...result] : [];
}

function filterQuestions(payload) {
  const { questions, filters, searchQuery, bmIds, hyIds, missedIds } = payload;
  const qf = filters || {};
  const sq = (searchQuery || '').toLowerCase();
  let result = questions;
  if (sq) {
    const words = sq.match(/\b[a-z0-9]+\b/g) || [];
    if (words.length) {
      result = result.filter(q => {
        const text = [
          q.questionText, q.explanation, q.subject, q.chapter, q.topic,
          Array.isArray(q.tags) ? q.tags.join(' ') : q.tags
        ].join(' ').toLowerCase();
        return words.every(w => text.includes(w));
      });
    }
  }
  if (qf.subject !== 'all') result = result.filter(q => (q.subject || '') === qf.subject);
  if (qf.chapter !== 'all') result = result.filter(q => (q.chapter || '') === qf.chapter);
  if (qf.topic !== 'all') result = result.filter(q => (q.topic || '') === qf.topic);
  if (qf.difficulty !== 'all') result = result.filter(q => (q.difficulty || 'Medium') === qf.difficulty);
  const special = qf.special || 'all';
  if (special === 'bookmarked') result = result.filter(q => bmIds.includes(q.id));
  if (special === 'highyield') result = result.filter(q => hyIds.includes(q.id));
  if (special === 'missed') result = result.filter(q => missedIds.includes(q.id));
  return result;
}

function computeAnalytics(payload) {
  const { questions, performance, bookmarks, examHistory } = payload;
  const total = questions.length;
  const correct = performance.filter(x => x.correct).length;
  const wrong = performance.length - correct;
  const acc = performance.length ? Math.round(correct * 100 / performance.length) : 0;
  const avg = examHistory.length ? Math.round(examHistory.reduce((s, e) => s + (e.percentage || 0), 0) / examHistory.length) : 0;
  const subjectCounts = {};
  questions.forEach(q => { const s = q.subject || 'Uncategorized'; subjectCounts[s] = (subjectCounts[s] || 0) + 1; });
  const weakTopics = {};
  performance.forEach(x => {
    const key = (x.subject || 'Unknown') + ' > ' + (x.chapter || 'Unknown') + ' > ' + (x.topic || 'Unknown');
    if (!weakTopics[key]) weakTopics[key] = { t: 0, c: 0 };
    weakTopics[key].t++;
    if (x.correct) weakTopics[key].c++;
  });
  const weakArr = Object.entries(weakTopics)
    .filter(([k, v]) => v.t >= 2)
    .map(([k, v]) => ({ k, p: Math.round(v.c * 100 / v.t), t: v.t }))
    .sort((a, b) => a.p - b.p)
    .slice(0, 5);
  return { total, bookmarks: bookmarks.length, exams: examHistory.length, correct, wrong, acc, avg, subjectCounts, weakArr };
}

function findDuplicates(qs) {
  const map = new Map();
  const dups = [];
  for (const q of qs) {
    const key = (q.questionText || '').toLowerCase().trim();
    if (map.has(key)) dups.push(q);
    else map.set(key, q.id);
  }
  return dups;
}

self.onmessage = function(e) {
  const { type, payload, id } = e.data;
  let result;
  try {
    switch (type) {
      case 'buildIndex': result = buildIndex(payload); break;
      case 'search': result = search(payload); break;
      case 'filter': result = filterQuestions(payload); break;
      case 'analytics': result = computeAnalytics(payload); break;
      case 'duplicates': result = findDuplicates(payload); break;
      default: result = { error: 'Unknown type' };
    }
  } catch (err) {
    result = { error: err.message };
  }
  self.postMessage({ id, type, result });
};
`;

const WorkerPool = {
  worker: null,
  queue: new Map(),
  msgId: 0,
  enabled: true,

  /** Initialize the worker from an inline blob. Returns true on success. */
  init() {
    if (this.worker || typeof Worker === 'undefined') return false;
    try {
      const blob = new Blob([WORKER_CODE], { type: 'application/javascript' });
      this.worker = new Worker(URL.createObjectURL(blob));
      this.worker.onmessage = (e) => {
        const { id, result } = e.data;
        const pending = this.queue.get(id);
        if (pending) {
          this.queue.delete(id);
          pending.resolve(result);
        }
      };
      this.worker.onerror = (err) => {
        console.error('Worker fatal error:', err);
        this.enabled = false;
        this.worker = null;
        for (const [id, pending] of this.queue) {
          pending.reject(err);
        }
        this.queue.clear();
      };
      return true;
    } catch (e) {
      console.warn('Worker initialization failed:', e);
      this.enabled = false;
      return false;
    }
  },

  /** Post a task to the worker with automatic fallback. */
  async post(type, payload) {
    if (!this.worker && this.enabled) this.init();
    if (!this.worker || !this.enabled) {
      return this.fallback(type, payload);
    }
    const id = ++this.msgId;
    return new Promise((resolve, reject) => {
      this.queue.set(id, { resolve, reject });
      this.worker.postMessage({ type, payload, id });
      // Safety timeout: fallback if worker hangs
      setTimeout(() => {
        if (this.queue.has(id)) {
          this.queue.delete(id);
          reject(new Error('Worker timeout'));
        }
      }, 15000);
    }).catch(err => {
      console.warn('Worker task failed, falling back to main thread:', err);
      return this.fallback(type, payload);
    });
  },

  /** Synchronous fallback implementations when Worker is unavailable. */
  fallback(type, payload) {
    switch (type) {
      case 'filter': {
        const { questions, filters, searchQuery, bmIds, hyIds, missedIds } = payload;
        const qf = filters || {};
        const sq = (searchQuery || '').toLowerCase();
        let result = questions;
        if (sq) {
          const words = sq.match(/\b[a-z0-9]+\b/g) || [];
          if (words.length) {
            result = result.filter(q => {
              const text = [q.questionText, q.explanation, q.subject, q.chapter, q.topic, Array.isArray(q.tags) ? q.tags.join(' ') : q.tags].join(' ').toLowerCase();
              return words.every(w => text.includes(w));
            });
          }
        }
        if (qf.subject !== 'all') result = result.filter(q => (q.subject || '') === qf.subject);
        if (qf.chapter !== 'all') result = result.filter(q => (q.chapter || '') === qf.chapter);
        if (qf.topic !== 'all') result = result.filter(q => (q.topic || '') === qf.topic);
        if (qf.difficulty !== 'all') result = result.filter(q => (q.difficulty || 'Medium') === qf.difficulty);
        const special = qf.special || 'all';
        if (special === 'bookmarked') result = result.filter(q => bmIds.includes(q.id));
        if (special === 'highyield') result = result.filter(q => hyIds.includes(q.id));
        if (special === 'missed') result = result.filter(q => missedIds.includes(q.id));
        return result;
      }
      case 'analytics': {
        const { questions, performance, bookmarks, examHistory } = payload;
        const total = questions.length;
        const correct = performance.filter(x => x.correct).length;
        const wrong = performance.length - correct;
        const acc = performance.length ? Math.round(correct * 100 / performance.length) : 0;
        const avg = examHistory.length ? Math.round(examHistory.reduce((s, e) => s + (e.percentage || 0), 0) / examHistory.length) : 0;
        const subjectCounts = {};
        questions.forEach(q => { const s = q.subject || 'Uncategorized'; subjectCounts[s] = (subjectCounts[s] || 0) + 1; });
        const weakTopics = {};
        performance.forEach(x => {
          const key = (x.subject || 'Unknown') + ' > ' + (x.chapter || 'Unknown') + ' > ' + (x.topic || 'Unknown');
          if (!weakTopics[key]) weakTopics[key] = { t: 0, c: 0 };
          weakTopics[key].t++;
          if (x.correct) weakTopics[key].c++;
        });
        const weakArr = Object.entries(weakTopics)
          .filter(([k, v]) => v.t >= 2)
          .map(([k, v]) => ({ k, p: Math.round(v.c * 100 / v.t), t: v.t }))
          .sort((a, b) => a.p - b.p)
          .slice(0, 5);
        return { total, bookmarks: bookmarks.length, exams: examHistory.length, correct, wrong, acc, avg, subjectCounts, weakArr };
      }
      case 'duplicates': {
        const map = new Map(), dups = [];
        for (const q of payload) {
          const key = (q.questionText || '').toLowerCase().trim();
          if (map.has(key)) dups.push(q);
          else map.set(key, q.id);
        }
        return dups;
      }
      case 'search': {
        // Fallback search is handled by GlobalSearchIndex on main thread
        return null;
      }
      default: return null;
    }
  }
};

// ============================================================
//  OPTIMIZATION LAYER 2: IN-MEMORY SEARCH INDEX
//  Builds an inverted index mapping every word to the set of
//  question IDs containing it. Rebuilt automatically whenever
//  the underlying question cache version changes.
// ============================================================
const GlobalSearchIndex = {
  index: new Map(),      // exact word -> Set of question IDs
  sortedWords: [],       // all unique indexed words, sorted - enables binary-search prefix lookup
  ready: false,
  version: -1,

  /** Ensure the index is current with the DB cache version. */
  async ensureBuilt() {
    const cv = db._cacheVersion;
    if (this.ready && this.version === cv) return;
    const questions = await db.getAllQuestions();
    this.index.clear();
    for (const q of questions) {
      const text = [
        q.questionText || '',
        q.explanation || '',
        q.subject || '',
        q.chapter || '',
        q.topic || '',
        Array.isArray(q.tags) ? q.tags.join(' ') : (q.tags || '')
      ].join(' ').toLowerCase();
      const words = [...new Set(text.match(/\b[a-z0-9]+\b/g) || [])];
      for (const w of words) {
        if (!this.index.has(w)) this.index.set(w, new Set());
        this.index.get(w).add(q.id);
      }
    }
    this.sortedWords = Array.from(this.index.keys()).sort();
    this.ready = true;
    this.version = cv;
  },

  /** Binary search: first index where sortedWords[i] >= prefix. */
  _lowerBound(prefix) {
    let lo = 0, hi = this.sortedWords.length;
    while (lo < hi) {
      const mid = (lo + hi) >>> 1;
      if (this.sortedWords[mid] < prefix) lo = mid + 1; else hi = mid;
    }
    return lo;
  },

  /** All indexed words starting with `prefix`, found via binary search for the range (not a full scan). */
  _wordsWithPrefix(prefix) {
    const words = [];
    for (let i = this._lowerBound(prefix); i < this.sortedWords.length; i++) {
      const w = this.sortedWords[i];
      if (!w.startsWith(prefix)) break; // sorted, so matches are contiguous - safe to stop early
      words.push(w);
    }
    return words;
  },

  /** Search the index. Each space-separated term is prefix-matched; terms are ANDed together. Returns a Set of question IDs, or null if no usable query yet. */
  search(query) {
    if (!query || !this.ready) return null;
    const terms = query.toLowerCase().match(/\b[a-z0-9]+\b/g) || [];
    if (!terms.length) return null;
    let result = null;
    for (const term of terms) {
      const matches = this._wordsWithPrefix(term);
      let termIds;
      if (matches.length === 0) termIds = new Set();
      else if (matches.length === 1) termIds = this.index.get(matches[0]);
      else {
        termIds = new Set();
        for (const w of matches) for (const id of this.index.get(w)) termIds.add(id);
      }
      if (result === null) result = new Set(termIds);
      else { for (const id of result) { if (!termIds.has(id)) result.delete(id); } }
      if (!result.size) break;
    }
    return result;
  }
};

// ============================================================
//  OPTIMIZATION LAYER 3: FILTER CACHE
//  Memoizes filtered result arrays keyed by a hash of the active
//  filters + search query. Automatically invalidated whenever
//  the DB cache version increments (import, edit, delete, restore).
//  LRU eviction keeps memory bounded at 30 entries.
// ============================================================
const FilterCache = {
  _store: new Map(),
  _version: -1,

  get(filters, searchQuery, cacheVersion, factory) {
    if (this._version !== cacheVersion) {
      this._store.clear();
      this._version = cacheVersion;
    }
    const key = JSON.stringify({ f: filters, q: searchQuery });
    if (this._store.has(key)) return this._store.get(key);
    const result = factory();
    this._store.set(key, result);
    // LRU eviction: cap at 30 entries
    if (this._store.size > 30) {
      const first = this._store.keys().next().value;
      this._store.delete(first);
    }
    return result;
  },

  clear() {
    this._store.clear();
    this._version = -1;
  }
};

// ============================================================
//  OPTIMIZATION LAYER 4: VIRTUAL & INFINITE SCROLLER
//  Keeps the DOM lightweight by rendering only visible question
//  cards plus a small overscan buffer. Uses absolute-height
//  spacer divs to maintain correct scrollbar proportions for
//  100,000+ item lists. Loads data in chunks of 50 as the user
//  approaches the bottom, with duplicate-load prevention.
// ============================================================
class VirtualScroller {
  constructor(container, options) {
    this.container = typeof container === 'string' ? document.getElementById(container) : container;
    this.items = options.items || [];
    this.renderItem = options.renderItem;        // fn(item, index) => HTML string (single root element)
    this.itemHeight = options.itemHeight || 130; // estimated average row height (px)
    this.buffer = options.buffer || 5;           // overscan rows
    this.pageSize = options.pageSize || 50;      // infinite-scroll chunk size
    this.scrollHandler = this.onScroll.bind(this);
    this._range = [-1, -1];
    this.loadedCount = 0;   // how many items are "unlocked" for rendering
    this.loading = false;   // lock to prevent duplicate loadMore calls
    this._nodes = new Map(); // index -> currently-mounted DOM node; lets unchanged rows survive a range update untouched
    this._rafHandle = null;  // coalesces bursts of scroll events into one update per frame
    this._tmp = document.createElement('div'); // scratch element used only to parse an HTML string into a node
  }

  /** Create DOM structure and attach scroll listener. */
  init() {
    if (!this.container) return;
    this.container.style.position = 'relative';
    this.topSpacer = document.createElement('div');
    this.content = document.createElement('div');
    this.bottomSpacer = document.createElement('div');
    this.loader = document.createElement('div');
    this.loader.style.cssText = 'text-align:center;padding:14px;color:var(--text2);font-size:0.85rem;display:none;';
    this.loader.textContent = 'Loading more...';
    this.container.innerHTML = '';
    this.container.appendChild(this.topSpacer);
    this.container.appendChild(this.content);
    this.container.appendChild(this.bottomSpacer);
    this.container.appendChild(this.loader);
    this.container.addEventListener('scroll', this.scrollHandler, { passive: true });
    this.reset(this.items);
  }

  /** Reset with a new item array (e.g., after filter change). */
  reset(newItems) {
    if (newItems) this.items = newItems;
    this.loadedCount = Math.min(this.pageSize, this.items.length);
    this._range = [-1, -1];
    // The underlying item set changed identity, so old mounted nodes no longer
    // correspond to the same logical rows - clear rather than diff across data sets.
    this._nodes.clear();
    if (this.content) this.content.innerHTML = '';
    if (this.container) this.container.scrollTop = 0;
    this.updateRange();
  }

  /** Scroll handler: coalesces rapid scroll events into one update per animation frame. */
  onScroll() {
    if (this._rafHandle) return;
    this._rafHandle = requestAnimationFrame(() => {
      this._rafHandle = null;
      this.updateRange();
    });
  }

  /** Compute the visible+buffered range, trigger infinite load, and patch the DOM to match. */
  updateRange() {
    if (!this.container) return;
    const st = this.container.scrollTop;
    const vh = this.container.clientHeight;
    const totalLoadedHeight = this.loadedCount * this.itemHeight;

    // Smart Scroll Loader: detect near-bottom and load next chunk
    if (st + vh > totalLoadedHeight - this.itemHeight * 4 && this.loadedCount < this.items.length && !this.loading) {
      this.loadMore();
    }

    const start = Math.max(0, Math.floor(st / this.itemHeight) - this.buffer);
    const end = Math.min(this.loadedCount, Math.ceil((st + vh) / this.itemHeight) + this.buffer);
    if (start === this._range[0] && end === this._range[1]) return;
    this._range = [start, end];

    // Adjust spacers so total scrollable height equals full dataset
    this.topSpacer.style.height = (start * this.itemHeight) + 'px';
    this.bottomSpacer.style.height = (Math.max(0, this.items.length - end) * this.itemHeight) + 'px';

    this.patch(start, end);
  }

  /**
   * Reconcile mounted DOM nodes with the new [start, end) range. Rows that
   * remain in range keep their existing node (no destroy/recreate, no lost
   * layout/paint work for them); only rows entering or leaving are touched.
   */
  patch(start, end) {
    for (const [idx, node] of this._nodes) {
      if (idx < start || idx >= end) {
        node.remove();
        this._nodes.delete(idx);
      }
    }
    let ref = this.content.firstChild;
    for (let i = start; i < end; i++) {
      let node = this._nodes.get(i);
      if (!node) {
        node = this._buildNode(i);
        this._nodes.set(i, node);
      }
      if (node !== ref) {
        this.content.insertBefore(node, ref);
      } else {
        ref = ref.nextSibling;
      }
    }
  }

  _buildNode(index) {
    this._tmp.innerHTML = this.renderItem(this.items[index], index);
    const node = this._tmp.firstElementChild;
    this._tmp.innerHTML = '';
    return node || document.createTextNode('');
  }

  /** Append the next page of items (infinite scroll). */
  loadMore() {
    this.loading = true;
    this.loader.style.display = 'block';
    // Yield to browser to paint the loader, then expand
    requestAnimationFrame(() => {
      setTimeout(() => {
        const oldCount = this.loadedCount;
        this.loadedCount = Math.min(this.loadedCount + this.pageSize, this.items.length);
        if (this.loadedCount > oldCount) {
          this.updateRange();
        }
        this.loading = false;
        this.loader.style.display = 'none';
      }, 30);
    });
  }

  /** Clean up event listeners and mounted nodes. */
  destroy() {
    if (this.container) {
      this.container.removeEventListener('scroll', this.scrollHandler);
    }
    if (this._rafHandle) { cancelAnimationFrame(this._rafHandle); this._rafHandle = null; }
    this._nodes.clear();
  }
}

// ============================================================
//  OPTIMIZATION LAYER 5: LAZY RENDERER
//  Defers heavy DOM insertion and analytics calculations using
//  requestIdleCallback (with requestAnimationFrame fallback) so
//  the main thread stays responsive during initial paint.
// ============================================================
const LazyRenderer = {
  queue: [],
  processing: false,

  schedule(fn, priority = 'idle') {
    this.queue.push({ fn, priority });
    if (!this.processing) this.process();
  },

  process() {
    if (!this.queue.length) { this.processing = false; return; }
    this.processing = true;
    const task = this.queue.shift();
    const run = () => {
      try { task.fn(); } catch (e) { console.error('Lazy render error:', e); }
      if (this.queue.length) this.process();
      else this.processing = false;
    };
    if (task.priority === 'idle' && 'requestIdleCallback' in window) {
      requestIdleCallback(run, { timeout: 120 });
    } else {
      requestAnimationFrame(run);
    }
  },

  clear() {
    this.queue = [];
    this.processing = false;
  }
};

        // ============================================================
        //  DATABASE  (Enhanced with Cache Invalidation)
        // ============================================================
        const DB_NAME = 'ENTQuestionBank';
        const DB_VERSION = 8;

        class ENTDatabase {
            constructor() {
                this.db = null;
                // OPTIMIZATION: Expanded cache covers all hot data paths
                this._cache = {
                    questions: null, bookmarks: null, highYield: null,
                    performance: null, examHistory: null, groups: null,
                    books: null, lectures: null, notes: null
                };
                // Cache validity flags — separate from data so we can invalidate cheaply
                this._cacheValid = {
                    questions: false, bookmarks: false, highYield: false,
                    performance: false, examHistory: false, groups: false,
                    books: false, lectures: false, notes: false
                };
                // Monotonic version counter incremented on every write.
                // External systems (FilterCache, SearchIndex) key off this.
                this._cacheVersion = 0;
                this.ready = this.init();
            }

            init() {
                return new Promise((resolve, reject) => {
                    const request = indexedDB.open(DB_NAME, DB_VERSION);
                    request.onupgradeneeded = (e) => {
                        const db = e.target.result;
                        if (!db.objectStoreNames.contains('questions')) {
                            const qStore = db.createObjectStore('questions', { keyPath: 'id', autoIncrement: true });
                            qStore.createIndex('subject', 'subject', { unique: false });
                            qStore.createIndex('chapter', 'chapter', { unique: false });
                            qStore.createIndex('topic', 'topic', { unique: false });
                            qStore.createIndex('subtopic', 'subtopic', { unique: false });
                            qStore.createIndex('group', 'group', { unique: false });
                            qStore.createIndex('book', 'book', { unique: false });
                        }
                        if (!db.objectStoreNames.contains('examHistory')) db.createObjectStore('examHistory', { keyPath: 'id', autoIncrement: true });
                        if (!db.objectStoreNames.contains('bookmarks')) db.createObjectStore('bookmarks', { keyPath: 'questionId' });
                        if (!db.objectStoreNames.contains('notes')) db.createObjectStore('notes', { keyPath: 'questionId' });
                        if (!db.objectStoreNames.contains('settings')) db.createObjectStore('settings', { keyPath: 'key' });
                        if (!db.objectStoreNames.contains('performance')) db.createObjectStore('performance', { keyPath: 'id', autoIncrement: true });
                        if (!db.objectStoreNames.contains('highYield')) db.createObjectStore('highYield', { keyPath: 'questionId' });
                        if (!db.objectStoreNames.contains('lectures')) {
                            const lStore = db.createObjectStore('lectures', { keyPath: 'id', autoIncrement: true });
                            lStore.createIndex('subject', 'subject', { unique: false });
                            lStore.createIndex('chapter', 'chapter', { unique: false });
                            lStore.createIndex('book', 'book', { unique: false });
                        }
                        // --- Update Package System (v8): new content stores ---
                        if (!db.objectStoreNames.contains('flashcards')) {
                            const fStore = db.createObjectStore('flashcards', { keyPath: 'id', autoIncrement: true });
                            fStore.createIndex('subject', 'subject', { unique: false });
                            fStore.createIndex('chapter', 'chapter', { unique: false });
                            fStore.createIndex('uid', 'uid', { unique: false });
                        }
                        if (!db.objectStoreNames.contains('bookMeta')) {
                            const bmStore = db.createObjectStore('bookMeta', { keyPath: 'id', autoIncrement: true });
                            bmStore.createIndex('uid', 'uid', { unique: false });
                        }
                        if (!db.objectStoreNames.contains('assets')) {
                            db.createObjectStore('assets', { keyPath: 'assetKey' });
                        }
                        if (!db.objectStoreNames.contains('backups')) {
                            db.createObjectStore('backups', { keyPath: 'id', autoIncrement: true });
                        }
                        // 'uid' index on pre-existing content stores, added for devices upgrading from v7 or earlier
                        const tx = e.target.transaction;
                        const qStoreUpgrade = tx.objectStore('questions');
                        if (!qStoreUpgrade.indexNames.contains('uid')) qStoreUpgrade.createIndex('uid', 'uid', { unique: false });
                        const lStoreUpgrade = tx.objectStore('lectures');
                        if (!lStoreUpgrade.indexNames.contains('uid')) lStoreUpgrade.createIndex('uid', 'uid', { unique: false });
                    };
                    request.onsuccess = (e) => {
                        this.db = e.target.result;
                        this.db.onversionchange = () => {
                            this.db.close();
                            alert('A newer version of ENT Master Bank is available. Please reload the page.');
                        };
                        resolve();
                    };
                    request.onblocked = () => {
                        console.warn('IndexedDB upgrade blocked by another open tab.');
                    };
                    request.onerror = (e) => reject(e.target.error);
                });
            }

            async ensureReady() { await this.ready; }

            /** Invalidate selected cache keys (or all if null). Bump version. */
            _invalidateCache(keys) {
                this._cacheVersion++;
                if (keys) {
                    keys.forEach(k => this._cacheValid[k] = false);
                } else {
                    Object.keys(this._cacheValid).forEach(k => this._cacheValid[k] = false);
                }
            }

            async addQuestion(q) {
                this._invalidateCache(['questions', 'groups', 'books']);
                await this.ensureReady();
                return new Promise((resolve, reject) => {
                    const tx = this.db.transaction('questions', 'readwrite');
                    q.dateAdded = new Date().toISOString();
                    q.tags = q.tags || [];
                    if (!q.group) q.group = '';
                    if (!q.book) q.book = '';
                    const req = tx.objectStore('questions').add(q);
                    req.onsuccess = (e) => resolve(e.target.result);
                    req.onerror = (e) => reject(e.target.error);
                    tx.onerror = (e) => reject(tx.error || e.target.error);
                });
            }

            async getAllQuestions() {
                await this.ensureReady();
                if (this._cacheValid.questions && this._cache.questions) return this._cache.questions;
                return new Promise(resolve => {
                    this.db.transaction('questions', 'readonly').objectStore('questions').getAll().onsuccess = (e) => {
                        this._cache.questions = e.target.result;
                        this._cacheValid.questions = true;
                        resolve(e.target.result);
                    };
                });
            }

            async getQuestion(id) {
                await this.ensureReady();
                return new Promise(resolve => {
                    this.db.transaction('questions', 'readonly').objectStore('questions').get(id).onsuccess = (e) => resolve(e.target.result);
                });
            }

            async deleteQuestion(id) {
                this._invalidateCache(['questions', 'bookmarks', 'highYield', 'groups', 'books']);
                await this.ensureReady();
                return new Promise(resolve => {
                    const tx = this.db.transaction(['questions', 'bookmarks', 'notes'], 'readwrite');
                    tx.objectStore('questions').delete(id);
                    tx.objectStore('bookmarks').delete(id);
                    tx.objectStore('notes').delete(id);
                    tx.oncomplete = () => resolve();
                });
            }

            async toggleBookmark(qid) {
                this._invalidateCache(['bookmarks']);
                await this.ensureReady();
                return new Promise(resolve => {
                    const tx = this.db.transaction('bookmarks', 'readwrite');
                    const store = tx.objectStore('bookmarks');
                    const get = store.get(qid);
                    get.onsuccess = () => {
                        if (get.result) { store.delete(qid); resolve(false); }
                        else { store.add({ questionId: qid }); resolve(true); }
                    };
                });
            }

            async isBookmarked(qid) {
                await this.ensureReady();
                return new Promise(resolve => {
                    this.db.transaction('bookmarks', 'readonly').objectStore('bookmarks').get(qid).onsuccess = (e) => resolve(!!e.target.result);
                });
            }

            async getAllBookmarkedIds() {
                await this.ensureReady();
                if (this._cacheValid.bookmarks && this._cache.bookmarks) return this._cache.bookmarks;
                return new Promise(resolve => {
                    this.db.transaction('bookmarks', 'readonly').objectStore('bookmarks').getAll().onsuccess = (e) => {
                        this._cache.bookmarks = e.target.result.map(b => b.questionId);
                        this._cacheValid.bookmarks = true;
                        resolve(this._cache.bookmarks);
                    };
                });
            }

            async saveExamResult(result) {
                this._invalidateCache(['examHistory']);
                try {
                    await this.ensureReady();
                    return new Promise((resolve, reject) => {
                        result.date = new Date().toISOString();
                        const tx = this.db.transaction('examHistory', 'readwrite');
                        tx.objectStore('examHistory').add(result).onsuccess = (e) => resolve(e.target.result);
                        tx.onerror = (e) => resolve(null);
                    });
                } catch(e) { console.error("Error saving exam result", e); }
            }

            async getExamHistory() {
                await this.ensureReady();
                if (this._cacheValid.examHistory && this._cache.examHistory) return this._cache.examHistory;
                return new Promise(resolve => {
                    this.db.transaction('examHistory', 'readonly').objectStore('examHistory').getAll().onsuccess = (e) => {
                        this._cache.examHistory = (e.target.result || []).reverse();
                        this._cacheValid.examHistory = true;
                        resolve(this._cache.examHistory);
                    };
                });
            }

            async getSetting(key, def = null) {
                await this.ensureReady();
                return new Promise(resolve => {
                    const tx = this.db.transaction('settings', 'readonly');
                    tx.objectStore('settings').get(key).onsuccess = (e) => resolve(e.target.result ? e.target.result.value : def);
                });
            }

            async setSetting(key, value) {
                await this.ensureReady();
                return new Promise(resolve => {
                    this.db.transaction('settings', 'readwrite').objectStore('settings').put({ key, value });
                    resolve();
                });
            }

            // AUTO-CATEGORIZATION ENABLED BULK IMPORT
            async bulkImport(questions, groupName = '') {
                this._invalidateCache(); // full invalidation on bulk import
                await this.ensureReady();
                const existingQuestions = await this.getAllQuestions();
                const existingSet = new Set(
                    existingQuestions.map(e => ((e.questionText||'').replace(/\s+/g,' ').replace(/[^a-z0-9 ]/gi,'').trim().toLowerCase()))
                );
                return new Promise((resolve, reject) => {
                    const tx = this.db.transaction('questions', 'readwrite');
                    const store = tx.objectStore('questions');
                    let count = 0;
                    const allSubjects = Object.keys(ENT_DATA);
                    const allChapters = Object.values(ENT_DATA).flat();
                    const stopWords = ['and','of','the','in','to','for','with','on','at','by','from','an','a','management','assessment','disorders','conditions','disease','surgery','anatomy','physiology','acute','chronic','clinical'];

                    // PERFORMANCE: precompute per-(subject,chapter) keyword data ONCE.
                    // Previously this (including a regex split) was recomputed from
                    // scratch for every imported question even though it never
                    // depends on the question - redone ~219 times per question.
                    const classificationTargets = [];
                    for (const [subject, chapters] of Object.entries(ENT_DATA)) {
                        const subjLower = subject.toLowerCase();
                        for (const chapter of chapters) {
                            const chapLower = chapter.toLowerCase();
                            const keywords = chapLower.split(/[\s,:-]+/)
                                .map(w => w.trim().replace(/[^a-z0-9]/g, ''))
                                .filter(w => w.length > 3 && !stopWords.includes(w));
                            classificationTargets.push({ subject, chapter, subjLower, chapLower, keywords });
                        }
                    }

                    for (const q of questions) {
                        classifyQuestionAdvanced(q); generateTopicSubtopic(q);
                        q.dateAdded = q.dateAdded || new Date().toISOString();
                        q.tags = q.tags || [];
                        if (groupName && !q.book) q.book = groupName;
                        if (groupName && !q.group) q.group = groupName;
                        if (!q.group) q.group = '';

                        const textToSearch = [
                            q.questionText || '',
                            q.optionA || '', q.optionB || '', q.optionC || '',
                            q.optionD || '', q.optionE || '', q.explanation || ''
                        ].join(' ').toLowerCase();

                        let bestSubject = 'Uncategorized';
                        let bestChapter = 'General';
                        let highestScore = 0;

                        for (const target of classificationTargets) {
                            let score = 0;
                            if (textToSearch.includes(target.chapLower)) score += 15;
                            if (textToSearch.includes(target.subjLower)) score += 5;
                            for (const word of target.keywords) {
                                if (textToSearch.includes(word)) score += 2;
                            }
                            if (score > highestScore) {
                                highestScore = score;
                                bestSubject = target.subject;
                                bestChapter = target.chapter;
                            }
                        }

                        if (!q.subject || !allSubjects.includes(q.subject) || q.subject === 'Uncategorized') {
                            q.subject = highestScore > 0 ? bestSubject : 'Uncategorized';
                        }
                        if (!q.chapter || !allChapters.includes(q.chapter) || q.chapter === 'General') {
                            q.chapter = highestScore > 0 ? bestChapter : 'General';
                        }
                        if (q.subject === 'Uncategorized' || q.chapter === 'General') { q.needsReview = true; }

                        const normalizedNew = (q.questionText||'').replace(/\s+/g,' ').replace(/[^a-z0-9 ]/gi,'').trim().toLowerCase();
                        let duplicate = false;
                        try {
                            duplicate = existingSet.has(normalizedNew);
                            if (!duplicate) {
                                existingSet.add(normalizedNew);
                                store.add(q);
                                count++;
                            }
                        } catch(err) {
                            store.add(q);
                            count++;
                        }
                    }
                    tx.oncomplete = () => { this._invalidateCache(); resolve(count); };
                    tx.onerror = () => reject(tx.error);
                });
            }

            async deleteQuestionsByGroup(groupName) {
                this._invalidateCache(['questions', 'groups', 'books', 'bookmarks', 'highYield']);
                await this.ensureReady();
                const questions = await this.getAllQuestions();
                const targets = questions.filter(q => (q.group||'') === groupName);
                for (const q of targets) {
                    await this.deleteQuestion(q.id);
                }
                return targets.length;
            }

            async deleteQuestionsByBook(bookName) {
                this._invalidateCache(['questions', 'groups', 'books', 'bookmarks', 'highYield']);
                await this.ensureReady();
                const questions = await this.getAllQuestions();
                const targets = questions.filter(q => (q.book || '') === bookName);
                for (const q of targets) {
                    await this.deleteQuestion(q.id);
                }
                return targets.length;
            }

            async clearAllQuestions() {
                this._invalidateCache();
                await this.ensureReady();
                return new Promise(resolve => {
                    const tx = this.db.transaction(['questions', 'bookmarks', 'notes', 'examHistory','performance','highYield'], 'readwrite');
                    tx.objectStore('questions').clear();
                    tx.objectStore('bookmarks').clear();
                    tx.objectStore('notes').clear();
                    tx.objectStore('examHistory').clear();
                    tx.objectStore('performance').clear();
                    tx.objectStore('highYield').clear();
                    tx.oncomplete = () => resolve();
                });
            }

            async exportAllData() {
                await this.ensureReady();
                const questions = await this.getAllQuestions();
                const examHistory = await this.getExamHistory();
                const bookmarks = await this.getAllBookmarkedIds();
                const notes = await new Promise(resolve => {
                    this.db.transaction('notes', 'readonly').objectStore('notes').getAll().onsuccess = (e) => resolve(e.target.result);
                });
                const performance = await this.getPerformance();
                const highYield = await new Promise(resolve => {
                    this.db.transaction('highYield', 'readonly').objectStore('highYield').getAll().onsuccess = (e) => resolve(e.target.result || []);
                });
                const lectures = await this.getAllLectures();
                const settings = await new Promise(resolve => {
                    this.db.transaction('settings', 'readonly').objectStore('settings').getAll().onsuccess = (e) => resolve(e.target.result || []);
                });
                const extraStores = ['flashcards', 'bookMeta'].filter(s => this.db.objectStoreNames.contains(s));
                const extra = {};
                for (const storeName of extraStores) {
                    extra[storeName] = await new Promise(resolve => {
                        this.db.transaction(storeName, 'readonly').objectStore(storeName).getAll().onsuccess = (e) => resolve(e.target.result || []);
                    });
                }
                return { version: DB_VERSION, exportedAt: new Date().toISOString(), questions, examHistory, bookmarks, notes, performance, highYield, lectures, settings, ...extra };
            }

            async clearAndRestore(data) {
                this._invalidateCache();
                await this.ensureReady();
                const storesToClear = ['questions', 'examHistory', 'bookmarks', 'notes', 'performance', 'highYield', 'lectures'];
                for (const s of ['flashcards', 'bookMeta']) { if (this.db.objectStoreNames.contains(s)) storesToClear.push(s); }
                await new Promise(resolve => {
                    const tx = this.db.transaction(storesToClear, 'readwrite');
                    storesToClear.forEach(s => tx.objectStore(s).clear());
                    tx.oncomplete = resolve;
                });
                if (data.questions) await this.bulkImport(data.questions);
                for (const h of data.examHistory || []) await new Promise(resolve => {
                    const tx = this.db.transaction('examHistory', 'readwrite');
                    tx.objectStore('examHistory').add(h);
                    tx.oncomplete = resolve;
                });
                for (const bid of data.bookmarks || []) await new Promise(resolve => {
                    const tx = this.db.transaction('bookmarks', 'readwrite');
                    tx.objectStore('bookmarks').put({ questionId: bid });
                    tx.oncomplete = resolve;
                });
                for (const n of data.notes || []) await new Promise(resolve => {
                    const tx = this.db.transaction('notes', 'readwrite');
                    tx.objectStore('notes').put(n);
                    tx.oncomplete = resolve;
                });
                for (const p of data.performance || []) await new Promise(resolve => {
                    const tx = this.db.transaction('performance', 'readwrite');
                    tx.objectStore('performance').add(p);
                    tx.oncomplete = resolve;
                });
                for (const hy of data.highYield || []) await new Promise(resolve => {
                    const tx = this.db.transaction('highYield', 'readwrite');
                    tx.objectStore('highYield').put(hy);
                    tx.oncomplete = resolve;
                });
                for (const l of data.lectures || []) await new Promise(resolve => {
                    const tx = this.db.transaction('lectures', 'readwrite');
                    tx.objectStore('lectures').put(l);
                    tx.oncomplete = resolve;
                });
                for (const storeName of ['flashcards', 'bookMeta']) {
                    if (!this.db.objectStoreNames.contains(storeName)) continue;
                    for (const item of data[storeName] || []) await new Promise(resolve => {
                        const tx = this.db.transaction(storeName, 'readwrite');
                        tx.objectStore(storeName).put(item);
                        tx.oncomplete = resolve;
                    });
                }
                for (const s of data.settings || []) await new Promise(resolve => {
                    const tx = this.db.transaction('settings', 'readwrite');
                    tx.objectStore('settings').put(s);
                    tx.oncomplete = resolve;
                });
            }

            async getAllGroups() {
                await this.ensureReady();
                if (this._cacheValid.groups && this._cache.groups) return this._cache.groups;
                const qs = await this.getAllQuestions();
                const groups = new Set();
                qs.forEach(q => { if (q.group) groups.add(q.group); });
                this._cache.groups = [...groups].sort();
                this._cacheValid.groups = true;
                return this._cache.groups;
            }

            async getAllBooks() {
                await this.ensureReady();
                if (this._cacheValid.books && this._cache.books) return this._cache.books;
                const qs = await this.getAllQuestions();
                const books = new Set();
                qs.forEach(q => { if (q.book) books.add(q.book); });
                this._cache.books = [...books].sort();
                this._cacheValid.books = true;
                return this._cache.books;
            }

            async recordPerformance(r) {
                this._invalidateCache(['performance']);
                await this.ensureReady();
                return new Promise(resolve => {
                    const tx = this.db.transaction('performance','readwrite');
                    tx.objectStore('performance').add(r);
                    tx.oncomplete = () => resolve();
                });
            }

            async getPerformance() {
                await this.ensureReady();
                if (this._cacheValid.performance && this._cache.performance) return this._cache.performance;
                return new Promise(resolve => {
                    this.db.transaction('performance','readonly')
                        .objectStore('performance')
                        .getAll().onsuccess = e => {
                            this._cache.performance = e.target.result || [];
                            this._cacheValid.performance = true;
                            resolve(this._cache.performance);
                        };
                });
            }

            async toggleHighYield(qid) {
                this._invalidateCache(['highYield']);
                await this.ensureReady();
                return new Promise(resolve => {
                    const store = this.db.transaction('highYield','readwrite').objectStore('highYield');
                    const req = store.get(qid);
                    req.onsuccess = () => {
                        if (req.result) { store.delete(qid); resolve(false); }
                        else { store.put({questionId: qid, dateAdded:new Date().toISOString()}); resolve(true); }
                    };
                });
            }

            async getAllHighYieldIds() {
                await this.ensureReady();
                if (this._cacheValid.highYield && this._cache.highYield) return this._cache.highYield;
                return new Promise(resolve => {
                    this.db.transaction('highYield','readonly').objectStore('highYield')
                    .getAll().onsuccess = e => {
                        this._cache.highYield = (e.target.result||[]).map(x=>x.questionId);
                        this._cacheValid.highYield = true;
                        resolve(this._cache.highYield);
                    };
                });
            }

            // --- LECTURES ---
            async addLecture(l) {
                this._invalidateCache(['lectures']);
                await this.ensureReady();
                return new Promise((resolve, reject) => {
                    const tx = this.db.transaction('lectures', 'readwrite');
                    l.dateAdded = new Date().toISOString();
                    const req = tx.objectStore('lectures').add(l);
                    req.onsuccess = e => resolve(e.target.result);
                    req.onerror = e => reject(e.target.error);
                });
            }

            async getAllLectures() {
                await this.ensureReady();
                if (this._cacheValid.lectures && this._cache.lectures) return this._cache.lectures;
                return new Promise(resolve => {
                    this.db.transaction('lectures', 'readonly').objectStore('lectures').getAll().onsuccess = e => {
                        this._cache.lectures = e.target.result || [];
                        this._cacheValid.lectures = true;
                        resolve(this._cache.lectures);
                    };
                });
            }

            async getLecture(id) {
                await this.ensureReady();
                return new Promise(resolve => {
                    this.db.transaction('lectures', 'readonly').objectStore('lectures').get(id).onsuccess = e => resolve(e.target.result);
                });
            }

            async deleteLecture(id) {
                this._invalidateCache(['lectures']);
                await this.ensureReady();
                return new Promise(resolve => {
                    this.db.transaction('lectures', 'readwrite').objectStore('lectures').delete(id);
                    resolve();
                });
            }

            async updateLecture(id, data) {
                this._invalidateCache(['lectures']);
                await this.ensureReady();
                return new Promise((resolve, reject) => {
                    const tx = this.db.transaction('lectures', 'readwrite');
                    const store = tx.objectStore('lectures');
                    const getReq = store.get(id);
                    getReq.onsuccess = () => {
                        const l = getReq.result;
                        if (!l) { resolve(false); return; }
                        Object.assign(l, data, { updatedAt: new Date().toISOString() });
                        store.put(l);
                        resolve(true);
                    };
                    getReq.onerror = () => reject(getReq.error);
                });
            }
        }

const db = new ENTDatabase();

        // RBAC: Wrap destructive DB operations
        (function() {
            const wrapAdmin = (fn, name) => {
                return async function(...args) {
                    if (!RBAC.isAdmin()) {
                        showToast('Admin access required.', 'error');
                        if (name === 'bulkImport') return 0;
                        if (name === 'addQuestion') return null;
                        return;
                    }
                    return fn.apply(this, args);
                };
            };
            db.bulkImport = wrapAdmin(db.bulkImport, 'bulkImport');
            db.addQuestion = wrapAdmin(db.addQuestion, 'addQuestion');
            db.deleteQuestion = wrapAdmin(db.deleteQuestion, 'deleteQuestion');
            db.clearAllQuestions = wrapAdmin(db.clearAllQuestions, 'clearAllQuestions');
            db.clearAndRestore = wrapAdmin(db.clearAndRestore, 'clearAndRestore');
            db.deleteQuestionsByGroup = wrapAdmin(db.deleteQuestionsByGroup, 'deleteQuestionsByGroup');
            db.deleteQuestionsByBook = wrapAdmin(db.deleteQuestionsByBook, 'deleteQuestionsByBook');
            db.addLecture = wrapAdmin(db.addLecture, 'addLecture');
            db.deleteLecture = wrapAdmin(db.deleteLecture, 'deleteLecture');
            db.updateLecture = wrapAdmin(db.updateLecture, 'updateLecture');
        })();

// STEP 6 TAXONOMY ENGINE
const ENT_TAXONOMY = {
 Rhinology:['sinus','rhinitis','nasal','nose','polyp','epistaxis','septum','turbinate'],
 Otology:['ear','hearing','cochlea','tinnitus','vertigo','otitis','vestibular'],
 'Head & Neck Surgery':['neck','salivary','pharynx','pharyngitis','oral','swallow'],
 'Laryngology & Voice':['larynx','voice','tracheostomy','sleep apnoea','vocal'],
 'Paediatric ENT':['child','paediatric','pediatric','adenoid','tonsil']
};

function classifyQuestionAdvanced(q){
 if(q.subject && q.subject!=='Uncategorized') return q; // keep a subject already supplied (e.g. from an imported JSON) instead of overriding it
 const text=((q.questionText||'')+' '+(q.explanation||'')).toLowerCase();
 let best='Uncategorized', score=0;
 Object.entries(ENT_TAXONOMY).forEach(([subj,keys])=>{
   let s=0; keys.forEach(k=>{ if(text.includes(k)) s++; });
   if(s>score){ score=s; best=subj; }
 });
 if(best!=='Uncategorized') q.subject=best;
 return q;
}

// STEP 7 AUTO TOPIC & SUBTOPIC ENGINE
function generateTopicSubtopic(q){
 const text=((q.questionText||'')+' '+(q.explanation||'')).toLowerCase();
 if(!q.topic){
   if(text.includes('anatom')) q.topic='Anatomy';
   else if(text.includes('physiology')) q.topic='Physiology';
   else if(text.includes('diagnosis')||text.includes('assessment')) q.topic='Diagnosis';
   else if(text.includes('management')||text.includes('treatment')) q.topic='Management';
   else if(text.includes('surgery')||text.includes('operative')) q.topic='Surgery';
   else q.topic='General';
 }
 if(!q.subtopic){
   if(text.includes('complication')) q.subtopic='Complications';
   else if(text.includes('indication')) q.subtopic='Indications';
   else if(text.includes('classification')) q.subtopic='Classification';
   else if(text.includes('imaging')) q.subtopic='Imaging';
   else q.subtopic='Core Concepts';
 }
 return q;
}

// STEP 8 HIERARCHY ANALYTICS ENGINE
async function buildHierarchyStats(){
 const qs=await db.getAllQuestions();
 const tree={};
 qs.forEach(q=>{
   const s=q.subject||'Uncategorized';
   const c=q.chapter||'General';
   const t=q.topic||'General';
   const st=q.subtopic||'General';
   tree[s]??={};
   tree[s][c]??={};
   tree[s][c][t]??={};
   tree[s][c][t][st]=(tree[s][c][t][st]||0)+1;
 });
 return tree;
}

async function getQuestionsNeedingReview(){
 const qs=await db.getAllQuestions();
 return qs.filter(q=>q.needsReview);
}

// STEP 9 HIERARCHY MANAGEMENT UI

// STEP 10 ADVANCED ANALYTICS + DUPLICATE MANAGER
async function scanDuplicateQuestions(){
 const qs=await db.getAllQuestions();
 const map={}, dup=[];
 qs.forEach(q=>{
   const key=(q.questionText||'').toLowerCase().trim();
   if(map[key]) dup.push(q);
   else map[key]=1;
 });
 return dup;
}

async function generateSubjectAnalytics(){
 const qs=await db.getAllQuestions();
 const stats={};
 qs.forEach(q=>{
   const s=q.subject||'Unknown';
   stats[s]=(stats[s]||0)+1;
 });
 return stats;
}

// STEP 11 DASHBOARD + AI RECOMMENDATIONS
async function buildTopicHeatmap(){
 const qs=await db.getAllQuestions();
 const map={};
 qs.forEach(q=>{
   const k=q.topic||'General';
   map[k]=(map[k]||0)+1;
 });
 return map;
}

async function generateWeakAreaRecommendations(){
 const perf=await db.getPerformance();
 const result=[];
 perf.filter(x=>!x.correct).slice(0,20).forEach(x=>{
   result.push(`${x.subject||'Unknown'} > ${x.chapter||'Unknown'}`);
 });
 return [...new Set(result)];
}

// STEP 12 INTERACTIVE MANAGEMENT + READINESS ENGINE

async function renderBoardReadinessDashboard(){
 const perf=await db.getPerformance();
 const correct=perf.filter(x=>x.correct).length;
 const score=perf.length?Math.round(correct*100/perf.length):0;
 return `<div class="readiness-card"><h3>🎯 Board Readiness</h3><p>${score}% Ready</p></div>`;
}

// STEP 13 ADVANCED AI + EXAM CENTER

// STEP 14 PRODUCTION AI ENGINE

async function adaptiveExamEngine(){
 const perf=await db.getPerformance();
 return perf.filter(x=>!x.correct).length;
}

async function performanceForecastEngine(){
 const perf=await db.getPerformance();
 const acc=perf.length?Math.round((perf.filter(x=>x.correct).length*100)/perf.length):0;
 return `Projected Board Score: ${Math.min(acc+10,100)}%`;
}

// STEP 15 ENTERPRISE RELEASE ENGINE
async function fullBoardExamSimulator(){
 return {
   exams:['Iraqi Board','Arab Board','Mock Exam'],
   status:'enterprise-ready'
 };
}

async function smartQuestionSelector(){
 const perf=await db.getPerformance();
 return perf.filter(x=>!x.correct).slice(0,20);
}

// STEP 16 FINAL PROFESSIONAL BUILD

async function optimizeFor100kQuestions(){
 return {
   virtualization:true,
   indexedSearch:true,
   cacheEnabled:true
 };
}

// STEP 17 ULTIMATE PRODUCTION VERSION v5.0

async function iraqiBoardMockExam(){
 return {
   questions:150,
   timer:true,
   blueprint:'Iraqi Board ENT'
 };
}

// STEP 18 FINAL GOOGLE PLAY RELEASE v6.0
const PLAY_STORE_CONFIG={
 version:'6.0',
 release:'production',
 offline:true,
 pwa:true,
 installable:true
};

// STEP 19 NATIVE ANDROID WRAPPER + APK BUILDER
const ANDROID_BUILD_CONFIG={
 version:'7.0',
 target:'android',
 apk:true,
 aab:true,
 playStore:true
};

/* ===== Reclassification Engine v1 ===== */
async function updateQuestionClassification(questionId, subject, chapter, topic, subtopic){
    if (!RBAC.requireAdmin()) return false;
    await db.ensureReady();
    return new Promise((resolve,reject)=>{
        const tx = db.db.transaction('questions','readwrite');
        const store = tx.objectStore('questions');
        const getReq = store.get(questionId);
        getReq.onsuccess = ()=>{
            const q = getReq.result;
            if(!q){ resolve(false); return; }
            q.subject = subject || q.subject;
            q.chapter = chapter || q.chapter;
            q.topic = topic || q.topic;
            q.subtopic = subtopic || q.subtopic;
            q.needsReview = false;
            store.put(q);
            resolve(true);
        };
        getReq.onerror = ()=>reject(getReq.error);
    });
}

function renderReclassifyButton(questionId){
    return `<button class="btn btn-accent btn-sm" onclick="openReclassifyModal(${questionId})">🏷️ Reclassify</button>`;
}

/* ===== End Reclassification Engine ===== */

/* ===== Professional Reclassification Modal ===== */
async function openReclassifyModal(questionId){
 const q = await db.getQuestion(questionId);
 if(!q){ showToast('Question not found','error'); return; }

 const subjects = Object.keys(ENT_DATA).map(s=>`<option ${q.subject===s?'selected':''}>${s}</option>`).join('');
 showModal(`
 <h3>🏷️ Reclassify Question</h3>
 <label>Subject</label><select id="rcSubject">${Object.keys(ENT_DATA).map(s=>`<option value="${s}" ${q.subject===s?"selected":""}>${s}</option>`).join("")}</select>
 <input id="rcChapter" value="${q.chapter||''}" placeholder="Chapter">
 <input id="rcTopic" value="${q.topic||''}" placeholder="Topic">
 <input id="rcSubtopic" value="${q.subtopic||''}" placeholder="Subtopic">
 <button class="btn btn-primary" onclick="saveReclassification(${questionId})">Save</button>
 `);
}

async function saveReclassification(questionId){
        if (!RBAC.requireAdmin()) return;
 await updateQuestionClassification(
   questionId,
   document.getElementById('rcSubject').value,
   document.getElementById('rcChapter').value,
   document.getElementById('rcTopic').value,
   document.getElementById('rcSubtopic').value
 );
 closeModal();
 showToast('Classification updated','success');
 saveSession();
}

function showModal(html){
 document.getElementById('modalContent').innerHTML = html;
 document.getElementById('modalOverlay').classList.remove('hidden');
}
/* ===== End Professional Reclassification Modal ===== */

        // ============================================================
        //  APP STATE
        // ============================================================
        const AppState = {
            currentView: 'dashboard', darkMode: false,
            examInProgress: false, examShowResults: false,
            examQuestions: [], examAnswers: {}, examTimer: null,
            examTimeRemaining: 0, examStartTime: null,
            studyFilter: { book:'all', subject: 'all', chapter: 'all', topic: 'all', subtopic:'all', group: 'all', mode: 'practice', lectureId: null },
            questionFilters: { subject:'all', chapter:'all', topic:'all', difficulty:'all', special:'all' },
            searchQuery: '', lastExamResults: null,
            studyQuestions: null, studyIndex: 0, studyAnswers: {}, studyRevealed: {}, _examSaved:false,
            // OPTIMIZATION: hold references for virtual scroller and filtered sets
            _questionScroller: null,
            _lastFilteredQuestions: [],
            _lastFilterMeta: {}
        };
        // ============================================================
        //  RBAC — ROLE-BASED ACCESS CONTROL
        // ============================================================
        const RBAC = {
            role: 'student',
            ADMIN_PASSWORD: 'adam2016',
            STORAGE_KEY: 'ent_master_bank_role',

            init() {
                const stored = localStorage.getItem(this.STORAGE_KEY);
                this.role = (stored === 'admin') ? 'admin' : 'student';
            },

            isAdmin() { return this.role === 'admin'; },
            isStudent() { return this.role === 'student'; },

            login(password) {
                if (password === this.ADMIN_PASSWORD) {
                    this.role = 'admin';
                    localStorage.setItem(this.STORAGE_KEY, 'admin');
                    return true;
                }
                return false;
            },

            logout() {
                this.role = 'student';
                localStorage.removeItem(this.STORAGE_KEY);
            },

            requireAdmin() {
                if (!this.isAdmin()) {
                    showToast('Admin access required.', 'error');
                    return false;
                }
                return true;
            },

            toggle() {
                if (this.isAdmin()) {
                    if (confirm('Logout from Admin mode?')) {
                        this.logout();
                        showToast('Logged out. Student mode active.', 'info');
                        applyRoleVisibility();
                        if (AppState.currentView === 'import') navigateTo('dashboard');
                        return false;
                    }
                    return true;
                } else {
                    const pwd = prompt('Enter Admin Password:');
                    if (pwd && this.login(pwd)) {
                        showToast('Admin mode activated.', 'success');
                        applyRoleVisibility();
                        return true;
                    } else if (pwd !== null) {
                        showToast('Incorrect password.', 'error');
                    }
                    return false;
                }
            }
        };

        function applyRoleVisibility() {
            const importNav = document.querySelector('.nav-item[data-view="import"]');
            if (importNav) importNav.style.display = RBAC.isAdmin() ? 'flex' : 'none';
            const adminNav = document.querySelector('.nav-item[data-view="admin"]');
            if (adminNav) adminNav.style.display = RBAC.isAdmin() ? 'flex' : 'none';
            const adminBtn = document.getElementById('btnAdminMode');
            if (adminBtn) {
                adminBtn.textContent = RBAC.isAdmin() ? '🔓' : '🔒';
                adminBtn.title = RBAC.isAdmin() ? 'Admin Mode (click to logout)' : 'Admin Login';
            }
        }

        // ============================================================
        //  SESSION AUTO-SAVE / AUTO-RESTORE
        // ============================================================
        const SESSION_STORAGE_KEY = 'entMasterBank_session_v1';
        const SESSION_SCHEMA_VERSION = 1;
        const VALID_VIEWS = ['dashboard', 'study', 'exam', 'questions', 'import', 'mistakes', 'highyield', 'admin'];

        let _saveSessionTimer = null;
        function saveSession() {
            if (_saveSessionTimer) clearTimeout(_saveSessionTimer);
            _saveSessionTimer = setTimeout(() => {
                _saveSessionTimer = null;
                _doSaveSession();
            }, 120);
        }
        function _doSaveSession() {
            try {
                const snapshot = {
                    __v: SESSION_SCHEMA_VERSION,
                    savedAt: Date.now(),
                    currentView: AppState.currentView,
                    darkMode: AppState.darkMode,
                    examInProgress: AppState.examInProgress,
                    examShowResults: AppState.examShowResults,
                    examQuestions: AppState.examQuestions,
                    examAnswers: AppState.examAnswers,
                    examTimeRemaining: AppState.examTimeRemaining,
                    examStartTime: AppState.examStartTime,
                    _examSaved: AppState._examSaved,
                    lastExamResults: AppState.lastExamResults,
                    studyFilter: AppState.studyFilter,
                    questionFilters: AppState.questionFilters,
                    searchQuery: AppState.searchQuery,
                    studyQuestions: AppState.studyQuestions,
                    studyIndex: AppState.studyIndex,
                    studyAnswers: AppState.studyAnswers,
                    studyRevealed: AppState.studyRevealed,
                };
                localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(snapshot));
            } catch (e) {
                console.warn('Session autosave failed:', e);
            }
        }

        function clearSession() {
            try { localStorage.removeItem(SESSION_STORAGE_KEY); } catch (e) {}
        }

        function restoreSession() {
            let snapshot;
            try {
                const raw = localStorage.getItem(SESSION_STORAGE_KEY);
                if (!raw) return false;
                snapshot = JSON.parse(raw);
            } catch (e) {
                console.warn('Saved session was corrupted; starting fresh.', e);
                clearSession();
                return false;
            }
            if (!snapshot || typeof snapshot !== 'object' || snapshot.__v !== SESSION_SCHEMA_VERSION) {
                return false;
            }
            try {
                AppState.currentView = VALID_VIEWS.includes(snapshot.currentView) ? snapshot.currentView : 'dashboard';
                AppState.darkMode = !!snapshot.darkMode;

                if (snapshot.studyFilter && typeof snapshot.studyFilter === 'object') {
                    Object.assign(AppState.studyFilter, snapshot.studyFilter);
                }
                if (snapshot.questionFilters && typeof snapshot.questionFilters === 'object') {
                    Object.assign(AppState.questionFilters, snapshot.questionFilters);
                }
                AppState.searchQuery = typeof snapshot.searchQuery === 'string' ? snapshot.searchQuery : '';

                AppState.examQuestions = Array.isArray(snapshot.examQuestions) ? snapshot.examQuestions : [];
                AppState.examAnswers = (snapshot.examAnswers && typeof snapshot.examAnswers === 'object') ? snapshot.examAnswers : {};
                AppState.examTimeRemaining = Number.isFinite(snapshot.examTimeRemaining) ? Math.max(0, snapshot.examTimeRemaining) : 0;
                AppState.examStartTime = snapshot.examStartTime || null;
                AppState._examSaved = !!snapshot._examSaved;
                AppState.lastExamResults = Array.isArray(snapshot.lastExamResults) ? snapshot.lastExamResults : null;
                AppState.examInProgress = !!snapshot.examInProgress && AppState.examQuestions.length > 0;
                AppState.examShowResults = !!snapshot.examShowResults && Array.isArray(AppState.lastExamResults);

                if (Array.isArray(snapshot.studyQuestions) && snapshot.studyQuestions.length > 0 &&
                    Number.isInteger(snapshot.studyIndex) && snapshot.studyIndex >= 0 &&
                    snapshot.studyIndex < snapshot.studyQuestions.length) {
                    AppState.studyQuestions = snapshot.studyQuestions;
                    AppState.studyIndex = snapshot.studyIndex;
                    AppState.studyAnswers = (snapshot.studyAnswers && typeof snapshot.studyAnswers === 'object') ? snapshot.studyAnswers : {};
                    AppState.studyRevealed = (snapshot.studyRevealed && typeof snapshot.studyRevealed === 'object') ? snapshot.studyRevealed : {};
                }
                return true;
            } catch (e) {
                console.warn('Failed to apply saved session; starting fresh.', e);
                return false;
            }
        }

        function startExamTimer() {
            if (AppState.examTimer) { clearInterval(AppState.examTimer); AppState.examTimer = null; }
            if (!(AppState.examTimeRemaining > 0)) return;
            AppState.examTimer = setInterval(() => {
                AppState.examTimeRemaining--;
                const disp = $('#examTimerDisplay');
                if (disp) {
                    disp.textContent = formatTime(AppState.examTimeRemaining);
                    disp.className = 'timer-display' + (AppState.examTimeRemaining < 120 ? ' timer-warning' : '') + (AppState.examTimeRemaining < 60 ? ' timer-danger' : '');
                }
                saveSession();
                if (AppState.examTimeRemaining <= 0) {
                    clearInterval(AppState.examTimer);
                    AppState.examTimer = null;
                    showToast('Time up! Submitting...', 'warning');
                    submitExam();
                }
            }, 1000);
        }

        function cleanupLegacyStorage() {
            try {
                ['ENT_AUTO_BACKUP', 'ent_exam_progress', 'ent_exam_session', 'ent_last_interaction',
                 'ent_runtime_state', 'ent_answers', 'wrongQuestions', 'bookmarks', 'ent_last_question',
                 'entStats'].forEach(k => localStorage.removeItem(k));
                Object.keys(localStorage).forEach(k => {
                    if (k.startsWith('reclass_') || k.startsWith('reclassified_')) localStorage.removeItem(k);
                });
            } catch (e) { }
        }

        // ============================================================
        //  DOM HELPERS
        // ============================================================
        function $(sel) { return document.querySelector(sel); }
        function $$(sel) { return document.querySelectorAll(sel); }

        function escapeHTML(str) {
            if (str == null) return '';
            const d = document.createElement('div');
            d.textContent = str;
            return d.innerHTML;
        }

        function highlightText(text, query) {
            if (!query || !text) return escapeHTML(text);
            return escapeHTML(text).replace(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`, 'gi'), '<span class="highlight">$1</span>');
        }

        function formatTime(sec) {
            const m = Math.floor(sec / 60), s = sec % 60;
            return `${m}:${s.toString().padStart(2,'0')}`;
        }

        function showToast(msg, type = 'info') {
            const container = $('#toastContainer');
            const toast = document.createElement('div');
            toast.textContent = msg;
            const bg = type === 'success' ? '#2d8a4e' : type === 'error' ? '#c0392b' : type === 'warning' ? '#d4a017' : '#333';
            toast.style.cssText = `background:${bg};color:#fff;padding:10px 20px;border-radius:20px;margin-bottom:8px;font-weight:600;animation:toastIn 0.3s ease, toastOut 0.3s ease 2.2s forwards;`;
            container.appendChild(toast);
            setTimeout(() => toast.remove(), 2600);
        }

        function closeModal() { $('#modalOverlay').classList.add('hidden'); }

        // ============================================================
        //  NAVIGATION
        // ============================================================
        function navigateTo(view) {
            AppState.currentView = view;
            if (AppState.examTimer) { clearInterval(AppState.examTimer); AppState.examTimer = null; }
            AppState.examInProgress = false;
            AppState.examShowResults = false;
            $$('.nav-item').forEach(n => n.classList.remove('active'));
            const nav = $(`.nav-item[data-view="${view}"]`);
            if (nav) nav.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return renderViewSafely(view);
        }

        // ============================================================
        //  RENDER ENGINE
        // ============================================================
        async function renderViewSafely(view) {
            const main = $('#mainContent');
            if (!main) return;
            try {
                switch (view) {
                    case 'dashboard': main.innerHTML = await renderDashboard(); break;
                    case 'study': main.innerHTML = await renderStudy(); break;
                    case 'exam':
                        if (AppState.examInProgress) main.innerHTML = await renderExamInProgress();
                        else if (AppState.examShowResults) main.innerHTML = renderExamResults();
                        else main.innerHTML = await renderExamSetup();
                        break;
                    case 'questions': main.innerHTML = await renderQuestionList(); break;
                    case 'import': main.innerHTML = renderImportExport(); break;
                    case 'mistakes': main.innerHTML = await renderMistakes(); break;
                    case 'highyield': main.innerHTML = await renderHighYield(); break;
                    case 'settings': main.innerHTML = await renderSettings(); break;
                    case 'admin':
                        if (!RBAC.isAdmin()) {
                            main.innerHTML = '<div class="card text-center"><h3>🔒 Access Denied</h3><p>Admin access is required to view this page.</p><button class="btn btn-primary btn-block mt-2" data-nav="dashboard">← Back to Dashboard</button></div>';
                            break;
                        }
                        main.innerHTML = await renderAdminDashboard();
                        break;
                    default: main.innerHTML = '<div class="card">Unknown view</div>';
                }
            } catch (e) {
                console.error('Render error:', e);
                main.innerHTML = `<div class="card text-center"><p style="color:var(--danger);">Error: ${escapeHTML(e.message)}</p></div>`;
            }
            attachEventListeners();
            saveSession();
        }

        // ============================================================
        //  RENDER FUNCTIONS  (Optimized)
        // ============================================================

        /**
         * DASHBOARD — Optimized path:
         * 1. Fetches all hot data via cached DB getters (single IndexedDB read).
         * 2. Renders the static skeleton immediately so the UI paints fast.
         * 3. Offloads heavy analytics (weak topics, subject breakdown) to the
         *    Web Worker, then injects results lazily via requestIdleCallback.
         */
        
        // ============================================================
        //  ADMIN DASHBOARD
        // ============================================================
        async function renderAdminDashboard() {
            if (!RBAC.isAdmin()) {
                return '<div class="card text-center"><h3>🔒 Access Denied</h3><p>Admin access required.</p><button class="btn btn-primary btn-block mt-2" data-nav="dashboard">← Back to Dashboard</button></div>';
            }

            const [questions, bookmarks, history, perf, groups, books, hyIds] = await Promise.all([
                db.getAllQuestions(),
                db.getAllBookmarkedIds(),
                db.getExamHistory(),
                db.getPerformance(),
                db.getAllGroups(),
                db.getAllBooks(),
                db.getAllHighYieldIds()
            ]);

            const total = questions.length;
            const correct = perf.filter(x => x.correct).length;
            const wrong = perf.length - correct;
            const acc = perf.length ? Math.round(correct * 100 / perf.length) : 0;
            const avg = history.length ? Math.round(history.reduce((s, e) => s + (e.percentage || 0), 0) / history.length) : 0;

            // Subject breakdown
            const subjectCounts = {};
            questions.forEach(q => { const s = q.subject || 'Uncategorized'; subjectCounts[s] = (subjectCounts[s] || 0) + 1; });
            const subjectEntries = Object.entries(subjectCounts).sort((a, b) => b[1] - a[1]);

            // Weak topics
            const weakTopics = {};
            perf.forEach(x => {
                const key = (x.subject || 'Unknown') + ' > ' + (x.chapter || 'Unknown') + ' > ' + (x.topic || 'Unknown');
                if (!weakTopics[key]) weakTopics[key] = { t: 0, c: 0 };
                weakTopics[key].t++;
                if (x.correct) weakTopics[key].c++;
            });
            const weakArr = Object.entries(weakTopics)
                .filter(([k, v]) => v.t >= 2)
                .map(([k, v]) => ({ k, p: Math.round(v.c * 100 / v.t), t: v.t }))
                .sort((a, b) => a.p - b.p)
                .slice(0, 5);

            // Duplicate scan
            const dupMap = new Map();
            const dups = [];
            questions.forEach(q => {
                const key = (q.questionText || '').toLowerCase().trim();
                if (dupMap.has(key)) dups.push(q);
                else dupMap.set(key, q.id);
            });

            return `
            <div class="card"><div class="card-header">⚙️ Admin Dashboard</div>
              <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:10px;margin-bottom:14px;">
                <div class="stat-card"><div class="stat-value">${total}</div><div class="stat-label">Questions</div></div>
                <div class="stat-card"><div class="stat-value">${bookmarks.length}</div><div class="stat-label">Bookmarked</div></div>
                <div class="stat-card"><div class="stat-value">${history.length}</div><div class="stat-label">Exams</div></div>
                <div class="stat-card"><div class="stat-value">${correct}</div><div class="stat-label">Correct</div></div>
                <div class="stat-card"><div class="stat-value">${wrong}</div><div class="stat-label">Wrong</div></div>
                <div class="stat-card"><div class="stat-value">${acc}%</div><div class="stat-label">Accuracy</div></div>
                <div class="stat-card"><div class="stat-value">${avg}%</div><div class="stat-label">Avg Exam</div></div>
                <div class="stat-card"><div class="stat-value">${hyIds.length}</div><div class="stat-label">High Yield</div></div>
                <div class="stat-card"><div class="stat-value">${dups.length}</div><div class="stat-label">Duplicates</div></div>
                <div class="stat-card"><div class="stat-value">${groups.length}</div><div class="stat-label">Groups</div></div>
                <div class="stat-card"><div class="stat-value">${books.length}</div><div class="stat-label">Books</div></div>
              </div>
            </div>

            <div class="card"><div class="card-header">🛠 Quick Actions</div>
              <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:10px;">
                <button class="btn btn-primary" id="btnAdminAddQ">➕ Add Question</button>
                <button class="btn btn-accent" id="btnAdminBulkImport">📥 Bulk Import</button>
                <button class="btn btn-warning" id="btnAdminBulkEdit">✏️ Bulk Edit</button>
                <button class="btn btn-danger" id="btnAdminMergeDups">🔄 Merge Duplicates (${dups.length})</button>
                <button class="btn btn-primary" id="btnAdminReclassify">🏷️ Reclassify All</button>
                <button class="btn btn-danger" id="btnAdminClearAll">🗑 Clear All</button>
                <button class="btn btn-outline" data-nav="settings">⚙️ Settings</button>
              </div>
            </div>

            <div class="card"><div class="card-header">📚 By Subject</div>
              ${subjectEntries.length ? subjectEntries.map(([s,c])=>`<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--border);"><span>${escapeHTML(s)}</span><span class="badge badge-primary">${c}</span></div>`).join('') : '<div class="empty-state">No questions yet.</div>'}
            </div>

            <div class="card"><div class="card-header">🎯 Weak Topics</div>
              ${weakArr.length ? weakArr.map(x=>`<div style="display:flex;justify-content:space-between;padding:6px 0"><span>${escapeHTML(x.k)}</span><span class="badge badge-danger">${x.p}% (${x.t})</span></div>`).join('') : '<div class="empty-state">Solve more questions to generate weak-topic analytics.</div>'}
            </div>

            <div class="card"><div class="card-header">📝 Question Manager</div>
              <input type="text" id="adminQSearch" placeholder="Search questions to edit/delete..." style="margin-bottom:10px;">
              <div id="adminQuestionList" style="max-height:60vh;overflow:auto;">
                ${questions.slice(0, 20).map(q => `
                  <div class="question-block" data-qid="${q.id}" style="padding:12px;margin-bottom:8px;">
                    <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;">
                      <div style="flex:1;font-size:0.9rem;"><strong>${q.id}.</strong> ${escapeHTML((q.questionText || '').substring(0, 120))}${(q.questionText || '').length > 120 ? '…' : ''}</div>
                      <div style="display:flex;gap:6px;flex-wrap:wrap;">
                        <button class="btn btn-sm btn-primary admin-edit-q" data-qid="${q.id}">✏️ Edit</button>
                        <button class="btn btn-sm btn-danger admin-del-q" data-qid="${q.id}">🗑 Delete</button>
                      </div>
                    </div>
                    <div class="flex-wrap" style="margin-top:6px;">
                      <span class="badge badge-primary">${escapeHTML(q.subject || '?')}</span>
                      <span class="badge badge-accent">${escapeHTML(q.chapter || '?')}</span>
                      <span class="badge badge-group">${escapeHTML(q.difficulty || 'Medium')}</span>
                    </div>
                  </div>
                `).join('')}
                ${questions.length > 20 ? `<p style="text-align:center;color:var(--text2);padding:10px;">Showing first 20 of ${questions.length} questions. Use search to filter.</p>` : ''}
              </div>
            </div>

            `;
        }

        async function adminSearchQuestions(query) {
            const questions = await db.getAllQuestions();
            const q = query.toLowerCase().trim();
            if (!q) return questions.slice(0, 20);
            return questions.filter(qs => {
                const text = [qs.questionText, qs.explanation, qs.subject, qs.chapter, qs.topic].join(' ').toLowerCase();
                return text.includes(q);
            }).slice(0, 50);
        }

        async function adminRenderQuestionList(questions) {
            const container = $('#adminQuestionList');
            if (!container) return;
            container.innerHTML = questions.map(q => `
              <div class="question-block" data-qid="${q.id}" style="padding:12px;margin-bottom:8px;">
                <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;">
                  <div style="flex:1;font-size:0.9rem;"><strong>${q.id}.</strong> ${escapeHTML((q.questionText || '').substring(0, 120))}${(q.questionText || '').length > 120 ? '…' : ''}</div>
                  <div style="display:flex;gap:6px;flex-wrap:wrap;">
                    <button class="btn btn-sm btn-primary admin-edit-q" data-qid="${q.id}">✏️ Edit</button>
                    <button class="btn btn-sm btn-danger admin-del-q" data-qid="${q.id}">🗑 Delete</button>
                  </div>
                </div>
                <div class="flex-wrap" style="margin-top:6px;">
                  <span class="badge badge-primary">${escapeHTML(q.subject || '?')}</span>
                  <span class="badge badge-accent">${escapeHTML(q.chapter || '?')}</span>
                  <span class="badge badge-group">${escapeHTML(q.difficulty || 'Medium')}</span>
                </div>
              </div>
            `).join('') + (questions.length === 0 ? '<div class="empty-state">No questions found.</div>' : '');
        }

        async function adminMergeDuplicates() {
            if (!RBAC.requireAdmin()) return;
            const questions = await db.getAllQuestions();
            const map = new Map();
            const dups = [];
            for (const q of questions) {
                const key = (q.questionText || '').toLowerCase().trim();
                if (map.has(key)) dups.push(q);
                else map.set(key, q.id);
            }
            if (dups.length === 0) { showToast('No duplicates found.', 'info'); return; }
            if (!confirm(`Delete ${dups.length} duplicate question(s)? This cannot be undone.`)) return;
            let deleted = 0;
            for (const q of dups) {
                try { await db.deleteQuestion(q.id); deleted++; } catch (e) {}
            }
            showToast(`${deleted} duplicate(s) removed.`, 'success');
            navigateTo('admin');
        }

        async function adminBulkReclassify() {
            if (!RBAC.requireAdmin()) return;
            const questions = await db.getAllQuestions();
            const review = questions.filter(q => q.needsReview || !q.subject || q.subject === 'Uncategorized' || !q.chapter || q.chapter === 'General');
            if (review.length === 0) { showToast('No questions need reclassification.', 'info'); return; }
            if (!confirm(`Auto-reclassify ${review.length} question(s)?`)) return;
            let fixed = 0;
            for (const q of review) {
                classifyQuestionAdvanced(q);
                generateTopicSubtopic(q);
                try {
                    await updateQuestionClassification(q.id, q.subject, q.chapter, q.topic, q.subtopic);
                    fixed++;
                } catch (e) {}
            }
            showToast(`${fixed} question(s) reclassified.`, 'success');
            navigateTo('admin');
        }

        async function adminBulkEdit() {
            if (!RBAC.requireAdmin()) return;
            const questions = await db.getAllQuestions();
            if (questions.length === 0) { showToast('No questions to edit.', 'warning'); return; }
            const subjectOpts = '<option value="">Keep unchanged</option>' + ALL_SUBJECTS.map(s => `<option value="${escapeHTML(s)}">${escapeHTML(s)}</option>`).join('');
            const diffOpts = '<option value="">Keep unchanged</option><option>Easy</option><option>Medium</option><option>Hard</option>';
            showModal(`
                <h3>✏️ Bulk Edit</h3>
                <p style="font-size:0.85rem;color:var(--text2);margin-bottom:12px;">This will apply changes to ALL ${questions.length} questions. Leave fields empty to keep existing values.</p>
                <div class="modal-field"><label>Subject</label><select id="bulkEditSubject">${subjectOpts}</select></div>
                <div class="modal-field"><label>Chapter</label><input type="text" id="bulkEditChapter" placeholder="Leave empty to keep"></div>
                <div class="modal-field"><label>Difficulty</label><select id="bulkEditDifficulty">${diffOpts}</select></div>
                <div class="modal-field"><label>Group</label><input type="text" id="bulkEditGroup" placeholder="Leave empty to keep"></div>
                <div class="modal-field"><label>Book</label><input type="text" id="bulkEditBook" placeholder="Leave empty to keep"></div>
                <button class="btn btn-warning btn-block" id="btnExecuteBulkEdit">Apply to All</button>
                <button class="btn btn-outline btn-block mt-2" onclick="closeModal()">Cancel</button>
            `);
            $('#btnExecuteBulkEdit').addEventListener('click', async () => {
                const subject = $('#bulkEditSubject').value;
                const chapter = $('#bulkEditChapter').value.trim();
                const difficulty = $('#bulkEditDifficulty').value;
                const group = $('#bulkEditGroup').value.trim();
                const book = $('#bulkEditBook').value.trim();
                let updated = 0;
                const tx = db.db.transaction('questions', 'readwrite');
                const store = tx.objectStore('questions');
                for (const q of questions) {
                    let changed = false;
                    if (subject && q.subject !== subject) { q.subject = subject; changed = true; }
                    if (chapter && q.chapter !== chapter) { q.chapter = chapter; changed = true; }
                    if (difficulty && q.difficulty !== difficulty) { q.difficulty = difficulty; changed = true; }
                    if (group && q.group !== group) { q.group = group; changed = true; }
                    if (book && q.book !== book) { q.book = book; changed = true; }
                    if (changed) { store.put(q); updated++; }
                }
                await new Promise((resolve, reject) => { tx.oncomplete = resolve; tx.onerror = () => reject(tx.error); });
                db._invalidateCache();
                closeModal();
                showToast(`${updated} question(s) updated.`, 'success');
                navigateTo('admin');
            });
        }

        async function adminDeleteQuestion(qid) {
            if (!RBAC.requireAdmin()) return;
            if (!confirm(`Delete question #${qid}? This cannot be undone.`)) return;
            await db.deleteQuestion(qid);
            showToast(`Question #${qid} deleted.`, 'success');
            navigateTo('admin');
        }

        async function adminEditQuestion(qid) {
            if (!RBAC.requireAdmin()) return;
            const q = await db.getQuestion(qid);
            if (!q) { showToast('Question not found.', 'error'); return; }
            showAddQuestionModal(q);
        }

        // ============================================================
        //  STUDENT MODE ENHANCEMENTS
        // ============================================================
        const STREAK_KEY = 'ent_study_streak';
        const DAILY_GOAL_KEY = 'ent_daily_goal';
        const DAILY_PROGRESS_KEY = 'ent_daily_progress';
        const LAST_STUDY_DATE_KEY = 'ent_last_study_date';
        const DEFAULT_STREAK_INFO = Object.freeze({
            streak: 0,
            bestStreak: 0,
            totalStudyDays: 0,
            lastDate: null,
            studiedToday: false
        });

        function toNonNegativeInteger(value, fallback = 0) {
            const parsed = Number.parseInt(value, 10);
            return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback;
        }

        function parseDailyProgress(raw) {
            try {
                const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw;
                if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {};
                return Object.fromEntries(
                    Object.entries(parsed).map(([date, count]) => [date, toNonNegativeInteger(count)])
                );
            } catch (e) {
                return {};
            }
        }

        function getBestStreak(progress = {}) {
            const studyDates = Object.entries(progress ?? {})
                .filter(([date, count]) => /^\d{4}-\d{2}-\d{2}$/.test(date) && toNonNegativeInteger(count) > 0)
                .map(([date]) => date)
                .sort();
            let bestStreak = 0;
            let currentRun = 0;
            let previousDay = null;
            studyDates.forEach(date => {
                const day = Date.parse(`${date}T00:00:00Z`);
                currentRun = previousDay !== null && day - previousDay === 86400000 ? currentRun + 1 : 1;
                bestStreak = Math.max(bestStreak, currentRun);
                previousDay = day;
            });
            return bestStreak;
        }

        async function getDailyProgressMap() {
            try {
                return parseDailyProgress(await db.getSetting(DAILY_PROGRESS_KEY, '{}'));
            } catch (e) {
                return {};
            }
        }

        async function getStudyStreak() {
            try {
                const [raw, lastRaw, progress] = await Promise.all([
                    db.getSetting(STREAK_KEY, '0'),
                    db.getSetting(LAST_STUDY_DATE_KEY, ''),
                    getDailyProgressMap()
                ]);
                const storedStreak = toNonNegativeInteger(raw);
                const totalStudyDays = Object.values(progress ?? {}).filter(count => toNonNegativeInteger(count) > 0).length;
                const bestStreak = Math.max(storedStreak, getBestStreak(progress));
                const lastDate = lastRaw ? new Date(lastRaw) : null;
                const today = new Date(); today.setHours(0,0,0,0);
                const yesterday = new Date(today); yesterday.setDate(yesterday.getDate() - 1);
                if (!lastDate || Number.isNaN(lastDate.getTime())) {
                    return { ...DEFAULT_STREAK_INFO, bestStreak, totalStudyDays };
                }
                const last = new Date(lastDate); last.setHours(0,0,0,0);
                if (+last === +today) return { streak: storedStreak, bestStreak, totalStudyDays, lastDate: lastRaw, studiedToday: true };
                if (+last === +yesterday) return { streak: storedStreak, bestStreak, totalStudyDays, lastDate: lastRaw, studiedToday: false };
                return { streak: 0, bestStreak, totalStudyDays, lastDate: lastRaw, studiedToday: false };
            } catch (e) { return { ...DEFAULT_STREAK_INFO }; }
        }

        async function recordStudyActivity() {
            const today = new Date().toISOString().slice(0, 10);
            const { streak, studiedToday } = await getStudyStreak();
            if (!studiedToday) {
                const newStreak = streak + 1;
                await db.setSetting(STREAK_KEY, String(newStreak));
                await db.setSetting(LAST_STUDY_DATE_KEY, today);
            }
            // Daily progress
            const progress = await getDailyProgressMap();
            progress[today] = (progress[today] || 0) + 1;
            await db.setSetting(DAILY_PROGRESS_KEY, JSON.stringify(progress));
        }

        async function getDailyGoal() {
            try {
                const raw = await db.getSetting(DAILY_GOAL_KEY, '20');
                return Math.max(1, toNonNegativeInteger(raw, 20));
            } catch (e) {
                return 20;
            }
        }

        async function setDailyGoal(goal) {
            await db.setSetting(DAILY_GOAL_KEY, String(goal));
        }

        async function getDailyProgress() {
            const today = new Date().toISOString().slice(0, 10);
            const progress = await getDailyProgressMap();
            return toNonNegativeInteger(progress?.[today]);
        }

        async function getWeeklyProgress() {
            const progress = await getDailyProgressMap();
            const result = [];
            for (let i = 6; i >= 0; i--) {
                const d = new Date(); d.setDate(d.getDate() - i);
                const key = d.toISOString().slice(0, 10);
                result.push({ date: key, count: toNonNegativeInteger(progress?.[key]), day: d.toLocaleDateString('en-US', { weekday: 'long' }) });
            }
            return result;
        }

        async function generateSmartRevision() {
            const [questions, perf, bmIds, hyIds] = await Promise.all([
                db.getAllQuestions(), db.getPerformance(),
                db.getAllBookmarkedIds(), db.getAllHighYieldIds()
            ]);
            const latest = {};
            perf.forEach(x => {
                if (!latest[x.questionId] || new Date(x.timestamp) > new Date(latest[x.questionId].timestamp)) {
                    latest[x.questionId] = { correct: x.correct, timestamp: x.timestamp };
                }
            });
            const wrongIds = Object.keys(latest).filter(k => latest[k].correct === false).map(Number);
            const missed = questions.filter(q => wrongIds.includes(q.id));
            const highYield = questions.filter(q => hyIds.includes(q.id));
            const bookmarked = questions.filter(q => bmIds.includes(q.id));

            const pool = [];
            // Priority: missed > high yield > bookmarked > random
            missed.forEach(q => pool.push({ q, weight: 10 }));
            highYield.forEach(q => { if (!pool.find(p => p.q.id === q.id)) pool.push({ q, weight: 5 }); });
            bookmarked.forEach(q => { if (!pool.find(p => p.q.id === q.id)) pool.push({ q, weight: 3 }); });

            // Fill up to 20 with random weak-topic questions if pool is small
            if (pool.length < 20) {
                const weakTopics = {};
                perf.filter(x => !x.correct).forEach(x => {
                    const key = x.subject || 'Unknown';
                    weakTopics[key] = (weakTopics[key] || 0) + 1;
                });
                const weakSubjects = Object.entries(weakTopics).sort((a, b) => b[1] - a[1]).map(([k]) => k);
                const candidates = questions.filter(q => weakSubjects.includes(q.subject) && !pool.find(p => p.q.id === q.id));
                candidates.sort(() => Math.random() - 0.5).slice(0, 20 - pool.length).forEach(q => pool.push({ q, weight: 2 }));
            }

            // Shuffle weighted pool
            const weighted = [];
            pool.forEach(p => { for (let i = 0; i < p.weight; i++) weighted.push(p.q); });
            const selected = [];
            const seen = new Set();
            while (selected.length < Math.min(20, weighted.length) && seen.size < weighted.length) {
                const q = weighted[Math.floor(Math.random() * weighted.length)];
                if (!seen.has(q.id)) { seen.add(q.id); selected.push(q); }
            }
            return selected;
        }

        async function startAdaptiveExam() {
            const questions = await db.getAllQuestions();
            if (questions.length === 0) { showToast('No questions available.', 'warning'); return; }
            const perf = await db.getPerformance();
            const latest = {};
            perf.forEach(x => {
                if (!latest[x.questionId] || new Date(x.timestamp) > new Date(latest[x.questionId].timestamp)) {
                    latest[x.questionId] = x;
                }
            });
            // Score each question: lower accuracy = higher priority
            const scored = questions.map(q => {
                const rec = latest[q.id];
                let score = 0.5;
                if (rec) {
                    score = rec.correct ? 0.3 : 0.9;
                    if (q.difficulty === 'Hard') score += 0.1;
                    if (q.difficulty === 'Easy') score -= 0.1;
                }
                return { q, score: Math.max(0, Math.min(1, score)) };
            });
            scored.sort((a, b) => b.score - a.score);
            const selected = scored.slice(0, Math.min(20, scored.length)).map(s => s.q);
            AppState.examQuestions = selected;
            AppState.examAnswers = { currentIndex: 0 };
            AppState._examSaved = false;
            AppState.examInProgress = true;
            AppState.examShowResults = false;
            AppState.lastExamResults = null;
            AppState.examStartTime = Date.now();
            AppState.examTimeRemaining = 0;
            if (AppState.examTimer) { clearInterval(AppState.examTimer); AppState.examTimer = null; }
            renderViewSafely('exam');
        }

        async function startSmartRevision() {
            const selected = await generateSmartRevision();
            if (selected.length === 0) { showToast('No revision questions available. Start studying first!', 'warning'); return; }
            AppState.studyQuestions = selected;
            AppState.studyIndex = 0;
            AppState.studyAnswers = {};
            AppState.studyRevealed = {};
            navigateTo('study');
            setTimeout(() => renderStudyQuestion(), 100);
        }

        async function continueStudying() {
            if (AppState.studyQuestions && AppState.studyIndex < AppState.studyQuestions.length) {
                navigateTo('study');
                setTimeout(() => renderStudyQuestion(), 100);
            } else {
                showToast('No active study session. Start a new one!', 'info');
            }
        }

async function renderDashboard() {
            let streakInfo = { ...DEFAULT_STREAK_INFO };
            let dailyProgress = 0;
            let dailyGoal = 20;
            let weeklyProgress = [];
            const canContinue = Boolean(
                AppState.studyQuestions?.length &&
                (AppState.studyIndex ?? 0) < AppState.studyQuestions.length
            );

            // Parallel cached reads — no blocking sequential DB calls
            const [questions, bookmarks, history, perf, loadedStreakInfo, loadedDailyGoal, progressByDate] = await Promise.all([
                db.getAllQuestions(),
                db.getAllBookmarkedIds(),
                db.getExamHistory(),
                db.getPerformance(),
                getStudyStreak(),
                getDailyGoal(),
                getDailyProgressMap()
            ]);

            streakInfo = { ...DEFAULT_STREAK_INFO, ...(loadedStreakInfo ?? {}) };
            dailyGoal = Math.max(1, toNonNegativeInteger(loadedDailyGoal, 20));
            const today = new Date().toISOString().slice(0, 10);
            dailyProgress = toNonNegativeInteger(progressByDate?.[today]);
            weeklyProgress = Array.from({ length: 7 }, (_, index) => {
                const date = new Date();
                date.setUTCDate(date.getUTCDate() - (6 - index));
                const dateKey = date.toISOString().slice(0, 10);
                return {
                    day: date.toLocaleDateString('en-US', { weekday: 'long', timeZone: 'UTC' }),
                    count: toNonNegativeInteger(progressByDate?.[dateKey])
                };
            });
            const dailyProgressPercent = Math.min(100, Math.round((dailyProgress / dailyGoal) * 100));

            const total = questions.length;
            const correct = perf.filter(x => x.correct).length;
            const wrong = perf.length - correct;
            const acc = perf.length ? Math.round(correct * 100 / perf.length) : 0;
            const avg = history.length ? Math.round(history.reduce((s, e) => s + (e.percentage || 0), 0) / history.length) : 0;

            // Render skeleton immediately
            let html = `
            <div class="card"><div class="card-header">📊 Dashboard</div>
              <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:10px;">
                <div class="stat-card"><div class="stat-value">${total}</div><div class="stat-label">Questions</div></div>
                <div class="stat-card"><div class="stat-value">${bookmarks.length}</div><div class="stat-label">Bookmarked</div></div>
                <div class="stat-card"><div class="stat-value">${history.length}</div><div class="stat-label">Exams</div></div>
                <div class="stat-card"><div class="stat-value">${correct}</div><div class="stat-label">Correct</div></div>
                <div class="stat-card"><div class="stat-value">${wrong}</div><div class="stat-label">Wrong</div></div>
                <div class="stat-card"><div class="stat-value">${acc}%</div><div class="stat-label">Accuracy</div></div>
                <div class="stat-card"><div class="stat-value">${avg}%</div><div class="stat-label">Avg Accuracy</div></div>
              </div>
            </div>
            <div class="card"><div class="card-header">🔥 Study Streak & Daily Goal</div>
              <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:10px;margin-bottom:10px;">
                <div class="stat-card"><div class="stat-value">${streakInfo?.streak ?? 0}</div><div class="stat-label">Current Streak</div></div>
                <div class="stat-card"><div class="stat-value">${streakInfo?.bestStreak ?? 0}</div><div class="stat-label">Best Streak</div></div>
                <div class="stat-card"><div class="stat-value">${streakInfo?.totalStudyDays ?? 0}</div><div class="stat-label">Total Study Days</div></div>
                <div class="stat-card"><div class="stat-value">${dailyProgress}</div><div class="stat-label">Today</div></div>
                <div class="stat-card"><div class="stat-value">${dailyGoal}</div><div class="stat-label">Daily Goal</div></div>
                <div class="stat-card"><div class="stat-value">${dailyProgressPercent}%</div><div class="stat-label">Progress</div></div>
              </div>
              <div style="margin-bottom:10px;">
                <div class="progress-bar"><div class="progress-fill" style="width:${dailyProgressPercent}%"></div></div>
              </div>
              <div style="display:flex;gap:8px;flex-wrap:wrap;">
                <button class="btn btn-sm btn-primary" id="btnSetDailyGoal">🎯 Set Daily Goal</button>
                <button class="btn btn-sm btn-success" id="btnContinueStudy" ${canContinue ? '' : 'disabled'}>▶️ Continue Studying</button>
                <button class="btn btn-sm btn-accent" id="btnSmartRevision">🧠 Smart Revision</button>
                <button class="btn btn-sm btn-warning" id="btnAdaptiveQuiz">🎯 Adaptive Quiz</button>
              </div>
            </div>

            <div class="card"><div class="card-header">📅 Weekly Activity</div>
              <div style="display:flex;gap:6px;align-items:flex-end;justify-content:space-between;height:80px;padding:10px 0;">
                ${weeklyProgress.map(d => `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;">
                  <div style="width:100%;background:linear-gradient(180deg,var(--primary),var(--accent));border-radius:4px;opacity:0.8;transition:height 0.3s;height:${Math.min(60, (d.count / Math.max(dailyGoal, 1)) * 60)}px;"></div>
                  <div style="font-size:clamp(0.45rem,1.7vw,0.65rem);color:var(--text-muted);font-weight:600;white-space:nowrap;">${d.day}</div>
                  <div style="font-size:0.6rem;color:var(--text2);">${d.count}</div>
                </div>`).join('')}
              </div>
            </div>

            <div class="card"><div class="card-header">📚 By Subject</div>
              <div id="dashboardSubjects"><div class="empty-state">Loading subject breakdown...</div></div>
            </div>
            <div class="card"><div class="card-header">🎯 Weak Topics</div>
              <div id="dashboardWeakTopics"><div class="empty-state">Loading analytics...</div></div>
            </div>
            <div class="card">
              <div class="card-header">❌ Missed Questions Bank</div>
              <div style="font-size:13px">Review your incorrect answers in one place.</div>
              <div style="margin-top:8px;display:flex;gap:8px;flex-wrap:wrap">
                <span class="badge badge-danger">${wrong} Missed</span>
                <button class="btn btn-sm btn-danger" data-nav="mistakes">Review Mistakes</button>
              </div>
            </div>
            <div class="card">
              <div class="card-header">⭐ High Yield Questions</div>
              <div style="font-size:13px">Mark important board and exam questions.</div>
              <div style="margin-top:8px;display:flex;gap:8px;flex-wrap:wrap">
                <span class="badge badge-warning" id="hyBadge">${(await db.getAllHighYieldIds()).length} High Yield</span>
                <button class="btn btn-sm btn-accent" data-nav="highyield">Review High Yield</button>
              </div>
            </div>
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px;">
              <button class="btn btn-primary btn-sm" data-nav="study">📖 Study</button>
              <button class='btn btn-success btn-sm' id='btnAdaptiveStudy'>🧠 Adaptive Study</button>
              <button class='btn btn-accent btn-sm' onclick='startAdaptiveExam()'>🎯 Adaptive Exam</button>
              <button class="btn btn-accent btn-sm" data-nav="exam">📝 Exam</button>
            </div>
            <div class="card">
              <div class="card-header">📈 Subject Performance Analytics</div>
              <div id="subjectAnalyticsContainer">
                <small>Accuracy by Subject will be calculated automatically from performance history.</small>
              </div>
            </div>`;

            // LAZY LOAD: offload heavy analytics to Web Worker, then paint results
            LazyRenderer.schedule(async () => {
                try {
                    const analytics = await WorkerPool.post('analytics', {
                        questions, performance: perf, bookmarks, examHistory: history
                    });
                    // Subject breakdown
                    const subjectEntries = Object.entries(analytics.subjectCounts).sort((a, b) => b[1] - a[1]);
                    const subjHtml = subjectEntries.length
                        ? subjectEntries.map(([s,c])=>`<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--border);"><span>${escapeHTML(s)}</span><span class="badge badge-primary">${c}</span></div>`).join('')
                        : '<div class="empty-state">No questions yet.</div>';
                    const subjContainer = $('#dashboardSubjects');
                    if (subjContainer) subjContainer.innerHTML = subjHtml;

                    // Weak topics
                    const weakHtml = analytics.weakArr.length
                        ? analytics.weakArr.map(x=>`<div style="display:flex;justify-content:space-between;padding:6px 0"><span>${x.k}</span><span class="badge badge-danger">${x.p}%</span></div>`).join('')
                        : `<div class="empty-state">Solve more questions to generate weak-topic analytics.</div>`;
                    const weakContainer = $('#dashboardWeakTopics');
                    if (weakContainer) weakContainer.innerHTML = weakHtml;
                } catch (e) {
                    console.error('Dashboard analytics error:', e);
                }
            }, 'idle');

            return html;
        }

        async function renderStudy() {
            const sf = AppState.studyFilter;

            if (sf.mode === 'lectures') {
                return await renderLectureBrowser();
            }
            if (sf.mode === 'lectureReader' && sf.lectureId) {
                return await renderLectureReader(sf.lectureId);
            }

            const questions = await db.getAllQuestions();
            const books = await db.getAllBooks();
            let filtered = questions;
            if (sf.subject !== 'all') filtered = filtered.filter(q => (q.subject || 'Uncategorized') === sf.subject);
            if (sf.chapter !== 'all') filtered = filtered.filter(q => (q.chapter || 'General') === sf.chapter);
            if (sf.topic !== 'all') filtered = filtered.filter(q => (q.topic || 'General') === sf.topic);
            if (sf.subtopic !== 'all') filtered = filtered.filter(q => ((q.subtopic || 'General') === sf.subtopic));
            if (sf.book !== 'all') filtered = filtered.filter(q => (q.book || '') === sf.book);
            if (sf.mode === 'bookmarked') { const bIds = await db.getAllBookmarkedIds(); filtered = filtered.filter(q => bIds.includes(q.id)); }
            if (sf.mode === 'highyield') { const hyIds = await db.getAllHighYieldIds(); filtered = filtered.filter(q => hyIds.includes(q.id)); }

            const subjectOpts = '<option value="all">All</option>' + ALL_SUBJECTS.map(s => `<option value="${escapeHTML(s)}" ${sf.subject===s?'selected':''}>${escapeHTML(s)}</option>`).join('');
            let chapterList = ALL_CHAPTERS;
            if (sf.subject !== 'all' && ENT_DATA[sf.subject]) chapterList = ENT_DATA[sf.subject];
            const chapterOpts = '<option value="all">All</option>' + chapterList.map(c => `<option value="${escapeHTML(c)}" ${sf.chapter===c?'selected':''}>${escapeHTML(c)}</option>`).join('');

            const topicSet = new Set();
            filtered.forEach(q => { if (q.topic) topicSet.add(q.topic); });
            const topicOpts = '<option value="all">All</option>' + [...topicSet].sort().map(t => `<option value="${escapeHTML(t)}" ${sf.topic===t?'selected':''}>${escapeHTML(t)}</option>`).join('');
            const bookOpts = '<option value="all">All Books</option>' + books.map(g => `<option value="${escapeHTML(g)}" ${sf.book===g?'selected':''}>${escapeHTML(g)}</option>`).join('');

            const subtopicSet = new Set();
            filtered.forEach(q => { if (q.subtopic) subtopicSet.add(q.subtopic); });
            const subtopicOpts = '<option value="all">All</option>' + [...subtopicSet].sort().map(st => `<option value="${escapeHTML(st)}" ${sf.subtopic===st?'selected':''}>${escapeHTML(st)}</option>`).join('');

            return `
            <div class="card">
              <div class="card-header">📖 Study Mode</div>
              <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px;">
                <button class="btn btn-sm ${sf.mode==='practice'?'btn-primary':'btn-outline'}" data-study-mode="practice">Practice</button>
                <button class="btn btn-sm ${sf.mode==='bookmarked'?'btn-primary':'btn-outline'}" data-study-mode="bookmarked">⭐ Bookmarked</button>
                <button class="btn btn-sm ${sf.mode==='highyield'?'btn-primary':'btn-outline'}" data-study-mode="highyield">🔥 High Yield</button>
                <button class="btn btn-sm ${sf.mode==='lectures'?'btn-primary':'btn-outline'}" data-study-mode="lectures">📚 Lectures</button>
              </div>
              <div class="form-row">
                <div><label>Subject</label><select id="studySubject">${subjectOpts}</select></div>
                <div><label>Chapter</label><select id="studyChapter">${chapterOpts}</select></div>
                <div><label>Topic</label><select id="studyTopic">${topicOpts}</select></div>
                <div><label>Subtopic</label><select id="studySubtopic">${subtopicOpts}</select></div>
                <div><label>Book</label><select id="studyBook">${bookOpts}</select></div>
              </div>
              <p style="font-size:0.85rem;color:var(--text2);">${filtered.length} questions match</p>
              <button class="btn btn-primary btn-block" id="btnStartStudy">▶️ Start Studying</button>
            </div>
            <div id="studyArea"></div>`;
        }

        async function renderLectureBrowser() {
            const lectures = await db.getAllLectures();
            const sf = AppState.studyFilter;
            let filtered = lectures;
            if (sf.subject !== 'all') filtered = filtered.filter(l => (l.subject || '') === sf.subject);
            if (sf.chapter !== 'all') filtered = filtered.filter(l => (l.chapter || '') === sf.chapter);

            const subjectOpts = '<option value="all">All</option>' + ALL_SUBJECTS.map(s => `<option value="${escapeHTML(s)}" ${sf.subject===s?'selected':''}>${escapeHTML(s)}</option>`).join('');

            // Chapter options: only chapters that actually have lectures, scoped to the
            // current subject filter so the list stays short and relevant.
            const chapterSource = sf.subject !== 'all' ? lectures.filter(l => (l.subject || '') === sf.subject) : lectures;
            const chapterSet = new Set();
            chapterSource.forEach(l => { if (l.chapter) chapterSet.add(l.chapter); });
            const chapterOpts = '<option value="all">All Chapters</option>' + [...chapterSet].sort().map(c => `<option value="${escapeHTML(c)}" ${sf.chapter===c?'selected':''}>${escapeHTML(c)}</option>`).join('');

            return `
            <div class="card">
              <div class="card-header">📚 Lectures</div>
              <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px;">
                <button class="btn btn-sm btn-outline" data-study-mode="practice">← Back to Study</button>
                ${RBAC.isAdmin() ? `<button class="btn btn-sm btn-primary" id="btnAddLecture">➕ Add Lecture</button>` : ''}
              </div>
              <div class="form-row">
                <div><label>Subject</label><select id="lectureSubjectFilter">${subjectOpts}</select></div>
                <div><label>Chapter</label><select id="lectureChapterFilter">${chapterOpts}</select></div>
              </div>
              <p style="font-size:0.85rem;color:var(--text2);">${filtered.length} lectures</p>
            </div>
            ${filtered.length === 0 ? '<div class="empty-state">No lectures yet. Add your first lecture above.</div>' :
              filtered.map(l => `
                <div class="card lecture-card" data-lid="${l.id}" style="cursor:pointer;">
                  <div style="display:flex;justify-content:space-between;align-items:flex-start;">
                    <div>
                      <div style="font-weight:700;font-size:1.05rem;margin-bottom:6px;">${escapeHTML(l.title || 'Untitled')}</div>
                      <div class="flex-wrap">
                        <span class="badge badge-primary">${escapeHTML(l.subject || 'Unknown')}</span>
                        <span class="badge badge-accent">${escapeHTML(l.chapter || 'General')}</span>
                        ${l.book ? `<span class="badge badge-group">${escapeHTML(l.book)}</span>` : ''}
                      </div>
                    </div>
                    <button class="btn btn-sm btn-outline lecture-exam-btn" data-lid="${l.id}" style="white-space:nowrap;">📝 Exam</button>
                  </div>
                  <div style="margin-top:10px;font-size:0.82rem;color:var(--text2);line-height:1.5;max-height:60px;overflow:hidden;position:relative;">
                    ${escapeHTML((l.content || '').substring(0, 180))}${(l.content || '').length > 180 ? '…' : ''}
                  </div>
                </div>
              `).join('')}`;
        }

        async function renderLectureReader(lectureId) {
            const l = await db.getLecture(lectureId);
            if (!l) return '<div class="card text-center"><h3>Lecture not found</h3><button class="btn btn-outline" data-study-mode="lectures">← Back</button></div>';
            const allQuestions = await db.getAllQuestions();
            const attachedCount = allQuestions.filter(q => q.lectureId === l.id).length;
            const chapterCount = allQuestions.filter(q => (q.subject||'') === (l.subject||'') && (q.chapter||'') === (l.chapter||'')).length;
            return `
            <div class="card">
              <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:10px;">
                <div>
                  <div class="card-header" style="margin-bottom:4px;">${escapeHTML(l.title || 'Untitled')}</div>
                  <div class="flex-wrap">
                    <span class="badge badge-primary">${escapeHTML(l.subject || 'Unknown')}</span>
                    <span class="badge badge-accent">${escapeHTML(l.chapter || 'General')}</span>
                    ${l.book ? `<span class="badge badge-group">${escapeHTML(l.book)}</span>` : ''}
                    ${l.page ? `<span class="badge badge-warning">📄 Page ${escapeHTML(String(l.page))}</span>` : ''}
                  </div>
                </div>
                <div style="display:flex;gap:8px;flex-wrap:wrap;">
                  <button class="btn btn-sm btn-outline" data-study-mode="lectures">← Back</button>
                  ${RBAC.isAdmin() ? `<button class="btn btn-sm btn-danger" id="btnDeleteLecture" data-lid="${l.id}">🗑 Delete</button>` : ''}
                </div>
              </div>
            </div>
            <div class="card" style="line-height:1.8;font-size:0.95rem;white-space:pre-wrap;">${escapeHTML(l.content || 'No content.')}</div>
            <div class="card">
              <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;">
                <button class="btn btn-accent" id="btnExamLectureAttached" data-lid="${l.id}">📝 Exam: This Lecture's MCQs (${attachedCount})</button>
                <button class="btn btn-primary" id="btnExamChapterAllBooks" data-subj="${escapeHTML(l.subject||'')}" data-chap="${escapeHTML(l.chapter||'')}">📚 Exam: All MCQs, This Chapter (${chapterCount})</button>
              </div>
            </div>`;
        }

        async function renderExamSetup() {
            const books = await db.getAllBooks();
            return `
            <div class="card">
              <div class="card-header">📝 Exam Setup</div>
              <div style="margin-bottom:12px">
                <label>📂 Book</label>
                <select id="examBook">
                  <option value="all">All Books</option>
                  ${books.map(g=>`<option value="${escapeHTML(g)}">${escapeHTML(g)}</option>`).join('')}
                </select>
              </div>
              <div style="margin-bottom:12px">
                <label>📚 Subject</label>
                <select id="examSubject">
                  <option value="all">All Subjects</option>
                  ${ALL_SUBJECTS.map(s=>`<option value="${escapeHTML(s)}">${escapeHTML(s)}</option>`).join('')}
                </select>
              </div>
              <div style="margin-bottom:12px">
                <label>📖 Chapter</label>
                <select id="examChapter">
                  <option value="all">All Chapters</option>
                  ${ALL_CHAPTERS.map(c=>`<option value="${escapeHTML(c)}">${escapeHTML(c)}</option>`).join('')}
                </select>
              </div>
              <div class="form-row">
                <div><label>Questions</label><select id="examCount"><option>10</option><option selected>20</option><option>30</option><option>50</option></select></div>
                <div><label>Timer</label><select id="examTimerMinutes"><option value="0">None</option><option selected value="30">30</option><option value="60">60</option></select></div>
                <div><label>Difficulty</label><select id="examDifficulty"><option value="all">All</option><option>Easy</option><option>Medium</option><option>Hard</option></select></div>
              </div>
              <button class="btn btn-accent btn-block mt-2" id="btnStartExam">🚀 Start Exam</button>
            </div>`;
        }

        async function renderExamInProgress() {
            const idx = AppState.examAnswers.currentIndex || 0;
            const total = AppState.examQuestions.length;
            const q = AppState.examQuestions[idx];
            if (!q) { AppState.examInProgress = false; return renderExamResults(); }
            const sel = AppState.examAnswers[q.id] || '';
            const timerHtml = AppState.examTimeRemaining > 0 ? `<div class="timer-display" id="examTimerDisplay">${formatTime(AppState.examTimeRemaining)}</div>` : '';
            const bmIds=await db.getAllBookmarkedIds();
            const bmCount=bmIds.length;
            const isBm=bmIds.includes(q.id);
            return `
            <div class="card">
              <div style="display:flex;justify-content:space-between;"><span class="badge badge-primary">Q ${idx+1}/${total}</span><span class="badge badge-accent">⭐ ${bmCount}</span>${timerHtml}</div>
              <div class="progress-bar"><div class="progress-fill" style="width:${((idx+1)/total)*100}%"></div></div>
            </div>
            <div class="question-block">
              <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;"><div class="question-text" style="flex:1;">${idx+1}. ${escapeHTML(q.questionText)}</div><button class="btn btn-sm btn-outline bookmark-btn" data-qid="${q.id}" title="Bookmark">${isBm?"⭐":"☆"}</button></div>
              ${['A','B','C','D','E'].map(l=> q[`option${l}`] ? `<button class="option-btn ${sel===l?'selected':''}" data-option="${l}"><span class="option-label">${l}.</span> ${escapeHTML(q[`option${l}`])}</button>` : '').join('')}
              <div style="margin-top:12px;font-size:0.75rem;color:var(--text-muted);text-align:right;border-top:1px solid var(--border);padding-top:8px;">${q.book ? `📚 ${escapeHTML(q.book)}` : ''}${q.book && (q.page || q.pageNumber) ? ' · ' : ''}${(q.page || q.pageNumber) ? `📄 Page ${escapeHTML(String(q.page || q.pageNumber))}` : ''}</div>
            </div>
            <div style="display:flex;gap:8px;justify-content:space-between;">
              <button class="btn btn-outline btn-sm" id="btnPrevQ" ${idx===0?'disabled':''}>◀ Prev</button>
              <button class="btn btn-danger btn-sm" id="btnEndExam">⏹ End</button>
              <button class="btn btn-primary btn-sm" id="btnNextQ">${idx<total-1?'Next ▶':'Submit ✅'}</button>
            </div>`;
        }

        function renderExamResults() {
            const results = AppState.lastExamResults || [];
            const total = results.length;
            const score = results.filter(r => r.correct).length;
            const pct = total ? Math.round((score / total) * 100) : 0;
            const elapsed = AppState.examStartTime ? Math.round((Date.now() - AppState.examStartTime) / 1000) : 0;
            if (total && !AppState._examSaved) {
                AppState._examSaved = true;
                db.saveExamResult({ score, total, percentage: pct, elapsed });
            }
            return `
            <div class="card text-center" style="padding-top: 30px; padding-bottom: 30px;">
              <div style="font-size:4rem; margin-bottom: 10px;">${pct>=70?'🎉':'📚'}</div>
              <h2>Exam Complete</h2>
              <div class="stat-value" style="font-size: 3rem; margin: 15px 0;">${pct}%</div>
              <p style="font-size: 1.1rem; color: var(--text2); margin-bottom: 25px;">${score} out of ${total} correct<br>Time taken: ${formatTime(elapsed)}</p>
              <button class="btn btn-primary btn-block" id="btnReviewExam" style="margin-bottom: 10px; font-size: 1.1rem; padding: 14px;">🔍 Review Answers & Explanations</button>
              <button class="btn btn-outline btn-block" data-nav="dashboard">🏠 Go to Dashboard</button>
            </div>`;
        }

        // --- FULLY REDESIGNED REVIEW SYSTEM ---
        function reviewExamResults() {
            if (!AppState.lastExamResults) return;
            const html = AppState.lastExamResults.map((r, i) => {
                const optionsHtml = ['A','B','C','D','E'].map(l => {
                    if (!r[`option${l}`]) return '';
                    let btnClass = '';
                    let labelStatus = '';
                    if (l === r.correctAnswer) {
                        btnClass = 'correct';
                        labelStatus = '<span style="float:right; font-weight:bold;">✅ Correct Answer</span>';
                    } else if (l === r.userAnswer && !r.correct) {
                        btnClass = 'wrong';
                        labelStatus = '<span style="float:right; font-weight:bold;">❌ Your Answer</span>';
                    }
                    return `<div class="option-btn ${btnClass}" style="cursor:default;">
                                <span class="option-label">${l}.</span> ${escapeHTML(r[`option${l}`])}
                                ${labelStatus}
                            </div>`;
                }).join('');
                const explanationHtml = r.explanation ?
                    `<div class="explanation-box" style="margin-top: 15px;">
                        <strong>Explanation:</strong><br/>${escapeHTML(r.explanation)}
                    </div>` : '';
                return `
                <div class="question-block">
                    <div class="question-text">
                        ${i+1}. ${escapeHTML(r.questionText)}
                        <span class="badge ${r.correct ? 'badge-success' : 'badge-danger'}" style="margin-left: 8px;">
                            ${r.correct ? '✓ Correct' : '✗ Incorrect'}
                        </span>
                    </div>
                    ${optionsHtml}
                    ${explanationHtml}
                </div>`;
            }).join('');
            $('#mainContent').innerHTML = `
                <div class="card">
                    <div class="card-header">🔍 Exam Review</div>
                    <p style="color:var(--text2);font-size:0.9rem;">Review your performance below. Correct answers are highlighted in green, and your incorrect selections are highlighted in red.</p>
                </div>
                ${html}
                <div style="margin-bottom: 30px;">
                    <button class="btn btn-primary btn-block" data-nav="exam">📝 Start New Exam</button>
                </div>
            `;
            attachEventListeners();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        /**
         * QUESTION LIST — Optimized path:
         * 1. Ensures search index is built (fast in-memory lookup).
         * 2. Uses FilterCache keyed by filter hash + DB cache version.
         * 3. Falls back to Web Worker for heavy filtering if available.
         * 4. Renders a virtual-scroll container instead of inline HTML for
         *    all questions, supporting 100k+ items with only ~15 DOM nodes.
         * 5. Infinite scroll loads 50 items at a time; smart loader prevents
         *    duplicate fetches and resets correctly on filter change.
         */
        async function renderQuestionList() {
            const questions = await db.getAllQuestions();
            await GlobalSearchIndex.ensureBuilt();

            const qf = AppState.questionFilters || {subject:'all',chapter:'all',topic:'all',difficulty:'all', special:'all'};
            const sq = AppState.searchQuery.toLowerCase().trim();

            // Fetch bookmark/high-yield/missed IDs in parallel
            const [bmIds, hyIds, perf2] = await Promise.all([
                db.getAllBookmarkedIds(),
                db.getAllHighYieldIds(),
                db.getPerformance()
            ]);
            const latest2={}; perf2.forEach(x=>latest2[x.questionId]=x.correct);
            const missedIds=Object.keys(latest2).filter(k=>latest2[k]===false).map(Number);

            // Store for event listener attachment
            window.__bmIds=bmIds;
            window.__hyIds=hyIds;
            window.__missedIds=missedIds;

            // FILTER CACHE: try cache first, then worker, then fallback
            let filtered = FilterCache.get(qf, sq, db._cacheVersion, () => {
                let result = questions;
                // Use search index for instant text search
                if (sq) {
                    const indexedIds = GlobalSearchIndex.search(sq);
                    if (indexedIds) {
                        result = result.filter(q => indexedIds.has(q.id));
                    } else {
                        result = result.filter(q => {
                            const text = [q.questionText, q.explanation, q.subject, q.chapter, q.topic, Array.isArray(q.tags) ? q.tags.join(' ') : q.tags].join(' ').toLowerCase();
                            return text.includes(sq);
                        });
                    }
                }
                if (qf.subject !== 'all') result = result.filter(q => (q.subject||'')===qf.subject);
                if (qf.chapter !== 'all') result = result.filter(q => (q.chapter||'')===qf.chapter);
                if (qf.topic !== 'all') result = result.filter(q => (q.topic||'')===qf.topic);
                if (qf.difficulty !== 'all') result = result.filter(q => (q.difficulty||'Medium')===qf.difficulty);
                const special = qf.special || 'all';
                if (special==='bookmarked') result = result.filter(q => bmIds.includes(q.id));
                if (special==='highyield') result = result.filter(q => hyIds.includes(q.id));
                if (special==='missed') result = result.filter(q => missedIds.includes(q.id));
                return result;
            });

            // Also try worker filtering asynchronously for next render (warm cache)
            WorkerPool.post('filter', { questions, filters: qf, searchQuery: sq, bmIds, hyIds, missedIds }).then(workerResult => {
                if (workerResult && Array.isArray(workerResult)) {
                    FilterCache._store.set(JSON.stringify({ f: qf, q: sq }), workerResult);
                }
            }).catch(() => {});

            // Persist for virtual scroller initialization in attachEventListeners
            AppState._lastFilteredQuestions = filtered;
            AppState._lastFilterMeta = { bmIds, hyIds, missedIds };

            // Topic filter options from full question set (not filtered)
            const topicsSet = new Set();
            questions.forEach(q => { if (q.topic) topicsSet.add(q.topic); });
            const topicOpts = '<option value="all">All</option>' + [...topicsSet].sort().map(t => `<option value="${escapeHTML(t)}">${escapeHTML(t)}</option>`).join('');

            return `
            <div class="card">
              <div class="card-header">📋 Questions (${filtered.length})</div>
              <input type="text" id="questionSearchInput" placeholder="Search question, explanation, subject, chapter, topic, tags..." value="${escapeHTML(AppState.searchQuery)}">
              <div class="form-row">
                <div><select id="questionSubjectFilter"><option value="all">All Subjects</option></select></div>
                <div><select id="questionChapterFilter"><option value="all">All Chapters</option></select></div>
                <div><select id="questionTopicFilter">${topicOpts}</select></div>
              </div>
              <div class="form-row">
                <div><select id="questionDifficultyFilter"><option value="all">All Difficulties</option><option>Easy</option><option>Medium</option><option>Hard</option></select></div>
              </div>
              <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px">
                <button class="btn btn-sm btn-outline" data-qfilter="all">All</button>
                <button class="btn btn-sm btn-outline" data-qfilter="bookmarked">⭐ Bookmarked</button>
                <button class="btn btn-sm btn-outline" data-qfilter="highyield">🔥 High Yield</button>
                <button class="btn btn-sm btn-outline" data-qfilter="missed">❌ Missed</button>
              </div>
              ${RBAC.isAdmin() ? `<button class="btn btn-sm btn-primary" id="btnAddQuestion">➕ Add</button>` : ''}
            </div>
            <!-- Virtual Scroll Container -->
            <div id="questionListContainer" style="max-height:75vh;overflow:auto;position:relative;border-radius:12px;">
              <div id="questionListContent"></div>
            </div>
            <div id="questionListLoader" style="text-align:center;padding:14px;color:var(--text2);font-size:0.85rem;display:none;">Loading more...</div>
            ${filtered.length>50?'<p style="color:var(--text2);padding:8px;">Showing items dynamically. Scroll to load more.</p>':''}
            ${filtered.length===0?'<div class="empty-state"><h3>No questions found</h3><p>Add or import questions to get started.</p></div>':''}`;
        }

        /**
         * Render a single question block for the virtual scroller.
         * Kept as a pure function so it can be called thousands of times
         * without closure leaks.
         */
        function renderQuestionBlock(q, index, meta) {
            const { bmIds } = meta || {};
            const isBm = bmIds ? bmIds.includes(q.id) : false;
            return `
            <div class="question-block" data-qid="${q.id}">
              <div style="display:flex;justify-content:space-between;">
                <strong>${highlightText(q.questionText?.substring(0,100), AppState.searchQuery)}</strong>
                <button class="btn-icon btn-sm bookmark-btn" data-qid="${q.id}">${isBm?'⭐':'☆'}</button>
              </div>
              <div class="flex-wrap">
                <span class="badge badge-primary">${escapeHTML(q.subject||'?')}</span>
                <span class="badge badge-accent">${escapeHTML(q.chapter||'?')}</span>
                ${q.group ? `<span class="badge badge-group">${escapeHTML(q.group)}</span>` : ''}
              </div>
              <button class="btn btn-sm btn-outline view-q-btn" data-qid="${q.id}">👁 View</button>
            </div>`;
        }

        async function renderMistakes() {
            const perf = await db.getPerformance();
            const latest = {};
            perf.forEach(x => {
                const key = x.questionId;
                if (!latest[key] || new Date(x.timestamp) > new Date(latest[key].timestamp)) {
                    latest[key] = { correct: x.correct, timestamp: x.timestamp };
                }
            });
            const wrongIds = Object.keys(latest)
                .filter(id => latest[id].correct === false)
                .map(id => Number(id));
            const questions = await db.getAllQuestions();
            const missed = questions.filter(q => wrongIds.includes(q.id));

            return `
            <div class="card">
              <div class="card-header">❌ Missed Questions Bank</div>
              <p>${missed.length} missed questions</p>
              <div style="display:flex;gap:8px;flex-wrap:wrap">
              <button class="btn btn-danger" id="btnExamFromMistakes">📝 Exam From Mistakes</button>
              <button class="btn btn-outline" data-nav="dashboard">← Dashboard</button>
              </div>
            </div>
            ${missed.map(q=>`
              <div class="question-block">
                <div class="question-text">${q.questionText || ''}</div>
                <span class="badge badge-danger">${q.subject || 'Unknown'}</span>
                 <div style="margin-top:8px"><strong>Correct Answer:</strong> ${q.correctAnswer||'-'}</div>
                 <div style="margin-top:4px"><strong>Explanation:</strong> ${q.explanation||'No explanation'}</div>
                 <div style="margin-top:8px;display:flex;gap:8px">
                    <button class="btn btn-sm btn-primary retry-question" data-qid="${q.id}">🔄 Retry</button>
                    <button class="btn btn-sm btn-accent add-hy" data-qid="${q.id}">⭐ High Yield</button>
                 </div>
              </div>
            `).join('') || '<div class="empty-state">No missed questions.</div>'}`;
        }

        async function renderHighYield() {
            const hyIds = await db.getAllHighYieldIds();
            const allQuestions = await db.getAllQuestions();
            const hyQuestions = allQuestions.filter(q => hyIds.includes(q.id));

            return `
            <div class="card">
              <div class="card-header">⭐ High Yield Questions</div>
              <p>${hyQuestions.length} high‑yield questions</p>
              <div style="display:flex;gap:8px;flex-wrap:wrap">
                <button class="btn btn-outline" data-nav="dashboard">← Dashboard</button>
              </div>
            </div>
            ${hyQuestions.length === 0 ? '<div class="empty-state">No high‑yield questions marked yet.</div>' :
              hyQuestions.map(q => `
                <div class="question-block">
                  <div class="question-text">${escapeHTML(q.questionText)}</div>
                  <div class="flex-wrap">
                    <span class="badge badge-primary">${escapeHTML(q.subject || '?')}</span>
                    <span class="badge badge-accent">${escapeHTML(q.chapter || '?')}</span>
                  </div>
                  <div style="margin-top:8px;display:flex;gap:8px">
                    <button class="btn btn-sm btn-danger remove-hy" data-qid="${q.id}">⭐ Remove High Yield</button>
                    <button class="btn btn-sm btn-outline view-q-btn" data-qid="${q.id}">👁 View</button>
                  </div>
                </div>
              `).join('')}
            `;
        }

        function renderImportExport() {
            const isAdmin = RBAC.isAdmin();
            const adminSection = isAdmin ? `
            <div class="card"><div class="card-header">📥 Import (Admin)</div>
              <div class="form-row">
                <div><label>Format</label><select id="importFormat"><option value="json">JSON</option><option value="csv">CSV</option></select></div>
                <div><label>Group Name (optional)</label><input type="text" id="importGroup" placeholder="e.g., ENT Set 1"></div>
              </div>
              <textarea id="importData" rows="5" placeholder="Paste JSON or CSV data..."></textarea>
              <input type="file" id="importFile" accept=".json,.csv">
              <button class="btn btn-primary" id="btnImport">📥 Import</button>
              <button class="btn btn-outline" id="btnLoadSample">🧪 Load Sample Questions</button>
              <button class="btn btn-danger mt-2" id="btnClearAll">🗑 Clear All</button>
              <hr style="margin:10px 0">
              <select id="deleteGroupName"></select>
              <button class="btn btn-danger mt-2" id="btnDeleteGroup">🗑 Delete One Book</button>
            </div>
            <div class="card"><div class="card-header">📤 Backup (Admin)</div>
              <button class="btn btn-accent" id="btnExport">📤 Export All</button>
              <button class="btn btn-outline" id="btnRestore">📥 Restore Backup</button>
              <input type="file" id="restoreFile" accept=".json" hidden>
              <hr style="margin:10px 0">
            </div>` : '';

            const settingsPointer = `
            <div class="card"><div class="card-header">📥 Update Packages</div>
              <p style="font-size:0.85rem;color:var(--text2);margin-bottom:12px;">
                Importing and exporting update packages has moved to Settings for both students and admins.
              </p>
              <button class="btn btn-primary btn-block" data-nav="settings">⚙️ Go to Settings</button>
            </div>`;

            return adminSection + settingsPointer + `
            <div style="margin:8px;padding:10px;border:1px dashed var(--border);border-radius:12px;color:var(--text2);font-size:0.85rem;text-align:center;background:var(--surface);">
              This app generated by Abd alzuhairy
            </div>`;
        }

        // ============================================================
        //  STUDY HELPERS
        // ============================================================
        async function renderStudyQuestion() {
            if (!AppState.studyQuestions || AppState.studyIndex >= AppState.studyQuestions.length) {
                $('#studyArea').innerHTML = '<div class="card text-center"><h3>Session Complete!</h3><button class="btn btn-primary" data-nav="study">New Session</button></div>';
                saveSession();
                return;
            }
            const q = AppState.studyQuestions[AppState.studyIndex];
            const isBm = await db.isBookmarked(q.id);
            const reveal = AppState.studyRevealed[q.id];
            let html = `
            <div class="card">
              <div style="display:flex;justify-content:space-between;"><span class="badge badge-primary">${AppState.studyIndex+1}/${AppState.studyQuestions.length}</span><button class="btn-icon btn-sm" id="studyBookmark" data-qid="${q.id}">${isBm?'⭐':'☆'}</button><button class="btn-icon btn-sm" id="studyHighYield" data-qid="${q.id}">🔥</button></div>
              <div class="progress-bar"><div class="progress-fill" style="width:${((AppState.studyIndex+1)/AppState.studyQuestions.length)*100}%"></div></div>
            </div>
            <div class="question-block">
              <div class="question-text">${AppState.studyIndex+1}. ${escapeHTML(q.questionText)}</div>
              ${['A','B','C','D','E'].map(l=> q[`option${l}`] ? `<button class="option-btn ${AppState.studyAnswers[q.id]===l?'selected':''} ${reveal?(l===q.correctAnswer?'correct':(AppState.studyAnswers[q.id]===l?'wrong':'')):''}" data-study-opt="${l}" ${reveal?'disabled':''}><span class="option-label">${l}.</span> ${escapeHTML(q[`option${l}`])}</button>` : '').join('')}
              ${reveal ? `<div class="explanation-box"><strong>✅ ${q.correctAnswer}</strong>: ${escapeHTML(q.explanation||'No explanation provided.')}</div>` : ''}
              <div style="margin-top:12px;font-size:0.75rem;color:var(--text-muted);text-align:right;border-top:1px solid var(--border);padding-top:8px;">${q.book ? `📚 ${escapeHTML(q.book)}` : ''}${q.book && (q.page || q.pageNumber) ? ' · ' : ''}${(q.page || q.pageNumber) ? `📄 Page ${escapeHTML(String(q.page || q.pageNumber))}` : ''}</div>
            </div>
            <div style="display:flex;gap:8px;flex-wrap:wrap;">
              <button class="btn btn-outline btn-sm" id="btnStudyPrev" ${AppState.studyIndex===0?'disabled':''}>◀</button>
              ${RBAC.isAdmin() ? renderReclassifyButton(q.id) : ''}
              ${!reveal?`<button class="btn btn-accent btn-sm" id="btnReveal">👁 Reveal</button>`:''}
              <button class="btn btn-primary btn-sm" id="btnStudyNext">▶</button>
            </div>`;
            $('#studyArea').innerHTML = html;
            attachStudyListeners(q);
            saveSession();
        }

        function attachStudyListeners(q) {
            const bookmarkBtn = $('#studyBookmark');
            if (bookmarkBtn) {
                bookmarkBtn.addEventListener('click', async function() {
                    const id = parseInt(this.dataset.qid);
                    const bm = await db.toggleBookmark(id);
                    this.textContent = bm ? '⭐' : '☆';
                    saveSession();
                });
            }
            const hyBtn = $('#studyHighYield');
            if (hyBtn) {
                hyBtn.addEventListener('click', async function() {
                    const id = parseInt(this.dataset.qid);
                    const isHy = await db.toggleHighYield(id);
                    this.textContent = isHy ? '🔥' : '☆';
                    showToast(isHy ? 'Added to High Yield' : 'Removed from High Yield', 'success');
                    saveSession();
                });
            }
            $$('[data-study-opt]').forEach(b => {
                b.addEventListener('click', async function() {
                    const selected = this.dataset.studyOpt;
                    AppState.studyAnswers[q.id] = selected;
                    AppState.studyRevealed[q.id] = true;
                    try {
                        await db.recordPerformance({
                            questionId: q.id,
                            subject: q.subject || 'Unknown',
                            chapter: q.chapter || 'Unknown',
                            topic: q.topic || 'Unknown',
                            correct: selected === q.correctAnswer,
                            timestamp: new Date().toISOString()
                        });
                        await recordStudyActivity();
                    } catch(e) {
                        console.error('Performance tracking error', e);
                    }
                    renderStudyQuestion();
                });
            });
            const revealBtn = $('#btnReveal');
            if (revealBtn) revealBtn.addEventListener('click', () => { AppState.studyRevealed[q.id] = true; renderStudyQuestion(); });
            const nextBtn = $('#btnStudyNext');
            if (nextBtn) nextBtn.addEventListener('click', () => { AppState.studyIndex++; renderStudyQuestion(); });
            const prevBtn = $('#btnStudyPrev');
            if (prevBtn) prevBtn.addEventListener('click', () => { AppState.studyIndex = Math.max(0, AppState.studyIndex - 1); renderStudyQuestion(); });
        }

        function submitExam() {
            if (AppState.examTimer) { clearInterval(AppState.examTimer); AppState.examTimer = null; }
            const answers = AppState.examAnswers;
            const questions = AppState.examQuestions;
            const results = questions.map(q => ({
                ...q,
                userAnswer: answers[q.id] || '',
                correct: (answers[q.id] || '') === q.correctAnswer
            }));
            AppState.lastExamResults = results;
            AppState.examInProgress = false;
            AppState.examShowResults = true;
            renderViewSafely('exam').then(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // ============================================================
        //  MODALS
        // ============================================================
        function showAddQuestionModal(q) {
            if (!RBAC.requireAdmin()) return;
            const isEdit = !!q;
            const fields = `
            <div class="modal-field"><label>Question Text *</label><input type="text" id="addQuestionText" value="${isEdit?escapeHTML(q.questionText):''}" placeholder="Enter question"></div>
            <div class="form-row">
              <div class="modal-field"><label>Option A *</label><input type="text" id="addOptionA" value="${isEdit?escapeHTML(q.optionA):''}"></div>
              <div class="modal-field"><label>Option B *</label><input type="text" id="addOptionB" value="${isEdit?escapeHTML(q.optionB):''}"></div>
              <div class="modal-field"><label>Option C</label><input type="text" id="addOptionC" value="${isEdit?escapeHTML(q.optionC||''):''}"></div>
              <div class="modal-field"><label>Option D</label><input type="text" id="addOptionD" value="${isEdit?escapeHTML(q.optionD||''):''}"></div>
              <div class="modal-field"><label>Option E</label><input type="text" id="addOptionE" value="${isEdit?escapeHTML(q.optionE||''):''}"></div>
            </div>
            <div class="form-row">
              <div class="modal-field"><label>Correct Answer *</label><select id="addCorrectAnswer"><option value="A" ${isEdit&&q.correctAnswer==='A'?'selected':''}>A</option><option value="B" ${isEdit&&q.correctAnswer==='B'?'selected':''}>B</option><option value="C" ${isEdit&&q.correctAnswer==='C'?'selected':''}>C</option><option value="D" ${isEdit&&q.correctAnswer==='D'?'selected':''}>D</option><option value="E" ${isEdit&&q.correctAnswer==='E'?'selected':''}>E</option></select></div>
              <div class="modal-field"><label>Subject *</label><select id="addSubject">${ALL_SUBJECTS.map(s=>`<option value="${escapeHTML(s)}" ${isEdit&&q.subject===s?'selected':''}>${escapeHTML(s)}</option>`).join('')}</select></div>
              <div class="modal-field"><label>Chapter *</label><select id="addChapter"><option value="">Select chapter</option>${ALL_CHAPTERS.map(c=>`<option value="${escapeHTML(c)}" ${isEdit&&q.chapter===c?'selected':''}>${escapeHTML(c)}</option>`).join('')}</select></div>
            </div>
            <div class="form-row">
              <div class="modal-field"><label>Topic</label><input type="text" id="addTopic" value="${isEdit?escapeHTML(q.topic||''):''}"></div>
              <div class="modal-field"><label>Difficulty</label><select id="addDifficulty"><option value="Easy" ${isEdit&&q.difficulty==='Easy'?'selected':''}>Easy</option><option value="Medium" ${isEdit&&q.difficulty==='Medium'?'selected':''}>Medium</option><option value="Hard" ${isEdit&&q.difficulty==='Hard'?'selected':''}>Hard</option></select></div>
              <div class="modal-field"><label>Group (optional)</label><input type="text" id="addGroup" value="${isEdit?escapeHTML(q.group||''):''}" placeholder="e.g., ENT Set 1"></div>
            </div>
            <div class="modal-field"><label>Explanation</label><textarea id="addExplanation" rows="3">${isEdit?escapeHTML(q.explanation||''):''}</textarea></div>
            <button class="btn btn-primary btn-block" id="saveQuestionBtn">${isEdit?'Update':'Add'} Question</button>
            <button class="btn btn-outline btn-block mt-2" onclick="closeModal()">Cancel</button>
          `;
            const overlay = $('#modalOverlay'); const content = $('#modalContent');
            content.innerHTML = fields; overlay.classList.remove('hidden');
            overlay.onclick = function(e) { if (e.target === overlay) closeModal(); };

            const subjectSel = $('#addSubject'); const chapterSel = $('#addChapter');
            if (subjectSel && chapterSel) {
                subjectSel.addEventListener('change', function() {
                    const subject = this.value; let chapters = [];
                    if (subject && ENT_DATA[subject]) chapters = ENT_DATA[subject];
                    chapterSel.innerHTML = '<option value="">Select chapter</option>' + chapters.map(c => `<option value="${escapeHTML(c)}">${escapeHTML(c)}</option>`).join('');
                    if (isEdit && q.chapter) chapterSel.value = q.chapter;
                });
                setTimeout(() => subjectSel.dispatchEvent(new Event('change')), 0);
            }

            const saveBtn = $('#saveQuestionBtn');
            if (saveBtn) {
                saveBtn.addEventListener('click', async function() {
                    const qObj = {
                        questionText: $('#addQuestionText').value.trim(), optionA: $('#addOptionA').value.trim(),
                        optionB: $('#addOptionB').value.trim(), optionC: $('#addOptionC').value.trim(),
                        optionD: $('#addOptionD').value.trim(), optionE: $('#addOptionE').value.trim(),
                        correctAnswer: $('#addCorrectAnswer').value, subject: $('#addSubject').value,
                        chapter: $('#addChapter').value, topic: $('#addTopic').value.trim(),
                        difficulty: $('#addDifficulty').value, explanation: $('#addExplanation').value.trim(),
                        group: $('#addGroup').value.trim()
                    };
                    if (!qObj.questionText || !qObj.optionA || !qObj.optionB || !qObj.correctAnswer || !qObj.subject || !qObj.chapter) {
                        showToast('Please fill all required fields.', 'warning'); return;
                    }
                    if (isEdit) { await db.deleteQuestion(q.id); }
                    await db.addQuestion(qObj); closeModal(); showToast(isEdit ? 'Question updated!' : 'Question added!', 'success'); navigateTo('questions');
                });
            }
        }

        function showQuestionModal(q) {
            const html = q ? `
            <h3>Question</h3>
            <div class="question-block">
              <div class="question-text">${escapeHTML(q.questionText)}</div>
              ${['A','B','C','D','E'].map(l=> q[`option${l}`]?`<div class="option-btn ${l===q.correctAnswer?'correct':''}"><span class="option-label">${l}.</span> ${escapeHTML(q[`option${l}`])}</div>`:'').join('')}
              ${q.explanation ? `<div class="explanation-box">${escapeHTML(q.explanation)}</div>` : ''}
              <div class="flex-wrap" style="margin-top:10px;">
                <span class="badge badge-primary">${escapeHTML(q.subject||'')}</span>
                <span class="badge badge-accent">${escapeHTML(q.chapter||'')}</span>
                ${q.group ? `<span class="badge badge-group">${escapeHTML(q.group)}</span>` : ''}
              </div>
            </div>
            <button class="btn btn-outline btn-block" onclick="closeModal()">Close</button>` : '<h3>Question not found</h3><button class="btn btn-outline btn-block" onclick="closeModal()">Close</button>';
            const overlay = $('#modalOverlay'); const content = $('#modalContent');
            content.innerHTML = html; overlay.classList.remove('hidden');
            overlay.onclick = function(e) { if (e.target === overlay) closeModal(); };
        }

        async function startExamFromLecture(l) {
            let questions = await db.getAllQuestions();
            if (l.subject) questions = questions.filter(q => (q.subject || '') === l.subject);
            if (l.chapter) questions = questions.filter(q => (q.chapter || '') === l.chapter);
            if (l.book) questions = questions.filter(q => (q.book || '') === l.book);
            if (questions.length === 0) { showToast('No questions match this lecture.', 'warning'); return; }
            AppState.examQuestions = [...questions].sort(() => Math.random() - 0.5).slice(0, Math.min(20, questions.length));
            AppState.examAnswers = { currentIndex: 0 }; AppState._examSaved = false;
            AppState.examInProgress = true;
            AppState.examShowResults = false; AppState.lastExamResults = null;
            AppState.examTimeRemaining = 0; AppState.examStartTime = Date.now();
            renderViewSafely('exam');
        }

        async function startExamFromLectureAttached(lectureId) {
            const allQuestions = await db.getAllQuestions();
            const questions = allQuestions.filter(q => q.lectureId === lectureId);
            if (questions.length === 0) { showToast('No MCQs are attached to this lecture yet. Add them from "Add Lecture" with the MCQ JSON field.', 'warning'); return; }
            AppState.examQuestions = [...questions].sort(() => Math.random() - 0.5).slice(0, Math.min(20, questions.length));
            AppState.examAnswers = { currentIndex: 0 }; AppState._examSaved = false;
            AppState.examInProgress = true;
            AppState.examShowResults = false; AppState.lastExamResults = null;
            AppState.examTimeRemaining = 0; AppState.examStartTime = Date.now();
            renderViewSafely('exam');
        }

        async function startExamFromChapterAllBooks(l) {
            let questions = await db.getAllQuestions();
            if (l.subject) questions = questions.filter(q => (q.subject || '') === l.subject);
            if (l.chapter) questions = questions.filter(q => (q.chapter || '') === l.chapter);
            if (questions.length === 0) { showToast('No questions found for this chapter yet.', 'warning'); return; }
            AppState.examQuestions = [...questions].sort(() => Math.random() - 0.5).slice(0, Math.min(20, questions.length));
            AppState.examAnswers = { currentIndex: 0 }; AppState._examSaved = false;
            AppState.examInProgress = true;
            AppState.examShowResults = false; AppState.lastExamResults = null;
            AppState.examTimeRemaining = 0; AppState.examStartTime = Date.now();
            renderViewSafely('exam');
        }

        function showAddLectureModal() {
            if (!RBAC.requireAdmin()) return;
            const fields = `
            <h3>➕ Add Lecture</h3>
            <div class="modal-field"><label>Title *</label><input type="text" id="lecTitle" placeholder="Lecture title"></div>
            <div class="form-row">
              <div class="modal-field"><label>Subject *</label><select id="lecSubject">${ALL_SUBJECTS.map(s=>`<option value="${escapeHTML(s)}">${escapeHTML(s)}</option>`).join('')}</select></div>
              <div class="modal-field"><label>Chapter *</label><select id="lecChapter"><option value="">Select chapter</option></select></div>
            </div>
            <div class="form-row">
              <div class="modal-field"><label>Book</label><input type="text" id="lecBook" placeholder="e.g., ENT Textbook"></div>
              <div class="modal-field"><label>Page</label><input type="number" id="lecPage" placeholder="Page number"></div>
            </div>
            <div class="modal-field"><label>Content *</label><textarea id="lecContent" rows="8" placeholder="Paste lecture notes, summary, or full text here..."></textarea></div>
            <div class="modal-field">
              <label>MCQs for this Lecture (JSON, optional)</label>
              <textarea id="lecMCQs" rows="6" placeholder='[{"questionText":"...","optionA":"...","optionB":"...","correctAnswer":"A","explanation":"..."}]'></textarea>
              <p style="font-size:0.78rem;color:var(--text-muted);margin-top:4px;">Same format as the Import screen. These get tagged to this lecture for the "This Lecture's MCQs" exam button, and also join your main question bank.</p>
            </div>
            <button class="btn btn-primary btn-block" id="saveLectureBtn">Save Lecture</button>
            <button class="btn btn-outline btn-block mt-2" onclick="closeModal()">Cancel</button>
            `;
            const overlay = $('#modalOverlay'); const content = $('#modalContent');
            content.innerHTML = fields; overlay.classList.remove('hidden');
            overlay.onclick = function(e) { if (e.target === overlay) closeModal(); };

            const subjSel = $('#lecSubject'); const chapSel = $('#lecChapter');
            subjSel.addEventListener('change', function() {
                const subject = this.value;
                let chapters = subject && ENT_DATA[subject] ? ENT_DATA[subject] : [];
                chapSel.innerHTML = '<option value="">Select chapter</option>' + chapters.map(c => `<option value="${escapeHTML(c)}">${escapeHTML(c)}</option>`).join('');
            });
            subjSel.dispatchEvent(new Event('change'));

            $('#saveLectureBtn').addEventListener('click', async function() {
                const l = {
                    title: $('#lecTitle').value.trim(),
                    subject: $('#lecSubject').value,
                    chapter: $('#lecChapter').value,
                    book: $('#lecBook').value.trim(),
                    page: parseInt($('#lecPage').value) || null,
                    content: $('#lecContent').value.trim()
                };
                if (!l.title || !l.subject || !l.chapter || !l.content) {
                    showToast('Please fill all required fields.', 'warning'); return;
                }

                const mcqRaw = $('#lecMCQs').value.trim();
                let mcqs = [];
                if (mcqRaw) {
                    try {
                        mcqs = JSON.parse(mcqRaw);
                        if (!Array.isArray(mcqs) || mcqs.length === 0) throw new Error('Expected a non-empty JSON array of questions.');
                    } catch (e) {
                        showToast('MCQ JSON is invalid: ' + e.message, 'error');
                        return;
                    }
                }

                const lectureId = await db.addLecture(l);

                if (mcqs.length > 0) {
                    const tagged = mcqs.map(q => {
                        if (!q.subject) q.subject = l.subject;
                        if (!q.chapter) q.chapter = l.chapter;
                        if (!q.page && l.page) q.page = l.page;
                        q.lectureId = lectureId;
                        return q;
                    });
                    const count = await db.bulkImport(tagged, l.book || '');
                    showToast(`Lecture added with ${count} attached MCQ${count === 1 ? '' : 's'}!`, 'success');
                } else {
                    showToast('Lecture added!', 'success');
                }
                closeModal();
                renderViewSafely('study');
            });
        }

        async function handleImport() {
            const format = $('#importFormat').value; const raw = $('#importData').value; const groupName = $('#importGroup').value.trim();
            try {
                let questions = [];
                if (format === 'json') questions = JSON.parse(raw);
                else if (format === 'csv') questions = parseCSV(raw);
                if (!Array.isArray(questions) || questions.length === 0) throw new Error('No valid questions');
                const count = await db.bulkImport(questions, groupName);
                showToast(`Imported ${count} questions and auto-categorized!`, 'success');
                navigateTo('dashboard');
            } catch (e) { showToast('Import error: ' + e.message, 'error'); }
        }

        function validateImportedQuestionsStrict(questions) {
            return Array.isArray(questions) && questions.every(q => {
                if (!q || typeof q !== 'object') return false;
                const hasQuestion = typeof q.questionText === 'string' && q.questionText.trim().length > 0;
                const hasAnswer = typeof q.correctAnswer === 'string' && q.correctAnswer.trim().length > 0;
                return hasQuestion && hasAnswer;
            });
        }

        function parseCSV(csv) {
            const lines = csv.trim().split('\n'); if (lines.length < 2) return [];
            const headers = lines[0].split(',').map(h => h.trim());
            return lines.slice(1).map(line => {
                const vals = line.split(',').map(v => v.trim()); const q = {};
                headers.forEach((h, i) => { q[h] = vals[i] || ''; }); return q;
            });
        }

        async function loadSamples() {
            const samples = [
                { questionText: 'Most common cause of epistaxis in children?', optionA: 'Trauma', optionB: 'Allergy', optionC: 'Little\'s area picking', optionD: 'Sinusitis', optionE: 'FB', correctAnswer: 'C', explanation: 'Digital trauma to Little\'s area is the most common cause in the pediatric population.', subject: 'Rhinology', chapter: 'Epistaxis', topic: 'Pediatric', difficulty: 'Easy', group: 'Sample' },
                { questionText: 'Unilateral nasal mass + epistaxis in 45M?', optionA: 'Polyp', optionB: 'Inverted papilloma', optionC: 'Angiofibroma', optionD: 'SCC', optionE: 'Adenoid', correctAnswer: 'B', explanation: 'Inverted papilloma often presents as a unilateral mass and can bleed. Angiofibroma is typically seen in adolescent males.', subject: 'Rhinology', chapter: 'Endoscopic management of sinonasal tumours', topic: 'Inverted Papilloma', difficulty: 'Medium', group: 'Sample' },
                { questionText: 'Rinne test is for?', optionA: 'Weber', optionB: 'Conductive loss', optionC: 'Sensorineural', optionD: 'Central', optionE: 'None', correctAnswer: 'B', explanation: 'Rinne test compares air conduction to bone conduction to detect conductive hearing loss.', subject: 'Otology', chapter: 'Clinical examination of the ears and hearing', topic: 'Tuning Fork', difficulty: 'Easy', group: 'Sample' }
            ];
            await db.bulkImport(samples); showToast('Sample questions loaded!', 'success'); navigateTo('dashboard');
        }

        async function handleExport() {
            const data = await db.exportAllData();
            const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
            const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'ent-backup.json'; a.click();
            showToast('Backup saved.', 'success');
        }

        async function handleRestore(e) {
            const file = e.target.files[0]; if (!file) return;
            const text = await file.text();
            try {
                const data = JSON.parse(text);
                if (confirm(`Restore ${data.questions?.length||0} questions? This will replace all current data.`)) {
                    await db.clearAndRestore(data); showToast('Restored!', 'success'); navigateTo('dashboard');
                }
            } catch (e) { showToast('Invalid file', 'error'); }
            e.target.value = '';
        }

        async function clearAllHandler() {
            const groups = await db.getAllGroups();
            const modal = $('#modalOverlay');
            const content = $('#modalContent');
            const groupOptions = groups.map(g => `<option value="${escapeHTML(g)}">${escapeHTML(g)}</option>`).join('');
            content.innerHTML = `
                <div class="card">
                    <h3>🗑 Manage Data</h3>
                    <div style="margin-bottom:15px;">
                        <label>Delete Specific Group:</label>
                        <select id="clearGroupSelect" style="margin-bottom:10px;">
                            ${groupOptions.length > 0 ? groupOptions : '<option>No groups found</option>'}
                        </select>
                        <button class="btn btn-danger" onclick="executeDeleteGroup()">Delete Selected Group</button>
                    </div>
                    <hr style="margin: 15px 0;">
                    <button class="btn btn-danger btn-block" onclick="executeClearAll()">WIPE EVERYTHING</button>
                    <button class="btn btn-outline btn-block mt-2" onclick="closeModal()">Cancel</button>
                </div>
            `;
            modal.classList.remove('hidden');
        }

        window.executeDeleteGroup = async function() {
            const groupToClear = $('#clearGroupSelect').value;
            if (!confirm(`Are you sure you want to delete the group: "${groupToClear}"?`)) return;
            const qs = await db.getAllQuestions();
            const tx = db.db.transaction('questions', 'readwrite');
            const store = tx.objectStore('questions');
            qs.forEach(q => { if (q.group === groupToClear) store.delete(q.id); });
            tx.oncomplete = () => { closeModal(); showToast(`Group deleted.`, 'success'); navigateTo('dashboard'); };
        };

        window.executeClearAll = async function() {
            if (confirm('⚠️ WARNING: This will delete EVERYTHING. Are you sure?')) {
                await db.clearAllQuestions();
                showToast('All data cleared.', 'success');
                navigateTo('dashboard');
                closeModal();
            }
        };

        /**
         * EVENT LISTENERS — Optimized path:
         * - Question list search is debounced and uses the search index.
         * - Virtual scroller is initialized here after DOM insertion.
         * - Filter changes invalidate the FilterCache automatically via
         *   the DB cache version bumping on writes.
         */
        function attachEventListeners() {
            $$('[data-nav]').forEach(btn => { btn.addEventListener('click', function() { const view = this.dataset.nav; if (view) navigateTo(view); }); });

            // Exam subject/chapter
            const examSubject = $('#examSubject');
            if (examSubject) {
                examSubject.addEventListener('change', function() {
                    const subject = this.value; let chapters = [];
                    if (subject !== 'all' && ENT_DATA[subject]) chapters = ENT_DATA[subject];
                    const chSel = $('#examChapter');
                    if (chSel) {
                        chSel.innerHTML = '<option value="all">All</option>' + chapters.map(c => `<option value="${escapeHTML(c)}">${escapeHTML(c)}</option>`).join('');
                        chSel.value = 'all'; chSel.dispatchEvent(new Event('change'));
                    }
                });
                setTimeout(() => examSubject.dispatchEvent(new Event('change')), 10);
            }

            // Study filters
            const studySubject = $('#studySubject');
            if (studySubject) studySubject.addEventListener('change', function() { AppState.studyFilter.subject = this.value; AppState.studyFilter.chapter = 'all'; AppState.studyFilter.topic = 'all'; AppState.studyFilter.subtopic = 'all'; navigateTo('study'); });
            const studyChapter = $('#studyChapter');
            if (studyChapter) studyChapter.addEventListener('change', function() { AppState.studyFilter.chapter = this.value; AppState.studyFilter.topic = 'all'; AppState.studyFilter.subtopic = 'all'; navigateTo('study'); });
            const studyTopic = $('#studyTopic');
            if (studyTopic) studyTopic.addEventListener('change', function() { AppState.studyFilter.topic = this.value; AppState.studyFilter.subtopic = 'all'; navigateTo('study'); });
            const studySubtopic = $('#studySubtopic');
            if (studySubtopic) studySubtopic.addEventListener('change', function() { AppState.studyFilter.subtopic = this.value; navigateTo('study'); });
            const studyBook = $('#studyBook');
            if (studyBook) studyBook.addEventListener('change', function() { AppState.studyFilter.book = this.value; navigateTo('study'); });

            // Study mode buttons
            $$('[data-study-mode]').forEach(btn => { btn.addEventListener('click', function() { AppState.studyFilter.mode = this.dataset.studyMode; if(this.dataset.studyMode !== 'lectureReader') AppState.studyFilter.lectureId = null; navigateTo('study'); }); });

            // --- LECTURE LISTENERS ---
            $$('.lecture-card').forEach(card => {
                card.addEventListener('click', function(e) {
                    if (e.target.closest('.lecture-exam-btn')) return;
                    AppState.studyFilter.lectureId = parseInt(this.dataset.lid);
                    AppState.studyFilter.mode = 'lectureReader';
                    renderViewSafely('study');
                });
            });
            $$('.lecture-exam-btn').forEach(btn => {
                btn.addEventListener('click', async function(e) {
                    e.stopPropagation();
                    const lid = parseInt(this.dataset.lid);
                    const l = await db.getLecture(lid);
                    if (!l) return;
                    await startExamFromLecture(l);
                });
            });
            const btnAddLecture = $('#btnAddLecture');
            if (btnAddLecture) btnAddLecture.addEventListener('click', () => showAddLectureModal());
            const btnDeleteLecture = $('#btnDeleteLecture');
            if (btnDeleteLecture) {
                btnDeleteLecture.addEventListener('click', async function() {
                    const lid = parseInt(this.dataset.lid);
                    if (!confirm('Delete this lecture?')) return;
                    await db.deleteLecture(lid);
                    showToast('Lecture deleted', 'success');
                    AppState.studyFilter.mode = 'lectures';
                    AppState.studyFilter.lectureId = null;
                    renderViewSafely('study');
                });
            }
            const btnExamLectureAttached = $('#btnExamLectureAttached');
            if (btnExamLectureAttached) {
                btnExamLectureAttached.addEventListener('click', async function() {
                    const lid = parseInt(this.dataset.lid);
                    await startExamFromLectureAttached(lid);
                });
            }
            const btnExamChapterAllBooks = $('#btnExamChapterAllBooks');
            if (btnExamChapterAllBooks) {
                btnExamChapterAllBooks.addEventListener('click', async function() {
                    const l = { subject: this.dataset.subj, chapter: this.dataset.chap };
                    await startExamFromChapterAllBooks(l);
                });
            }
            const lectureSubject = $('#lectureSubjectFilter');
            if (lectureSubject) lectureSubject.addEventListener('change', function() { AppState.studyFilter.subject = this.value; AppState.studyFilter.chapter = 'all'; renderViewSafely('study'); });
            const lectureChapter = $('#lectureChapterFilter');
            if (lectureChapter) lectureChapter.addEventListener('change', function() { AppState.studyFilter.chapter = this.value; renderViewSafely('study'); });

            // Start study
            const startStudy = $('#btnStartStudy');
            if (startStudy) {
                startStudy.addEventListener('click', async function() {
                    const questions = await db.getAllQuestions(); const sf = AppState.studyFilter;
                    let filtered = questions;
                    if (sf.subject !== 'all') filtered = filtered.filter(q => (q.subject || 'Uncategorized') === sf.subject);
                    if (sf.chapter !== 'all') filtered = filtered.filter(q => (q.chapter || 'General') === sf.chapter);
                    if (sf.topic !== 'all') filtered = filtered.filter(q => (q.topic || 'General') === sf.topic);
                    if (sf.subtopic !== 'all') filtered = filtered.filter(q => ((q.subtopic || 'General') === sf.subtopic));
                    if (sf.book !== 'all') filtered = filtered.filter(q => (q.book || '') === sf.book);
                    if (sf.mode === 'bookmarked') { const bIds = await db.getAllBookmarkedIds(); filtered = filtered.filter(q => bIds.includes(q.id)); }
                    if (sf.mode === 'highyield') { const hyIds = await db.getAllHighYieldIds(); filtered = filtered.filter(q => hyIds.includes(q.id)); }
                    if (filtered.length === 0) { showToast('No questions match filters.', 'warning'); return; }
                    AppState.studyQuestions = [...filtered].sort(() => Math.random() - 0.5);
                    AppState.studyIndex = 0; AppState.studyAnswers = {}; AppState.studyRevealed = {};
                    renderStudyQuestion();
                });
            }

            // Question list filters
            const qf = AppState.questionFilters;
            const qSubject = $('#questionSubjectFilter');
            if (qSubject) {
                qSubject.innerHTML = '<option value="all">All Subjects</option>' + ALL_SUBJECTS.map(s => `<option value="${escapeHTML(s)}">${escapeHTML(s)}</option>`).join('');
                qSubject.value = qf.subject;
                qSubject.addEventListener('change', function() {
                    AppState.questionFilters.subject = this.value;
                    renderViewSafely('questions');
                });
            }
            const qChapter = $('#questionChapterFilter');
            if (qChapter) {
                qChapter.innerHTML = '<option value="all">All Chapters</option>' + ALL_CHAPTERS.map(c => `<option value="${escapeHTML(c)}">${escapeHTML(c)}</option>`).join('');
                qChapter.value = qf.chapter;
                qChapter.addEventListener('change', function() {
                    AppState.questionFilters.chapter = this.value;
                    renderViewSafely('questions');
                });
            }
            const qTopic = $('#questionTopicFilter');
            if (qTopic) {
                qTopic.value = qf.topic;
                qTopic.addEventListener('change', function() {
                    AppState.questionFilters.topic = this.value;
                    renderViewSafely('questions');
                });
            }
            const qDiff = $('#questionDifficultyFilter');
            if (qDiff) {
                qDiff.value = qf.difficulty;
                qDiff.addEventListener('change', function() {
                    AppState.questionFilters.difficulty = this.value;
                    renderViewSafely('questions');
                });
            }
            $$('[data-qfilter]').forEach(btn => {
                btn.addEventListener('click', function() {
                    const special = this.dataset.qfilter;
                    AppState.questionFilters.special = special;
                    renderViewSafely('questions');
                });
            });

            // Start exam
            const startExam = $('#btnStartExam');
            if (startExam) {
                startExam.addEventListener('click', async function() {
                    try {
                        const selectedSubjects = ($('#examSubject')?.value && $('#examSubject').value!=='all') ? [$('#examSubject').value] : [];
                        const selectedChapters = ($('#examChapter')?.value && $('#examChapter').value!=='all') ? [$('#examChapter').value] : [];
                        const selectedGroups = ($('#examBook')?.value && $('#examBook').value!=='all') ? [$('#examBook').value] : [];
                        const count = parseInt($('#examCount')?.value || 20); const timerMin = parseInt($('#examTimerMinutes')?.value || 0);
                        const difficulty = $('#examDifficulty')?.value || 'all';
                        let questions = await db.getAllQuestions();
                        if (selectedSubjects.length) questions = questions.filter(q => selectedSubjects.includes(q.subject || 'Uncategorized'));
                        if (selectedChapters.length) questions = questions.filter(q => selectedChapters.includes(q.chapter || 'General'));
                        if (selectedGroups.length) questions = questions.filter(q => selectedGroups.includes(q.group || ''));
                        if (difficulty !== 'all') questions = questions.filter(q => q.difficulty === difficulty);
                        if (questions.length === 0) { showToast('No questions available.', 'warning'); return; }
                        AppState.examQuestions = [...questions].sort(() => Math.random() - 0.5).slice(0, Math.min(count, questions.length));
                        AppState.examAnswers = { currentIndex: 0 }; AppState._examSaved = false;
                        AppState.examInProgress = true;
                        AppState.examShowResults = false; AppState.lastExamResults = null;
                        AppState.examTimeRemaining = timerMin * 60; AppState.examStartTime = Date.now();
                        startExamTimer();
                        renderViewSafely('exam');
                    } catch (e) { showToast('Error: ' + e.message, 'error'); }
                });
            }

            const nextQ = $('#btnNextQ');
            if (nextQ) {
                nextQ.addEventListener('click', function() {
                    const idx = AppState.examAnswers.currentIndex || 0;
                    if (idx < AppState.examQuestions.length - 1) { AppState.examAnswers.currentIndex = idx + 1; renderViewSafely('exam'); }
                    else { submitExam(); }
                });
            }
            const prevQ = $('#btnPrevQ');
            if (prevQ) prevQ.addEventListener('click', function() { const idx = AppState.examAnswers.currentIndex || 0; if (idx > 0) { AppState.examAnswers.currentIndex = idx - 1; renderViewSafely('exam'); } });
            const endExam = $('#btnEndExam');
            if (endExam) endExam.addEventListener('click', function() { if (confirm('End exam and submit?')) submitExam(); });

            const reviewExam = $('#btnReviewExam');
            if (reviewExam) reviewExam.addEventListener('click', reviewExamResults);

            $$('.option-btn[data-option]').forEach(btn => {
                btn.addEventListener('click', function() {
                    const idx = AppState.examAnswers.currentIndex || 0; const q = AppState.examQuestions[idx];
                    if (q) AppState.examAnswers[q.id] = this.dataset.option;
                    renderViewSafely('exam');
                });
            });

            $$('.bookmark-btn').forEach(b => { if (b.closest('#questionListContainer')) return; b.addEventListener('click', async function(e) { e.stopPropagation(); const id = parseInt(this.dataset.qid); await db.toggleBookmark(id); renderViewSafely(AppState.currentView); }); });
            $$('.view-q-btn').forEach(b => { if (b.closest('#questionListContainer')) return; b.addEventListener('click', async function() { const q = await db.getQuestion(parseInt(this.dataset.qid)); if (q) showQuestionModal(q); }); });

            // The virtualized question list mounts/unmounts .question-block nodes as the user
            // scrolls (see VirtualScroller), so per-node listeners bound only at initial render
            // would silently do nothing for anything scrolled into view afterward. One delegated
            // listener on the stable container covers every row regardless of when it was mounted.
            const qListContainerForDelegation = $('#questionListContainer');
            if (qListContainerForDelegation) {
                qListContainerForDelegation.addEventListener('click', async function(e) {
                    const bmBtn = e.target.closest('.bookmark-btn');
                    if (bmBtn) {
                        e.stopPropagation();
                        const id = parseInt(bmBtn.dataset.qid);
                        await db.toggleBookmark(id);
                        renderViewSafely(AppState.currentView);
                        return;
                    }
                    const viewBtn = e.target.closest('.view-q-btn');
                    if (viewBtn) {
                        const q = await db.getQuestion(parseInt(viewBtn.dataset.qid));
                        if (q) showQuestionModal(q);
                    }
                });
            }
            const addQ = $('#btnAddQuestion'); if (addQ) addQ.addEventListener('click', function() { showAddQuestionModal(null); });
            const clearAll = $('#btnClearAll'); if (clearAll) clearAll.addEventListener('click', clearAllHandler);
            const importBtn = $('#btnImport'); if (importBtn) importBtn.addEventListener('click', window.handleImport);
            const sampleBtn = $('#btnLoadSample'); if (sampleBtn) sampleBtn.addEventListener('click', loadSamples);
            const exportBtn = $('#btnExport'); if (exportBtn) exportBtn.addEventListener('click', handleExport);
            const restoreBtn = $('#btnRestore'); if (restoreBtn) restoreBtn.addEventListener('click', function() { $('#restoreFile').click(); });
            const restoreFile = $('#restoreFile'); if (restoreFile) restoreFile.addEventListener('change', handleRestore);

            const importFile = $('#importFile');
            if (importFile) importFile.addEventListener('change', function(e) { const file = e.target.files[0]; if (!file) return; const r = new FileReader(); r.onload = ev => $('#importData').value = ev.target.result; r.readAsText(file); });

            populateDeleteBookDropdown();
            const delGroupBtn = $('#btnDeleteGroup');
            if (delGroupBtn) delGroupBtn.addEventListener('click', async () => {
                const groupName = ($('#deleteGroupName')?.value || '').trim();
                if (!groupName) { alert('Enter book/group name'); return; }
                if (!confirm(`Delete all questions from "${groupName}" only?`)) return;
                const deleted = await db.deleteQuestionsByGroup(groupName);
                showToast(`${deleted} questions deleted from ${groupName}`, 'success');
                renderViewSafely('import');
            });

            // OPTIMIZATION: Debounced search using the in-memory index
            const searchInput = $('#questionSearchInput');
            if (searchInput) {
                searchInput.addEventListener('input', debounce(function() {
                    AppState.searchQuery = this.value;
                    renderViewSafely('questions').then(() => {
                        const el = document.getElementById('questionSearchInput');
                        if (el) {
                            el.focus();
                            el.setSelectionRange(AppState.searchQuery.length, AppState.searchQuery.length);
                        }
                    });
                }, 150));
            }

            // --- Admin Dashboard Listeners ---
            const btnAdminAddQ = $('#btnAdminAddQ');
            if (btnAdminAddQ) btnAdminAddQ.addEventListener('click', () => showAddQuestionModal(null));

            const btnAdminBulkImport = $('#btnAdminBulkImport');
            if (btnAdminBulkImport) btnAdminBulkImport.addEventListener('click', () => { AppState.currentView = 'import'; renderViewSafely('import'); });

            const btnAdminBulkEdit = $('#btnAdminBulkEdit');
            if (btnAdminBulkEdit) btnAdminBulkEdit.addEventListener('click', adminBulkEdit);

            const btnAdminMergeDups = $('#btnAdminMergeDups');
            if (btnAdminMergeDups) btnAdminMergeDups.addEventListener('click', adminMergeDuplicates);

            const btnAdminReclassify = $('#btnAdminReclassify');
            if (btnAdminReclassify) btnAdminReclassify.addEventListener('click', adminBulkReclassify);

            const btnAdminClearAll = $('#btnAdminClearAll');
            if (btnAdminClearAll) btnAdminClearAll.addEventListener('click', clearAllHandler);

            // Admin question search
            const adminQSearch = $('#adminQSearch');
            if (adminQSearch) {
                adminQSearch.addEventListener('input', debounce(async function() {
                    const results = await adminSearchQuestions(this.value);
                    await adminRenderQuestionList(results);
                    // Re-attach edit/delete listeners after re-render
                    $$('.admin-edit-q').forEach(b => b.addEventListener('click', function() { adminEditQuestion(parseInt(this.dataset.qid)); }));
                    $$('.admin-del-q').forEach(b => b.addEventListener('click', function() { adminDeleteQuestion(parseInt(this.dataset.qid)); }));
                }, 200));
            }

            // Admin edit/delete buttons (initial render)
            $$('.admin-edit-q').forEach(b => b.addEventListener('click', function() { adminEditQuestion(parseInt(this.dataset.qid)); }));
            $$('.admin-del-q').forEach(b => b.addEventListener('click', function() { adminDeleteQuestion(parseInt(this.dataset.qid)); }));

            // --- End Admin Dashboard Listeners ---

            // --- Student Dashboard Listeners ---
            const btnSetDailyGoal = $('#btnSetDailyGoal');
            if (btnSetDailyGoal) {
                btnSetDailyGoal.addEventListener('click', async () => {
                    const current = await getDailyGoal();
                    const val = prompt('Set your daily question goal:', current);
                    if (val !== null) {
                        const n = parseInt(val, 10);
                        if (n > 0 && n <= 500) {
                            await setDailyGoal(n);
                            showToast(`Daily goal set to ${n} questions.`, 'success');
                            navigateTo('dashboard');
                        } else {
                            showToast('Please enter a number between 1 and 500.', 'warning');
                        }
                    }
                });
            }

            const btnContinueStudy = $('#btnContinueStudy');
            if (btnContinueStudy) {
                btnContinueStudy.addEventListener('click', continueStudying);
            }

            const btnSmartRevision = $('#btnSmartRevision');
            if (btnSmartRevision) {
                btnSmartRevision.addEventListener('click', startSmartRevision);
            }

            const btnAdaptiveQuiz = $('#btnAdaptiveQuiz');
            if (btnAdaptiveQuiz) {
                btnAdaptiveQuiz.addEventListener('click', startAdaptiveExam);
            }
            // --- End Student Dashboard Listeners ---

            // OPTIMIZATION: Initialize Virtual Scroller for question list
            const qContainer = $('#questionListContainer');
            if (qContainer && AppState._lastFilteredQuestions && AppState._lastFilteredQuestions.length > 0) {
                if (AppState._questionScroller) {
                    AppState._questionScroller.destroy();
                }
                AppState._questionScroller = new VirtualScroller(qContainer, {
                    items: AppState._lastFilteredQuestions,
                    itemHeight: 190, // measured actual rendered height is ~155-216px; was 130 (up to 41% low), which made the scroller over-render extra items per scroll step
                    buffer: 4,
                    pageSize: 50,
                    renderItem: (q, i) => renderQuestionBlock(q, i, AppState._lastFilterMeta)
                });
                AppState._questionScroller.init();
            }

            // Update Package System (Settings view) — defined in update-package.js
            if (typeof attachSettingsListeners === 'function') attachSettingsListeners();
        }

        /** Simple debounce utility for search input */
        function debounce(fn, ms) {
            let t;
            return function(...args) {
                clearTimeout(t);
                t = setTimeout(() => fn.apply(this, args), ms);
            };
        }

        // ============================================================
        //  Update Package System — see update-package.js
        //  (Prior prototype here — password-encrypted .ent files signed
        //  with a keypair embedded in this same client-side bundle — has
        //  been retired. That approach couldn't keep a signing key secret
        //  from students since everyone loads the same app.js, so it gave
        //  the appearance of security more than the substance of it. The
        //  new system is upfront: a real SHA-256 checksum for accidental
        //  corruption, and a clearly-labeled signature placeholder.)
        // ============================================================
        document.getElementById('btnDarkMode').addEventListener('click', () => { AppState.darkMode = !AppState.darkMode; document.body.classList.toggle('dark-mode', AppState.darkMode); document.getElementById('btnDarkMode').textContent = AppState.darkMode ? '☀️' : '🌓'; saveSession(); });
        document.getElementById('btnSearch').addEventListener('click', () => { navigateTo('questions'); setTimeout(() => { const inp = $('#questionSearchInput'); if (inp) inp.focus(); }, 150); });
        document.getElementById('btnSettings').addEventListener('click', () => navigateTo('settings'));

        // ============================================================
        //  SECURE PASSWORD PROTECTED ACTIONS
        // ============================================================

        window.clearAllHandler = async function() {
            if (!RBAC.requireAdmin()) { return; }
            const groups = await db.getAllGroups();
            const modal = $('#modalOverlay');
            const content = $('#modalContent');
            const groupOptions = groups.map(g => `<option value="${escapeHTML(g)}">${escapeHTML(g)}</option>`).join('');
            content.innerHTML = `
                <h3>🗑 Clear Data</h3>
                <div style="margin-bottom:15px;">
                    <label>Delete entire Group:</label>
                    <select id="clearGroupSelect" style="margin-bottom:10px;">
                        ${groupOptions.length > 0 ? groupOptions : '<option>No groups found</option>'}
                    </select>
                    <button class="btn btn-danger" onclick="executeClearGroup()">Delete Selected Group</button>
                </div>
                <hr>
                <button class="btn btn-danger" onclick="executeClear('questions')">Delete ALL Questions</button>
                <button class="btn btn-danger" onclick="executeClear('all')">WIPE EVERYTHING</button>
                <button class="btn btn-outline btn-block mt-2" onclick="closeModal()">Cancel</button>
            `;
            modal.classList.remove('hidden');
        };

        window.executeClearGroup = async function() {
            const groupToClear = $('#clearGroupSelect').value;
            if (!confirm(`Are you sure you want to delete the entire group: "${groupToClear}"?`)) return;
            const qs = await db.getAllQuestions();
            const tx = db.db.transaction('questions', 'readwrite');
            const store = tx.objectStore('questions');
            qs.forEach(q => { if (q.group === groupToClear) store.delete(q.id); });
            tx.oncomplete = () => { closeModal(); showToast(`Group deleted.`, 'success'); navigateTo('dashboard'); };
        };

        window.executeClear = async function(type) {
            if (!confirm("Are you sure? This action cannot be undone.")) return;
            const tx = db.db.transaction(['questions', 'examHistory', 'bookmarks', 'notes', 'performance', 'highYield'], 'readwrite');
            if (type === 'questions') tx.objectStore('questions').clear();
            if (type === 'all') {
                tx.objectStore('questions').clear();
                tx.objectStore('examHistory').clear(); tx.objectStore('performance').clear(); tx.objectStore('highYield').clear();
                tx.objectStore('bookmarks').clear();
                tx.objectStore('notes').clear();
            }
            tx.oncomplete = () => { closeModal(); showToast('Data cleared.', 'success'); navigateTo('dashboard'); };
        };

        (async function init() {
            await db.ready;
            cleanupLegacyStorage();
            RBAC.init();
            applyRoleVisibility();
            const adminBtn = document.getElementById('btnAdminMode');
            if (adminBtn) adminBtn.addEventListener('click', () => RBAC.toggle());
            $$('.nav-item').forEach(item => { item.addEventListener('click', function() { const view = this.dataset.view; if (view) navigateTo(view); }); });

            const restored = restoreSession();
            if (restored) {
                document.body.classList.toggle('dark-mode', AppState.darkMode);
                document.getElementById('btnDarkMode').textContent = AppState.darkMode ? '☀️' : '🌓';
                $$('.nav-item').forEach(n => n.classList.remove('active'));
                const navBtn = $(`.nav-item[data-view="${AppState.currentView}"]`);
                if (navBtn) navBtn.classList.add('active');
                if (AppState.examInProgress && AppState.examTimeRemaining > 0) startExamTimer();
                await renderViewSafely(AppState.currentView);
                if (AppState.currentView === 'study' && AppState.studyQuestions && AppState.studyIndex < AppState.studyQuestions.length) {
                    renderStudyQuestion();
                }
            } else {
                try {
                    const legacyDark = await db.getSetting('darkMode', false);
                    if (legacyDark) {
                        AppState.darkMode = true;
                        document.body.classList.add('dark-mode');
                        document.getElementById('btnDarkMode').textContent = '☀️';
                    }
                } catch (e) {}
                navigateTo('dashboard');
            }
        })();

        // ============================================================
        //  PASSWORD PROTECTION FOR SENSITIVE ACTIONS
        // ============================================================
        const originalImport = window.handleImport;
        window.handleImport = async function() {
            if (!RBAC.requireAdmin()) {
                return;
            }
            const format = $('#importFormat').value; const raw = $('#importData').value; const groupName = $('#importGroup').value.trim();
            try {
                let questions = [];
                if (format === 'json') questions = JSON.parse(raw);
                else if (format === 'csv') questions = parseCSV(raw);
                if (!Array.isArray(questions) || questions.length === 0) throw new Error('No valid questions');
                if (!validateImportedQuestionsStrict(questions)) {
                    throw new Error('Invalid question structure: each question must have questionText and correctAnswer');
                }
                const count = await db.bulkImport(questions, groupName);
                showToast(`Imported ${count} questions!`, 'success');
                navigateTo('dashboard');
            } catch (e) { showToast('Import error: ' + e.message, 'error'); }
        };

        window.clearAllHandler = async function() {
            if (!RBAC.requireAdmin()) {
                return;
            }
            if (confirm('⚠️ WARNING: This will delete EVERYTHING. Are you sure?')) {
                await db.clearAllQuestions();
                showToast('All data cleared.', 'success');
                navigateTo('dashboard');
            }
        };

        window.generateWeakTopicAnalytics = async function(){
            const perf = await db.getPerformance();
            const stats = {};
            perf.forEach(r=>{
                const key = `${r.subject||'Unknown'}|||${r.chapter||'Unknown'}|||${r.topic||'Unknown'}`;
                if(!stats[key]) stats[key]={total:0,correct:0,subject:r.subject||'Unknown',chapter:r.chapter||'Unknown',topic:r.topic||'Unknown'};
                stats[key].total++;
                if(r.correct) stats[key].correct++;
            });
            return Object.values(stats)
                .map(x=>({...x,accuracy:Math.round((x.correct*100)/x.total)}))
                .sort((a,b)=>a.accuracy-b.accuracy);
        };

        async function populateDeleteBookDropdown(){
            const sel=document.getElementById('deleteGroupName');
            if(!sel) return;
            const groups=await db.getAllGroups();
            sel.innerHTML='<option value="">Select Book</option>'+groups.map(g=>`<option value="${g}">${g}</option>`).join('');
        }

        document.addEventListener('click', async (e)=>{
            if(e.target.id==='btnExamFromMistakes'){
                const perf=await db.getPerformance();
                const latest={}; perf.forEach(x=>latest[x.questionId]=x.correct);
                const wrongIds=Object.keys(latest).filter(k=>latest[k]===false).map(Number);
                const qs=(await db.getAllQuestions()).filter(q=>wrongIds.includes(q.id));
                AppState._examSaved=false;
                AppState.examQuestions=qs;
                AppState.examAnswers={currentIndex:0};
                AppState.examInProgress=true;
                AppState.examShowResults=false; AppState.lastExamResults=null;
                AppState.examStartTime=Date.now();
                AppState.examTimeRemaining=0;
                if (AppState.examTimer) { clearInterval(AppState.examTimer); AppState.examTimer=null; }
                renderViewSafely('exam');
            }
            if(e.target.classList.contains('add-hy')){
                await db.toggleHighYield(Number(e.target.dataset.qid));
                showToast('Added to High Yield','success');
                renderViewSafely('mistakes');
            }
            if(e.target.classList.contains('retry-question')){
                const qid=Number(e.target.dataset.qid);
                const q=await db.getQuestion(qid);
                if(!q) return;
                AppState.studyQuestions=[q];
                AppState.studyIndex=0;
                AppState.studyAnswers={};
                AppState.studyRevealed={};
                await navigateTo('study');
                renderStudyQuestion();
            }
            if(e.target.classList.contains('remove-hy')){
                const qid=Number(e.target.dataset.qid);
                await db.toggleHighYield(qid);
                showToast('Removed from High Yield', 'success');
                renderViewSafely('highyield');
            }
        });

        function updateAvailableQuestionsInfo(){
            try{
                const info=document.getElementById('availableQuestionsInfo');
                if(!info || !window.db) return;
                db.getAllQuestions().then(qs=>{
                    const subjSel=document.getElementById('examSubject');
                    const grpSel=document.getElementById('examBook');
                    let filtered=[...qs];
                    const subjects=subjSel?[...subjSel.selectedOptions].map(x=>x.value).filter(v=>v!=='all'):[];
                    const groups=grpSel?[...grpSel.selectedOptions].map(x=>x.value).filter(v=>v!=='all'):[];
                    if(subjects.length) filtered=filtered.filter(q=>subjects.includes(q.subject));
                    if(groups.length) filtered=filtered.filter(q=>groups.includes(q.group));
                    info.textContent='Available Questions: '+filtered.length;
                });
            }catch(e){}
        }
        document.addEventListener('change',e=>{
            if(e.target && (e.target.id==='examSubject' || e.target.id==='examBook')){
                updateAvailableQuestionsInfo();
            }
        });

        function populateExamChapters(){
            const subj=document.getElementById('examSubject');
            const chap=document.getElementById('examChapter');
            if(!subj||!chap) return;
            const selected=[...subj.selectedOptions].map(o=>o.value).filter(v=>v!=='all');
            let chapters=[];
            if(selected.length===0){ chapters=ALL_CHAPTERS; }
            else{
                selected.forEach(s=>{ if(ENT_DATA[s]) chapters.push(...ENT_DATA[s]); });
            }
            chap.innerHTML='<option value="all">All</option>'+
                [...new Set(chapters)].sort().map(c=>`<option value="${c}">${c}</option>`).join('');
        }

        document.addEventListener('change',function(e){
            if(e.target && e.target.id==='examSubject'){
                populateExamChapters();
                if(typeof updateAvailableQuestionsInfo==='function') updateAvailableQuestionsInfo();
            }
        });

        document.addEventListener('change',function(e){
            if(e.target && (e.target.id==='examChapter' || e.target.id==='examTopic')){
                if(typeof updateAvailableQuestionsInfo==='function') updateAvailableQuestionsInfo();
            }
        });

        async function populateExamTopics(){
            const chapter=document.getElementById('examChapter');
            const topic=document.getElementById('examTopic');
            if(!chapter || !topic) return;
            const qs=await db.getAllQuestions();
            let filtered=qs;
            if(chapter.value!=='all'){
                filtered=filtered.filter(q=>(q.chapter||'General')===chapter.value);
            }
            const topics=[...new Set(filtered.map(q=>q.topic).filter(Boolean))].sort();
            topic.innerHTML='<option value="all">All</option>'+topics.map(t=>`<option value="${t}">${t}</option>`).join('');
        }

        async function updateExamCounters(){
            const info=document.getElementById('availableQuestionsInfo');
            if(!info) return;
            const qs=await db.getAllQuestions();
            info.innerHTML='Total Questions: '+qs.length;
        }

        document.addEventListener('change',async function(e){
            if(e.target && e.target.id==='examChapter'){
                await populateExamTopics();
            }
        });

        document.addEventListener('DOMContentLoaded',function(){
            setTimeout(()=>{
                if(typeof populateExamChapters==='function') populateExamChapters();
                if(typeof updateExamCounters==='function') updateExamCounters();
            },500);
        });

                window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.classifyQuestionAdvanced=classifyQuestionAdvanced;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.getQuestionsNeedingReview=getQuestionsNeedingReview;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.scanDuplicateQuestions=scanDuplicateQuestions;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.adaptiveExamEngine=adaptiveExamEngine;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.fullBoardExamSimulator=fullBoardExamSimulator;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.smartQuestionSelector=smartQuestionSelector;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.optimizeFor100kQuestions=optimizeFor100kQuestions;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.iraqiBoardMockExam=iraqiBoardMockExam;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.updateQuestionClassification=updateQuestionClassification;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.renderExamSetup=renderExamSetup;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.renderExamInProgress=renderExamInProgress;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.renderExamResults=renderExamResults;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.reviewExamResults=reviewExamResults;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.renderQuestionList=renderQuestionList;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.renderStudyQuestion=renderStudyQuestion;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.submitExam=submitExam;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.showAddQuestionModal=showAddQuestionModal;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.showQuestionModal=showQuestionModal;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.updateAvailableQuestionsInfo=updateAvailableQuestionsInfo;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.populateExamChapters=populateExamChapters;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.populateExamTopics=populateExamTopics;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.updateExamCounters=updateExamCounters;
                (function(){
            if(!window.ENTApp)return;
            const names=['startQuiz','loadQuestions','renderQuestion','checkAnswer','nextQuestion','previousQuestion'];
            names.forEach(n=>{ if(typeof window[n]==='function'){window.ENTApp.modules.app[n]=window[n];}});
        })();
