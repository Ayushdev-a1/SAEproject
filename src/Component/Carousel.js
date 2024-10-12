import React from 'react'
import fig1 from "../Asset/carsole1.webp"
import fig2 from "../Asset/carsolue2.webp"
import fig3 from "../Asset/carsolue3.webp"
import fig4 from "../Asset/carsolue4.webp"
export default function Carousel() {
  return (
    <>
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="1000">
            <img src={fig1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="1000">
            <img src={fig2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={fig3} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={fig4} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}
