import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile'
import React from 'react'
import '../../styles/FileCard.css'

const FileCard = ({ name }) => {
    return (
        <div className='fileCard'>
            <div className="fileCard_top">
                <InsertDriveFileIcon style={{ fontSize: 130 }} />
            </div>
            <div className="fileCard_bottom">
                <p>{name}</p>
            </div>
        </div>
    )
}

export default FileCard
