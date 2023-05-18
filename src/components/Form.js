import { useState } from 'react'

function Form(){

    function cadastrarUsuario(e){
        e.preventDeFault()
        console.log('Usuário ${name} foi cadastrado com a senha: ${password}')
        //console.log(name)
        //console.log("Cadastrou o usuário!")
    }


    //const [name, setName] = useState('Giovanna')
    const [name, setName] = useState()
    const [password, setPassword] = useState()



    return(
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="nan=me" placeholder="Digite o seu nome:"
                    //value={name}
                    onChange={(e) => setName(e.target.value)}/>
                    
                </div>
                <div>
                <   label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" placeholder = "Digite a sua senha:"
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form