import React, { useState } from 'react'
import { Tag } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faStar } from '@fortawesome/free-solid-svg-icons'

import Player from '../../services/soundboard'

import styles from './audioCard.module.css'

const AudioCard = ({ name = '' }) => {

    const getFav = () => JSON.parse(localStorage.getItem('favoritos')) || []
    const [fav, setFav] = useState(getFav().includes(name))

    const splitted = name.replaceAll('[', '').split(']')
    const title = splitted.pop().replaceAll('.mp3', '')
    const tags = splitted.map((e) => e.trim())

    const saveFav = () => {
        const isFav = !fav
        setFav(isFav)
        let favoritos = getFav()

        if (isFav)
            favoritos.push(name)
        else
            favoritos = favoritos.filter(favName => favName !== name)
        localStorage.setItem('favoritos', JSON.stringify(favoritos))
    }

    return (
        <div className={styles.card}>
            <div className={styles.header} onClick={() => Player.play(name)}>
                <FontAwesomeIcon icon={faMusic} color="#c4c4c4" size='5x' />
                <div className={styles.audioName}>
                    {title.substring(0, 50) + (title.lenght > 50 ? '...' : '')}
                </div>
            </div>
            <div className={styles.footer}>
                <FontAwesomeIcon className={styles.fav} icon={faStar} color={fav ? 'gold' : '#c4c4c4'} size='lg' onClick={saveFav} />
                <div className={styles.tags}>
                    {
                        tags.map(tag => <Tag color="#f04043" key={tag} className={styles.tag}>{tag}</Tag>)
                    }
                </div>
            </div>
        </div>
    )
}

export default AudioCard