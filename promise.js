// //기본방법
// function startAsync(age) {
//   return new Promise((resolve, reject) => {
//     if (age > 20) resolve();
//     else reject();
//   });
// }

// setTimeout(() => {
//   const promise1 = startAsync(25);
//   promise1
//     .then(() => {
//       console.log("1 then!");
//     })
//     .catch(() => {
//       console.log("1 catch!");
//     });
//   const promise2 = startAsync(15);
//   promise2
//     .then(() => {
//       console.log("2 then!");
//     })
//     .catch(() => {
//       console.log("2 catch!");
//     });
// }, 1000);


// //함수 살짝 정리
// function startAsync2(age) {
//   return new Promise((resolve, reject) => {
//     if (age > 20) resolve(`${age} success`);
//     else reject(new Error("Something went wrong"));
//   });
// }

//async 이용해서 executor new Promise안쓰고 변환방법
// 함수에 async 키위드를 붙입니다.
// new Promise... 부분을 없애고 executor 본문 내용만 남깁니다.
// resolve(value); 부분을 return value; 로 변경합니다.
// reject(new Error(…)); 부분을 throw new Error(…); 로 수정합니다.
async function startAsync3(age) {
  if (age > 20) return `${age} success`;
  else throw new Error(`${age} is not over 20`);
}

setTimeout(() => {
  const promise1 = startAsync3(25);
  promise1
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.error(error);
    });
  const promise2 = startAsync3(15);
  promise2
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.error(error);
    });
}, 1000);


// 얻은결론 : async 함수의 리턴 값은 무조건 Promise 입니다 !

/* 이 단순한 문장에 의해서 우리는 async 함수를 일반 함수처럼 사용할 수 없다는 걸 절실히 깨닫게 되었습니다. (혹은 앞으로 무수히 깨닫게 될 것입니다….) 분명히 위 함수에서는 우리가 문자열을 리턴했는데, promise1과 promise2 는 문자열이 아닙니다! 이게 무슨 일입니까!! 네… 우리는 무조건 async 함수를 실행시킨 뒤 then 과 catch 를 활용하여 흐름을 제어해야 합니다. 정말 익숙하지 않습니다. 비동기 작업을 하려면 지금까지 써왔던 코딩의 느낌을 모두 바꿔야 할까요? 아니오, 그렇지 않습니다. async 함수 안에서는 await 를 쓸 수 있습니다.
*/
// await: Promise 가 끝날 때까지 기다리거라.



