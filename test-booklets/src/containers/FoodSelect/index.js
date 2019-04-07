import React from "react";
import FoodSelect from "../../components/FoodSelect";
import { fetchFood } from "../../store/modules/food";
import { connect } from "react-redux";

class FoodSelectContainer extends React.Component {
    componentWillMount() {
        if(this.props.food)
            this.props.fetchData(`${process.env.PUBLIC_URL}/json/food.json`);
    }

    render() {
        return (
            <FoodSelect data={this.props.food.map(item => {return {label: item.name, value: item.id}})}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        food: state.food.food,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(fetchFood(url)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodSelectContainer);
