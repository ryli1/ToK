  
function getCurrentDate() {
    let date;
    let dateTime;
    const options = {year: 'numeric', month: 'long', day: 'numeric' };
    date = new Date;
    dateTime = date.toLocaleDateString(undefined, options);
   document.getElementById("mainText").textContent = "Is " + dateTime + " an okay day?";

}
function confirmDateButton() {
   //document.getElementById("mainText")= "<h3>really?</h3>"
   document.getElementById("mainText").textContent = "really?";
}   
getCurrentDate();

function click() {
    document.getElementById("question").textContent = "More than Leon?"; 
 }