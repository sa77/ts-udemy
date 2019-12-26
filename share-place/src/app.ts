import  axios from 'axios';
// axios comes with a d.ts file (already supports TS translation - no need to install another @types support)

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY

declare var google: any;

// https://developers.google.com/maps/documentation/geocoding/intro#GeocodingResponses
type GoogleGeocodingResponse = {
    results: {geometry: {location: {lat: number, lng: number}}}[],
    status: 'OK' | 'ZERO_RESULTS'
}

function searchAddressHandler(event: Event) {
    event.preventDefault()
    const enteredAddress = addressInput.value;

    // send this to Google's API
    // axios.get gives a promise (ASYNC task)
    axios
        .get<GoogleGeocodingResponse>(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
            enteredAddress
        )}&key=${GOOGLE_API_KEY}`
    ).then(response => {
        console.log(response);
        if (response.data.status !== 'OK') {
            throw new Error("Could not fetch location")
        }
        const coordinates = response.data.results[0].geometry.location;
        console.log(coordinates);
        const map = new google.maps.Map(document.getElementById('map'), {
          center: coordinates,
          zoom: 8
        });

        // add a marker
        new google.maps.Marker({position: coordinates, map: map});
    }).catch(err => {
        console.log(err);
    });
}


form.addEventListener('submit', searchAddressHandler);
