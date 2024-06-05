const transformString = (str) => {
    const length = str.length;
    if (length % 3 === 0 && length % 5 === 0) {
      return str.split('').reverse().map((char) => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
      return str.split('').reverse().join('');
    } else if (length % 5 === 0) {
      return str.split('').map((char) => char.charCodeAt(0)).join('');
    } else {
      return str;
    }
  };
  

  const input = "Hello World";
  console.log(transformString(input));
  