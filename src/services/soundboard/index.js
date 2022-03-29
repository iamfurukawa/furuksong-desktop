const Soundboard = () => {

    let player = null
    let lastSound = null

    const play = async (name) => {
        if (player !== null) {
            console.log("Pausing audio")
            player.pause()
        }

        if (lastSound === name) {
            console.log("Skip audio")
            lastSound = null
            return
        }

        lastSound = name

        //console.log(`Device selected: ${JSON.stringify(localStorage.getItem('device'))}`)
        player = new Audio(localStorage.getItem('path') + '\\' + name)
        try {
            console.log('Configurando sinkId')
            await player.setSinkId(localStorage.getItem('device'))
        } catch (e) {
            console.log(`Erro na configuração de sinkId: ${e}`)
        }

        console.log('Play audio')
        player
            .play()
            .catch((e) => console.log(`Erro ao reproduzir som : ${e}`))

        player.addEventListener("ended", () => {
            player.currentTime = 0
            lastSound = null
            console.log("Ended")
        })
    }

    return {
        play
    }
}

export default Soundboard()