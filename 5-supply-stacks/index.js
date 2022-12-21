let fs = require('fs/promises')

fs.readFile(`${__dirname}/input.txt`,'utf-8')
.then((data) => {
    let instructions  = data.split("\n")
    
    let numbers = instructions.map((instruction) => {
        return instruction.match(/[\d]+/g)
    })
   

    const stackPrototype = {popData,pushData,last,print,length,grabData,flatten}
    function flatten() {
        this.data = this.data.flat();
    }
    function makeStack() {
        // let stack = {};
        const stack = Object.create(stackPrototype)
        stack.data = []
        
        return stack;
    }
    
    function popData() {
        return this.data.pop();
    }
    function grabData(num) {
        let negNum = num*-1
        return this.data.splice(negNum,num)
    }
    function pushData(input) {
        this.data.push(input);
    }
    
    function last() {
        return this.data.at(-1);
    }
    function print() {
        console.log(this.data)
    }

    function length() {
        console.log(this.data.length)
    }
    // calibration
    // stack 1
    let stacks = {}
    stacks[1] = makeStack();
    stacks[1].pushData("H")
    stacks[1].pushData("R")
    stacks[1].pushData("B")
    stacks[1].pushData("D")
    stacks[1].pushData("Z")
    stacks[1].pushData("F")
    stacks[1].pushData("L")
    stacks[1].pushData("S")
    // stack 2
    stacks[2] = makeStack();
    stacks[2].pushData("T")
    stacks[2].pushData("B")
    stacks[2].pushData("M")
    stacks[2].pushData("Z")
    stacks[2].pushData("R")
   
    // stack 3
    stacks[3] = makeStack();
    stacks[3].pushData("Z")
    stacks[3].pushData("L")
    stacks[3].pushData("C")
    stacks[3].pushData("H")
    stacks[3].pushData("N")
    stacks[3].pushData("S")
    
     // stack 4
     stacks[4] = makeStack();
     stacks[4].pushData("S")
     stacks[4].pushData("C")
     stacks[4].pushData("F")
     stacks[4].pushData("J")
    
      // stack 5
      stacks[5] = makeStack();
      stacks[5].pushData("P")
      stacks[5].pushData("G")
      stacks[5].pushData("H")
      stacks[5].pushData("W")
      stacks[5].pushData("R")
      stacks[5].pushData("Z")
      stacks[5].pushData("B")

      // stack 6
      stacks[6] = makeStack();
      stacks[6].pushData("V")
      stacks[6].pushData("J")
      stacks[6].pushData("Z")
      stacks[6].pushData("G")
      stacks[6].pushData("D")
      stacks[6].pushData("N")
      stacks[6].pushData("M")
      stacks[6].pushData("T")
    
      // stack 7
      stacks[7] = makeStack();
      stacks[7].pushData("G")
      stacks[7].pushData("L")
      stacks[7].pushData("N")
      stacks[7].pushData("W")
      stacks[7].pushData("F")
      stacks[7].pushData("S")
      stacks[7].pushData("P")
      stacks[7].pushData("Q")
    
      // stack 8
      stacks[8] = makeStack();
      stacks[8].pushData("M")
      stacks[8].pushData("Z")
      stacks[8].pushData("R")

      // stack 9
      stacks[9] = makeStack();
      stacks[9].pushData("M")
      stacks[9].pushData("C")
      stacks[9].pushData("L")
      stacks[9].pushData("G")
      stacks[9].pushData("V")
      stacks[9].pushData("R")
      stacks[9].pushData("T")

    let count = 0 // 
    // for (let i = 0;i<numbers.length;i++) {
    //     count++;
    //     for (let j=0;j<parseInt(numbers[i][0]);j++) {
    //         stacks[numbers[i][2]].pushData(stacks[numbers[i][1]].popData())
    //     }
    // }
    for (let i = 0;i<numbers.length;i++) {
        count++;
        stacks[numbers[i][2]].pushData(stacks[numbers[i][1]].grabData(numbers[i][0]))
        stacks[numbers[i][2]].flatten();
    }
    for (let x in stacks) {
        stacks[x].print();
    }
    console.log(count)

})