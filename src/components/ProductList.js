import React, { useState, useEffect } from 'react'
import useProduct from './useProduct'
import useOverlay from './useOverlay'
import Overlay from './Overlay'

function ProductList() {
    const [{ loading, error, response }, callProducts] = useProduct()
    const { isOverlayDisplaying, toggle } = useOverlay()
    const [images, setImages] = useState([])

    const showCarousal = (images) => {
      toggle()
      setImages(images)
    }

    useEffect(() => {
      callProducts()
    }, [callProducts])

    return (
      <div className='product-container'>
        <Overlay 
          isShowing={isOverlayDisplaying} 
          close={toggle}
          images={images} />
        {loading && <div>Loading...</div>}
        {error && <div>There was an error: {error}</div>}
        {response && !error && !loading && <div className='grid-container'>
          <div className="grid-x grid-margin-x small-up-1 medium-up-2 large-up-3">
            {response.map((product, i) => (
              <div key={i} className='cell'>
                <div className="card product-card">
                  <div className="card-divider">
                    <h4 className='title'>{product.name}</h4>
                  </div>
                  <img alt={product.hero.alt} src={product.hero.href} onClick={() => showCarousal(product.images)} />
                  <div className="card-section">
                    <h4 className='price'>${product.priceRange.selling.high}</h4>
                  </div>
                </div>              
              </div>
            ))}
          </div>
        </div>}
      </div>
    )
}

export default ProductList