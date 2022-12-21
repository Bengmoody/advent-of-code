let fs = require('fs/promises')

fs.readFile(`${__dirname}/inputs.txt`,"utf-8")
.then((data) => {
    let arr = data.split(/\n/)
    
    let numsArr = arr.map((element) => {
        return element.match(/\b[\d]+\b/g)
    })
    numsArr.forEach((nums) => {
        let tempSet = []
        for (let i = parseInt(nums[0]); i<= parseInt(nums[1]); i++) {
            tempSet.push(i)
        }
        nums.push(tempSet)
        tempSet = []
        for (let i = parseInt(nums[2]); i<= parseInt(nums[3]); i++) {
            tempSet.push(i)
        }
        nums.push(tempSet)
        // console.log(nums)
        // console.log(nums.at(-2),"<<nums at -2", nums.at(-1),"<<nums at -1")
        let intersect = nums.at(-2).filter(i => nums.at(-1).indexOf(i) !== -1)
        // console.log(intersect)
        if (intersect.length > 0) {
            nums.push(true);
        }
    })
    // console.log(numsArr)
    let filteredSets = numsArr.filter((nums) => nums.at(-1) === true)
    console.log(filteredSets.length)

    })
    // numsArr.forEach((nums) => {
    //     console.log(nums)
    //     if ((parseInt(nums[0]) <= parseInt(nums[2])) && (parseInt(nums[1]) >= parseInt(nums[3]))) {
    //         nums.push(true)
    //     } else if ((parseInt(nums[0]) >= parseInt(nums[2])) && (parseInt(nums[1]) <= parseInt(nums[3]))) {
    //         nums.push(true)
    //     } else {
    //         nums.push(false)
    //     }
    // })
    // let filteredResults = numsArr.filter((nums) => {
    //     return nums.at(-1) === true;
    // })
    // console.log(filteredResults)

    // console.log(filteredResults.length)



