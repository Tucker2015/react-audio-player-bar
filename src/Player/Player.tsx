import React, { useRef, useState, useEffect } from 'react';
import { PlayerComponentProps } from './Player.types';
import './Player.css';
import { FaPause, FaPlay } from 'react-icons/fa';

const Player = ({
    bgColor = 'rgba(0, 0, 0, 0.5)',
    position = 'bottom',
    title = 'Your Title Here',
    artist = 'Your Artist Here',
    artwork = 'https://picsum.photos/200',
    source = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
}: PlayerComponentProps) => {
    const [playing, setPlaying] = useState(false);
    const [loading, setLoading] = useState(false);

    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;

        if (!audio) return;

        audio.src = source;

        audio.addEventListener('loadstart', () => {
            console.log('onLoadStart');
            setLoading(true);
        });

        audio.addEventListener('loadeddata', () => {
            console.log('onLoadedData');
            setLoading(false);
        });

        audio.addEventListener('play', () => {
            console.log('onPlay');
            setPlaying(true);
        });

        return () => {
            audio.removeEventListener('loadstart', () => {
                console.log('onLoadStart');
                setLoading(true);
            });

            audio.removeEventListener('loadeddata', () => {
                console.log('onLoadedData');
                setLoading(false);
            });

            audio.removeEventListener('play', () => {
                console.log('onPlay');
                setPlaying(true);
            });
        };
    }, [source]);

    const togglePlay = () => {
        if (playing) {
            audioRef.current.pause();
            setPlaying(false);
        } else {
            audioRef.current.play();
            setPlaying(true);
        }
    };

    return (
        <div
            className='player'
            style={{
                bottom: position === 'bottom' ? '10px' : 'auto',
                top: position === 'top' ? '10px' : 'auto',
                alignItems: 'center',
                backgroundColor: bgColor,
            }}
        >
            <audio
                ref={audioRef}
            />
            <button
                className='player__button'
                onClick={() => { togglePlay() }}
            >
                {playing ? <FaPause
                    className='player__button--pause'
                /> : <FaPlay
                    className='player__button--play'
                />}
            </button>
            <img
                className='player__artwork'
                src={artwork} alt="avatar" />
            <div
                className='player__metadata'>
                <div>{loading ? 'Loading...' : title}</div>
                <div>{artist}</div>
            </div>
        </div>
    )
}

export default Player