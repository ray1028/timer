const args = process.argv;
const input = args.slice(2);

const timer = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && !isNaN(arr[i])) {
      setTimeout(() => {
        console.log(`beeping at ${arr[i]} seconds`);
        process.stdout.write("\007");
      }, arr[i] * 1000);
    }
  }
};

timer(input);
