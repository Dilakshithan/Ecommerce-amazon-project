export const cart=[{
  id:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity:1
},{
  id:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
  quantity:2
}];

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