/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

function reverse(string) {

  if(string.length === 0) return "";
   let char = string.slice(0,1)  
  string = string.slice(1)

     return  reverse(string) + char;
};

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
