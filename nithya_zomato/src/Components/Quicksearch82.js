import React from "react";
import QuicksearchItem from "./QuicksearchItem";

class Quicksearch82 extends React.Component {
    render() {
        const { quicksearchData }=this.props;
        console.log("c",quicksearchData)
        return (
            <>
                <div className="bottomSection">
                    <h1 className="qs-heading">Quick Search</h1>
                    <h2 className="qs-sub-heading">Discover Resturant by type of meal</h2>
                    <div className="qs-boxes-container">
                       
                        {
                            quicksearchData.map((item)=>{
                                return  <QuicksearchItem quicksearchItemData={item} />
                            })
                        }
                    </div>
                </div>

            </>
        )
    }
}
export default Quicksearch82;


