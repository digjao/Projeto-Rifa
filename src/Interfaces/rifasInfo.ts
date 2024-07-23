type Status = 'Disponível' | 'Cancelada' | 'Encerrada';

export interface rifasInfo {
    rifa_id: number;
    nome: string;
    descricao: string;
    status: Status;
    preco_bilhete: number;
    quant_bilhetes: number;
    quant_comprados: number;
    quant_restantes: number;
    image_url: string;
}
