const fs = require('fs')

let file = new Promise((resolve, reject) => {
    fs.readFile('test.txt', 'utf-8', () => {
        resolve('success')
        reject('failure')
    })
})

// console.log(file)


file.then((data) => {
    console.log('success', data)
}).catch((error) => {
    console.log('發生錯誤', err)
})