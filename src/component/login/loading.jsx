import React from 'react'

const Loading = ({loading,onClick}) => {
    if(loading){
        return(
            <div>
                <button className="btn disabled">LOADING...</button>
            </div>
        )
    }
    return(
        <div>
            <button type="submit" onClick={onClick} className="btn waves-effect waves-light teal">LOGIN</button>
        </div>
    )
}

export default Loading
