const fs = require('fs')

let file = new Promise((resolve, reject) => {
    fs.readFile('test123.txt', 'utf-8', (err, data) => {
        if(err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
})

// console.log(file)


file.then((data) => {
    console.log('成功讀到資料:', data)
}).catch((err) => {
    console.log('發生錯誤了', err)
})