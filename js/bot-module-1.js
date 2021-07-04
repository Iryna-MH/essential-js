"use strict"

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
    // Change code below this line
  let totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
  let message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee}credits) is included in total price.`;
    // Change code above this line
    return message;
  }
  makeOrderMessage(2, 100, 50);
  makeOrderMessage(4, 300, 100);
  makeOrderMessage(10, 70, 200);
  
  function getSubscriptionPrice(type) {
    let price;
    // Change code below this line
  
   switch ( type ) { // Change this line
      case "starter" : // Change this line
        price = 0 ; // Change this line
        break;
  
      case "professional" : // Change this line
        price = 20 ; // Change this line
        break;
  
      case "organization" : // Change this line
        price = 50 ; // Change this line
        break;
    }
  
    // Change code above this line
    return price;
  }
  
  
  function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;
    // Change code below this line
    switch ( password ){
    case null:
    message = "Canceled by user!";
    break;
    
    case ADMIN_PASSWORD:
    message = "Welcome!";
    break;
    
    default: 
    message = "Access denied, wrong password!";
    }
    // Change code above this line
    return message;
  }
  
  
  function getShippingCost(country) {
    let message;
    let price;
    // Change code below this line
    switch (country){
      case "China":
        price = 100;
        message = `Shipping to ${country} will cost ${price} credits`;
        break
        
      case "Chile":
        price = 250;
        message = `Shipping to ${country} will cost ${price} credits`;
        break;
        
      case "Australia":
        price = 170;
        message = `Shipping to ${country} will cost ${price} credits`;
        break;
        
      case "Jamaica":
        price = 120;
         message = `Shipping to ${country} will cost ${price} credits`;
        break;
        
        default:
        message = "Sorry, there is no delivery to your country";
    }
    // Change code above this line
    return message;
  }
  
  
  const courseTopic = "JavaScript essentials";
  // Change code below this line
  
  const courseTopicLength = courseTopic.length;
  const firstElement = courseTopic[0];
  const lastElement = courseTopic[courseTopic.length - 1];
  
  // Change code above this line
  
  const productName = "Repair droid";
  console.log(productName.slice(0, 4)); // "Repa"
  console.log(productName.slice(3, 9)); // "air dr"
  console.log(productName.slice(0, productName.length)); // "Repair droid"
  console.log(productName.slice(7, productName.length)); // "droid"
  
  function getSubstring(string, length) {
    const substring = string.slice(0,length); // Change this line
  
    return substring;
  }
  
  function formatMessage(message, maxLength) {
    let result;
    // Change code below this line
    result = message.length <= maxLength ? message : message.slice(0, maxLength) + "...";
    /// Change code above this line
    return result;
  }
  
  function normalizeInput(input) {
    const normalizedInput = input.toLowerCase(); // Change this line
    return normalizedInput;
  }
  
  function checkForName(fullName, name) {
    const result = fullName.includes(name); // Change this line
     return result;
   }
   
   function checkForSpam(message) {
    let result;
    // Change code below this line
   message = message.toLowerCase();
  result = message.includes("spam") || message.includes("sale");
    // Change code above this line
    return result;
  }
  
  