var i = 1;
let pos;
setInterval(changeBg, 4000);

function changeBg() {
  let selector = document.querySelector("#showcase");
  if (i % 3 == 1) {
    selector.className = "shop-2";
    // pos = {lat: 13.63704 , lng: 79.42046}
  } else if (i % 3 == 2) {
    selector.className = "shop-3";
    // pos = {lat: 16.50458 , lng: 80.63484}
  } else {
    selector.className = "shop-1";
    // pos =
    i = 0;
  }
  i++;
}

let map;
function initMap() {
  map = new google.maps.Map(document.querySelector(".map"), {
    center: { lat: 14.448170466650023, lng: 79.98195708382617},
    zoom: 18,
  });
//   const marker = new google.maps.Marker({
//     position: { lat: 14.448170466650023, lng: 79.98195708382617},
//     map: map,
//   });
}




$('#navbar a, .btn').on('click', function(event){
    if(this.hash !== ''){
        event.preventDefault();
        const hash = this.hash;
        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        )
    }
})
