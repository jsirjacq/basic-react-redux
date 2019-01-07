import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchImage} from "../../store/actions/imageAction";
import services from "../../services/services"

class Image extends Component {

    render() {

        services.getImageData().then((image) => {
            this.props.fetchImage(image);
        });

        return (
            <div>
                <h1>Image</h1>
                <img src={this.props.image.url}></img>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    image: state.image.image
});

function mapDispatchToProps(dispatch) {
    return {
        fetchImage: image => dispatch(fetchImage(image)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Image);