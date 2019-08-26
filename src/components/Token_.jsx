import React from 'react'
import "./Token.css"

const TokenDummy = () => {

    return (
        <>
            <div className={'token outcolor1 incolor img'} onClick={null}>
                <div className='tokenimg'>
                    <span>out={1} &mdash; in= &mdash; img=</span>
                </div>
            </div>
            <div className={'token outcolor incolor2 img'} onClick={null}>
                <div className='tokenimg'>
                    <span>out= &mdash; in={2} &mdash; img=</span>
                </div>
            </div>
            <div className={'token outcolor incolor img3'} onClick={null}>
                <div className='tokenimg'>
                    <span>out= &mdash; in= &mdash; img={3}</span>
                </div>
            </div>
        </>
    );
}

export default TokenDummy;
