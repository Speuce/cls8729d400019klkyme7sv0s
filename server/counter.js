let counter = 0;

const incrementCounter = () => {
  counter++;
};

const getCounter = () => {
  return counter;
};

module.exports = {
  incrementCounter,
  getCounter
};