// Promise是一個表示非同步運算的最終完成或失敗的物件
// Promise is an object -> new Promise()
// new Promise(executor) 
// executor is a function(resolve, reject) {}
// 完成 呼叫resolve, 失敗 呼叫reject

let doWorkPromise = function (job, timer) {
  // 1. 物件 -> new
  return new Promise((resolve, reject) => {
    // 2. 執行非同步工作
    setTimeout(() => {
      let now = new Date();
      resolve(`完成工作 ${job} at ${now.toISOString()}`);
    }, timer);
  });
};

let now = new Date();
console.log(`工作開始 at ${now.toISOString()}`);

doWorkPromise('刷牙', 3000)
  .then((data) => {
    console.log(data); //印出刷牙
    return doWorkPromise('吃早餐', 5000); //延遲五秒後 告訴後面印出吃早餐
  }).then((data) => {
    console.log(data); // 印出吃早餐
    return doWorkPromise('寫功課', 3000); //延遲三秒後 告訴後面印出寫功課
  }).then((data) => {
    console.log(data) //印出寫功課
  })
  .catch((err) => {
    console.error('發生錯誤', err);
  });