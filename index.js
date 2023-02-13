let con = document.getElementById("ctr");
//con.innerHTML= "let's dance!";
let count = 0;
function increment(){
    count++;
    con.innerHTML="counter : " + count;

}
function decrement(){
    count--;
    con.innerHTML="counter : " + count;
}
console.log(count);



