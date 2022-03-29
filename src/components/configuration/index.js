import React, { useState, useEffect } from 'react'
import { Modal, notification, Select } from 'antd'

const Configuration = ({ isVisible = false, setVisible = (parameter) => parameter }) => {

    const { Option } = Select;

    const [dirSelected, setDirSelected] = useState(localStorage.getItem('path') || '')
    const [devices, setDevices] = useState([])
    const [deviceSelected, setDeviceSelected] = useState(localStorage.getItem('device') || 'default')

    useEffect(() => {
        navigator.mediaDevices.enumerateDevices()
            .then(devicesRetrieved => {
                setDeviceSelected(devicesRetrieved[0].deviceId)
                setDevices(devicesRetrieved)
            })
            .catch(error => console.error(`Error on get devices: ${error}`))
        console.log('Devices updated')
    }, [])

    const handleOk = () => {
        setVisible(false)
    }

    const handleCancel = () => {
        setVisible(false)
    }

    const handleFolder = (evt) => {
        try {
            let file = evt.target.files[0].path
            let fileSplitted = file.split('\\')
            fileSplitted.pop()
            let path = fileSplitted.join('\\')
            setDirSelected(path)
            localStorage.setItem('path', path)
            console.log(path)
            window.location.reload(false);
        } catch (e) {
            notification.error({
                message: 'Ops!',
                description: 'A pasta está vazia!',
            });
        }
    }

    const handleDevice = (value) => {
        console.log(value)
        setDeviceSelected(value)
        localStorage.setItem('device', value)
    }

    return (
        <Modal title="Configurações" visible={isVisible} onOk={handleOk} onCancel={handleCancel} maskClosable={false} width={700}>

            <h3>Selecione o diretório a ser scaneado: </h3>
            <input directory="" webkitdirectory="" type="file" onChange={(evt) => handleFolder(evt)} />
            <p>O diretório selecionado é: {dirSelected}</p>

            <h3>Selecione output de audio: </h3>
            <Select
                name="devices"
                id="devices-select"
                onChange={handleDevice}
                defaultValue={{ value: deviceSelected }}
                style={{ width: '100%' }}
            >
                {
                    devices.map((device) => <Option key={device.deviceId + ' - ' + device.kind} value={device.deviceId}>[{device.kind}] {device.label}</Option>)
                }
            </Select>
        </Modal>
    )
}

export default Configuration