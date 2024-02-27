const CurrentVideo = (props) => {
    // Destructure for cleaner access to properties
    const { image, title, comments } = props.currentVideo;

    return (
        <section class='current-video'>
            <div>
                <img src={image} alt={title} />
                <h1>{title}</h1>
            </div>
            <div class='current-video__comments'>
                {comments && comments.length > 0 ? (
                    <ul>
                        {comments.map((comment, id) => (
                            <li key={id}>
                                <img className="comment"></img><strong>{comment.name}:</strong> {comment.comment}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No comments to display.</p>
                )}
            </div>
        </section>
    );
};

export default CurrentVideo;
