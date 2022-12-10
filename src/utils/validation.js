export function verificarData(data) {
    let match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(data);
    if (match) {
        let dia = parseInt(match[1]);
        let mes = parseInt(match[2]);
        let ano = parseInt(match[3]);

        let d = new Date(ano, mes - 1, dia);
        let dataValida = d.getFullYear() == ano
                        && d.getMonth() + 1 == mes
                        && d.getDate() == dia;
        return dataValida; // true
    } else {
        throw new Error('string não está no formato dd/mm/aaaa, ou não é uma data')
    }
}

export function maiorIdade(data) {
    var ano_atual = new Date().getFullYear();
    var data_aniversario = data;
    var ano_informado = data_aniversario.split('/')[2];
    let idade = ano_atual - ano_informado;
    if(idade >= 18) {
        return idade
    } else {
        throw new Error("O Usuário não é maior de idade")
    }
}

export function dateBirthValidation(data){
    let verData = verificarData(data)
    let idade = maiorIdade(data)
    if(!verData || !idade) {
        throw new Error("Algo deu errado! Digite uma data válida maior ou igual à 18 anos")        
    } else {
        return "Usuario criado com sucesso"
    }
}

dateBirthValidation("25/05/1980")

export function passwordCheck(password) {
    let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,}$/;

    if(!regexPassword.test(password)) {
        throw new Error("Error! Porfavor digite uma senha que contenha: deve conter ao menos um dígito; deve conter ao menos uma letra minúscula; deve conter ao menos uma letra maiúscula; deve conter ao menos um caractere especial; deve conter ao menos 8 dos caracteres mencionados")
    } else {
        return true
    }
}

export function emailVerification(email) {
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!emailRegex.test(email)) {
            throw new Error("Erro, email inválido")
        }
        else {
            return true;
        }
}

export function phoneVerification(phone) {
    let phoneRegex = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;

    if (!phoneRegex.test(phone)) {
        throw new Error("Erro, phone inválido")
    }
    else {
        return true;
    }
}

//emailVerification("elianevia@gmail.com")

/*
Validação de senha 
 deve conter ao menos um dígito
 deve conter ao menos uma letra minúscula
 deve conter ao menos uma letra maiúscula
 deve conter ao menos um caractere especial
 deve conter ao menos 8 dos caracteres mencionados

 regexSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,}$/;

Validação de senha 
 deve conter ao menos um dígito
 deve conter ao menos uma letra minúscula
 deve conter ao menos uma letra maiúscula
 deve conter ao menos um caractere especial
 
 regexSenha =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/
*/