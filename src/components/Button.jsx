import React from 'react'

function Button({
    children,
    type = "button",
    bgColor = "bg-gradient-to-r from-primary to-secondary",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button
            className={`btn-modern ${bgColor} ${textColor} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button