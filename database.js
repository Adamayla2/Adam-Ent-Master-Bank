
window.ENTApp=window.ENTApp||{};
window.ENTApp.db=(function(){
 const KEY='ent_questions';
 let questions=[];
 function loadQuestions(){try{questions=JSON.parse(localStorage.getItem(KEY)||'[]')}catch(e){questions=[]} return questions;}
 function save(){localStorage.setItem(KEY,JSON.stringify(questions));}
 function getQuestions(){return questions;}
 function updateQuestion(id,data){
  const i=questions.findIndex(q=>String(q.id)===String(id));
  if(i<0) return false;
  questions[i]={...questions[i],...data,updatedAt:Date.now()};
  save();
  document.dispatchEvent(new CustomEvent('questionsUpdated',{detail:questions[i]}));
  return true;
 }
 loadQuestions();
 return {ready:true,loadQuestions,getQuestions,updateQuestion};
})();

// STEP53
window.ENTApp=window.ENTApp||{};window.ENTApp.db=window.ENTApp.db||{};window.ENTApp.db.findQuestion=function(id){return (this.getQuestions?this.getQuestions():[]).find(q=>String(q.id)===String(id));};window.ENTApp.db.removeQuestion=function(id){let a=this.getQuestions?this.getQuestions():[];a=a.filter(q=>String(q.id)!==String(id));localStorage.setItem('ent_questions',JSON.stringify(a));document.dispatchEvent(new CustomEvent('questionsUpdated'));};