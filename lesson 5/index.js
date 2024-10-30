
// const container=document.getElementById("container")
// const createUserItem=(user)=>{
//     const div=document.createElement('div')
//     const h3=document.createElement('h3')
//     const p=document.createElement('p')

//     h3.innerText=user.name
//     p.innerText=user.email
//     div.append(h3)
//     div.append(p)
//     div.classList.add("userItem")
//     container.append(div)

// }

// const creatUserItems=(data)=>{
//     console.log(data)
//     data.map(user=>createUserItem(user))
// }



// async function getUsers() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();
//   creatUserItems(data)
// }
// getUsers();

// // const  getUsers=async()  =>
// // {
// //    const response =await fetch("https://jsonplaceholder.typicode.com/users")
// //    const data=await response.json()
// //    console.log(data)
// // }

const container=document.getElementById("container")

const createAlbum=(item)=>{
    const div=document.createElement('div')
    const h3=document.createElement('h3')
    const p=document.createElement('p')
    p.innerText=item.id
    h3.innerText=item.title
    div.classList.add("card")
    div.append(p)
    
    div.append(h3)
container.append(div)
}

const createAlbums=(data)=>data.map(album=>createAlbum(album))


async function getALbums(){
    const response=await fetch("https://jsonplaceholder.typicode.com/albums")
    const data =await response.json()
    createAlbums(data)
}

getALbums()