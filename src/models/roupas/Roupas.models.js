import { v4 as uuidv4 } from "uuid";

 class Roupa {
  constructor(nome, tamanho, tipo, cor, img, estoque) {
    this.id = uuidv4();
    this.nome = nome;
    this.tamanho = tamanho;
    this.tipo = tipo;
    this.cor = cor;
    this.img = img;
    this.estoque = estoque;
  }
  generateId() {
    return uuidv4();
  }
}

export default Roupa