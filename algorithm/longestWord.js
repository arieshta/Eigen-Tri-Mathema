function longestWord(str) {
    let splittedStr = str.split(' ')

    let word = ''
    let length = 0
    splittedStr.forEach(i => {
        if (i.length > length) {
            word = i
            length = i.length
        }
    })

    console.log(`${word}: ${length} characters`);
}

longestWord('Saya sangat senang mengerjakan soal algoritmass')