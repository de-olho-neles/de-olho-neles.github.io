export interface Gabinete {
    andar: string;
    email: string;
    nome: string;
    predio: string;
    sala: string;
    telefone: string;
}

export interface UltimoStatus {
    condicaoEleitoral: string;
    data: string;
    descricaoStatus: string;
    email: string;
    gabinete: Gabinete;
    id: number;
    idLegislatura: number;
    nome: string;
    nomeEleitoral: string;
    siglaPartido: string;
    siglaUf: string;
    situacao: string;
    uri: string;
    uriPartido: string;
    urlFoto: string;
}

export interface DetailedDeputado {
    cpf: string;
    dataFalecimento: string;
    dataNascimento: string;
    email: string;
    escolaridade: string;
    id: number;
    municipioNascimento: string;
    nomeCivil: string;
    redeSocial: string[];
    sexo: string;
    ufNascimento: string;
    ultimoStatus: UltimoStatus;
    uri: string;
    urlWebsite: string;
    despesas: Despesa[];
    frentes: Frente[];
    orgaos: Orgao[];
}

export interface Despesa {
    ano: string;
    cnpjCpfFornecedor: string;
    codDocumento: string;
    codLote: string;
    codTipoDocumento: string;
    dataDocumento: string;
    mes: string;
    nomeFornecedor: string;
    numDocumento: string;
    numRessarcimento: string;
    parcela: string;
    tipoDespesa: string;
    tipoDocumento: string;
    urlDocumento: string;
    valorDocumento: string;
    valorGlosa: string;
    valorLiquido: string;
}

export interface Frente {
    id: string;
    uri: string;
    titulo: string;
    idLegislatura: string;
}

export interface Orgao {
    idOrgao: string;
    uriOrgao: string;
    siglaOrgao: string;
    nomeOrgao: string;
    titulo: string;
    codTitulo: string;
    dataInicio: string;
    dataFim: string;
}