function criaCalculadora(){
    return{
        //method
        display: document.querySelector('.display'),

        start() {
            this.clickBottons();
            this.pressEnter();
        },

        pressEnter(){
            this.display.addEventListener('keyup', (e) =>{
                if (e.keyCode === 13){
                    this.doMath();
                }
            });
        },

        clearDisplay() {
            this.display.value = '';
        },

        deleteOne(){
            this.display.value = this.display.value.slice(0,-1);
        },

        doMath(){
            let conta = this.display.value

            try{
                conta = eval(conta);

                if(!conta){
                    alert ('Invalid');
                }
                this.display.value = conta;
            }catch(e){
                alert ('Invalid');
                return;     
            }
        },

        //functions
        clickBottons(){
            document.addEventListener('click', (e) => {
                const el = e.target;
                if (el.classList.contains('btn-num')){
                    this.btValueDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')){
                    this.deleteOne();
                }
                if (el.classList.contains('btn-eq')){
                    this.doMath();
                }
            });
        },

        btValueDisplay(value){
            this.display.value += value;
        }
    };
}

const calculadora = criaCalculadora();

calculadora.start();