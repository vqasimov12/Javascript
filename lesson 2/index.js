// const divItem = document.getElementsByClassName("divItem")[0];
// // console.log(divItem)
// const changeTextBtn = document.getElementById("changeTextBtn");
// // console.log(changeTextBtn)
// changeTextBtn.addEventListener("click", () => {
//   // divItem.innerText="changeTextBtn"
//   // divItem.style.backgroundColor="red"
//   // divItem.style.fontSize="45px"
//   divItem.classList.add("red");
//   const itemClass = divItem.classList;
//   if (divItem.classList.contains("green")) {
//     divItem.classList.remove("green");
//     divItem.classList.add("red");
// } else {
//     divItem.classList.remove("red");
//     divItem.classList.add("green");

//   }
// });

// let visiblity=true
// changeElementVisiblity=document.getElementById("changeVisiblity")
// changeElementVisiblity.addEventListener("click",()=>{
//     visiblity=!visiblity
//     divItem.style.display=( visiblity?"none":"block")

// })

// changeElementVisiblity.addEventListener("click",()=>{
//     divItem.classList.toggle("makeVisible")
// })

// const data = [
//   {
//     name: "ILkin",
//     age: 25,
//     job: "Developer",
//   },
//   {
//     name: "Vaqif",
//     age: 21,
//     job: "Developer",
//   },
//   {
//     name: "Zibeyda",
//     age: 21,
//     job: "Developer",
//   },
// ];

// const container = document.getElementById("container");

// data.map(person=>{
//     const div=document.createElement("div")
//     const h3=document.createElement("h3")
//     const p=document.createElement("p")
//     const span=document.createElement("span")

//     h3.innerText=person.name
//     p.innerText=person.job
//     span.innerText=`Age: ${person.age}`

//     div.appendChild(h3)
//     div.appendChild(p)
//     div.appendChild(span)

//     div.classList.add("cardItem")

//     container.appendChild(div)

// })

// data.map((person) => {
//   const div = `
//     <div id="carItem" class="cardItem">
//     <h3>${person.name}</h3>
//     <p>${person.job}</p>
//     <span>Age: ${person.age}</span>
//     </div>
//     `

//     const containerContent=container.innerHTML
//     container.innerHTML=`${containerContent} ${div}`
// });
data = [
  {
    title: "title1",
    p1: `
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quaerat velit dolorem laborum!`,
    p2: `
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quaerat velit dolorem laborum!`,
  },
  {
    title: "title2",
    p1: `
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quaerat velit dolorem laborum!`,
    p2: `
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quaerat velit dolorem laborum!`,
  },
  {
    title: "title3",
    p1: `
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quaerat velit dolorem laborum!`,
    p2: `
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quaerat velit dolorem laborum!`,
  },
];

const container = document.getElementById("container");
data.map((d) => {
  const divCard = document.createElement("div");
  const divHead = document.createElement("div");
  const h2 = document.createElement("h2");
  const i = document.createElement("i");
  i.classList.add("fa-solid");
  i.classList.add("fa-angle-down");
  h2.innerText = d.title;

  divHead.appendChild(h2);
  divHead.appendChild(i);
  divHead.style.display = "flex";
  divHead.style.width = "500px";
  divHead.style.justifyContent = "space-between";
  divHead.style.alignItems = "center";
  divHead.style.border = "1px solid gray";
  divHead.style.padding = "10px";
  divCard.appendChild(divHead);

  const divBody = document.createElement("div");
  const pr1 = document.createElement("p");
  const pr2 = document.createElement("p");

  pr1.innerText = d.p1;
  pr2.innerText = d.p2;
  divBody.appendChild(pr1);
  divBody.appendChild(pr2);

  divBody.style.width = "500px";
  divBody.style.justifyContent = "space-between";
  divBody.style.alignItems = "center";
  divBody.style.border = "1px solid gray";
  divBody.style.padding = "10px";
  divHead.addEventListener("click", () => {
    divBody.classList.toggle("changeVisiblity");
    if (!divBody.classList.contains("changeVisiblity")) {
      console.log("1");
      i.classList.remove("fa-angle-down");
      i.classList.add("fa-angle-up")
    } else {
        i.classList.remove("fa-angle-up");
        i.classList.add("fa-angle-down")
    }
  });

  container.appendChild(divCard);
  container.appendChild(divBody);
});
