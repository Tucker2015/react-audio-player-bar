import React from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'

interface Props {
    onClick: () => void
    playing: boolean
}

export const PlayButton = (props: Props) => {
    return (
        <button
            className='player__button'
            onClick={props.onClick}
        >
            {props.playing ? <FaPause
                className='player__button--pause'
            /> : <FaPlay
                className='player__button--play'
            />}
        </button>
    )
}
