import React from 'react'

const images = [
  '/img1.jpeg', '/img2.jpeg', '/img3.jpeg', '/img4.jpeg', '/img5.jpeg',
  '/img6.jpeg', '/img7.jpeg', '/img8.jpeg', '/img9.jpeg', '/img10.jpeg',
]

export default function ImageScroller() {
  return (
    <div className="image-scroller">
      <div className="image-track">
        {images.concat(images).map((src, i) => (
          <div className="image-scroller-item" key={i}>
            <img src={src} alt="Drishyakabbo performance" />
          </div>
        ))}
      </div>
    </div>
  )
}
