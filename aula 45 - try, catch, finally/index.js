try{
    //Executa quando não há erros
    console.log('Abrir um arquivo...');
    console.log('Manipulando o arquivo...');
    console.log(e);
    //console.log('Fechando o arquivo...');
}catch (e){
    //Executa quando há erros
    console.log('Tratanado o erro...');
    //console.log('Fechando o arquivo ...');
}finally {
    // Executa sempre
    console.log('Fechando o arquivo...');
}


function retornaHora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError(`Esperando instância de Date.`);
    }

    if (!data){
        data = new Date;
    }

    return data.toLocaleTimeString('pt-BR',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    } )
}

try{
    const data = new Date();
    const hora = retornaHora(data);
    console.log(hora);
}catch(e){
    console.log(e);
}finally{
    console.log(`Obrigado pela preferencia`);
}
