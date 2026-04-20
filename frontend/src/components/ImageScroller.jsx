import React from 'react'

const images = [
  '/WhatsApp Image 2025-12-02 at 10.06.12.jpeg',
  '/WhatsApp Image 2025-12-02 at 10.08.07.jpeg',
  '/WhatsApp Image 2025-12-02 at 10.08.41.jpeg',
  '/WhatsApp Image 2025-12-02 at 10.09.05.jpeg',
  '/WhatsApp Image 2025-12-02 at 10.09.41.jpeg',
  '/WhatsApp Image 2025-12-02 at 10.10.02.jpeg',
  '/WhatsApp Image 2025-12-02 at 10.18.11.jpeg',
  '/WhatsApp Image 2025-12-02 at 10.19.58.jpeg',
  '/WhatsApp Image 2025-12-02 at 19.25.09.jpeg',
  '/WhatsApp Image 2025-12-02 at 19.26.24.jpeg',
]

export default function ImageScroller() {
  return (
    <section className="container section">
      <div className="page-header">
        <h2>On Stage Moments</h2>
        <p>Glimpses from our rehearsals and performances</p>
      </div>
      <div className="image-scroller">
        <div className="image-track">
          {images.concat(images).map((src, index) => (
            <div className="image-scroller-item" key={index}>
              <img src={src} alt="Drishyakabbo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
