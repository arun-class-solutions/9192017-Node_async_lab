let count = 20;

const decreaseCount = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      count--;
      resolve();
    }, 1000);
  });
}

const startTimer = async () => {
  while (count >= 0) {
    console.log(count);

    await decreaseCount();
  }
}

startTimer();
