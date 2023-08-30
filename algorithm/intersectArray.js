function intersectArray(input, query) {
    let output = {}     // save object query.key:count

    for (let i = 0; i < input.length; i++) {
        let inputStr = input[i]
        if (query.includes(inputStr)) {
            if (!output[inputStr]) {
                output[inputStr] = 1
            } else {
                output[inputStr] += 1
            }
        }
    }

    let outputArr = []

    query.forEach(i => {
        let count = output[i]
        if (!isNaN(count)) {
            outputArr.push(output[i])
        } else {
            outputArr.push(0)
        }
    })
    return outputArr
}

let INPUT = ['xc', 'dz', 'bbb', 'dz']
let QUERY = ['bbb', 'ac', 'dz']
console.log(intersectArray(INPUT, QUERY));