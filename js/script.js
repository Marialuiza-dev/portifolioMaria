const sobre = document.querySelector('#about')

const formulario = document.querySelector('#formulario')

// Expressão regular para validar o e-mail
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

async function getApiGithub() {
	try {
		// Enviar uma Requisição HTTP para a API do Github
		const dadosPerfil = await fetch(
			`https://github.com/Marialuiza-dev`
		)

		// Converte a Resposta HTTP para o formato JSON
		const perfil = await dadosPerfil.json()

		// Cria o conteúdo da Seção about
		let conteudo = `

            <!-- Imagem da seção Sobre -->
            <img src="${perfil.avatar_url}" alt="Foto do perfil do Github - ${perfil.name}" />

            <!-- Texto da seção Sobre -->
            <article id="about_texto">
                <h2>Sobre mim</h2>
                <p>Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Quem manda
                    na minha terra sou euzis! A ordem dos tratores não altera o pão duris. Copo furadis é disculpa de
                    bebadis, arcu quam euismod magna.</p>

                <div id="about_github" class="flex sobre_github">
                    <a href="${perfil.html_url}" target="_blank" class="botao">Github</a>
                    <p>${perfil.followers} seguidores</p>
                    <p>${perfil.public_repos} repositórios</p>
                </div>
            </article>
            
    `
		// Adiciona o conteúdo na página index.html, na Seção about
		sobre.innerHTML += conteudo
	} catch (error) {
		console.error(error)
	}
}

formulario.addEventListener('submit', function (event) {
	
    // Impede o envio do formulário
    event.preventDefault()

    // Seleciona o campo de nome
	const campoNome = document.querySelector('#nome')
	const txtNome = document.querySelector('#txtNome')

    // Verifica se o campo de nome tem no mínimo 3 caracteres
	if (campoNome.value.length < 3) {
		txtNome.innerHTML = 'O Nome deve ter no mínimo 3 caracteres'
		campoNome.focus()
		return
	} else {
		txtNome.innerHTML = ''
	}

    // Seleciona o campo de e-mail
	const campoEmail = document.querySelector('#email')
	const txtEmail = document.querySelector('#txtEmail')

    // Verifica se o campo de e-mail é válido
	if (!campoEmail.value.match(emailRegex)) {
		txtEmail.innerHTML = 'Digite um e-mail válido'
		campoEmail.focus()
		return
	} else {
		txtEmail.innerHTML = ''
	}

    // Seleciona o campo de assunto
	const campoAssunto = document.querySelector('#assunto')
	const txtAssunto = document.querySelector('#txtAssunto')

    // Verifica se o campo de assunto tem no mínimo 5 caracteres
	if (campoAssunto.value.length < 5) {
		txtAssunto.innerHTML = 'O Assunto deve ter no mínimo 5 caracteres'
		campoAssunto.focus()
		return
	} else {
		txtAssunto.innerHTML = ''
	}

    // Envia o e-mail
	formulario.submit()
})

// Chama a função para buscar os dados do perfil do Github
getApiGithub()