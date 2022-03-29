import React, { useEffect, useState } from 'react'

import Filter from '../components/filter'
import Header from '../components/header'

import Audios from '../components/audios'
import Menu from '../components/menu'

import 'antd/dist/antd.min.css'

const fs = window.require('fs')

const App = () => {

  const [filter, setFilter] = useState('Todos')
  const [search, setSearch] = useState('')
  const [sounds, setSounds] = useState(JSON.parse(localStorage.getItem('sounds')) || [])

  useEffect(() => {
    try {
      const audios = fs.readdirSync(localStorage.getItem('path'))
        .filter(file => file.endsWith('.mp3'))

      localStorage.setItem('sounds', JSON.stringify(audios))
      console.log('Audios updated')
    } catch (e) {
      console.log('Audios não atualizados')
    }
  }, [])

  useEffect(() => {

    const getTag = (audio) => {
      let audioSplitted = audio.replaceAll('[', '').split(']')
      audioSplitted.pop()
      return audioSplitted
    }

    const containsSearch = (sound) => sound.replaceAll('.mp3', '').toLowerCase().includes(search.toLowerCase())

    const containsTag = (sound) => getTag(sound).includes(filter)

    const isTodos = () => filter === 'Todos'

    let filtered = []

    if (filter === 'Favoritos')
      filtered = (JSON.parse(localStorage.getItem('favoritos')) || [])
    else
      filtered = (JSON.parse(localStorage.getItem('sounds')) || [])
        .filter(sound => containsSearch(sound) && (isTodos() || containsTag(sound)))
    setSounds(filtered)
  }, [filter, search])

  return (
    <>
      <Menu />
      <Header />
      <Filter handleChange={setFilter} valueSelect={filter} handleSearch={setSearch} valueSearch={search} />
      <Audios sounds={sounds} />
    </>
  )
}

export default App