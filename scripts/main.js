const clefAPI = "ee4d0408076eb196a91997289aeefb6f";
let resultatsAPI;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      // console.log(position);
      let long = position.coords.longitude;
      let lat = position.coords.latitude;
      appelAPI(long, lat);
    },
    () => {
      alert(
        `vous avez refuser la géolocalisation, l'application ne peut pas fonctionner. Veuillez l'activer ! `
      );
    }
  );
}

function appelAPI(long, lat) {
  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&units=metric&lang=fr&appid=${clefAPI}`
  )
    .then((reponse) => {
      return reponse.json();
    })

    .then((data) => {
      console.log(data);
    });
}
