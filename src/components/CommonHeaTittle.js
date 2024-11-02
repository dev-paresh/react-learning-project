import React from 'react'

export const CommonHeaTittle = ({ title, body }) => {
    return (
        <div className="p-5 bg-lavender-200 text-black">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p>{body}</p>
        </div>
    );
}
