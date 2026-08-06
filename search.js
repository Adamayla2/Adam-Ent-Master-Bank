
// Step70 fallback
window.safeIncludes=(a,b)=>String(a||'').toLowerCase().includes(String(b||'').toLowerCase());
window.ENTApp=window.ENTApp||{};window.ENTApp.search={find(q){return []}};

// Step54 DB integration
window.ENTApp=window.ENTApp||{};
window.ENTApp.search=window.ENTApp.search||{};
window.ENTApp.search.getQuestions=function(){
 if(window.ENTApp.db&&window.ENTApp.db.getQuestions) return window.ENTApp.db.getQuestions();
 return window.questions||[];
};
window.ENTApp.search.search=function(term){
 term=(term||'').toLowerCase();
 return window.ENTApp.search.getQuestions().filter(q=>JSON.stringify(q).toLowerCase().includes(term));
};
window.addEventListener('questionsUpdated',()=>{document.dispatchEvent(new CustomEvent('searchIndexChanged'));});
