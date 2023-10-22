class ValidaFormulario {
    constructor(){
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e => {     
            this.handleSubmit(e);
        });
    }
    handleSubmit(e){
        e.preventDefault();
        const fieldIsValid = this.fieldIsValid();
        const passwordIsValid = this.passwordIsValid();
        console.log(fieldIsValid, passwordIsValid);

        if (fieldIsValid && passwordIsValid){
            alert(`Formulário enviado`);
            this.formulario.submit();
        }
    }

    fieldIsValid(){
        let valid = true;

        for (let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerText;
            if (!campo.value){
                this.criaErro(campo, `Campo "${label}" não pode estar em braco.`);
                valid = false;
                console.log('1');
            }
            if (campo.classList.contains('cpf')){
                if(this.validaCPF(campo)) valid = false;
            }
            if (campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false;
            }
        }

        return valid;
    }

    passwordIsValid(){
        let valid = true;
        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value){
            valid = false;
            this.criaErro(senha, `Campos de senha não correspondem`);
            this.criaErro(repetirSenha, `Campos de senha não correspondem!`);
        }

        if(senha.value.length < 6 || senha.value.length > 12 ){
            valid = false;
            this.criaErro(senha, `Senha dever ter entre 6 e 12 caracteres`);
        }

        return valid;
    }

    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value);

        if (!cpf.valida()){
            this.criaErro(campo, `CPF é invalido!`);
        }

    }

    
    validaUsuario(campo){
        const usuario = campo.value;
        let valid = true;

        if (usuario.length < 3 || usuario.length > 12 ){
            this.criaErro(campo, `Usuário deve ter entre 3 e 12 caracteres`);
            let valid = false;
        } 

        if (!usuario.match(/[a-zA-Z0-9]+/g)){
            this.criaErro(campo, `Usuário deve conter apenas letras e/ou números`);
            let valid = false;
        } 
        return valid;

    }



    criaErro(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();