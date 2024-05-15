function validarForm(){
    $Login = this.form1.fLogin.value
    $Senha = this.form1.fSenha.value

    $Tamanho_login = $Login.length
    $Tamanho_senha = $Senha.length

    if ($Tamanho_login < 1) {
        alert("Digite seu Login!")
        return false
    }
    if ($Tamanho_senha < 1) {
        alert("Digite sua Senha!")
        return false   
    }
    if (($Login == "Arplay") && ($Senha == "1501")) {
        alert("BEMM VINDO AMIGO!!")
        window.location.href = 'ligadoedesligado.html'
    }
    else{
        alert("LOGIN OU SENHA INVÁLIDO!!")
        window.location.href = 'Acesso_negado.html'
}
return false
}