function reverseString(str) {
    // collect numbers in string indexes
    let numIndex = []
    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i]) == false) {
            numIndex.push(i)
        }
    }

    // reverse only alphabets
    let newStr = []
    let index0 = 0
    numIndex.forEach(i => {
        part = str.substring(index0,i)
        let reversed = []
        for (let j = part.length - 1; j >= 0; j--) {
            reversed.push(part[j])
        }
        
        newStr.push(...reversed)
        newStr.push(str[i])

        index0 = i+1
    })

    // if there is no number at the end of string
    if (numIndex.slice(-1) != str.length - 1) {
        let reversed = []
        for (let j = str.length - 1; j > numIndex.slice(-1); j--) {
            reversed.push(str[j])
        }
        newStr.push(...reversed)
    }

    let reversedStr = newStr.join('')
    console.log(reversedStr)
}

reverseString('9abc1def')