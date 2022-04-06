export default () =>
  JSON.parse(localStorage.getItem("shopping-favorite") || "[]");
