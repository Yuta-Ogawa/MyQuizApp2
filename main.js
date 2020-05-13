'use strict';

// ①問題文と選択肢を用意する
// ②選択肢と問題文をブラウザに表示させる
// ③選択肢をシャッフルさせる。おおもとの選択肢の順番はもとのままにする
// ④クイズに関しては、関数にまとめる。その関数を呼び出す
// ⑤選択肢をクリックしたら、正誤判定ができるようにする
// ⑥一度だけ回答できるようにする
// ⑦ボタンをクリックしたら次の問題が出るようにする
// ⑧前回の選択肢を消去する
// ⑨回答中はボタンが押せないようにする
// ⑩最後の問題を回答するとき、ボタンのテキストを変更する
// ⑪スコアを別ウインドウから表示できるようにする

const question = document.getElementById('question');
const choices = document.getElementById('choices');
const btn = document.getElementById('btn');
const result = document.getElementById('result');
const scoreLabel = document.querySelector('#result > p');

const quizSet = [
  {q: 'what is a', c: ['a1', 'a2', 'a3']},
  {q: 'what is b', c: ['b1', 'a2', 'a3']},
  {q: 'what is c', c: ['c1', 'a2', 'a3']}
];

let currentNum = 0;
let isAnswered;
let score = 0;

function shuffle (arr) {
  for(let i = arr.length-1; i> 0; i--){
    let j = Math.floor(Math.random() * (i+1));
    [arr[j], arr[i]] = [arr[i], arr[j]];
  }
  return arr;
}

function setQuiz() {

  while(choices.firstChild) {
    choices.removeChild(choices.firstChild);
  }
  isAnswered = false;

  question.textContent = quizSet[currentNum].q;
  
  const shuffledChoices = shuffle([...quizSet[currentNum].c]);
  shuffledChoices.forEach(choice => {
    const li = document.createElement('li');
    li.textContent = choice;
    li.addEventListener('click', () => {
      if(isAnswered) {
        return;
      }
  isAnswered = true;
if(choice === quizSet[currentNum].c[0]) {
  li.classList.add('correct');
  score++;
}else {
  li.classList.add('wrong');
}
btn.classList.remove('disabled');
});
choices.appendChild(li);

if(currentNum === quizSet.length-1) {
  btn.textContent = 'show score';
}
});

}

setQuiz();

btn.addEventListener('click', ()=> {
    if(isAnswered === false) {
      return;
    }
  isAnswered = false;
  btn.classList.add('disabled');
  if(currentNum ===quizSet.length-1) {
    result.classList.remove('hidden');
    scoreLabel.textContent = `score ${score}/ ${quizSet.length}`;
  }else {
    currentNum++;
    setQuiz();

  }
});






























// const question = document.getElementById('question');
// const choices = document.getElementById('choices');
// const btn = document.getElementById('btn');
// const result = document.getElementById('result');
// const scoreLabel = document.querySelector('#result > p');

// const quizSet = [
//   {q: 'what is a', c: ['a1', 'a2', 'a3']},
//   {q: 'what is b', c: ['b1', 'a2', 'a3']},
//   {q: 'what is c', c: ['c1', 'a2', 'a3']},
// ];

// let currentNum = 0;
// let isAnswered;
// let score = 0;


// function shuffle(arr) {
  
//   for (let i = arr.length-1;i > 0; i-- ) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [arr[j], arr[i]] = [arr[i], arr[j]];
//   }
//   return arr;
// }

// function checkAnswer(li) {
//   if(isAnswered) {
//     return;
//   }
//   isAnswered = true;
//   if(li.textContent === quizSet[currentNum].c[0]) {
//     li.classList.add('correct');
//     score++;
//   }else {
//     li.classList.add('wrong');
//   }
//   btn.classList.remove('disabled');
// }

// function setQuiz() {
//   isAnswered = false;
//   question.textContent = quizSet[currentNum].q;

//   while(choices.firstChild) {
//     choices.removeChild(choices.firstChild);
//   }
// const shuffledChoices = shuffle([...quizSet[currentNum].c]);
// shuffledChoices.forEach(choice => {
// const li = document.createElement('li');
// li.textContent = choice;
// li.addEventListener('click', () => {
// checkAnswer(li);
// });
// choices.appendChild(li);
// });
// if(currentNum === quizSet.length-1) {
//   btn.textContent = 'show score';
// }

// }

// function showResult() {
//   result.classList.remove('hidden');
//   scoreLabel.textContent = `score ${score}/ ${quizSet.length}`;
// }

// setQuiz();

// btn.addEventListener('click', () => {
//   if(btn.classList.contains('disabled')) {
//     return;
//   }
//   btn.classList.add('disabled');
//   if(currentNum === quizSet.length-1) {
//     showResult();
//   }else {
//     currentNum++;
//     setQuiz();
//   }
// });






































// const btn = document.getElementById('question');
// const btn = document.getElementById('btn');
// const choices = document.getElementById('choices');
// const result = document.getElementById('result');
// const scoreLabel = document.querySelector('#result > p');

// const quizSet=[
//   {q: 'what is a', c: ['a1', 'a2', 'a3']},
//   {q: 'what is b', c: ['a1', 'a2', 'a3']},
//   {q: 'what is c', c: ['a1', 'a2', 'a3']},
// ];

// let currentNum = 0;
// let isAnswered;
// let score = 0;



// function shuffle(arr) {
//   for(let i = arr.length-1;i> 0; i--){
//     const j = Math.floor(Math.random() * (i+1));
//     [arr[j], arr[i]] = [arr[i], arr[j]]
//   }
  
//   return arr;
// }

// function checkAnswer(li) {
//   if(isAnswered === true) {
//     return;
//   }
//   isAnswered = true;
//   if (li.textContent === quizSet[currentNum].c[0]) {
//     li.classList.add('correct');
//     score++;
//   }else {
//     li.classList.add('wrong');
//   }
//   btn.classList.remove('disabled');
// }

// function setQuiz() {
//   isAnswered = false;
//   question.textContent = quizSet[currentNum].q;

//   while(choices.firstChild){
//     choices.removeChild(choices.firstChild);
//   }

// const shuffledChoices = shuffle([...quizSet[currentNum].c]);
// shuffledChoices.forEach(choice => {
// const li = document.createElement('li');
// li.textContent = choice;
// li.addEventListener('click', () =>{
  
// checkAnswer(li);
// });
// choices.appendChild(li);
// });
// if(currentNum === quizSet.length-1) {
//   btn.textContent = 'show score';
// }
// }

// setQuiz();

// btn.addEventListener('click', () =>{
//   if(btn.classList.contains('disabled')){
//     return;
//   }
//   btn.classList.add('disabled');
//   if(currentNum===quizSet.length-1) {
//     scoreLabel.textContent =`${score} score ${quizSet.length}`
//     result.classList.remove('hidden');

//   }else{
//     currentNum++;
//     setQuiz();
//   }
// });



































// const question = document.getElementById('question');
// const choices = document.getElementById('choices');
// const btn = document.getElementById('btn');
// const result = document.getElementById('result');
// const scoreLabel = document.querySelector('#result > p');

// const quizSet = shuffle([
//   {q: 'what is a', c: ['a0', 'a1', 'a2']}, 
//   {q: 'what is b', c: ['b0', 'a1', 'a2']}, 
//   {q: 'what is c', c: ['c0', 'a1', 'a2']}, 
// ]);
// let currentNum = 0;
// let isAnswered;
// let score = 0;


// function shuffle(arr) {
//   for (let i = arr.length-1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//   [arr[j], arr[i]] = [arr[i], arr[j]];
//   }
//   return arr;
// }

// function checkAnswer(li) {
//   if (isAnswered) {
//     return;
//   }
//   isAnswered = true;
// if (li.textContent === quizSet[currentNum].c[0]) {
//   li.classList.add('correct');
//   score++;
// }else {
//   li.classList.add('wrong');
// }

// btn.classList.remove('disabled');
// }

// function setQuiz() {
//   isAnswered = false;
//   question.textContent = quizSet[currentNum].q;
//   while(choices.firstChild) {
//     choices.removeChild(choices.firstChild);
//   }

// const shuffleChoices = shuffle([...quizSet[currentNum].c]);

// shuffleChoices.forEach(choice => {
// const li = document.createElement('li');
// li.textContent = choice;
// choices.appendChild(li);

// li.addEventListener('click', () =>{
  
//   checkAnswer(li);
// })
// console.log(choices);
// });
// if(currentNum === quizSet.length-1) {
//   btn.textContent = 'show score';
// }
// }
// setQuiz();

// btn.addEventListener('click', () => {
//   if(btn.classList.contains('disabled')) {
//     return;
//   }
//   btn.classList.add('disabled');
//   if(currentNum === quizSet.length-1) {
  
//     result.classList.remove('hidden');
//     scoreLabel.textContent = `${score} ${quizSet.length}`
//   }else {
//     currentNum++;
//     setQuiz();

//   }
// });



//  {
//    const question = document.getElementById('question');
//    const choices = document.getElementById('choices');
//    const btn = document.getElementById('btn');
//    const result = document.getElementById('result');
//    const scoreLabel = document.querySelector('#result > p');
  

//  const quizSet = shuffle([
//    {q: 'What is A?', c: ['A0', 'A1', 'A2']},
//    {q: 'What is B?', c: ['B0', 'B1', 'B2']},
//    {q: 'What is C?', c: ['C0', 'C1', 'C2']},
//  ]);
//  let currentNum = 0;
//  let isAnswered;
//  let score = 0;

 

//  function shuffle(arr) {
//    for (let i =arr.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [arr[j], arr[i]] = [arr[i], arr[j]];
//    }
//   return arr;
//  }

//  function checkAnswer(li) {
//    if(isAnswered) {
//      return;
//    }
//    isAnswered = true;

//    if(li.textContent === quizSet[currentNum].c[0]) {
//      li.classList.add('correct');
//      score++;
//    }else {
//     li.classList.add('wrong');
//    }

//    btn.classList.remove('disabled');
//  }

 

//  function setQuiz() {
//    isAnswered = false;
//   question.textContent = quizSet[currentNum].q;

//   while(choices.firstChild) {
//     choices.removeChild(choices.firstChild);
//   }

//   const shuffleChoices = shuffle([...quizSet[currentNum].c]);
//   shuffleChoices.forEach(choice => {
//      const li = document.createElement('li');
//      li.textContent = choice;
//      li.addEventListener('click', () => {
//        checkAnswer(li);
//      })
//      choices.appendChild(li);
//   });

//   if (currentNum === quizSet.length -1) {
//     btn.textContent = 'Show Score';
//   }
//  }

//  setQuiz();

//  btn.addEventListener('click', () => {
//    if (btn.classList.contains('disabled')) {
//       return;
//    }
//    btn.classList.add('disabled');

//    if(currentNum === quizSet.length-1) {
//     scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`
//     result.classList.remove('hidden');
//   }else {
//     currentNum++;
//     setQuiz();
//   }
//  });
// }