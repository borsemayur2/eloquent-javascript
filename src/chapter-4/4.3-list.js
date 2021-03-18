export default function list() {
  const array = [10, 20, 30, 22];
  const arrayToList = (array) => {
    if (!array.length) {
      return null;
    }
    const num = array.shift();
    return { value: num, rest: arrayToList(array) };
  };

  const result = arrayToList(array);
  console.log("array", array);
  console.log("arrayToList", JSON.stringify(result));

  const list = { value: 1, rest: { value: 2, rest: null } };
  const listToArray = (list, array = []) => {
    array.push(list.value);
    if (!list.rest) {
      return array;
    }
    return listToArray(list.rest, array);
  };

  console.log("list", list);
  const result1 = listToArray(result);
  console.log("listToArray", result1);

  const prepend = (value, list) => {
    return { value, rest: list };
  };

  // const result2 = prepend(1, { value: 2, rest: null });
  // console.log(result2);

  const result3 = prepend(1, prepend(2, null));
  console.log("result3", result3);

  const nthRecurs = (list, targetPosition, currentPosition = 0) => {
    console.log("LIST", list);
    if (currentPosition > targetPosition || !list) {
      return;
    }
    if (targetPosition === currentPosition) {
      return list.value;
    }
    return nthRecurs(list.rest, targetPosition, currentPosition + 1);
  };
  const result4 = nthRecurs(list, 1);
  console.log("result4", result4);
  const result5 = nthRecurs(arrayToList([1, 2, 5, 7]), 3);
  console.log("result5", result5);

  const nth = (list, targetPosition) => {
    return listToArray(list)[targetPosition];
  };

  const result6 = nth(list, 2);
  console.log("result6", result6);
}
