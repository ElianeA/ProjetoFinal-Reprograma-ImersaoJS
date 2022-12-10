import { Account } from './models/Account.js'
import { AccountNews } from './models/AccountNews.js'
import { AccountProduct } from './models/AccountProduct.js'
import { Event } from './models/Event.js'
import { News } from './models/News.js'
import { Product } from './models/Product.js'

let saudacao = "Bem vindo a Moda Circular!!!"

console.log(`**************** ${saudacao} ****************`)

const account = new Account()
account.createAccount("Lazaro", "77988675445", "22/02/1988", "lala", "lalapereira@gmail.com", "Sw@rovisk8")         
const account1 = new Account()
account1.createAccount("Lazaro", "77988885445", "22/02/1988", "lala", "lalapereira@gmail.com", "Sw@rovisk8")

const product = new Product("Vestido Longo", "Vestido", "Vestido de viscose, vermelho longo", 50 )
const product1 = new Product("Camiseta tricolor", "T-short", "T-short de malha", 25)
const product2 = new Product("Calça Pantalona", "Calça de técido", "Calça Pantalona, tamanho 40, usada apenas uma vez, cor preta", 80 )
const product3 = new Product("Vestido Tubinho", "Vestido", "T-short de malhaVestido de malha, tamanho 44 cor Azul marinho", 55)

account1.addProduct(product1)
account1.addProduct(product3)
account.addProduct(product)
account.addProduct(product2)

const accountProduct = new AccountProduct(account1, product1)
const accountProduct1 = new AccountProduct(account1, product3)
const accountProduc2 = new AccountProduct(account, product)
const accountProduct3 = new AccountProduct(account, product2)

const news = new News("Campanha do agasalho", "Paróquia Rainha da Paz", "Paróquia Rainha da Paz"  )

account.addNews(news)
const accountNews = new AccountNews(account, news)

const event = new Event("Campanha do agasalho", "Paróquia Rainha da Paz")
account1.addEvent(event)

console.log(Account)
