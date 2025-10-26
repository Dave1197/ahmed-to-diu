// Initialize the map
const map = L.map('map').setView([22.5, 71.7], 7);

// OSM base layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// === ROUTE 1: Your Original Sightseeing Route ===
const route1 = [
  [23.0225, 72.5714], // Ahmedabad
  [22.7368, 72.3486], // Limbdi
  [21.7645, 72.1519], // Bhavnagar
  [21.1024, 71.7543], // Mahuva
  [21.5260, 70.4667], // Uparkot Fort (Junagadh)
  [21.1266, 70.8205], // Gir National Park (Sasan Gir)
  [20.8880, 70.4019], // Shree Somnath Temple
  [20.7839, 70.4941], // Una
  [20.7199, 70.7139]  // Diu
];

// === ROUTE 2: Scenic Alternative (Limbdi to Uparkot) ===
// Limbdi → Amreli → Chalala → Dhari → Uparkot Fort (Junagadh)
const route2 = [
  [22.7368, 72.3486], // Limbdi
  [21.6015, 71.2165], // Amreli: Town with palaces, temples, Ambardi Safari Park
  [21.4103, 71.1660], // Chalala: Close to Bhurakhiya Hanuman Temple
  [21.3253, 71.0267], // Dhari: Gateway to Gir forest from Amreli side
  [21.5260, 70.4667]  // Uparkot Fort, Junagadh
];

// ROUTE 1 - Red, normal width
L.polyline(route1, {color: 'red', weight: 5, opacity: 0.8}).addTo(map);

// ROUTE 2 - Blue, dashed, alternative route
L.polyline(route2, {color: 'blue', weight: 4, opacity: 0.75, dashArray: '8'}).addTo(map);

// === MARKERS AND POPUPS ===
const markerData = [
  {
    lat: 23.0225, lng: 72.5714,
    name: "Ahmedabad",
    desc: "Start: Major city known for Sabarmati Ashram, textiles, and street food."
  },
  {
    lat: 22.7368, lng: 72.3486,
    name: "Limbdi",
    desc: "Famous for Gujarati snacks and sweets—stop for local treats."
  },
  {
    lat: 21.7645, lng: 72.1519,
    name: "Bhavnagar",
    desc: "Historic city—Takhteshwar Temple, Gandhi Smriti, and Palitana temples nearby."
  },
  {
    lat: 21.1024, lng: 71.7543,
    name: "Mahuva",
    desc: "Seaside town known for beaches, coconut plantations, and seafood."
  },
  {
    lat: 21.5260, lng: 70.4667,
    name: "Uparkot Fort (Junagadh)",
    desc: "Ancient fort, Buddhist caves, medieval ramparts, panoramic views of Junagadh."
  },
  {
    lat: 21.1266, lng: 70.8205,
    name: "Gir National Park",
    desc: "Home of the Asiatic Lion; jungle safaris available at Sasan Gir."
  },
  {
    lat: 20.8880, lng: 70.4019,
    name: "Shree Somnath Temple",
    desc: "Ancient Jyotirlinga site; spectacular temple by the sea."
  },
  {
    lat: 20.7839, lng: 70.4941,
    name: "Una",
    desc: "Town known as gateway to Diu; last break before crossing to island."
  },
  {
    lat: 20.7199, lng: 70.7139,
    name: "Diu",
    desc: "Destination: Known for beaches, churches, Diu Fort, seafood."
  },

  // Intermediate sites for alternative route:
  {
    lat: 21.6015, lng: 71.2165,
    name: "Amreli",
    desc: "Old town—visit Nagnath Mandir, Kalapi Museum, Ambardi Safari Park."
  },
  {
    lat: 21.4103, lng: 71.1660,
    name: "Chalala",
    desc: "Nearby Bhurakhiya Hanuman Temple, rural quiet spot."
  },
  {
    lat: 21.3253, lng: 71.0267,
    name: "Dhari",
    desc: "Gateway village to Gir from Amreli side; tranquil natural environment."
  }
];

// Add markers with popups for all places
markerData.forEach(p => {
  L.marker([p.lat, p.lng], {draggable: false})
    .addTo(map)
    .bindPopup('<b>' + p.name + '</b><br>' + p.desc);
});