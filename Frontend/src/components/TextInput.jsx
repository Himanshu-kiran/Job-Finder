import React from 'react';

const TextInput = React.forwardRef((props, ref) => {
    const { type, placeholder, style, register, name, error, label } = props;

    return (
        <div className='flex flex-col mt-2'>
            <p className='text-grey-600 text-sm mb-1'>
                {label}
            </p>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                ref={ref}
                className={`rounded border border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-base px-4 py-2 ${style}`}
                {...register} 
                aria-invalid={error ? "true" : "false"}
            />
            {error && <span className='text-xs text-red-500 mt-1'>{error}</span>}
        </div>
    );
});

export default TextInput;
