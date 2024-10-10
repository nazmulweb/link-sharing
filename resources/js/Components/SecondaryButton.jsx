export default function SecondaryButton({
    type = 'button',
    className = '',
    disabled,
    children,
    solid,
    border,
    active,
    ...props
}) {
    return (
        <button
            {...props}
            type={type}
            className={
                `inline-flex items-center gap-2 rounded-md bg-white px-3 md:px-4 lg:px-6 py-2 text-base font-semibold text-purple-700 transition duration-150 ease-in-out hover:bg-gray-100 disabled:opacity-25 ${solid && '!bg-purple-700 !text-white'} ${active && '!bg-gray-100'} ${border && 'border border-purple-300'} ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
