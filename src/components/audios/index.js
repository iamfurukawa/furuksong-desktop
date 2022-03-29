import React from 'react'
import AudioCard from '../audio-card'

import styles from './audios.module.css'

const Audios = ({ sounds = [] }) => {
    return (
        <div className={styles.content}>
            {
                sounds.map(file => <AudioCard key={file} name={file} />)
            }
        </div>
    )
}
//
export default Audios
