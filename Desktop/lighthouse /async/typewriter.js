
const sentence = "hello there from lighthouse labs";
// for (const char of sentence) {
//     process.stdout.write(char);
//   };

setTimeout(() => {
    for (const char of sentence) {
      process.stdout.write(char);
    }
    console.log(); // add a new line after the loop is done
  }, 1000);