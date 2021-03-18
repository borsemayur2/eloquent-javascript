export default function reverseCode() {
  const reverse = (arr) => {
    const result = arr.map((num, idx) => arr[arr.length - 1 - idx]);
    console.log("reverseNew", result);
  };
  reverse([1, 6, 3, 2, 7]);

  const reverseInPlace = (numArr) => {
    const middleIndex = Math.round(numArr.length / 2);

    for (let i = 0; i < middleIndex; i++) {
      let temp = numArr[i];
      numArr[i] = numArr[numArr.length - 1 - i];
      numArr[numArr.length - 1 - i] = temp;
    }
  };

  const myArr = [5, 2, 6, 1];
  console.log("inPlcae", myArr);
  reverseInPlace(myArr);
}
