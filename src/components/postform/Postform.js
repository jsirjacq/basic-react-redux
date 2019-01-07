import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createPost} from "../../store/actions/postActions";
import services from "../../services/services";

class Postform extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        const postData = {
            title: this.state.title,
            body: this.state.body
        }
        services.createPostRequest(postData).then((postRes) => {
            this.props.createPost(postRes)
        })
    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title : </label><br/>
                        <input type="text" name="title" onChange={this.onChange}
                               value={this.state.title}/>
                    </div>
                    <br/>
                    <div>
                        <label>Body : </label><br/>
                        <textarea name="body" onChange={this.onChange} value={this.state.body}/>
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
