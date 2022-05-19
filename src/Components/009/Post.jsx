function Post({ post, index }) {
    return (
        <div>
            <span
                style={{
                    borderBottom: index % 2 === 0 ? '1px solid white' : 'none',
                }}
            >
                {post.title}
            </span>
            <i style={{ color: 'red' }}>{' ' + post.id}</i>
        </div>
    );
}

export default Post;
