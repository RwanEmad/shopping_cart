const products = [
    {
      id: 1,
      name: "Product 1",
      image: "https://via.placeholder.com/100",
      price: 50,
      quantity: 10
    },
    {
      id: 2,
      name: "Product 2",
      image: "https://via.placeholder.com/100",
      price: 30,
      quantity: 5
    },
    {
      id: 3,
      name: "Product 3",
      image: "https://via.placeholder.com/100",
      price: 20,
      quantity: 8
    }
  ];

  

if (localStorage.getItem("shoppingCart") != null) {
    products_container = JSON.parse(localStorage.getItem("shoppingCart"))
    display_products()

}
else {
    localStorage.setItem("shoppingCart", JSON.stringify(products))
    display_products()
}
  
//   let pro_name=document.getElementsByClassName('')


function display_products(){

    let cartona=``;

    for(let i=0; i<products.length;i++){
        cartona+=`
        <div class="pro-card">
                <div class="row mt-5">
                  <!-- PRODUCT IMAGE & NAME -->
                  <div class="col-md-6">
                    <div class="row">
                      <!------- IMAGE --------->
                      <div class="col-md-5">
                      <div class="image border border-2 ">
                        <img src="${products[i].image}" alt="" class="100%">
                      </div>
                      </div>
                      <!-------- NAME -------->
                      <div class="col-md-7 d-grid align-content-center">
                        <p  class="pro-name ">${products[i].name}</p>
                      </div>
                      
                    </div>
                  </div>
                  <!-- PRODUCT DATA -->
                  <div class="col-md-6 d-grid align-content-center">
                    <div class="row">
                      <!------- QUANTITY ------>
                    <div class="col-md-4 d-grid justify-content-center">
                      <p class="pro-quantity ps-1 ">QUANTITY</p>
                      <div class="d-flex align-items-center ">
                        <div class="icon pe-2">
                        <button onclick="decreaseQuantity(${products[i].id})" class=" border-0 rounded-circle py-1 text-white"><i class="fa-solid fa-minus"></i> </button> 
                        </div>
                        
                        <p class="price mb-0">${products[i].quantity}</p>
                      
                        <div class="icon px-2">
                        <button onclick="increaseQuantity(${products[i].id})" class=" border-0 rounded-circle py-1 text-white"><i class="fa-solid fa-plus"></i> </button> 
                        </div>
                  
                      </div>
                    </div>
                      <!------- PRICE/ITEM ------->
                    <div class="col-md-4 d-grid justify-content-center">
                      <p class="pro-price ">PRICE</p>
                    
                      <p class="price mb-0 text-center">${products[i].price}</p>
          
                    </div>
                      <!------ TOTAL PRICE FOR THIS PRODUCT QUANTITY ------->
                    <div class="col-md-4 d-grid justify-content-center">
                      <p class="pro-total ">TOTAL</p>
                      <p class="price mb-0 text-center">${products[i].quantity*products[i].price}</p>
                      </div>
                    </div>
                  </div>              
                </div>
              </div>
        `

        document.getElementById('products').innerHTML=cartona;

    }
    calculateTotal();
}

display_products();

//increase Quantity
function increaseQuantity(productId){
    for(i=0;i<products.length;i++){
        if(products[i].id==productId){
           products[i].quantity+=1;
           localStorage.setItem("allProducts", JSON.stringify(products));
           console.log(products[i].name);
           display_products();
        }
    }
   console.log("Quantity + 1");

}
//decrease Quantity
function decreaseQuantity(productId){
    for(i=0;i<products.length;i++){
        if(products[i].id==productId && products[i].quantity>=1){
           products[i].quantity-=1;
           localStorage.setItem("allProducts", JSON.stringify(products));
           console.log(products[i].name);
           display_products();
        }
    }
   console.log("Quantity + 1");

}

//calculate total order price
function calculateTotal() {
    let totalPrice=0;
    for(i=0;i<products.length;i++){
        totalPrice+=products[i].price*products[i].quantity;
    }
    document.getElementById('totalPrice').innerHTML=`${totalPrice}`;
    document.getElementById('ItemstotalPrice').innerHTML=`${totalPrice}`;
}




