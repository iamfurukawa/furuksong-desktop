import React, { useState } from 'react'
import { notification } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faSync } from '@fortawesome/free-solid-svg-icons'

import styles from './menu.module.css'
import Configuration from '../configuration'

const Menu = () => {
    const [isVisible, setVisible] = useState(false)

    const nowWorking = () => {
        notification.warning({
            message: 'Ops!',
            description: 'Em desenvolvimento!',
        });
    }

    return (
        <>
            <div className={styles.container}>
                <FontAwesomeIcon className={styles.fav} icon={faGear} color="#c4c4c4" size='3x' onClick={() => setVisible(true)} />
                <FontAwesomeIcon className={styles.fav} icon={faSync} color="#c4c4c4" size='3x' onClick={() => nowWorking()}/>
            </div>
            <Configuration isVisible={isVisible} setVisible={setVisible} key={isVisible} />
        </>
    )
}

export default Menu
