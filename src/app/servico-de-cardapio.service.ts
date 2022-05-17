import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicoDeCardapioService {

  bebidas: Array<{ id: number, nome: string, descricao: string, img: string, icon: string, preco: number }>;
  pratos: Array<{ id: number, nome: string, descricao: string, img: string, icon: string, preco: number }>;
  sobremesas: Array<{ id: number, nome: string, descricao: string, img: string, icon: string, preco: number }>;
  lanches: Array<{ id: number, nome: string, descricao: string, img: string, icon: string, preco: number }>;
  categorias: Array<{ id: number, nome: string, img: string, url:string }>;

  constructor() {

this.categorias=[
  { id: 1, nome: 'BEBIDAS', img: './assets/bebidas.jpg',url:'bebidas' },
  { id: 2, nome: 'PRATOS', img: './assets/pratos.jpg',url:'pratos' },
  { id: 3, nome: 'SOBREMESAS', img: './assets/sobremesas.jpg',url:'sobremesas' },
  { id: 4, nome: 'LANCHES', img: './assets/lanches.jpeg',url:'lanches' },
]

    this.bebidas = [
      { id: 1000, nome: 'Coca-cola', descricao: 'Coca-Cola em lata', img: './assets/coca-cola.jpg', icon: 'start', preco: 7.50 },
      { id: 1001, nome: 'Suco de Laranja', descricao: 'Suco de Laranja Feito na Hora', img: './assets/sucolaranja.jpg', icon: 'start', preco: 8 },
      { id: 1002, nome: 'Cerveja Heineken', descricao: 'Cerveja Heineken LongNeck', img: './assets/heineken.png', icon: 'start', preco: 8.50 },
      { id: 1003, nome: 'Cerveja Stela Artois', descricao: 'Cerveja Stela Artois', img: './assets/stela.webp', icon: 'start', preco: 8.50 },
      { id: 1004, nome: 'Água', descricao: 'Água Mineral', img: './assets/agua.jpg', icon: 'start', preco: 5.00 },

    ];

    this.pratos = [
      { id: 2000, nome: 'Bife a Oswaldo Aranha', descricao: 'Contra filé, arroz, feijão e batatas fritas', img: './assets/pratos.jpg', icon: 'start', preco: 27.50 },
      { id: 2001, nome: 'Filé de Peixe', descricao: 'Filé de Tilápia grelhado no limão, pimenta biquinho e vagem', img: './assets/filepeixe.jpg', icon: 'start', preco: 30.00 },
      { id: 2002, nome: 'Gurjão de Peixe', descricao: 'Tirinhas de filé de peixe empanadas com molho tártaro', img: './assets/gurjao.jpg', icon: 'start', preco: 25.00 },
      { id: 2003, nome: 'Batata Frita', descricao: 'Porção de batatas fritas rústicas', img: './assets/batata-frita.jpg', icon: 'start', preco: 15.00 },
      { id: 2004, nome: 'Bife com Arroz a Piamontese ', descricao: 'Bife Angus com arroz a piamontese(contém queijo)', img: './assets/bifepiamontese.jpg', icon: 'start', preco: 35.00 },

    ];

    this.sobremesas = [
      { id: 3000, nome: 'Pudim', descricao: 'Delicioso pudim de leite condensado', img: './assets/pudim.jpg', icon: 'start', preco: 10.50 },
      { id: 3001, nome: 'Sorvete', descricao: 'Sorvetes de diversos sabores: tapioca, creme, baunilha e chocolate', img: './assets/sorvete.jpg', icon: 'start', preco: 17.00 },
      { id: 3002, nome: 'Brownie', descricao: 'Brownie de chocolate quentinho com sorvete de creme', img: './assets/brownie.jpg', icon: 'start', preco: 25.00 },
      { id: 3003, nome: 'Cocada', descricao: 'Cocada de forno com sorvete de Tapioca', img: './assets/cocada.jpg', icon: 'start', preco: 15.00 },
      { id: 3004, nome: 'Romeu e Julieta ', descricao: 'Nosso famoso doce de goiaba com queijo', img: './assets/romeujulieta.jpeg', icon: 'start', preco: 10.00 },

    ];

    this.lanches = [
      { id: 4000, nome: 'Cheeseburger', descricao: 'Delicioso Cheeseburger artesanal', img: './assets/cheeseburger.jpg', icon: 'start', preco: 32.00 },
      { id: 4001, nome: 'Omelete', descricao: 'Omelete com salsa e cebolinha', img: './assets/omelete.jpg', icon: 'start', preco: 17.00 },
      { id: 4002, nome: 'Quesadilla', descricao: 'Deliciosas tortilhas  argentinas parecidos com nossos pastéis. Carne e Queijo.', img: './assets/quesadillas.jpg', icon: 'start', preco: 27.00 },
      { id: 4003, nome: 'Crepe', descricao: 'Crepes em diversos sabores: Presunto, queijo e lombo canadense', img: './assets/crepe.jpg', icon: 'start', preco: 30.00 },
      { id: 4004, nome: 'Empada', descricao: 'Empadinhas de vários sabores: Palmito, queijo, camarão e frango', img: './assets/empada.jpg', icon: 'start', preco: 5.00 },

    ];

  }
}
