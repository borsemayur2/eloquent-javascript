const myModule = () => {
  const _range = (start, end, step = 1) => {
    if (start > end) {
      step = -1;
    }
    const rangeArray = [];
    if (Math.sign(step) === -1) {
      for (let i = start; i >= end; i = i + step) {
        rangeArray.push(i);
      }
    } else {
      for (let i = start; i <= end; i = i + step) {
        rangeArray.push(i);
      }
    }
    return rangeArray;
  };

  const _sum = (numArr) => {
    let total = 0;
    for (let num of numArr) {
      total += num;
    }
    return total;
  };

  const _sumRecur = (numArr, total = 0) => {
    if (!numArr.length) {
      console.log("total", total);
      return total;
    }
    const num = numArr.shift();
    total += num;
    return _sumRecur(numArr, total);
  };

  const numArr = _range(1, 10);

  console.log(numArr);
  const sumResult = _sum(numArr);
  console.log(sumResult);

  const sumResult1 = _sumRecur(numArr);

  console.log(sumResult1);
};

export default myModule;
