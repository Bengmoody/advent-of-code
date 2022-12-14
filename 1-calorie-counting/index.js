const fs = require('fs/promises')

exports.calorieCounting = () => {
    return fs.readFile(`${__dirname}/inputs.txt`,"utf-8")
    .then((contents) => {
        let arr = contents.split(/\n/)
        // console.log(arr)
        let elfInventories = {}
        let elfIndex = 1;
        let lastArrIndex = 0;
        for (let i=0;i<arr.length;i++) {
            if (arr[i] === "") {
                elfInventories[elfIndex] = arr.slice(lastArrIndex,i)
                lastArrIndex = i+1;
                elfIndex += 1;
            }
        }
        console.log(elfInventories)
        return arr;

    })

}