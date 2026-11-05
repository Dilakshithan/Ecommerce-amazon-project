import {cart} from '../../data/cart.js';
import {getProduct} from '../../data/products.js';
import {getDeliveryOption} from '../../data/deliveryOption.js';
import {formatPrice} from '../utils/money.js';


export function renderPaymentSummary(){
  let priceTotal = 0;
  let deliveryTotal = 0;
  cart.forEach((item)=>{
    const product = getProduct(item.id);
    priceTotal += item.quantity * product.priceCents;

    const deliveryOption = getDeliveryOption(item.deliveryOptionId);
    deliveryTotal += deliveryOption.priceCents;

  });
  

  const totalPrice = priceTotal + deliveryTotal;
  const taxPrice = totalPrice * 0.0875;
  const totalPriceWithTax = totalPrice + taxPrice;
  
  const paymentSummaryHtml = `
    <div class="payment-summary-title">
      Order Summary
    </div>

    <div class="payment-summary-row">
      <div>Items (${cart.length}):</div>
      <div class="payment-summary-money">$${formatPrice(priceTotal)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money">$${formatPrice(deliveryTotal)} </div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">$${formatPrice(totalPrice)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">$${formatPrice(taxPrice)}</div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">$${formatPrice(totalPriceWithTax)}</div>
    </div>

    <button class="place-order-button button-primary">
      Place your order
    </button>
  
  `

  document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHtml;
}