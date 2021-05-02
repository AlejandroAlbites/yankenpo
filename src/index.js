
import './styles.css';

const PIEDRA = 'piedra';
const PAPEL = 'papel';
const TIJERA = 'tijera';

const EMPATE = 0;
const WIN = 1;
const LOSE = 2;

const btnPiedra = document.getElementById('piedra');
const btnPapel = document.getElementById('papel');
const btnTijera = document.getElementById('tijera');
const resultadoTexto = document.getElementById('result');
const usuarioImg = document.getElementById('usuario');
const maquinaImg = document.getElementById('maquina');


btnPiedra.addEventListener('click', () => {
    play(PIEDRA);
});

btnPapel.addEventListener('click', () => {
    play(PAPEL);
});

btnTijera.addEventListener('click', () => {
    play(TIJERA);
});

const play = (opcionUsuario) =>{

    usuarioImg.src = "./assets/"+opcionUsuario+"1.png"

    resultadoTexto.innerHTML = "PENSANDO";

    const intervalo = setInterval(() => {
        const opcionMaquina = calcularMaquinaOpcion();
        maquinaImg.src = "./assets/"+opcionMaquina+"2.png"
        
    }, 150);

    setTimeout(() => {

        clearInterval(intervalo);

        const opcionMaquina = calcularMaquinaOpcion();

        const resultado = calcularResultado(opcionUsuario, opcionMaquina);

   
    maquinaImg.src = "./assets/"+opcionMaquina+"2.png"

    switch(resultado){
        case EMPATE:
           resultadoTexto.innerHTML = "HAS EMPATADO";
            break;
        case WIN:
            resultadoTexto.innerHTML = "HAS GANADO";
            break;
        case LOSE:
            resultadoTexto.innerHTML = "HAS PERDIDO";
            break;    


    }
        
    }, 2000);

    
    
    
}

const calcularMaquinaOpcion = () =>{

    const number = Math.floor(Math.random()*3);

    switch (number){
        case 0:
            return PIEDRA;

        case 1:
            return PAPEL;
                
        case 2:
            return TIJERA;
    }
}

const calcularResultado = (opcionUsuario, opcionMaquina) => {

    if(opcionUsuario === opcionMaquina){
        return EMPATE;
    }else if(opcionUsuario ===PIEDRA){
        
        if(opcionMaquina === PAPEL) return LOSE;
        if(opcionMaquina === TIJERA) return WIN;

    }else if(opcionUsuario ===PAPEL){
        
        if(opcionMaquina === TIJERA) return LOSE;
        if(opcionMaquina === PIEDRA) return WIN;

    }else if(opcionUsuario ===TIJERA){
        
        if(opcionMaquina === PIEDRA) return LOSE;
        if(opcionMaquina === PAPEL) return WIN;
    }

}







