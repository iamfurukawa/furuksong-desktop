import React from 'react'
import { Select, Input } from 'antd'

import styles from './filter.module.css'

const Filter = () => {
    const { Option } = Select;

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return (
        <div className={styles.content}>
            <Input placeholder="Sound name" size="large" />
            <Select className={styles.tags} size="large" defaultValue="lucy" onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select>
        </div>
    )
}

export default Filter