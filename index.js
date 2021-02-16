// Example: let paramArr = [14, 3, 5, 30]

function getMaxProfit(paramArr) {
	let matrix = []
    let profit = 0 ;
    let buying = 0 ; 
    let selling = 0 ;
    let buyingValue = 0; 
    let sellingValue = 0;
    
    for(let i = 0; i <paramArr.length; i++) {
        let firstArr = []
        for(let j = 0; j < paramArr.length; j++) {
            if(i>j) firstArr.push(0)
                else firstArr.push(paramArr[j] - paramArr[i])
        }
        matrix.push(firstArr)
    }
       
    for(let i = 0; i <paramArr.length; i++) {
        for(let j = 0; j < paramArr.length; j++) {
            if(matrix[i][j] > profit) {
                profit = matrix[i][j]
                buying = i + 1; 
                buyingValue = paramArr[i]
                selling = j + 1;
                sellingValue = paramArr[j]
            }
        }
    }
    
    return 'Buying on day number ' + buying + ' for a value of ' + buyingValue + ' and selling on day  '
    + selling + ' for a value of '+ sellingValue + ', hence generating a maximum profit of '+ profit;
}

console.log(getMaxProfit(paramArr));