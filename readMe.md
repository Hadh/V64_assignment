# Maximum profit on stock
The best data structure for this problem is a matrix, so we start by creating a matrix that represents the prices, vertically for selling and horizontally for buying <br><br>
**This is an input example : [14, 3, 5, 30]**

|    | 14 | 3   | 5  | 30 |
|----|----|-----|----|----|
| 14 | 0  | -11 | -9 | 16 |
| 3  | X  | 0   | 2  | 27 |
| 5  | X  | X   | 0  | 25 |
| 30 | X  | X   | X  | 0  |

<br>

The X sign represents an impossible situation since the array is sorted based on the days, that’s why we add the condition on line 15 : <br> 
     `if( i>j ) `   

Else we calculate the possible profit by subtracting the Buying and Selling values.

By the end of the first 2 iterations, the matrix is created. 

Next we need to extract the maximum value in the matrix, and the corresponding index (i, j) from the parameter input array represent the day for buying and selling respectively. 

