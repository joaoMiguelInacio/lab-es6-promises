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
  async function makeBroccoli() {
    await obtainInstruction("broccoli", 0);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[0]}</li>`;
    await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[1]}</li>`;
    await obtainInstruction("broccoli", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[2]}</li>`;
    await obtainInstruction("broccoli", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[3]}</li>`;
    await obtainInstruction("broccoli", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[4]}</li>`;
    await obtainInstruction("broccoli", 5);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[5]}</li>`;
    await obtainInstruction("broccoli", 6);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[6]}</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  }

  makeBroccoli();

// Bonus 2 - Promise all

  const p0 = () => {
    obtainInstruction("brusselsSprouts", 0);
  };

  const p1 = () => {
    obtainInstruction("brusselsSprouts", 1);
  };
    
  const p2 = () => {
    obtainInstruction("brusselsSprouts", 2);
  };

  const p3 = () => {
    obtainInstruction("brusselsSprouts", 3);
  };

  const p4 = () => {
    obtainInstruction("brusselsSprouts", 4);
  };

  const p5 = () => {
    obtainInstruction("brusselsSprouts", 5);
  };

  const p6 = () => {
    obtainInstruction("brusselsSprouts", 6);
  };

  const p7 = () => {
    obtainInstruction("brusselsSprouts", 7);
  };

  Promise.all( [p0, p1, p2, p3, p4, p5, p6, p7] )
    .then(() =>{
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[0]}</li>`;
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[1]}</li>`;
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[2]}</li>`;
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[3]}</li>`;
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[4]}</li>`;
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[5]}</li>`;
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[6]}</li>`;
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[7]}</li>`;
      document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
    })
    .catch((error)=> console.log("catch()", error));