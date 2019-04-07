import React from "react";
import Animal from "../../components/Animal"
import { connect } from "react-redux";
import { fetchAnimals } from "../../store/modules/animals";

class AnimalContainer extends React.Component {
    componentWillMount() {
        if(!this.props.animals)
            this.props.fetchData(`${process.env.PUBLIC_URL}/json/animals.json`);
    }

    render() {
        return (
            <Animal name={this.getName()}/>
        )
    }

    getName() {
        const animal = this.props.animals.find(animal => animal.id === this.props.id);

        if(animal)
            return animal.name

        return "Животное не найдено!";
    }
}


const mapStateToProps = state => {
    return {
        animals: state.animals.animals,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(fetchAnimals(url)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnimalContainer);
