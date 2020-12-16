import * as React from "react"
import ShowPreview from "./ShowPreview"
import {connect} from "react-redux";
import {RootState} from "Storage/Reducer/RootReducer";

interface Props {
}

const ShowPreviewList: React.FC<Props> = connect(({show}: RootState) => ({
    show: show
}))(({show}) => {
    return (
        <div>
            <ShowPreview show={show}/>
        </div>)
})

export default ShowPreviewList
