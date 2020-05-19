import { ProprietarioModel } from './proprietario-model';
import { EditoraModel } from './editora-model';
import { AutorModel } from './autor-model';
import { GeneroModel } from './genero-model';

export class LivroModel {
    id: number;
    titulo: string;
    subtitulo?: string;
    anoEdicao?: number;
    numeroEdicao?: number;
    isbn10?: string;
    dataInclusao?: any; 
    resumo?: string;

    genero: GeneroModel;
    autor:  AutorModel;
    editora: EditoraModel;
    proprietario: ProprietarioModel;
}
