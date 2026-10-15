//참고: JS 코딩의 기술 , 24년 옮담
// 반복문을 배열 메서드 이용

const prices = [ '1.0', 'apple','2.15'];

// map은 형태만 변형되고 길이는 유지된다.
// 원본 배열과 같은 길이의 배열과 같은 새로운 배열 형성된다.
const formmatPrices = prices.map(price => parseFloat(price)).filter(price => price);
console.log("formatPrices", formmatPrices); // result : ['1.0', '2.15']

const band = [
  {
    name: 'corbett',
    instrument: 'guitar'
  },
  {
    name: 'even',
    instrument: 'guitar'
  },
  {
    name: 'sean',
    instrument: 'bass'
  },
  {
    name: 'brett',
    instrument: 'drums'
  },
];

function getInstrument(band) {
  // console.log("band.instrument", band.instrument);
  return band.instrument;
}
const instruments = band.map(getInstrument);
console.log("instruments", instruments);  // [ 'guitar', 'guitar', 'bass', 'drums' ]

const instruments2 = band.map(item => item.instrument);
console.log("instruments2", instruments2); // [ 'guitar', 'guitar', 'bass', 'drums' ]

// 스스로 만들어보기 

const users = [
  {
    name: 'Anna',
    age: 25,
    gender: 'female',
    country: 'korea'
  },
  {
    name: 'Mike',
    age: 30,
    gender: 'male',
    country: 'America'
  },
  {
    name: 'James',
    age: 19,
    gender: 'male',
    country: 'Germany'
  },
  {
    name: 'Jun',
    age: 19,
    gender: 'male',
    country: 'Germany'
  },
];

// users 배열의 age 속성만 추출
const userList = users.map(user => user.age);
console.log("userList", userList);  // [ 25, 30, 19, 19 ]

// users 배열의 age 속성만 추출하고 19인 값 출력
const userList2 = users.map(user => user.age).filter(user => user === 19); // [19, 19]
console.log("userList2", userList2);

// users 배열의 country 속성값 Germany만 추출
const userList3 = users.map(user => user.country === 'Germany').filter(user => user);  // [ true, true ]
console.log("userList3", userList3);

// 2. filter와 find의 부분집합 형성
const team = [
  'Michelle B',
  'Dave L',
  'Dave C',
  'Courtney B',
  'Davina M'
];

// match()
// 1. 문자열 'any' 포함되었는지 확인
// 2. 일치한 경우 배열로 반환, 일치하지 않는 경우 null로 반환

const daves = team.filter(meber => meber.match(/Dav/));
console.log("daves data", daves);

const scores = [30, 82, 70, 45];

function getNumberOfPassingScore(scores) {
  const perfect = scores.filter(score => score === 100);
  return perfect.length;
}

console.log("getNumberOfPassingScore", getNumberOfPassingScore(scores));

const instructors = [
  { 
    name: '짐',
    libraries: ['미디어교육정보 도서관'],
  },
  { 
    name: '새라',
    libraries: ['기념 도서관, 문헌정보학 도서관'],
  },
  { 
    name: '앨리엇',
    libraries: ['중앙 도서관'],
  }
];

const librarian = instructors.find(instructor => instructor.libraries);
console.log("librarian", librarian);

const fruits = [
  'apple',
  'mango',
  'banana',
  'grapes',
];

// 상동 도서관 - 자바스크립트 공부

const numbers = [ 1, 2, 3, 4, 5];

const resultNum = numbers.filter(number => number < 3);
console.log("resultNum", resultNum);  // result : [ 1, 2 ]

const userManagement = [
  {
    name: '김선옥',
    age: '42'
  },
  {
    name: '김혜윤',
    age: '35'
  },
  {
    name: '김준길',
    age: '38'
  },
  {
    name: '김채환',
    age: '26'
  },
];

const resultUsers = userManagement.filter(user => user.age > 28);
console.log("resultUsers", resultUsers);

// result 
// resultUsers [
//   { name: '김선옥', age: '42' },
//   { name: '김혜윤', age: '35' },
//   { name: '김준길', age: '38' }
// ]

const heros = [
  {
    name: 'Thor: Love and Thunder',
    actor: 'Chris Hemsworth',
    director: 'Taika Waititi',
    country: 'America',
  },
  {
    name: 'Spider-Man: No Way Home',
    actor: 'Tom Holland',
    director: 'Jon Watts',
    country: 'America',
  },
  {
    name: 'Venom: Let There Be Carnage',
    actor: 'Tom Hardy',
    director: 'Andy Serkis',
    country: 'America',
  },
  {
    name: 'The Hunger Games: Mockingjay',
    actor: 'Jennifer Lawrence',
    director: 'Francis Lawrence',
    country: 'America',
  }
];

const herosList = heros.filter(hero => hero.name === 'Venom: Let There Be Carnage');
console.log("herosList", herosList);

// result 
// herosList [
//   {
//     name: 'Venom: Let There Be Carnage',
//     actor: 'Tom Hardy',
//     director: 'Andy Serkis',
//     country: 'America'
//   }
// ]

// 화살표 함수 사용 반복문, 화살표 함수를 사용하기 전의 예제

function captilze(name) {
  return name[0].toUpperCase() + name.slice(1);
}

// 화살표 함수를 사용 예제
// 화살표 함수의 필요성 : 불필요한 정보가 많은 경우

// 화살표 함수 변형 전
const captilze = (name) => {
  return name[0].toUpperCase() + name.slice(1);
}

// 함수를 화살표 함수로 변형
function greet(first, last) {
  return `Hello ${captilze(first)} ${captilze(last)} 님`;
}

// 매개 변수가 2개인 경우 ()로 담을 수 있음
const greet = (first, last) => {
  return `Hello ${captilze(first)} ${captilze(last)} 님`;
}

// return 문도 한줄에 표현 가능함
const greet = (first, last) => `Hello ${captilze(first)} ${captilze(last)} 님`;

// 화살표 함수를 익명 함수로 표현 가능함 (다시 이해 필요함)
function applyCustomGreeting(name, cb) {
  return cb(captilze(name));
}

// 매개 변수가 1개인 익명 함수
applyCustomGreeting('mark', function(name) {
  return `Hello ${name}`;
});

// 위에 예제인 익명함수를 화살표 함수로 변형
applyCustomGreeting('mark', name  => `Hello ${name}`);


// 예제를 바탕으로 직접 해보기

// person 배열 생성
const person = [ 
  { 
    name: 'Annna',
    age: 25,
    gender: 'female'
  }
];

console.log("person", person[0]);
console.log("person name", person[0].name);

// 함수를 화살표 함수로 변형 전 
function userList(person) {
  return `Hello ${person[0].name}님의 나이는 ${person[0].age} 입니다.`;
}

// userList(person);
console.log("userList", userList(person));

// 함수를 화살표 함수로 변형 후
const userList2 = (person) => {
  return `Hello ${person[0].name}님의 나이는 ${person[0].age} 입니다.`;
}
console.log("userList2", userList2(person));

// 함수를 화살표 함수로 변형, return문 제거 
const userList3 = (person) => `Hello ${person[0].name}님의 나이는 ${person[0].age} 입니다.`;