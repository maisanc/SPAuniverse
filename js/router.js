

export class Router {

    routes = {} //routes é um objeto e o valor dele é vazio

    add(routeName, page) {
        this.routes[routeName] = page //propriedade e valor
    }

    route(event) {
        event = event || window.event //primeiro verifica se meu evento existe. Se não, pega da janela
        event.preventDefault() //perde o padrão de redirecionamento do click

        window.history.pushState({}, "", event.target.href)//a primeira parte é o tipo de dado que eu quero add, 2: string vazio e por ultimo a url que eu quero colocar no histórico

        //outra maneira é: const { pathname } = window.location

        this.handle() //this vai ser a refência a alguma coisa dentro do par de chaves
    }

    handle() {
        const { pathname } = window.location
        const route = this.routes[pathname] || routes[404] //Para adicionar a rota, verificamos se ela existe no pathname, se tiver quero que mostre. Caso contrário: 404 error. this pq tá dentro do escopo

        fetch(route)
            .then(data => data.text())
            .then(html => {
                document.querySelector('#app').innerHTML = html
            }) //aqui ele vai voltar com o HTML. Para isso, a seguir, devemos executar a função handle()


        console.log(route)

        //ele vai buscar a rota (promessa), then (então) vou executar uma função, com os dados. A funcionalidade do data.text() vai transformar os meus dados em um texto
    }

}

const router = new Router() //função contrutora (orientação a objeto), cria uma instancia e coloca no router. Como se fosse uma fotografia