const fs = require('fs/promises')

exports.calorieCounting = () => {
    return fs.readFile(`${__dirname}/inputs.txt`,"utf-8")
    .then((contents) => {
        let arr = contents.split(/\n/)
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
        for (let x in elfInventories) {
            elfInventories[x].push(elfInventories[x].reduce((acc,curr) => {return parseInt(acc)+parseInt(curr)},0))
        }
        let results = Object.values(elfInventories).map((elfInventory) => elfInventory.at(-1))
        let runningSum = 0;
        for (let i=0;i<3;i++) {
            let index = results.indexOf(Math.max(...results))
            const deleted = results.splice(index,1)
            runningSum += deleted[0]
        }
        console.log(runningSum)
        return runningSum;
    })

}