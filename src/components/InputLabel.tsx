import React, { forwardRef } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  id: string
}

const InputLabel = forwardRef<HTMLInputElement, InputProps>(({ children, id, ...others }, ref) => {
  return (
    <>
      
        <div className="flex flex-col w-full gap-1 md:gap-3">
          <label htmlFor={id} className={`text-left`}>
            {children}
          </label>
          <input
            ref={ref}
            id={id}
            className={` border-gray-400 border-2 p-2 rounded-lg w-full`}
            {...others}
          />
        </div>
    </>
  )
})

InputLabel.displayName = 'InputLabel'
export default InputLabel