import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from "../store/actions/postActions";
import services from "../services/services"

class Posts extends Component {

    constructor(props) {
        super(props);
        this.refresh = this.refresh.bind(this);
        this.refresh();
    }

    refresh() {
        services.getPostsData().then((posts) => {
            this.props.fetchPosts(posts);
        });
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

function mapDispatchToProps(dispatch) {
    return {
        fetchPosts: posts => dispatch(fetchPosts(posts)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);