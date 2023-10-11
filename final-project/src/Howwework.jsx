import React from 'react';
import './Howwework.css';
import 'bootstrap/dist/css/bootstrap.css'
import Button from 'react-bootstrap/Button'


function Howwework() {
    return (
        <div className='container mt-5 work'>
            <div>
                <h3 className='how'>How <span style={{color:'#FFA500'}}>Shopify</span> Works</h3>
                <div>
                
                    <h6><Button  className='m-3'variant="success">1</Button><b>Login or SignUp</b> </h6>
                    <p> Login to your Account or SignUp if you dont own one. <br/>To do this you will need to input your login details. </p>
                    
                </div>
                <div>
                    <h6> <Button  className='m-3'variant="success">2</Button>Visit the Shop Page</h6>
                    <p>Here you will have an extensive list of products you need <br/> with different brands depending on your choice</p>
                </div>
                <div>
                    <h6> <Button  className='m-3'variant="success">3</Button>Add to Cart</h6>
                    <p>Select and Add Items to Cart</p>
                </div>
                <div>
                    <h6> <Button  className='m-3'variant="success">4</Button>Make Payment</h6>
                    <p>Use the available payment method to make payment <br/> because only payment validates your order</p>
                </div>
                <div>
                    <h6> <Button  className='m-3'variant="success">5</Button>Choose a Delivery Time</h6>
                    <p>Relax and Enjoy while awaiting Delivey</p>
                </div>
            </div>
        </div>
    );
}

export default Howwework;
