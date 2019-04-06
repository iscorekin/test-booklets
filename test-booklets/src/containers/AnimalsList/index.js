import React from "react";
import AnimalsList from "../../components/AnimalsList/index"
import { connect } from "react-redux";
import { fetchAnimals } from "../../store/modules/animals";

class AnimalsListContainer extends React.Component {
    componentWillMount() {
        this.props.fetchData(`${process.env.PUBLIC_URL}/json/animals.json`);
    }

    render() {
        return (
            <AnimalsList
                data={this.props.animals.map(animal => {
                    return {
                        label: animal.name,
                        link: `${process.env.PUBLIC_URL}/animal/${animal.id}`
                    }
                })}
            />
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(AnimalsListContainer);
