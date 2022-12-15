let fs = require('fs/promises')
const { deflateRaw } = require('zlib')

function rockPaperScissors() {
    return fs.readFile(`${__dirname}/inputs.txt`,'utf-8')
    .then((results) => {
        const gamesObject = {}
        let gameCounter = 1
        let arr = results.split(/\n/)
        let arr2 = [...arr]
        // console.log(arr)
        //while (arr.length >= 3) {
          ///  gamesObject[gameCounter] = arr.splice(0,3)
        //gameCounter += 1;
        //}
        //console.log(gamesObject)
        let outcomes = {
            "A X": 4,
            "A Y": 8,
            "A Z": 3,
            "B X": 1,
            "B Y": 5,
            "B Z": 9,
            "C X": 7,
            "C Y": 2,
            "C Z": 6
        }
        let outcomes2 = {
            "A X": 3,
            "A Y": 4,
            "A Z": 8,
            "B X": 1,
            "B Y": 5,
            "B Z": 9,
            "C X": 2,
            "C Y": 6,
            "C Z": 7
        }
        let total = 0;
        for (let i=0; i<arr.length;i ++) {
            let val = outcomes[arr[i]]
            arr[i] = val;
            total += val;
        }
        let total2 = 0;
        for (let i=0; i<arr.length;i ++) {
            let val = outcomes2[arr2[i]]
            arr2[i] = val;
            total2 += val;
        }
        console.log(arr,total,total2)

    })
}

rockPaperScissors()