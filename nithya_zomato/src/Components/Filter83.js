// import React, { Component } from 'react'
// import "../Styles/Fil83.css";
// import Header84 from './Header84';
// import queryString from 'query-string';
// import axios from 'axios';

// export class Filter83 extends Component {

//     componentDidMount() {
//         const { search } = window.location;
//         const qs = queryString.parse(search);
//         const {mealtype} =qs;

//         const FilterObject={
//             mealtype_id:mealtype
//         }

//         axios({
//             method: "POST",
//             url: 'http://localhost:5000/filter',
//             headers: { "Content-Type": "application/json" }
//         })
//         .then(response => {
//             this.setState({ mealtype: response.data.Mealtype });
//         })
//         .catch(err => {
//             this.setState({ error: 'Failed to fetch Mealtypes' });
//             console.error(err);
//         });
//     }

//     render() {
//         return (
//             <div>
//                 {/* <nav className="navbar navbar-light bg-danger">
//                     <a className="navbar-brand text-white" href="#" >e!</a>
//                     <div>
//                         <button className="btn btn-outline-light" type="button">Login</button>
//                         <button className="btn btn-outline-light" type="button">Create an account</button>
//                     </div>
//                 </nav> */}
//                 <Header84/>
//                 <div className="container mt-4">
//                     <div className="row">
//                         <div className="col-md-3">
//                             <div className="sidebar p-3">
//                                 <h5>Filters</h5>
//                                 <div className="form-group">
//                                     <label for="locationSelect">Select Location</label>
//                                     <select className="form-control" id="locationSelect">
//                                         <option>Select Location</option>
//                                         <option value="chennai">chennai</option>
//                                         <option value="coimbatore">coimbatore</option>
//                                         <option value="madurai">madurai</option>
//                                         <option value="trichy">trichy</option>
//                                         <option value="salem">salem</option>
//                                     </select>
//                                 </div>
//                                 <h6>Cuisine</h6>
//                                 <div className="form-check">
//                                     <input className="form-check-input" type="checkbox" value="" id="northIndian" />
//                                     <label className="form-check-label" for="northIndian">North Indian</label>
//                                 </div>
//                                 <div className="form-check">
//                                     <input className="form-check-input" type="checkbox" value="" id="southIndian" />
//                                     <label className="form-check-label" for="southIndian">South Indian</label>
//                                 </div>
//                                 <div className="form-check">
//                                     <input className="form-check-input" type="checkbox" value="" id="chinese" />
//                                     <label className="form-check-label" for="chinese">Chinese</label>
//                                 </div>
//                                 <div className="form-check">
//                                     <input className="form-check-input" type="checkbox" value="" id="fastFood" />
//                                     <label className="form-check-label" for="fastFood">Fast Food</label>
//                                 </div>
//                                 <div className="form-check">
//                                     <input className="form-check-input" type="checkbox" value="" id="streetFood" />
//                                     <label className="form-check-label" for="streetFood">Street Food</label>
//                                 </div>
//                                 <h6 className="mt-3">Cost For Two</h6>
//                                 <div className="form-check">
//                                     <input className="form-check-input" type="radio" name="costForTwo" id="cost500" value="500" />
//                                     <label className="form-check-label" for="cost500">Less than ₹500</label>
//                                 </div>
//                                 <div className="form-check">
//                                     <input className="form-check-input" type="radio" name="costForTwo" id="cost1000" value="1000" />
//                                     <label className="form-check-label" for="cost1000">₹500 to ₹1000</label>
//                                 </div>
//                                 <div className="form-check">
//                                     <input className="form-check-input" type="radio" name="costForTwo" id="cost1500" value="1500" />
//                                     <label className="form-check-label" for="cost1500">₹1000 to ₹1500</label>
//                                 </div>
//                                 <div className="form-check">
//                                     <input className="form-check-input" type="radio" name="costForTwo" id="cost2000" value="2000" />
//                                     <label className="form-check-label" for="cost2000">₹1500 to ₹2000</label>
//                                 </div>
//                                 <div className="form-check">
//                                     <input className="form-check-input" type="radio" name="costForTwo" id="cost2000plus" value="2000+" />
//                                     <label className="form-check-label" for="cost2000plus">₹2000+</label>
//                                 </div>
//                                 <h6 className="mt-3">Sort</h6>
//                                 <div className="form-check">
//                                     <input className="form-check-input" type="radio" name="sort" id="lowToHigh" value="lowToHigh" />
//                                     <label className="form-check-label" for="lowToHigh">Price low to high</label>
//                                 </div>
//                                 <div className="form-check">
//                                     <input className="form-check-input" type="radio" name="sort" id="highToLow" value="highToLow" />
//                                     <label className="form-check-label" for="highToLow">Price high to low</label>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-9">
//                             <div className='Size'>
//                                 <h4>Breakfast Places in TamilNadu</h4>
//                                 <div className="restaurant">
//                                     <img src="./Assets/vegFilterImg.jpeg" alt="The Big Chill Cakery" />
//                                     <h5>The Anna Poorna</h5>
//                                     <p>FORT<br />Shop 1, Plot A, Samruddhi Complex, Saravanampatti ...</p>
//                                     <p><strong>Cuisines:</strong> Pure veg<br /><strong>Cost For Two:</strong> ₹500</p>
//                                 </div>
//                                 <div className="restaurant">
//                                     <img src="./Assets/NonvegFilterImg.jpg" alt="The Bake Shop" />
//                                     <h5>Hydrabadi Biriyani</h5>
//                                     <p>FORT<br />Shop 2, Plot B, Anu Complex, Kaalapatti...</p>
//                                     <p><strong>Cuisines:</strong>  Non-veg<br /><strong>Cost For Two:</strong> ₹700</p>
//                                 </div>
//                             </div>

//                             <nav>
//                                 <ul className="pagination">
//                                     <li className="page-item"><a className="page-link" href="#">{'<'}</a></li>
//                                     <li className="page-item"><a className="page-link" href="#">1</a></li>
//                                     <li className="page-item"><a className="page-link" href="#">2</a></li>
//                                     <li className="page-item"><a className="page-link" href="#">3</a></li>
//                                     <li className="page-item"><a className="page-link" href="#">4</a></li>
//                                     <li className="page-item"><a className="page-link" href="#">5</a></li>
//                                     <li className="page-item"><a className="page-link" href="#">{'>'}</a></li>
//                                 </ul>
//                             </nav>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         )
//     }
// }

// export default Filter83





import React, { Component } from 'react'
import "../Styles/Fil83.css";
import Header84 from './Header84';
import queryString from 'query-string';
import axios from 'axios';

export class Filter83 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Melres:[]
            
           
        };
    }


    componentDidMount() {
        const { search } = window.location;
        const qs = queryString.parse(search);
        const {mealtype} =qs;

        const FilterObject={
            mealtype_id:Number(mealtype)
        }

        axios({
            method: "POST",
            url: 'http://localhost:5000/filter',
            headers: { "Content-Type": "application/json" },
            Data:FilterObject
        })
        .then(response => {
            this.setState({ Melres: response.data });
            console.log("aabcf",response.data)
        })
        .catch(err => {
            this.setState({ error: 'Failed to fetch Mealtypes' });
            console.error(err);
        });
    }

    render() {
        return (
           
            <div>
                {/* <nav className="navbar navbar-light bg-danger">
                    <a className="navbar-brand text-white" href="#" >e!</a>
                    <div>
                        <button className="btn btn-outline-light" type="button">Login</button>
                        <button className="btn btn-outline-light" type="button">Create an account</button>
                    </div>
                </nav> */}
                <Header84/>
            
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="sidebar p-3">
                                <h5>Filters</h5>
                                <div className="form-group">
                                    <label for="locationSelect">Select Location</label>
                                    <select className="form-control" id="locationSelect">
                                        <option>Select Location</option>
                                        <option value="chennai">chennai</option>
                                        <option value="coimbatore">coimbatore</option>
                                        <option value="madurai">madurai</option>
                                        <option value="trichy">trichy</option>
                                        <option value="salem">salem</option>
                                    </select>
                                </div>
                                <h6>Cuisine</h6>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="northIndian" />
                                    <label className="form-check-label" for="northIndian">North Indian</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="southIndian" />
                                    <label className="form-check-label" for="southIndian">South Indian</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="chinese" />
                                    <label className="form-check-label" for="chinese">Chinese</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="fastFood" />
                                    <label className="form-check-label" for="fastFood">Fast Food</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="streetFood" />
                                    <label className="form-check-label" for="streetFood">Street Food</label>
                                </div>
                                <h6 className="mt-3">Cost For Two</h6>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="costForTwo" id="cost500" value="500" />
                                    <label className="form-check-label" for="cost500">Less than ₹500</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="costForTwo" id="cost1000" value="1000" />
                                    <label className="form-check-label" for="cost1000">₹500 to ₹1000</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="costForTwo" id="cost1500" value="1500" />
                                    <label className="form-check-label" for="cost1500">₹1000 to ₹1500</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="costForTwo" id="cost2000" value="2000" />
                                    <label className="form-check-label" for="cost2000">₹1500 to ₹2000</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="costForTwo" id="cost2000plus" value="2000+" />
                                    <label className="form-check-label" for="cost2000plus">₹2000+</label>
                                </div>
                                <h6 className="mt-3">Sort</h6>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="sort" id="lowToHigh" value="lowToHigh" />
                                    <label className="form-check-label" for="lowToHigh">Price low to high</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="sort" id="highToLow" value="highToLow" />
                                    <label className="form-check-label" for="highToLow">Price high to low</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className='Size'>
                                <h4>Breakfast Places in TamilNadu</h4>
                                <div className="restaurant">
                                    <img src="./Assets/vegFilterImg.jpeg" alt="The Big Chill Cakery" />
                                    <h5>The Anna Poorna</h5>
                                    <p>FORT<br />Shop 1, Plot A, Samruddhi Complex, Saravanampatti ...</p>
                                    <p><strong>Cuisines:</strong> Pure veg<br /><strong>Cost For Two:</strong> ₹500</p>
                                </div>
                                <div className="restaurant">
                                    <img src="./Assets/NonvegFilterImg.jpg" alt="The Bake Shop" />
                                    <h5>Hydrabadi Biriyani</h5>
                                    <p>FORT<br />Shop 2, Plot B, Anu Complex, Kaalapatti...</p>
                                    <p><strong>Cuisines:</strong>  Non-veg<br /><strong>Cost For Two:</strong> ₹700</p>
                                </div>
                            </div>

                            <nav>
                                <ul className="pagination">
                                    <li className="page-item"><a className="page-link" href="#">{'<'}</a></li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                                    <li className="page-item"><a className="page-link" href="#">5</a></li>
                                    <li className="page-item"><a className="page-link" href="#">{'>'}</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Filter83