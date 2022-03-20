import React from 'react';
import ReactModal from '../ReactModal/ReactModal';
import './SingleProduct.css'

const SingleProduct = (props) => {
    console.log(props.product.image)
    const { setCartCount } = props;
    console.log(props)
    return (
        <div className='col-md-4'>

            <div className="card p-2 border">
                <img className=' w-50  m-auto ' src={props.product.image} alt="" />
                <h3>{props.product.title.slice(0, 10)}</h3>
                <div className="d-flex justify-content-around">
                    <button onClick={setCartCount} className=' btn btn-success'>Add to Cart</button>
                    <button className=' btn btn-danger'>Delet</button>
                    {/* <button className=' btn btn-info'>Details</button> */}


                </div>
            </div>
        </div>
    );
};

export default SingleProduct;