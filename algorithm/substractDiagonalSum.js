function substractDiagonalSum(matrix) {
    let diagonalA = 0, diagonalB = 0
    let length = matrix[0].length
    for (let i = 0; i < length; i++) {
        diagonalA += matrix[i][i]
        diagonalB += matrix[length - 1 - i][i]
    }

    return diagonalA - diagonalB
}

let matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]
console.log(substractDiagonalSum(matrix))