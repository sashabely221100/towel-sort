module.exports = function towelSort(matrix) {
    let result = [];
    if (matrix === undefined) { return []; }
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2) {
            for (let k = matrix[i].length - 1; k >= 0; k--) {
                result.push(matrix[i][k]);
            }
        } else {
            for (let j = 0; j < matrix[i].length; j++) {
                result.push(matrix[i][j]);
            }
        }
    }
    return result;

}