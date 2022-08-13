export default function randomArray() {
  const result = [];
  for (let i = 0; i < 1000; i++) {
    result.push(Math.floor(Math.random() * (1000 - 1 + 1)) + 1);
  }
  return result;
}
