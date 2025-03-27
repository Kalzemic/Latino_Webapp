import "./BackgroundVideo.css"

function BackgroundVideo() {
    return (
        <video className="background-video" autoPlay loop muted>
            <source src="/latino_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
}



export default BackgroundVideo;