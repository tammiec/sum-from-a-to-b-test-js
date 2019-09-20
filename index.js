function sum(fromN, toN) {
  if (toN === fromN) {
    return toN;
  } else {
    return toN + sum(fromN, (toN - 1));
  }
}

module.exports = sum;
