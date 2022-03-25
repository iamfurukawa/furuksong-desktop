import React from 'react'
import { Button, Form, Modal } from 'antd'

// const { dialog } = window.require('electron').


const Configuration = ({ isVisible = false, setVisible = (parameter) => parameter }) => {


    const handleOk = () => {
        setVisible(false)
    }

    const handleCancel = () => {
        setVisible(false)
    }

    const handleFolder = () => {
        console.log('+++')
        //console.log(dialog.showOpenDialog({properties: ['openDirectory']}))
    }

    //<input type="file" onChange={(evt) => handleFolder(evt.target.files)} webkitdirectory directory multiple />
    return (
        <Modal title="Basic Modal" visible={isVisible} onOk={handleOk} onCancel={handleCancel} maskClosable={false}>
            <Form>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}
                    label="Selecione a pasta com os audios: "
                    name="folder">
                    <input directory="" webkitdirectory="" type="file" />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default Configuration