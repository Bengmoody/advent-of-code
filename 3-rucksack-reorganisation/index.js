const fs = require('fs/promises')

fs.readFile(`${__dirname}/inputs.txt`,"utf-8")
.then((data) => {
    let splitData=data.split(/\n/)
    let newArr=[]
    let total = 0;
    let gameCounter=1;
    let outerObject = {};
    let answerArr = []
    while (splitData.length>=3) {
        outerObject[gameCounter] = Object.assign({},splitData.splice(0,3))
        gameCounter += 1;
    }
    for (let trio in outerObject) {
        let commonValues = {0:[],1:[]}
        let lengths = {}
        for (let rucksackNum in outerObject[trio]) {
            lengths[rucksackNum] = outerObject[trio][rucksackNum].length;
        }
        let comparisonPairNum = 1
        let longest = Object.values(lengths).indexOf(Math.max(...Object.values(lengths)))
        
        for (let i=0;i<2;i++) {
            for (let j=0;j<outerObject[trio][i].length;j++) {
                if (outerObject[trio][i+1].indexOf(outerObject[trio][i][j]) !== -1) {
                    // console.log(outerObject[trio][i+1].at(outerObject[trio][i+1].indexOf(outerObject[trio][i][j])),outerObject[trio][i][j])
                    commonValues[i].push(outerObject[trio][i][j])
                }
            }
        }
        let i=0
        let flag=false;
        while(i<commonValues["0"].length && flag!==true) {
            if (commonValues["1"].indexOf(commonValues["0"][i]) !== -1) {
                answerArr.push(commonValues["0"][i])
                flag=true;
            }
            i++;
        }
        
    }
    let runningTotal = 0;
    alphaArr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    answerArr.forEach((answer) => {
        runningTotal += alphaArr.indexOf(answer) + 1;
    })
    
    console.log(runningTotal)
    // splitData.forEach((element) => {
    //     let temp=[]
    //     temp.push(element)
    //     newArr.push(temp)
    //     let len = newArr.at(-1)[0].length
    //     newArr.at(-1).push(newArr.at(-1)[0].slice(0,len/2))
    //     newArr.at(-1).push(newArr.at(-1)[0].slice(len/2))
        
    //     alphaArr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    //     newArr.at(-1).splice(0,1)
    //     for (let i = 0; i<newArr.at(-1)[0].length;i++) {
    //         let index = newArr.at(-1)[1].indexOf(newArr.at(-1)[0][i])
    //         if (index !== -1) {
    //             newArr.at(-1).push(newArr.at(-1)[1][index])
    //             newArr.at(-1).push(alphaArr.indexOf(newArr.at(-1).at(-1))+1)
    //             console.log(newArr.at(-1).at(-1), newArr.at(-1))
    //         }
    //     }
    //     total = total + newArr.at(-1).at(-1)
    //     console.log(total)
    // })

})
