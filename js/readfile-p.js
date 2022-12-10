const fs = require('fs')

let file = new Promise((resolve, reject) => {
    fs.readFile('test.txt', 'utf-8', (err, data) => {
        if(err) {
            reject('發生錯誤')
        } else {
            resolve('success')
        }
    })
})

// console.log(file)


file.then((data) => {
    console.log('成功讀到資料:', data)
}).catch((error) => {
    console.log('發生錯誤了', err)
})