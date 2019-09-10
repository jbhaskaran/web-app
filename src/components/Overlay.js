import React from 'react'
import ReactDOM from 'react-dom'
import Carousal from './Carousal'

function Overlay({ isShowing, close, images }) {

  return (isShowing ? ReactDOM.createPortal(
    <div id='overlay'>
      <div className='slideshow-container'>
        <button className='close' onClick={close}>Close</button>
        <div className='slides'>
          <Carousal className='carousal' images={images} delay={2000} />
        </div>
      </div>
    </div>, document.body
  ): null)

}

export default Overlay