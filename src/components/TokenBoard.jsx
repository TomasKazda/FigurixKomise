import React from 'react'
import Token from './Token'
import "./TokenBoard.css"

const TokenBoard = () => {
    return (
        <div className='tokenboard'>
            <Token />
            <Token />
        </div>
    );
}

export default TokenBoard;