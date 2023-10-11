import React from 'react';
import './Carousel.css'


function Photo({img }) {
    return (
        <div>

            {img.map((sample, index)=>{
                return(
                    <div key={index}>
                        <img src={sample.pic} alt="" className='imgcarousel' />
                    </div>
                )
            })}
        </div>
    );
}

export default Photo;

{/* <div>
            {typ.map((write, index) => {
                return (
                    <div key={index}>
                        <h2>{write.text2}</h2>
                    </div>
                )
            })} */}