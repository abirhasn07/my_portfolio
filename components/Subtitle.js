import React from 'react'

export default function Subtitle({ title }) {
    return (
        <div>
            <h2 className="text__stroke lg:text-center lg:text-[64px] text-[42px] text-center font-extrabold capitalize text-transparent">{title}</h2>
        </div>
    )
}
