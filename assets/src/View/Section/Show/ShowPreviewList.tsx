import * as React from 'react';
import ShowPreview from './ShowPreview';
import {connect} from 'react-redux';
import {RootState} from 'Storage/Reducer/RootReducer';

/**
 * @interface Props
 */
interface Props {
}

/**
 * @const ShowPreviewList
 */
const ShowPreviewList: React.FC<Props> = connect(({show}: RootState) => ({
    show,
}))(({show}) => {
    return <ShowPreview show={show}/>;
});

export default ShowPreviewList;
