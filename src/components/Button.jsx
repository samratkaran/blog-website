

const Button = ({children,  type = 'button',bgColor = 'bg-blue-500', textColor = 'white', className = '', ...props
}) => {
  return (
    <button className={`${type} px-4
    ${bgColor}
    ${textColor}
    ${className}`} {...props}>
    
      {children}
    </button>
  )
}

export default Button
