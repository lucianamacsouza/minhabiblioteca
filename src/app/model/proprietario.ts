export interface Proprietario {
    id: number;
    nome: string;
    email: string;
}

export interface ProprietarioResponse {
    proprietarios: Proprietario[]
}


