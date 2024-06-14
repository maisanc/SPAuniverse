import { Router } from "./router.js"

const router = new Router()
router.add('/', "/pages/home.html"),
    router.add("/about", "/pages/about.html"),
    router.add("/contact", "/pages/contact.html"),
    router.add(404, "/pages/404.html"),

    router.handle()

window.onpopstate = () => router.handle() //essa função serve para que eu consiga voltar para a janela anterior
window.route = () => router.route() //a função não estava funcionando quando coloquei o código aqui, por isso essa parte. Eu também poderia ter colocado a window diretamente no index.html