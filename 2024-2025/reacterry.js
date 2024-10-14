/* return the biggest number in the array , The input array will contain only numbers.
If no max number is found, return null. */

export const findMax = (arr) => {
  return arr.length > 0 ? Math.max(...arr) : null;
};

/*  return the index of the last occurrence of the value in the array. If no element is found, return -1*/

export const findLastIndexOf = (array, value) => {
  return array.length > 0 ? array.lastIndexOf(value) : -1;
};

/*arr.reduce((accumulator, currentValue)... ) the function this applies is that modulo to check if even,
if its true we add that currentValue to the accumulator, if not we just return the sum back,
and finally we start it set at a value of zero */

export const sumOfEvens = (arr) => {
  return arr.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);
};

/*This was so frustrating, We take in a float convert it to return a string representing money.\
when just using Intl.NumberFormat it will flip the negative sign and dollar sign so we have to manually add the $ */
export const formatMoney = (amount) => {
  return (
    "$" +
    new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
  );
};

/* return a sum of every third number in the array, starting from the first one. less than 3 return 0, only numbers will be handled. we use the total sum,
value and index to check if the index divided by three has a remainder true add it false just return the sum and move on */

export const sumOfThirds = (arr) => {
  return arr.reduce((sum, val, i) => (i % 3 === 0 ? sum + val : sum), 0);
};
