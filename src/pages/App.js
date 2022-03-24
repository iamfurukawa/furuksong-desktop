import React, { useEffect, useState } from 'react'

const fs = window.require('fs')


const App = () => {
  const [deviceSelected, setDeviceSelected] = useState('default')
  const [devices, setDevices] = useState([])

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices()
      .then(devicesRetrieved => {
        setDeviceSelected(devicesRetrieved[0].deviceId)
        setDevices(devicesRetrieved)
      })
      .catch(error => console.error(`Error on get devices: ${error}`))
  }, [])

  const play = async () => {
    console.log(`Try play on ${JSON.stringify(deviceSelected)}`)
    const player = new Audio('C:\\Users\\vinicius.carvalho\\Documents\\projects\\soundboard\\furuksong-desktop\\NANI.mp3')
    try {
      console.log('Configurando sinkId')
      await player.setSinkId(deviceSelected)
    } catch (e) {
      console.log(`Erro na configuração de sinkId: ${e}`)
    }

    console.log('Play audio')
    player
      .play()
      .catch((e) => console.log(`Erro ao reproduzir som : ${e}`))
  }

  return (
    <div>
      <select name="devices" id="devices-select" onChange={(evt) => setDeviceSelected(evt.target.value)}>
        {
          devices.map((device) => <option value={device.deviceId}>[{device.kind}] {device.label}</option>)
        }
      </select>
      <button onClick={play}>Play!</button>
    </div>
  )
}

export default App

//fs.readdirSync('.').map(file => <div>{file}</div>)