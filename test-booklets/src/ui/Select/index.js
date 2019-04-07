import React from "react";
import styled from "styled-components";

const Select = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Component = styled.div`
    flex-grow: 1;
    margin-left: 25%;
    margin-right: 25%;
`;

export default class UISelect extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            filtered: this.props.data,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <Select>
                <Component><input onChange={this.handleChange} /></Component>

                <Component>
                    <select>
                        {this.state.filtered.map(item =>
                            <option value={item.value}>{item.label}</option>
                        )}
                    </select>
                </Component>
            </Select>
        )
    }

    handleChange(event) {
        this.setState({
            filtered: this.props.data.filter(item =>
                event.target.value === "" || item.label.includes(event.target.value)
            )
        });
    }
}