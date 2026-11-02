export let cart=JSON.parse(localStorage.getItem('cart')) || [];




function savetoStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(productId, nQuantity){
      let productExists;

      cart.forEach((item)=>{
        if(item.id === productId){
          productExists = item;
        }
      });



      if(productExists){
        productExists.quantity+=nQuantity;

      } else{
        cart.push({
          id: productId,
          quantity: nQuantity,
          deliveryOptionId: '1'
        });
      }

      let totalQuantity =0;
      cart.forEach((item)=>{
        totalQuantity += item.quantity;
      });
      

      document.querySelector('.cart-quantity').innerHTML=totalQuantity;

      savetoStorage();

}

export function removeFromcart(productId){
  const newCart=[];

  cart.forEach((cartItem)=>{
    if(productId != cartItem.id){
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  savetoStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId){
    let productExists;

    cart.forEach((item)=>{
      if(item.id === productId){
        productExists = item;
      }
    });

    productExists.deliveryOptionId = deliveryOptionId;
    savetoStorage();
}