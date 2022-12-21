let fs = require('fs/promises')

fs.readFile(`${__dirname}/input.txt`,"utf-8")
.then((data) => {
    const arr = ["h","j","c","h","j","c","j","h","j","s","h","j","s","s"]
    let flag = false;
    let strIndex = 14;
    while (!flag) {
        flag=true;
        arr.push(data[strIndex])
        arr.shift()
        console.log()
        for (let i=0;i<arr.length;i++) {
            for (let j=0;j<arr.length;j++) {
                if (arr[i] === arr[j] && j!==i) {
                    flag=false;
                }
            }
        }
        strIndex++;
    }
    console.log(arr,data.indexOf(arr.join(""))+14)


})