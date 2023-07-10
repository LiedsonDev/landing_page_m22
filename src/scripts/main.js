AOS.init()

const dataEvento = new Date("July 09, 2024 19:00:00");
const timeStempEvento = dataEvento.getTime();

const contaTempo = setInterval(function() {
    const tempoAtual = new Date()
    const timeStempTempoAtual = tempoAtual.getTime()
    const timer = document.getElementById('contador')

    const distanciaAteEvento = timeStempEvento - timeStempTempoAtual

    // Aqui separamos os valores que estavam em MS
    const diasMs = 1000 * 60 * 60 * 24
    const horasMs = 1000 * 60 * 60
    const minMs = 1000 * 60

    const diasAteEvento = Math.floor(distanciaAteEvento / diasMs)
    const horasAteEvento = Math.floor((distanciaAteEvento % diasMs) / horasMs)
    const minAteEvento = Math.floor((distanciaAteEvento % horasMs) / minMs)
    const segAteEvento = Math.floor((distanciaAteEvento % minMs) / 1000)

    timer.innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minAteEvento}m ${segAteEvento}s`

    if (distanciaAteEvento < 0) {
        timer.innerHTML = `O evento já ocorreu!`

        clearInterval(contaTempo)
    }
}, 1000)