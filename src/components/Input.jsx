import React, {useId} from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId()
    return (
        <div className="w-full">
            {label && (
                <label 
                    htmlFor={id}
                    className='inline-block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'
                >
                    {label}
                </label>
            )}
            <input
                type={type}
                ref={ref}
                {...props}
                id={id}
                className={`w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary dark:bg-gray-800 dark:text-white transition-all duration-200 ${className}`}
            />
        </div>
    )
})

export default Input