export const cart=[];

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
          quantity: nQuantity
        });
      }

      let totalQuantity =0;
      cart.forEach((item)=>{
        totalQuantity += item.quantity;
      });
      

      document.querySelector('.cart-quantity').innerHTML=totalQuantity;

}