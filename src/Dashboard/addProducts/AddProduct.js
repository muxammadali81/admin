import { useState } from 'react';
import Sidebar from '../Sidebar';

import './AddProduct.css'

const AddProduct = () => {

    const [active, setActive] = useState(null);

    const nav = [
        {
            id: 1,
            text: "General",
        },
        {
            id: 2,
            text: "Catgeory info",
        },
        {
            id: 3,
            text: "Pricing",
        },
        {
            id: 4,
            text: "Images",
        },
        {
            id: 5,
            text: "SEO keywords",
        },
        {
            id: 6,
            text: "Related items",
        },
    ]

    const contentSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='container'>
            <div className="wrapper">
                <Sidebar />
                <div className="addProduct">
                    <div className="addProduct_header">
                        <h2>Create product</h2>
                        <div>
                            <a className='btn btn-outline-danger' href="/hy">&times; Discard</a>
                        </div>
                    </div>
                    <div className="addProductCard">
                        <div className="addProductCard_body">
                            <div className="addProductCard_nav">
                                {
                                    nav?.map((res, i) => {
                                        return (
                                            <p key={res.id} 
                                            onClick={()=> setActive(i)}
                                            className={active===i ? "navActive" : "closeActive"}>{res?.text}</p>
                                        )
                                    })
                                }
                            </div>
                            <div className="addProductCard_content">
                                <div className="content_body">
                                    <form>
                                        <div className="content_body_item">
                                            <label>Product name*</label>
                                            <div class="content_input">
                                                <input className='form_controls' type="text" placeholder="Type here" />
                                            </div>
                                        </div>

                                        <div className="content_body_item">
                                            <label>Description*</label>
                                            <div class="content_input">
                                                <textarea className='form_controls' placeholder="Type here" rows="4"></textarea>
                                            </div>
                                        </div>

                                        <div className="content_body_item">
                                            <label>Brand</label>
                                            <div class="content_input">
                                                <select size="4" className="form_controls content_input_select ">
                                                    <option>Adidas</option>
                                                    <option>Puma</option>
                                                    <option>Apple</option>
                                                    <option>Toyota</option>
                                                    <option>Toshiba</option>
                                                    <option>Artel</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="content_body_item">
                                            <label>Tax ID</label>
                                            <div class="content_input">
                                                <input type="number" className='form_controls content_input_select' placeholder="012345678" />
                                            </div>
                                        </div>

                                        <div className="content_body_item">
                                            <label>Related tags</label>
                                            <div class="content_input">
                                                <input type="text" className='form_controls content_input_select' placeholder="Type" />
                                            </div>
                                        </div>

                                        <div className="content_body_item">
                                            <label>Status</label>
                                            <div class="content_input check">
                                                <label>
                                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                                    <label style={{ marginLeft: '5px' }} for="vehicle1"> I have a bike</label>
                                                </label>
                                            </div>
                                        </div>
                                        <button onClick={contentSubmit} className='content_body_btn'>Continue to next</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default AddProduct