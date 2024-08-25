import React, { useState } from 'react'
import './Gallary.css'
import Img1 from './images/bird1.jpg'
import Img2 from './images/bird2.jpg'
import Img3 from './images/bird3.jpg'
import Img4 from './images/bird4.jpg'
import Img5 from './images/bird5.jpg'
import Img6 from './images/buffallow.jpg'
import Img7 from './images/dear.jpg'
import Img8 from './images/ele1.jpg'
import Img9 from './images/giraf.jpg'
import Img10 from './images/peacock.jpg'
import Img11 from './images/tiger.jpg'
import Img12 from './images/toiger.jpg'

const Gallary = () => {
  const data = [
    { id: 1, imgsrc: Img1 },
    { id: 2, imgsrc: Img2 },
    { id: 3, imgsrc: Img3 },
    { id: 4, imgsrc: Img4 },
    { id: 5, imgsrc: Img5 },
    { id: 6, imgsrc: Img6 },
    { id: 7, imgsrc: Img7 },
    { id: 8, imgsrc: Img8 },
    { id: 9, imgsrc: Img9 },
    { id: 10, imgsrc: Img10 },
    { id: 11, imgsrc: Img11 },
    { id: 12, imgsrc: Img12 },
  ]

  const [model, setModel] = useState(false)
  const [tempimgsrc, setTempImgsrc] = useState('')

  const openModal = (imgsrc) => {
    setTempImgsrc(imgsrc)
    setModel(true)
  }

  const closeModal = () => {
    setModel(false)
  }

  return (
    <>
      {model && (
        <div className={`model ${model ? 'open' : ''}`} onClick={closeModal}>
          <div className="model-content">
            <img src={tempimgsrc} alt="Large view" />
          </div>
        </div>
      )}
      <div className="gallary">
        {data.map((item) => (
          <div
            className="pics"
            key={item.id}
            onClick={() => openModal(item.imgsrc)}
          >
            <img src={item.imgsrc} alt="Gallery item" />
          </div>
        ))}
      </div>
    </>
  )
}

export default Gallary
