import React from 'react'

const MainVisual = (props) => {
    return (
        <div className={`mainvisual ${props.className || ''}`}>
            <h1 className='maintitle-a'>
                セカイを変えるチーズを作ろう
            </h1>
            <h1 className='maintitle-b'>
                チーズ職人養成学校「チーズアカデミーTOKYO」
            </h1>

        </div>
    )
}

export default MainVisual