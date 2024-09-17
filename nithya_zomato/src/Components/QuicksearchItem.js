import React, { Component } from 'react';
import withNavigate from './withNavigation'; // Adjust the path as needed

class QuicksearchItem extends Component {
    handleNavigate = (Mealtype) => {
        const { navigate } = this.props;
        if (navigate) {
            navigate(`/filter?mealtype=${Mealtype}`);
        } else {
            console.error('Navigate function is not defined');
        }
    }

    render() {
        const { name, content, image, meal_type } = this.props.quicksearchItemData;
        return (
            <>
                <div className="qs-box col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4" onClick={() => this.handleNavigate(meal_type)}>
                    <div className="qs-box-contents">
                        <img src={`./${image}`} alt="Image not Found" className="qs-img" />
                        <h4 className="qs-item-heading">{name}</h4>
                        <p className="qs-item-description">{content}</p>
                    </div>
                </div>
            </>
        );
    }
}

export default withNavigate(QuicksearchItem);



