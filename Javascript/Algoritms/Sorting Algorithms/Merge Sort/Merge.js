function merge(arr_1, arr_2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr_1.length && j < arr_2.length) {
    if (arr_1[i] < arr_2[j]) {
      result.push(arr_1[i]);
      i++;
    } else {
      result.push(arr_2[j]);
      j++;
    }
  }
  while (i < arr_1.length) {
    result.push(arr_1[i]);
    i++;
  }
  while (j < arr_2.length) {
    result.push(arr_2[j]);
    j++;
  }
  return result;
}

function sortMerge(arr) {
  if (arr.length <= 1) return arr;
  let half = Math.floor(arr.length / 2);
  let left = sortMerge(arr.slice(0, half));
  let right = sortMerge(arr.slice(half));
  return merge(left, right);
}

const rslt = sortMerge([1, 3, 5, 2, ]);
console.log(rslt);

/* 

sortMerge([1, 3, 5, 2,]);
half = 2 ;
left = [1 , 3 ] => ! first half 
half = 1 ;
left = [1] => returned
right = [3] => returned
we merge [1] [3] => [1 , 3 ] ; 
! left = [1 , 3 ]
right = [5 , 2] => ! second half
half = 1 ;
left = [5] => returned 
right = [2] => returned 
we merge [5] [2] => [2 , 5] ;
! right = [2 , 5 ]
we merge for the last time 
[1 , 3 ] [2 , 5] => [1 , 2 , 3 , 5 ] ; 
! returned Array = [1 , 2 , 3 , 5] ; 

*/