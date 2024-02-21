var remainingSeats = 28;
var bookedSeats = 0;
let TotalPrice =0;

function toSeat(seat) {
    if (seat.style.backgroundColor === "green") {
        seat.style.backgroundColor = "white";
        remainingSeats++;
        bookedSeats--;
      
    } else {
        seat.style.backgroundColor = "green";
        remainingSeats--;
        bookedSeats++;
        TotalPrice += 500;
    }
    document.getElementById("remainingSeats").innerText = remainingSeats;
    document.getElementById("bookedSeats").innerText = bookedSeats;
    document.getElementById("totalPrice").innerText = "$" + totalPrice + " (" + seattextContent + ")";
}



const allbtn=document.getElementsByClassName("kbd");
for(const btn of allbtn){
    btn.addEventListener("click",function(e){
        const seatName = e.target.parentNode.childNodes[3].innerText;
        const Pricef = document.getElementById("pricefind");
        const maxprice =Pricef.parentElement.innerText;
        const selectedArea = document.getElementById("placeseat");

        const li = document.createElement('li');

        const p = document.createElement('p');
        p.innerText = seatName;

        const p2 = document.createElement('p2');
        p2.innerText = maxprice;

        li.appendChild(p);
        li.appendChild(p2);
        selectedArea.appendChild(li);


        const totalcost = document.getElementById("TotalPrice").innerText;
        
        const convertedtotalprice = parseInt(totalcost);
      
        document.getElementById("TotalPrice").innerText = convertedtotalprice+parseInt(maxprice);


    })
}



 const btn = document.getElementById("apply-btn");
 btn.addEventListener("click",function(){
    const inputfield = document.getElementById("input-field").value ;
    const couponcode = inputfield.split(" ").join("").toUpperCase();
    if(TotalPrice>=550){
        if(couponcode==="sell200"){
            console.log('Rajib')
        }else{
            alert();
        }
    }

 })