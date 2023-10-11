import React from 'react';
import './Secpage.css';
import Photo from './Carousel';
import photo from './Data';

function Secpage() {
    return (
        <div className='text-center container'>
            <h3 style={{ color: '#FFA500' }} className='head'>What We Offer</h3>
            <p className='text-muted'>Leading analysts have ranked us one of the best online grocery shop, <br /> beacuse of how accessible available our products are and most of  <br />all promp delivery. We are dedicated to ensuring that customers needs are adequately met.
            </p>
            <br/>

            {/* <Photo  img={photo}  /> */}

            <div className='border container  main'>
                <div className='d-flex'>
                    <div className='border mt-3 border border-success offer m-2'>
                    <h6 style={{color: '#006400'}}>1. Convinience:</h6>
                        <p> With Online Shopping, you can shop from the comfort<br />
                            of your home, at anytime of the day or night.You dont need to travel
                            to physical stores or wait in long queues.</p>
                    </div>
                    <div className='border mt-3 border border-success offer m-2'>
                    <h6 style={{color: '#006400'}}>2. Wide Varieties:</h6>
                        <p>  Online stores typically offers a wide selection products <br />
                            compared to brick and mortar stores.You can find a wide range of
                            brands,sizes,colors, and styles all in one place.</p>
                    </div>
                    <div className='border mt-3 border border-success offer m-2'>
                    <h6 style={{color: '#006400'}}>3.Price Comparisons:</h6>
                        <p> Its easier to compare prices between different online retailers<br />
                            allowing you find the best deals and discounts.You can also read reviews from
                            other customers to make informed purchasing decisions.</p>
                    </div>
                </div>

                <div className='d-flex'>
                    <div className='border mt-3 border border-success offer m-2'>
                    <h6 style={{color: '#006400'}}>4. Time-Saving:</h6>
                        <p> Our online shopping saves time by eliminating the need to drive to multiple<br />
                            stores, searching for products and wait inline for payments.With a few clicks, you can find what you need
                             and complete your payment.</p>
                    </div>
                    <div className='border mt-3 border border-success offer m-2'>
                    <h6 style={{color: '#006400'}}>5. Accessibility:</h6>
                        <p>Online shopping provides access to products that may not be available <br />
                            in your local area
                            we can source them due to popular demand making life easy.</p>
                    </div>
                    <div className='border mt-3 border border-success offer m-2'>
                    <h6 style={{color: '#006400'}}>6. Delivery Options:</h6>
                        <p> We offer different delivery options, including instant<br />
                            delivery which usually takes between 45mins-1hour from when payment is made, 
                            and other options depending on your prefered time.</p>
                    </div>
                </div>

                {/* <div className=''>
                    
                    <div className='border mt-3 offer m-2'>
                        <p><span className='bold'>6. No-Refund Policy:</span> We offer a no refund policy, so clients are expected to<br />
                            carefully pick out what they want and check the cart just to be sure, 
                            to ensure a smooth relationship between clients and the Company.</p>
                    </div>
                </div> */}
                 <div className='border offer  border-success m-2'>
                        <p><span style={{color:'#FFA500'}}> No-Refund Policy:</span> We offer a no refund policy, so clients are expected to<br />
                            carefully pick out what they want and check the cart just to be sure, 
                            to ensure a smooth relationship between clients and the Company.</p>
                    </div>


            </div>

            



        </div>
    );
}

export default Secpage;
