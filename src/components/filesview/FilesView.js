import React, { useEffect, useState } from 'react'
import '../../styles/FilesView.css';
import { db } from '../../firebase'
import FileItem from './FileItem'
import FileCard from './FileCard';

const FilesView = () => {
    const [ files, setFiles ] = useState([])

    useEffect (() => {
        db.collection('myFiles').onSnapshot(snapshot => {
            setFiles(snapshot.docs.map(doc => ({
                id: doc.id,
                item: doc.data()
            })))
        })
    }, [])

    return (
        <div className='filesView'>
            <div className="filesView_row">
                {
                    files.slice(0, 5).map(({id, item}) => (
                        <FileCard name={item.caption} />
                    ))
                }
            </div>
            <div className="filesView_titles">
                <div className="filesView_titles_left">
                    <p>Name</p>
                </div>
                <div className="filesView_titles_right">
                    <p>Last modified</p>
                    <p>File size</p>
                </div>
            </div>
            {
                files.map(({id, item}) => (
                    <FileItem id={id} caption={item.caption} timestamp={item.timestamp} fileUrl={item.fileUrl} size={item.size} />
                ))
            }
        </div>
    )
}

export default FilesView
