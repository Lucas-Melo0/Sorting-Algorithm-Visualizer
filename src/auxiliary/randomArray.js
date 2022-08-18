const randomArray = (size) => {
  const result = [];
  for (let i = 0; i < size; i++) {
    result.push(Math.floor(Math.random() * (1000 - 1 + 1)) + 1);
  }
  return result;
};

export { randomArray };
