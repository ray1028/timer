const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');
////////////
// Event Handling for User Input
////////////
stdin.on('data', (key) => {
 if (key >= '\u0031' && key <= '\u0039') {
   console.log(`setting timer for ${key} of seconds`);
   timer(key);
 }
 if (key === '\u0042' || key === '\u0062') {
   console.log(`beeping now`);
   process.stdout.write("\007");
 }
 if (key === '\u0003') {
   console.log('Thanks for using me, ciao!');
   process.exit();
 }
});
const args = process.argv;
const input = args.slice(2);
const timer = arr => {``
 if (Array.isArray(arr)) {
   for (let i = 0; i < arr.length; i++) {
     if (arr[i] > 0 && !isNaN(arr[i])) {
       setTimeout(() => {
         console.log(`beeping at ${arr[i]} seconds`);
         process.stdout.write("\007");
       }, arr[i] * 1000);
     }
   }
 } else {
   setTimeout(() => {
     console.log(`beeping at ${arr} seconds`);
     process.stdout.write("\007");
   }, arr * 1000);
 }
};
timer(input);