function calcular() {
    let num = Number(window.prompt('Digite uma distância em metros (m)'))
    
    res.innerHTML = `<p><strong>A distância de ${num} metros, corresponde a...</strong></p><hr>`
    res.innerHTML += `<p>${num} quilômetros (Km)</p>`
    res.innerHTML += `<p>${num} hectêmetros (Hm)</p>`
    res.innerHTML += `<p>${num} decâmetros (Dam)</p>`
    res.innerHTML += `<p>${num} decímetros (dm)</p>`
    res.innerHTML += `<p>${num} centímetros (cm)</p>`
    res.innerHTML += `<p>${num} milímetros (mm)</p>`

}