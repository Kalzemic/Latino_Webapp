import { useState, useRef } from "react";
import './BackgroundMusic.css'

function BackgroundMusic() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleMusic = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause(); // Pause music
            } else {
                audioRef.current.volume = 0.08; // Set default volume
                audioRef.current.play(); // Play music
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="music-container">
            <audio ref={audioRef} loop>
                <source src="/Latino-song.mp3" type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
            <button onClick={toggleMusic} className="music-button">
                {isPlaying ? "השתק 🔇" : "נגן 🎵"}
            </button>
        </div>
    );
}

export default BackgroundMusic;
