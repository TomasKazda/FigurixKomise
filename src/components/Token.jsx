import React from 'react'
import "./Token.css"

const Token = () => {

    return (
        <div className={'token outcolor' + 1 + ' incolor' + 2 + ' img' + 3 } onClick={null}>
                <div className='tokenimg'>
                    <span>out={1} &mdash; in={2} &mdash; img={3}</span>
                </div>
        </div>
    );
}

export default Token;
