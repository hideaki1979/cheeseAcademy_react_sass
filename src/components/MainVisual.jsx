import React from 'react'

const MainVisual = (props) => {
    return (
        <div className={`mainvisual ${props || ''}`}>
            <h1 className='maintitle'>
                セカイを変えるチーズを作ろう<br />
                チーズ職人養成学校「チーズアカデミーTOKYO」
            </h1>

        </div>
    )
}

export default MainVisual