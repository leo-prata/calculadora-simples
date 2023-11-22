function criaCalculadora(){
    return {
        display: document.querySelector('.display'),
        
        inicia(){
            this.clickBotoes();
            this.pressionaEnter();
        },
        clickBotoes(){
            document.addEventListener('click', function(e){
                const elemento = e.target;
                if(elemento.classList.contains('btn-num')){
                    this.btnParaDisplay(elemento.innerText);
                }
                if(elemento.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if(elemento.classList.contains('btn-del')){
                    this.apagaUm();
                }
                if(elemento.classList.contains('btn-eq')){
                    this.realizaConta();
                }
            }.bind(this)); //
        },
        btnParaDisplay(valor){
            this.display.value += valor; //coloca no display da calculadora o número clicado
        },
        clearDisplay(){
            this.display.value = '';
        },
        apagaUm(){
            this.display.value = this.display.value.slice(0, -1); //tira o ultimo valor
        },
        realizaConta(){
            let conta = this.display.value;
            try{
                conta = eval(conta); //função que lê uma string e tenta executar como código js
                if(!conta){
                    alert("Conta invalida");
                    return;
                }

                this.display.value = conta;
            }catch(e){
                alert("Conta invalida");
            }
        },
        pressionaEnter(){
            this.display.addEventListener('keyup', function(e){
                if(e.keyCode===13){
                    this.realizaConta();
                }
            }.bind(this));
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();