import React, { useState, useEffect } from 'react'

export default function Carousal({ images, delay }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timerId = setInterval(() => {
      index  === images.length - 1 ? setIndex(0) : setIndex(index + 1)
    }, delay)
    return () => clearInterval(timerId)
  }, [images, index, delay])

  return (
    <>
      <img className='img' src={images[index].href} alt={images[index].href} />
      <div className="dot-container">
        {images.map((image, i) => {
          if (i === index) {
            return <span key={i} className="dot active" onClick={() => setIndex(i)}></span>
          } else {
            return <span key={i} className="dot" onClick={() => setIndex(i)}></span> 
          }
        })}
        {index !== 0 && <a onClick={() => setIndex(index - 1)} className="prev">&#10094;</a>
        }
        {index !== images.length - 1 && <a onClick={() => setIndex(index + 1)} className="next">&#10095;</a>
        }
      </div>
    </>
  )
}