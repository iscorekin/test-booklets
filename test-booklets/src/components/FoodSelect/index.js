import React from "react";
import UISelect from "../../ui/Select"

const FoodSelect = props => (
    <div>
        <h3>Еда для животного</h3>
        <UISelect data={props.data} />
    </div>
)

export default FoodSelect;