// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync

/*
getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
}, (error) => console.log(error));

getInstruction("mashedPotatoes", 1, (step2) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
}, (error) => console.log(error));

getInstruction("mashedPotatoes", 2, (step3) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
}, (error) => console.log(error));

getInstruction("mashedPotatoes", 3, (step4) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
}, (error) => console.log(error));

getInstruction("mashedPotatoes", 4, (step5) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
}, (error) => console.log(error));
*/


// Iteration 1 - using callbacks

getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, (error) => console.log(error));
      },  (error) => console.log(error));
    },  (error) => console.log(error));
  },  (error) => console.log(error));
},  (error) => console.log(error));

// Iteration 2 - using promises


obtainInstruction("steak", 0)
  .then (() => document.querySelector("#steak").innerHTML += `<li>${steak[0]}</li>`)
  .then(() => obtainInstruction("steak", 1) )
  .then (() => document.querySelector("#steak").innerHTML += `<li>${steak[1]}</li>`)
  .then(() => obtainInstruction("steak", 2) )
  .then (() => document.querySelector("#steak").innerHTML += `<li>${steak[2]}</li>`)
  .then(() => obtainInstruction("steak", 3) )
  .then (() => document.querySelector("#steak").innerHTML += `<li>${steak[3]}</li>`)
  .then(() => obtainInstruction("steak", 4) )
  .then (() => document.querySelector("#steak").innerHTML += `<li>${steak[4]}</li>`)
  .then(() => obtainInstruction("steak", 5) )
  .then (() => document.querySelector("#steak").innerHTML += `<li>${steak[5]}</li>`)
  .then(() => obtainInstruction("steak", 6) )
  .then (() => document.querySelector("#steak").innerHTML += `<li>${steak[6]}</li>`)
  .then(() => obtainInstruction("steak", 7) )
  .then (() => {
    document.querySelector("#steak").innerHTML += `<li>${steak[7]}</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  })
  .catch((error) => console.log(error));


// Iteration 3 using async/await
// ...

// Bonus 2 - Promise all
// ...