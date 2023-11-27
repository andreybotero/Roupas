class RoupasRepository {
  constructor() {
    this.roupa = [];
  }

  getRoupa() {
    return this.roupa;
  }

  getRoupaId(id) {
    return this.roupa.find((roupa) => roupa.id === id);
  }

  addRoupa(roupa) {
    this.roupa.push(roupa);
  }

    updateRoupa(roupaUpdated) {
        this.roupa = this.roupa.map((roupa) =>
        roupa.id === roupaUpdated.id ? roupaUpdated : roupa
        );
    }

    deleteRoupa(roupaId) {
        this.roupa = this.roupa.filter((roupa) => roupa.id !== roupaId);
    }
}

export default RoupasRepository;