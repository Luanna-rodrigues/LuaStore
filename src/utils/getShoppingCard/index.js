export default () => JSON.parse(localStorage.getItem("shopping-cart") || "[]");
