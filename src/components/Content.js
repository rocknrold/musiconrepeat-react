const Content = ({source, vidId}) => {
    return (
        <div className="content-player">
            <iframe width="100%" height="315" src={source + `?version=3&loop=1&autoplay=1&playlist=${vidId}`} frameBorder="0" allowFullScreen allow="autoplay; loop;"></iframe>
            {/* Autoplay and loop will work only if used the src=videoid and set the playlist=videoid to its own id it will loop it self */}
            {/* newer version will require you to use &amp; to concatenate but & alone still works */}
            {/* <iframe width="100%" height="315" src={source + `?version=3&amp;loop=1&amp;autoplay=1&amp;playlist=${vidId}`} frameBorder="0" allowFullScreen allow="autoplay; loop;"></iframe> */}
        </div>
    );
}
 
export default Content;