import { useState } from 'react';

const Player = ({ Song, Time }) => {

    // Hooks for toggling states
    const [isPlaying, PlayPause] = useState(false);
    const [shuffleOn, toggleShuffle] = useState(false);
    const [loopOn, toggleLoop] = useState(false);
    const [volume, setVolume] = useState(50);
    const [time, setTime] = useState(0);

    const togglePlay = () => {
        PlayPause(!isPlaying);
    };

    const shuffle = () => {
        toggleShuffle(!shuffleOn);
    };

    const loop = () => {
        toggleLoop(!loopOn);
    };

    const changeVolume = (event) => {
        setVolume(event.target.value);
    }

    const windTime = (event) => {
        setTime(event.target.value);
    }

    return(
        <>
        <div className="PlayerContainer">
            <div className="TimelineContainer">
                <input
                className="Timeline"
                type="range"
                min="0"
                max={Time.max}
                value={Time.current}
                onChange={windTime}
                />
            </div>
            <div className="SongContainer">
                <img src={
                    Song.img !== "N/A" 
                    ? Song.img
                    : 'https://via.placeholder.com/400'
                    } alt='project'/>
                <ul>
                    <li>{Song.name}</li>
                    <li>{Song.artist}</li>
                </ul>
                <p>{Time.current}/{Time.max}</p>
            </div>

            <div className="ControlContainer">
                <img
                src="../images/player/shuffle.svg"
                className={shuffleOn ? "PlayerControlActive" : "PlayerControl"}
                onClick={shuffle}
                />
                <img 
                src="../images/player/skipBackward.svg"
                className="PlayerControl"
                />
                <img 
                src={isPlaying ? 
                    "../images/player/play.svg" 
                    : "../images/player/pause.svg" }
                className="PlayerControl"
                onClick={togglePlay}
                />
                <img 
                src="../images/player/skipForward.svg"
                className="PlayerControl"
                />
                <img
                src="../images/player/loop.svg"
                className={loopOn ? "PlayerControlActive" : "PlayerControl"}
                onClick={loop}
                />
            </div>
            <div className="VolumeContainer">
                <img
                className='VolumeIcon'
                src={volume != 0 
                    ? "../images/player/volume.svg"
                    : "../images/player/mute.svg"
                }
                />
                <input
                className="VolumeSlider"
                type='range'
                min="0"
                max="100"
                value={volume}
                onChange={changeVolume}
                />
            </div>
        </div>
        </>
    )
}

export default Player