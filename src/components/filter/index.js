import React, { useEffect, useState } from 'react'
import { Select, Input } from 'antd'

import styles from './filter.module.css'

const Filter = ({ handleChange = (v) => v, handleSearch = (v) => v, valueSearch = '', valueSelect = 'Todos' }) => {
    const { Option } = Select;
    const [options, setOptions] = useState([])

    useEffect(() => {
        const optionsDuplicated = [];

        (JSON.parse(localStorage.getItem('sounds')) || [])
            .forEach(audio => {
                const splitted = audio.replaceAll('[', '').split(']')
                splitted.pop()
                optionsDuplicated.push(...splitted.map((e) => e.trim()))
            })

        setOptions([...['Todos', 'Favoritos'], ...[...new Set(optionsDuplicated)].sort()])
        console.log('Options updated')
    }, [])

    return (
        <div className={styles.content}>
            <Input placeholder="Sound name" size="large" onChange={(evt) => handleSearch(evt.target.value)} value={valueSearch} />
            <Select className={styles.tags} size="large" defaultValue="Todos" onChange={handleChange} value={valueSelect} showSearch>
                {
                    options.map(tag => <Option key={tag} value={tag} >{tag}</Option>)
                }
            </Select>
        </div>
    )
}

export default Filter