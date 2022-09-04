const condition = true;
const promiseFunc = (resolve, reject) => {
  if (condition) {
    resolve("success");
  } else {
    reject("error");
  }
};
// const promise = new Promise(promiseFunc);
// const promise = new Promise((resolve, reject) => {
//   if (condition) {
//     resolve("success");
//   } else {
//     reject("error");
//   }
// });

new Promise(promiseFunc)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("무조건");
  });

// promise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("무조건");
//   });
