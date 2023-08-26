import { useState } from 'react';
import { Col } from 'react-bootstrap';

const Player = ({ Song, Time }) => {

    // Hooks for toggling states
    const [isPlaying, PlayPause] = useState(false);
    const [shuffleOn, toggleShuffle] = useState(false);
    const [loopOn, toggleLoop] = useState(false);

    const togglePlay = () => {
        PlayPause(!isPlaying);
    };

    const shuffle = () => {
        toggleShuffle(!shuffleOn);
    };

    const loop = () => {
        toggleLoop(!loopOn);
    };

    return(
        <div className="PlayerContainer">
            <div className="SongContainer">
                <Col>
                <img src={
                    Song.img !== "N/A" 
                    ? Song.img
                    : 'https://via.placeholder.com/400'
                    } alt='project'/>
                </Col>
                <Col>
                <ul>
                    <li>{Song.name}</li>
                    <li>{Song.artist}</li>
                </ul>
                </Col>
                <Col>
                <p>{Time.current}/{Time.max}</p>
                </Col>
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
        </div>
    )
}

export default Player