import React, { useState } from 'react'

const SlideShow = (props) => {
    const[currentDisplay,setCurrentDisplay] = useState(props.slides[0]);

    const nextSlide = ()=>{
        if(currentDisplay.id < props.slides.length -1){
            setCurrentDisplay(props.slides[currentDisplay.id +1]);
        }
    }

    const prevSlide = ()=>{
        if(currentDisplay.id > 0){
            setCurrentDisplay(props.slides[currentDisplay.id -1]);
        }
    }

  return (
    <div>
      <div className="display-container">
        
        <div className='art-container'>
            <h1 className='art-caption'>{currentDisplay.name}</h1>
            <img className='slide-show-art' src={currentDisplay.img}></img>
        </div>
        <div className="selection-container">
            <button className='nav-btn' onClick={() => prevSlide()}>Prev</button>
            {props.slides.map(item => 
                <button id ={item.id} className='selector' onClick={()=>setCurrentDisplay(item)}></button>
            )}
            <button className='nav-btn' onClick={() => nextSlide()}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default SlideShow
