function Calculadora() {
    this.display = document.querySelector('.display');

    this.start = () => {
        this.clickBottons();
        this.pressEnter();
    }

    this.clickBottons = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;
            
            if (el.classList.contains('btn-num'))  this.valueDisplay(el);
            if (el.classList.contains('btn-clear')) this.clearDisplay();
            if (el.classList.contains('btn-del'))  this.deleteOne();;
            if (el.classList.contains('btn-eq')) this.doMath();
        });
    }

    this.pressEnter = () => {
        document.addEventListener('keyup', e =>{
            if (e.keyCode === 13){
                this.doMath();
            }
        });
    }

    this.valueDisplay = el => this.display.value += el.innerText;

    this.clearDisplay = () =>  this.display.value = '';

    this.deleteOne = () =>  this.display.value = this.display.value.slice(0,-1);


    this.doMath = () => {
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
    }
}

const calculadora = new Calculadora();
calculadora.start();
