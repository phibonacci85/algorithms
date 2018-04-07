// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function printMatrix(a) {
    for(let i = 0; i < a.length; i++) {
        console.log(a[i]);
    }
}

function matrix(n) {
    let a = [];
    for(let i = 0; i < n; i++) {
        let row = [];
        for(let j = 0; j < n; j++) {
            row.push(0);
        }
        a.push(row);
    }
    let r = 0;
    let c = 0;
    let move = 1;
    for(let i = 1; i <= n*n; i++) {
        a[r][c] = i;

        if(move === 1 && (typeof a[r][c+1] === 'undefined' || a[r][c+1] !== 0)) {
            move = 2;
        } else if(move === 2 && (typeof a[r+1] === 'undefined' || a[r+1][c] !== 0)) {
            move = 3;
        } else if (move === 3 && (typeof a[r][c-1] === 'undefined' || a[r][c-1] !== 0)) {
            move = 0;
        } else if (move === 0 && (typeof a[r-1] === 'undefined' || a[r-1][c] !== 0)) {
            move = 1;
        }

        if(move === 0) {
            r--;
        } else if (move === 1) {
            c++;
        } else if (move === 2) {
            r++;
        } else if (move === 3) {
            c--;
        }

        /*
        if(typeof a[r][c+1] !== 'undefined' && a[r][c+1] === 0) {
            c++;
        } else if (typeof a[r+1] !== 'undefined' && a[r+1][c] === 0) {
            r++;
        } else if (typeof a[r][c-1] !== 'undefined' && a[r][c-1] === 0) {
            c--;
        } else if (typeof a[r-1] !== 'undefined' && a[r-1][c] === 0) {
            r--;
        }
        */
    }
    return a;
    // printMatrix(a);
}

module.exports = matrix;
