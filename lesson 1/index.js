// console.log("Hello world");

// let num2 = 10
// const num3 = 12
// let num = 2

// function add() {
//   console.log(num)
//   num = 5
// }

// function add2() {
//   console.log(num)
// }

// add()
// add2()

// num="hello"
// console.log(num)

// var input = prompt("Enter text:");
// console.log("Hello, " + input + "!");

// let i=0;
// while(i<5){
//     console.log(`Hello ${i+1}`)
//     i++
// }

// let names=["salam","hello"]

// names.map(n=>{
//     console.log(n[0])
// })

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// check(nums)

// function check(a) {
//   for (let i = 0; i < a.length; i++)

//     if (a[i] % 2)
//         console.log(`${a[i]} is odd`)
//     else
//         console.log(`${a[i]} is even`)
// }

// kodun domdan sonra ishlemesi ucun ready yazilib
$("#btn").click(() => {
  const email1 = $("#email").val().trim();  // Corrected 'Trim' to 'trim'
  const password1 = $("#password").val().trim();  // Corrected 'Trim' to 'trim'
  signInRequest(email1, password1);
});

// Async function to send sign-in request
const signInRequest = async (email1, password1) => {
  try {
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email: email1, password: password1 }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Response not ok");
    }

    const data = await response.json();
    window.location.href="./homePage.html"

  } catch (error) {
    console.error("Error occurred during request:", error);
  }
};
