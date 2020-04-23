// based on  https://medium.com/swlh/build-your-location-based-augmented-reality-web-app-a841956eed2c

window.onload = () => {
     let places = staticLoadPlaces();
     renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Magnemite, Lv. 5, HP 10/10',
            location: {
                lat: 46.079375,
                lng: 18.213623,
            },
            gtlf: './assets/magnemite/scene.gltf'
        },
        {
            name: 'Articuno, Lv. 80, HP 100/100',
            location: {
                lat: 46.079302,
                lng: 18.213605,
            },
            gtlf: './assets/articuno/scene.gltf'
        },
        {
            name: 'Dragonite, Lv. 99, HP 150/150',
            location: {
                lat: 46.079318,
                lng: 18.213490,
            },
            gtlf: './assets/dragonite/scene.gltf'
        },
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('gltf-model', place.gltf);
        model.setAttribute('rotation', '0 180 0');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '0.5 0.5 0.5');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}