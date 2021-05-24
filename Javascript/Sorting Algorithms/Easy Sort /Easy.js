/* 
steps to solve a problem 
1 - understand the problem . 
2 - come up with a concrete example . 
3 - split the problem into pices . 
4 - solve or at least try . 
5 - look back and improve 
*/
/*
Suppose we have an array like this !!

1 - The problem we have an array [5 , 2 , 1 , 8 , 4 , 7 , 6 , 3]  sort it this way 
2 - Target => 5 [3 , 2 , 1 , 4 , (5) , 7 , 6 , 8]
3 - We want for each element in the array find the elements that are greater than and puth theme to right 
  - We want for each element in the array find the elements that are less than and puth theme to left
4 - let's try !!

*/

function QuickSort(arr) {
   let target = 0;
   let result = [];
   let count = 0;
   let itereation = 0;
   while (itereation < arr.length) {
     target = arr[itereation];
     for (let j = 0; j < arr.length; j++) {
       if (arr[j] < target) {
         count++;
       }
     }
     result[count] = target;
     count = 0;
     itereation++;
   }
 
   console.log(result);
 }
 
 const arr = [5, 2, 1, 8, 4, 7, 6, 3];
 QuickSort(arr);
 