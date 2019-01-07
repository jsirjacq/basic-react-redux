import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createPost} from "../../store/actions/postActions";
import services from "../../services/services";

class Postform extends Component {

    constructor(props) {
        super(props);
        this.titleTemp = '';
        this.bodyTemp = '';
        this.state = {
            post: {}
        };
        this.onModifTitle = this.onModifTitle.bind(this);
        this.onModifBody = this.onModifBody.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onModifTitle(e) {
        this.titleTemp = e.target.value;
    }

    onModifBody(e) {
        this.bodyTemp = e.target.value;
    }

    onSubmit(e) {
        e.preventDefault();
        const post = {
            title: this.titleTemp,
            body: this.bodyTemp
        };
        this.setState({ post: post });
        this.props.createPost(post);
    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title : </label><br/>
                        <input type="text" name="title" onChange={this.onModifTitle}/>
                    </div>
                    <br/>
                    <div>
                        <label>Body : </label><br/>
                        <input type="text" name="body" onChange={this.onModifBody}/>
                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

Postform.propTypes = {
    createPost: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});


function mapDispatchToProps(dispatch) {
    return {
        createPost: post => dispatch(createPost(post)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Postform);
