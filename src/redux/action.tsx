export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const GET_NUMBER_CART = "GET_NUMBER_CART";
export const ADD_CART = "ADD_CART";
export const UPDATE_CART = "UPDATE_CART";
export const DELETE_CART = "DELETE_CART";
 
/*GET NUMBER CART*/
export function GetNumberCart() {
  return {
    type: "GET_NUMBER_CART",
  };
}
 
export function AddCart(payload:any) {
  return {
    type: "ADD_CART",
    payload,
  };
}
export function UpdateCart(payload:any) {
  return {
    type: "UPDATE_CART",
    payload,
  };
}
export function DeleteCart(payload:any) {
  return {
    type: "DELETE_CART",
    payload,
  };
}
 
export function IncreaseQuantity(payload:any) {
  return {
    type: "INCREASE_QUANTITY",
    payload,
  };
}
export function DecreaseQuantity(payload:any) {
  return {
    type: "DECREASE_QUANTITY",
    payload,
  };
}
