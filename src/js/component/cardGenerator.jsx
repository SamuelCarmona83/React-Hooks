import React, { useState } from "react";

const CardGenerator = () => {

    const initalCard = {
        color: 'dark',
        valor: '7',
        pinta: '♣'
    }

    const [card, setCard] = useState(initalCard)

    const [background, setBackground] = useState('success')

    const bodyStyle = {
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    }

    const randomCard = () => {
        const pintas = [ '♥','♦','♣','♠']
        const valores = ['A','Q', 'J', 'K']


        const newPinta = randomElement(pintas)
        const newValor = randomElement(valores)

        setCard({
            color: newPinta == '♥' || newPinta == '♦' ? 'danger' : 'dark',
            valor: newValor,
            pinta: newPinta
        })

        function randomElement(array){
            return array[parseInt(Math.random()*array.length)]
        }
    }

    function changeBackground(){
        if(background == 'success') setBackground('info')
        else setBackground('success')
    }

    return(
        <>
            <div onMouseEnter={changeBackground} onMouseLeave={changeBackground} className={"bg-" +background +" d-flex"} style={{ minHeight: '100vh' }}>
                <div onClick={randomCard} className="card my-auto mx-auto" style={{ minWidth: '60vw' }}>
                    <div className="card-body" style={bodyStyle}>
                        <h2 className={`text-start  text-${card.color}`} style={{fontSize: '3em'}}>{card.pinta}</h2>
                        <h1 className="text-center" style={{fontSize: '8em'}}>{card.valor}</h1>
                        <h2 className={`text-start  text-${card.color}`}
                        style={{ transform: 'rotate(180deg)', fontSize: '3em' }}>
                            {card.pinta}
                        </h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardGenerator;