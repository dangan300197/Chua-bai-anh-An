render();
async function render() {
  try {
    const product = await $.ajax({
      type: "GET",
      url: "http://localhost:3002/product",
    });
    $(".listProduct").html("");
    console.log(product);
    product.product.map((value) => {
      const listProduct = `
     <h3>nameProduct:${value.nameProduct}, quantity:${value.quantity}, price:${value.price}
    <button onclick="deleteProduct(${value._id})">Delete</button>
     </h3>
     `;
      $(".listProduct").append(listProduct);
    });
  } catch (error) {
    console.log(error);
  }
}

function deleteProduct(id) {
  console.log(id);
}
function updateProduct() {}
