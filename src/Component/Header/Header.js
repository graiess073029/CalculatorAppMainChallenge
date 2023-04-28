import './Header.css'
import { useState } from 'react'

let index = 2

let calcIndex = (index) =>{
    console.log(index)
    while (index > 3){
        index = Math.floor(index / 3)
    }
    return index
}

export function Header({changeTheme,theme}){
    let flex_content = ['flex-start','center','flex-end']
    let [justify_content,set_justify_content] = useState('flex-start')
    

    
    return (
        <nav className={`header ${theme}`}>
            <h1>calc</h1>
            <div className="themes">
                <div className="left">
                    <p>THEMES</p>
                </div>
                <div className="right">
                    <ul className="top">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                    <ul style={{justifyContent : justify_content}} onClick={event => {changeTheme(`theme-${calcIndex(index)}`);index = calcIndex(index);index+= 1;set_justify_content(flex_content[index - 2])}} className="bottom">
                        <div onClick={event => {changeTheme(`theme-${calcIndex(index)}`);index = calcIndex(index);index+= 1;set_justify_content(flex_content[index - 2])}} className={`change ${theme}`}>   
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}