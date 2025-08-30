import React, { useState } from 'react'
import './Countries.css'
import Canyon from '../assets/ivana-cajina-LTkQiDwTgBE-unsplash.jpg'
import Niagara from '../assets/56335_kanada-niagara-falls-taras-widokowy.jpg'
import Aurora from '../assets/Aurora-Borealis-600x428.jpg'
import Machu from '../assets/R.jpg'
import Long from '../assets/OIP.webp'
import Lakes from '../assets/from-zagreb-plitvice-lakes-rastoke-private-tour-t436273-2.jpg'
import Salar from '../assets/Salar-de-Uyuni-Wikimedia-Commons-1-2048x1278.jpg'
import Reyn from '../assets/OIP (1).webp'
import Antilopa from '../assets/antilop.jpg'
import Mount from '../assets/mount.jpg'
const countries = [
  {
    title: "Grand Canyon – USA",
    image: Canyon,
    description: "One of the deepest and widest canyons on Earth. Watching the sunset here is an unforgettable moment.",
    location: "Arizona, United States",
    coordinates: "36.1069° N, 112.1129° W",
    howToGet: "Fly to Phoenix or Las Vegas, then drive 4-5 hours. Best time to visit: March-May or September-November.",
    bestTime: "Spring and Fall",
    travelTime: "4-5 hours by car from major cities"
  },
  {
    title: "Niagara Falls – USA/Canada",
    image: Niagara,
    description: "One of the most famous waterfalls in the world. The powerful water flow is amazing.",
    location: "Border of Ontario, Canada and New York, USA",
    coordinates: "43.0962° N, 79.0377° W",
    howToGet: "Fly to Toronto or Buffalo, then drive 1-2 hours. Take a boat tour to experience the falls up close.",
    bestTime: "June to August",
    travelTime: "1-2 hours by car from Toronto or Buffalo"
  },
  {
    title: "Aurora (Northern Lights) – Norway",
    image: Aurora,
    description: "Colorful lights dancing in the night sky – a miracle of nature.",
    location: "Tromsø, Norway",
    coordinates: "69.6492° N, 18.9553° E",
    howToGet: "Fly to Tromsø Airport, then take guided tours. Best viewed from September to March.",
    bestTime: "September to March",
    travelTime: "Direct flights available to Tromsø"
  },
  {
    title: "Machu Picchu – Peru",
    image: Machu,
    description: "Ancient Inca city in the Andes mountains. Harmony of nature and history.",
    location: "Cusco Region, Peru",
    coordinates: "13.1631° S, 72.5450° W",
    howToGet: "Fly to Cusco, then take train or hike the Inca Trail. Book tickets in advance.",
    bestTime: "April to October",
    travelTime: "3.5 hours by train from Cusco"
  },
  {
    title: "Ha Long Bay – Vietnam",
    image: Long,
    description: "Limestone islands rising from the water offer a peaceful landscape.",
    location: "Quảng Ninh Province, Vietnam",
    coordinates: "20.9101° N, 107.1839° E",
    howToGet: "Fly to Hanoi, then drive 3-4 hours or take a cruise from Hanoi.",
    bestTime: "March to May and September to November",
    travelTime: "3-4 hours by car from Hanoi"
  },
  {
    title: "Plitvice Lakes – Croatia",
    image: Lakes,
    description: "Harmony of lakes, waterfalls, and green forests.",
    location: "Lika-Senj County, Croatia",
    coordinates: "44.8654° N, 15.5820° E",
    howToGet: "Fly to Zagreb or Split, then drive 2-3 hours. Take guided tours for best experience.",
    bestTime: "April to October",
    travelTime: "2-3 hours by car from Zagreb"
  },
  {
    title: "Salar de Uyuni – Bolivia",
    image: Salar,
    description: "The world's largest salt flat. During the rainy season, it looks like a mirror reflecting the sky.",
    location: "Daniel Campos Province, Bolivia",
    coordinates: "20.1339° S, 67.4891° W",
    howToGet: "Fly to La Paz, then take domestic flight to Uyuni. Join guided tours for safety.",
    bestTime: "December to April (rainy season for mirror effect)",
    travelTime: "1 hour flight from La Paz to Uyuni"
  },
  {
    title: "Rhine Falls – Switzerland",
    image: Reyn,
    description: "One of the largest waterfalls in Europe. Famous for its powerful water flow.",
    location: "Schaffhausen, Switzerland",
    coordinates: "47.6786° N, 8.6150° E",
    howToGet: "Fly to Zurich, then take train to Schaffhausen (1 hour). Easy access by public transport.",
    bestTime: "May to September",
    travelTime: "1 hour by train from Zurich"
  },
  {
    title: "Antelope Canyon – USA",
    image: Antilopa,
    description: "Natural canyon formed from red sandstone. The play of light and shadows makes this place magical.",
    location: "Page, Arizona, USA",
    coordinates: "36.8619° N, 111.3743° W",
    howToGet: "Fly to Page or drive from Las Vegas/Phoenix. Guided tours required for access.",
    bestTime: "March to October",
    travelTime: "5-6 hours by car from Las Vegas"
  },
  {
    title: "Mount Roraima – Venezuela",
    image: Mount,
    description: "The top of the mountain is flat, like a ship that fell from the sky. A very unique landscape.",
    location: "Gran Sabana, Venezuela",
    coordinates: "5.2783° N, 60.7706° W",
    howToGet: "Fly to Caracas, then domestic flight to Santa Elena. Requires guided trekking expedition.",
    bestTime: "December to April",
    travelTime: "6-8 day trekking expedition"
  }
];

function Countries() {
  const [selectedPlace, setSelectedPlace] = useState(null)
  const openModal = (place) => {
    setSelectedPlace(place)
  }
  const closeModal = () => {
    setSelectedPlace(null)
  }
  return (
        <div>
     <header className="header">
        <h1>Places I want to visit</h1>
        <p>I really want to see the wonders of nature with my own eyes.</p>
      </header>

      <section className="places">
        {countries.map((place, index) => (
          <div className="card" key={index}>
            <img
              src={place.image}
              alt={place.title}
              onClick={() => openModal(place)}
              style={{ cursor: 'pointer' }}
            />
            <h2>{place.title}</h2>
            <p>{place.description}</p>
          </div>
        ))}
      </section>

      {/* Modal */}
      {selectedPlace && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img src={selectedPlace.image} alt={selectedPlace.title} />
            <div className="modal-info">
              <h3>{selectedPlace.title}</h3>
              <p className="description">{selectedPlace.description}</p>
              
              <div className="info-grid">
                <div className="info-item">
                  <h4>📍 Location</h4>
                  <p>{selectedPlace.location}</p>
                  <span className="coordinates">{selectedPlace.coordinates}</span>
                </div>
                
                <div className="info-item">
                  <h4>🚗 How to Get There</h4>
                  <p>{selectedPlace.howToGet}</p>
                </div>
                
                <div className="info-item">
                  <h4>⏰ Best Time to Visit</h4>
                  <p>{selectedPlace.bestTime}</p>
                </div>
                
                <div className="info-item">
                  <h4>⏱️ Travel Time</h4>
                  <p>{selectedPlace.travelTime}</p>
                </div>
              </div>
            </div>
            <button className="close" onClick={closeModal}>&times;</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Countries
