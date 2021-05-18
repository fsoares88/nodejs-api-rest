class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarAtendimentos()
        this.criarPets()
    }

    criarAtendimentos() {
        const sql = 'create table if not exists Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, data DATETIME NOT NULL, dataCriacao DATETIME NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'

        this.conexao.query(sql, erro =>{
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Atendimento criada com sucesso')
            }
        })
    }

    criarPets() {
        const query = 'CREATE TABLE IF NOT EXISTS Pets(id int NOT NULL AUTO_INCREMENT, nome varchar(50), imagem varchar(200), PRIMARY KEY (id))'

        this.conexao.query(query, erro => {
            if(erro) {
                console.log('Criacao da tabela cagada!');
            } else {
                console.log('Tabela Pet criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas