import React from 'react'

interface Props {
    loading: boolean
    title: string
    artist: string
}

export const Metadata = (props: Props) => {
    return (
        <div
            className='player__metadata'>
            <div>{props.loading ? 'Loading...' : props.title}</div>
            <div>{props.artist}</div>
        </div>
    )
}
