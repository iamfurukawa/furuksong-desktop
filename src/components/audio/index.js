import React from 'react'
import { Tag } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faStar } from '@fortawesome/free-solid-svg-icons'

import styles from './audio.module.css'

const Audio = () => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <FontAwesomeIcon icon={faMusic} color="#c4c4c4" size='5x' />
                <div className={styles.audioName}>
                    show
                </div>
            </div>
            <div className={styles.footer}>
                <FontAwesomeIcon className={styles.fav} icon={faStar} color="#c4c4c4" size='lg' />
                <div className={styles.tags}>
                    <Tag color="#f04043">as</Tag>
                    <Tag color="#f04043">asdasd</Tag>
                    <Tag color="#f04043">assd</Tag>
                    <Tag color="#f04043">asasdasd</Tag>
                </div>
            </div>
        </div>
    )
}

export default Audio