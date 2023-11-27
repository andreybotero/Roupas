import listaRoupas from "../models/roupas/RoupasRepository.models.js";
import Roupas from "../models/roupas/Roupas.models.js";

const RoupasRepository = new listaRoupas();


export const getRoupaId = (req, res) => {
  const { id } = req.params;
  const roupa = RoupasRepository.getRoupaId(id);
  if (roupa) {
    return res.status(200).send(roupa);
  }
  return res.status(404).send({ message: "Roupa não encontrada" });
};

export const createRoupa = (req, res) => {
  const { nome, tamanho, tipo, cor, img, estoque } = req.body;

  const roupa = new Roupas(nome, tamanho, tipo, cor, img, estoque);

  RoupasRepository.addRoupa(roupa);
  return res.status(201).send(roupa);
};

export const updateRoupa = (req, res) => {
  const { id } = req.params;
  const { nome, tamanho, tipo, cor, img, estoque } = req.body;
  const roupa = RoupasRepository.getRoupaId(id);
  if (roupa) {
    const roupaUpdated = { id, nome, tamanho, tipo, cor, img, estoque };
    RoupasRepository.updateRoupa(roupaUpdated);
    return res.status(200).send(roupaUpdated);
  }
  return res.status(404).send({ message: "Roupa não encontrada" });
};

export const deleteRoupa = (req, res) => {
  const { id } = req.params;
  const roupa = RoupasRepository.getRoupaId(id);
  if (roupa) {
    RoupasRepository.deleteRoupa(id);
    return res.status(200).send({ message: "Roupa deletada com sucesso" });
  }
  return res.status(404).send({ message: "Roupa não encontrada" });
};

const validateRoupa = (roupa) => {
  const { nome, tipo, tamanho, cor, estoque, img } = roupa;
  if (
    nome.length < 6 ||
    nome.length > 40 ||
    typeof tipo !== "string" ||
    tipo.length > 50 ||
    !["PP", "P", "M", "G", "GG", "XG"].includes(tamanho) ||
    typeof cor !== "string" ||
    cor.length > 20 ||
    !Number.isInteger(estoque) ||
    estoque < 0 ||
    estoque > 15000 ||
    !img.match(/\.(jpeg|jpg|gif|png)$/)
  ) {
    return false;
  }
  return true
};

export const getRoupa = (req, res) => {
  const { tamanho, tipo, cor } = req.query;
  let roupa = RoupasRepository.getRoupa();

  if(roupa.length == 0) {
    return res.status(404).send({ message: "Não há roupas encontradas" });
  }else {
    if(tamanho) {
      roupa = roupa.filter((roupa) => roupa.tamanho === tamanho);
    }
    if(tipo) {
      roupa = roupa.filter((roupa) => roupa.tipo === tipo);
    }
    if(cor) {
      roupa = roupa.filter((roupa) => roupa.cor === cor);
    } 
    
    
    let contador = roupa.length;
    
    
    return res.status(200).send({contador, roupa});
  }
}