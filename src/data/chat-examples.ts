// First, let's create more chat examples for different scenarios
export const chatExamples = {
  offer: [
    {
      id: 'msg-1',
      sender: 'Sistema',
      content: 'Nova carga cadastrada no sistema.',
      timestamp: new Date(),
      type: 'text',
      status: 'read'
    }
  ],
  
  broadcast: [
    {
      id: 'msg-2',
      sender: 'Transportadora Express',
      content: 'Temos interesse. Qual o valor base para negociação?',
      timestamp: new Date(),
      type: 'text',
      status: 'read'
    },
    {
      id: 'msg-3',
      sender: 'Operador',
      content: 'Valor base é R$ 4.500,00. Podemos negociar.',
      timestamp: new Date(),
      type: 'text',
      status: 'read'
    }
  ],

  negotiation: [
    {
      id: 'msg-4',
      sender: 'Transportadora Express',
      content: 'Conseguimos fazer por R$ 4.200,00. Temos veículo disponível na região.',
      timestamp: new Date(),
      type: 'text',
      status: 'read'
    },
    {
      id: 'msg-5',
      sender: 'Operador',
      content: 'Fechamos por R$ 4.300,00 com adiantamento de 30%. Pode ser?',
      timestamp: new Date(),
      type: 'text',
      status: 'read'
    },
    {
      id: 'msg-6',
      sender: 'Transportadora Express',
      content: 'Acordo fechado. Enviarei os documentos do veículo e motorista.',
      timestamp: new Date(),
      type: 'text',
      status: 'read'
    }
  ],

  documentation: [
    {
      id: 'msg-7',
      sender: 'Sistema',
      content: 'Aguardando documentação do motorista e veículo.',
      timestamp: new Date(),
      type: 'text',
      status: 'read'
    },
    {
      id: 'msg-8',
      sender: 'João Silva',
      content: 'Segue CNH e documentos do veículo para análise.',
      timestamp: new Date(),
      type: 'document',
      fileName: 'CNH_Joao_Silva.pdf',
      fileSize: 2500000,
      fileUrl: '/docs/cnh.pdf',
      status: 'read'
    }
  ],

  risk: [
    {
      id: 'msg-9',
      sender: 'Sistema',
      content: 'Análise de risco em andamento.',
      timestamp: new Date(),
      type: 'text',
      status: 'read'
    },
    {
      id: 'msg-10',
      sender: 'Operador',
      content: 'Documentação aprovada. Gerando contrato.',
      timestamp: new Date(),
      type: 'text',
      status: 'read'
    }
  ],

  contract: [
    {
      id: 'msg-11',
      sender: 'Operador',
      content: 'Contrato enviado para assinatura.',
      timestamp: new Date(),
      type: 'document',
      fileName: 'Contrato_12345.pdf',
      fileSize: 3500000,
      fileUrl: '/docs/contrato.pdf',
      status: 'read'
    },
    {
      id: 'msg-12',
      sender: 'Transportadora Express',
      content: 'Contrato assinado e enviado.',
      timestamp: new Date(),
      type: 'document',
      fileName: 'Contrato_12345_Assinado.pdf',
      fileSize: 3600000,
      fileUrl: '/docs/contrato_assinado.pdf',
      status: 'read'
    }
  ],

  loading: [
    {
      id: 'msg-13',
      sender: 'João Silva',
      content: 'Cheguei ao local de carregamento.',
      timestamp: new Date(),
      type: 'text',
      status: 'read'
    },
    {
      id: 'msg-14',
      sender: 'João Silva',
      content: 'Carregamento iniciado. Segue foto da carga.',
      timestamp: new Date(),
      type: 'image',
      fileName: 'Foto_Carregamento.jpg',
      fileSize: 3500000,
      fileUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800',
      status: 'read'
    }
  ],

  transit: [
    {
      id: 'msg-15',
      sender: 'João Silva',
      content: 'Em trânsito. Previsão de chegada conforme programado.',
      timestamp: new Date(),
      type: 'text',
      status: 'read'
    },
    {
      id: 'msg-16',
      sender: 'Sistema',
      content: 'Localização atualizada: BR-116, km 432',
      timestamp: new Date(),
      type: 'text',
      status: 'read'
    }
  ],

  unloading: [
    {
      id: 'msg-17',
      sender: 'João Silva',
      content: 'Chegamos ao destino. Aguardando autorização para descarga.',
      timestamp: new Date(),
      type: 'text',
      status: 'read'
    },
    {
      id: 'msg-18',
      sender: 'João Silva',
      content: 'Descarga finalizada. Canhoto assinado.',
      timestamp: new Date(),
      type: 'document',
      fileName: 'Canhoto_NF_12345.pdf',
      fileSize: 1200000,
      fileUrl: '/docs/canhoto.pdf',
      status: 'read'
    }
  ],

  completed: [
    {
      id: 'msg-19',
      sender: 'Sistema',
      content: 'Entrega concluída com sucesso.',
      timestamp: new Date(),
      type: 'text',
      status: 'read'
    },
    {
      id: 'msg-20',
      sender: 'Operador',
      content: 'Processo finalizado. Pagamento será liberado em 24h.',
      timestamp: new Date(),
      type: 'text',
      status: 'read'
    }
  ]
};