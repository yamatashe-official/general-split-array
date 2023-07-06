//take the input array as [array] and the size as [size]
// returns a new list with the contents of the list split into size chunks

const splitArray = (array, size) => {
    let result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, size + i));
    }
    return result;
  };