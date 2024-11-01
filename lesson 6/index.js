const getProducts = async () => {
  var response = await fetch("https://fakestoreapi.com/products");
  var data = await response.json();
  console.log(data);
  createProduct();
};

const createProduct = async () => {
  var response = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    body: JSON.stringify({
      title: "product1",
      price: 100,
      desription: "description",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thedrive.com%2Fnew-cars%2F2021-mercedes-amg-gt-stealth-edition-review-price-drive&psig=AOvVaw1v8DMmatqJT3SD_manRlPY&ust=1730530710735000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDswrbHuokDFQAAAAAdAAAAABAE",
      category: "ELectronics",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  var data = await response.json();
  console.log(data);
};

const updateProduct = async () => {
  var response = await fetch("https://fakestoreapi.com/products/7", {
    method: "PUT",
    body: JSON.stringify({
      title: "product1",
      price: 110,
      desription: "description",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thedrive.com%2Fnew-cars%2F2021-mercedes-amg-gt-stealth-edition-review-price-drive&psig=AOvVaw1v8DMmatqJT3SD_manRlPY&ust=1730530710735000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDswrbHuokDFQAAAAAdAAAAABAE",
      category: "ELectronics",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  var data = await response.json();
  console.log(data);
};

const deleteProduct = async () => {
  let response = await fetch("https://fakestoreapi.com/products/7", {
    method: "DELETE",
  });
  var data = await response.json();
  console.log(data);
};

getProducts();

// updateProduct()
// deleteProduct()
