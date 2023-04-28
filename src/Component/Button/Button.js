import './Button.css'

export function Button(props){
    return <button onKeyDown={props.onKeyPress} onClick={props.onClick} id={props.children} className={props.className}>{props.children}</button>
}