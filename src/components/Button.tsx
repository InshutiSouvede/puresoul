import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react"
import classNames from "classnames"
import { Link } from "react-router"
export enum ButtonBehavior {
    BUTTON,
    LINK,
}
  
  export enum ButtonStyles {
    PRIMARY = 'bg-purple-600 text-yellow-50',
    DISABLED = 'bg-gray-200 text-purple-600',
    DELETE = 'border-2 bg-red-600 text-red-50',
  }
  
  interface ButtonVersion extends ButtonHTMLAttributes<HTMLButtonElement> {
    behavior: ButtonBehavior.BUTTON
  }
  
  interface LinkVersion extends AnchorHTMLAttributes<HTMLAnchorElement> {
    behavior: ButtonBehavior.LINK
    path: string
  }

  type ButtonProps = {
    children: React.ReactNode
    customStyles: ButtonStyles
  } & (ButtonVersion | LinkVersion)
  
  const sharedStyles =
    'rounded-lg p-3 text-center font-inter text-sm font-bold w-full flex items-center justify-center'
  
  export default function Button(props: ButtonProps) {
    if (props.behavior === ButtonBehavior.BUTTON) {
      const className = classNames(
        sharedStyles,
        props.disabled ? ButtonStyles.DISABLED : props.customStyles,
      )
      return (
        <button className={className} disabled={props.disabled} onClick={props.onClick}>
          {props.children}
        </button>
      )
    }
  
    const className = classNames(sharedStyles, props.customStyles)
  
    return (
      <Link to={props.path} className={className}>
        {props.children}
      </Link>
    )
  }