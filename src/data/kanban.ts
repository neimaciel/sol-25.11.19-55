import { Card } from '../types';
import { chatExamples } from './chat-examples';

export const columns = [
  { id: 'offer', title: 'Oferta de Cargas', color: 'bg-blue-100' },
  { id: 'broadcast', title: 'Divulgação', color: 'bg-purple-100' },
  { id: 'negotiation', title: 'Em Negociação', color: 'bg-yellow-100' },
  { id: 'documentation', title: 'Documentação', color: 'bg-orange-100' },
  { id: 'risk', title: 'Análise de Risco', color: 'bg-red-100' },
  { id: 'contract', title: 'Contratação', color: 'bg-green-100' },
  { id: 'loading', title: 'Carregamento', color: 'bg-teal-100' },
  { id: 'transit', title: 'Em Trânsito', color: 'bg-cyan-100' },
  { id: 'unloading', title: 'Descarregamento', color: 'bg-indigo-100' },
  { id: 'completed', title: 'Concluído', color: 'bg-gray-100' }
];

const defaultDriver = {
  name: 'João Silva',
  photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=150',
  phone: '(11) 98765-4321',
  rating: 4.8,
  trips: 342,
  badge: 'Ouro' as const,
  status: 'Disponível' as const,
  lastActivity: new Date()
};

const defaultTransportadora = {
  name: 'Transportadora Express',
  photo: 'https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?w=150',
  category: 'Premium' as const,
  rating: 4.9,
  totalTrips: 1250,
  status: 'Ativa' as const,
  since: new Date('2020-01-01'),
  fleet: {
    total: 45,
    available: 12
  }
};

export const initialCards: Record<string, Card[]> = {
  offer: [
    {
      id: 'card-1',
      code: 'CARGA-001',
      title: 'Carga São Paulo → Rio de Janeiro',
      origin: {
        name: 'CD São Paulo',
        address: 'Av. Paulista, 1000',
        city: 'São Paulo',
        state: 'SP',
        coordinates: [-46.6333, -23.5505]
      },
      destination: {
        name: 'CD Rio',
        address: 'Av. Brasil, 500',
        city: 'Rio de Janeiro',
        state: 'RJ',
        coordinates: [-43.1729, -22.9068]
      },
      status: 'Nova oferta',
      type: 'Carga Completa',
      weight: 12000,
      volume: 45,
      value: 3800,
      product: {
        name: 'Eletrônicos',
        description: 'Equipamentos eletrônicos diversos',
        requirements: ['Ambiente seco', 'Cuidado especial']
      },
      stops: [],
      documents: [],
      vehicle: {
        type: 'Truck',
        bodywork: ['Baú']
      },
      dates: {
        pickup: new Date('2024-03-20'),
        delivery: new Date('2024-03-21')
      },
      tags: ['Eletrônicos', 'Carga Frágil'],
      chat: chatExamples.offer,
      attachments: []
    },
    {
      id: 'card-13',
      code: 'CARGA-013',
      title: 'Carga Porto Alegre → Curitiba',
      origin: {
        name: 'CD Porto Alegre',
        address: 'Av. Assis Brasil, 1500',
        city: 'Porto Alegre',
        state: 'RS',
        coordinates: [-51.2177, -30.0346]
      },
      destination: {
        name: 'CD Curitiba',
        address: 'Rod. BR-116, 300',
        city: 'Curitiba',
        state: 'PR',
        coordinates: [-49.2731, -25.4195]
      },
      status: 'Nova oferta',
      type: 'Carga Completa',
      weight: 18000,
      volume: 65,
      value: 5200,
      product: {
        name: 'Móveis',
        description: 'Móveis residenciais',
        requirements: ['Proteção contra chuva', 'Cuidado especial']
      },
      stops: [],
      documents: [],
      vehicle: {
        type: 'Carreta',
        bodywork: ['Sider']
      },
      dates: {
        pickup: new Date('2024-03-23'),
        delivery: new Date('2024-03-24')
      },
      tags: ['Móveis', 'Carga Frágil'],
      chat: chatExamples.offer,
      attachments: []
    }
  ],
  broadcast: [
    {
      id: 'card-14',
      code: 'CARGA-014',
      title: 'Carga Salvador → Recife',
      origin: {
        name: 'CD Salvador',
        address: 'Av. Paralela, 3000',
        city: 'Salvador',
        state: 'BA',
        coordinates: [-38.5108, -12.9714]
      },
      destination: {
        name: 'CD Recife',
        address: 'Av. Recife, 500',
        city: 'Recife',
        state: 'PE',
        coordinates: [-34.8811, -8.0539]
      },
      status: 'Em divulgação',
      type: 'Carga Completa',
      weight: 16000,
      volume: 58,
      value: 5800,
      product: {
        name: 'Alimentos Refrigerados',
        description: 'Produtos alimentícios que necessitam refrigeração',
        requirements: ['Refrigeração', 'Controle de temperatura']
      },
      stops: [],
      documents: [],
      vehicle: {
        type: 'Carreta',
        bodywork: ['Baú Refrigerado']
      },
      dates: {
        pickup: new Date('2024-03-25'),
        delivery: new Date('2024-03-26')
      },
      tags: ['Refrigerado', 'Alimentos'],
      chat: chatExamples.broadcast,
      attachments: [],
      transportadora: defaultTransportadora
    },
    {
      id: 'card-15',
      code: 'CARGA-015',
      title: 'Carga Fortaleza → Natal',
      origin: {
        name: 'CD Fortaleza',
        address: 'Av. Washington Soares, 1000',
        city: 'Fortaleza',
        state: 'CE',
        coordinates: [-38.5433, -3.7172]
      },
      destination: {
        name: 'CD Natal',
        address: 'Av. Natal, 300',
        city: 'Natal',
        state: 'RN',
        coordinates: [-35.2094, -5.7793]
      },
      status: 'Em divulgação',
      type: 'Carga Fracionada',
      weight: 13000,
      volume: 48,
      value: 4100,
      product: {
        name: 'Têxteis',
        description: 'Produtos têxteis diversos',
        requirements: ['Ambiente seco']
      },
      stops: [],
      documents: [],
      vehicle: {
        type: 'Truck',
        bodywork: ['Baú']
      },
      dates: {
        pickup: new Date('2024-03-26'),
        delivery: new Date('2024-03-27')
      },
      tags: ['Têxteis'],
      chat: chatExamples.broadcast,
      attachments: []
    }
  ],
  negotiation: [
    {
      id: 'card-16',
      code: 'CARGA-016',
      title: 'Carga Belo Horizonte → São Paulo',
      origin: {
        name: 'CD Belo Horizonte',
        address: 'Av. Amazonas, 2000',
        city: 'Belo Horizonte',
        state: 'MG',
        coordinates: [-43.9346, -19.9208]
      },
      destination: {
        name: 'CD São Paulo',
        address: 'Rod. Anhanguera, 1000',
        city: 'São Paulo',
        state: 'SP',
        coordinates: [-46.6333, -23.5505]
      },
      status: 'Em negociação',
      type: 'Carga Completa',
      weight: 14000,
      volume: 50,
      value: 4500,
      product: {
        name: 'Autopeças',
        description: 'Peças automotivas diversas',
        requirements: ['Cuidado especial']
      },
      stops: [],
      documents: [],
      vehicle: {
        type: 'Carreta',
        bodywork: ['Baú']
      },
      dates: {
        pickup: new Date('2024-03-24'),
        delivery: new Date('2024-03-25')
      },
      tags: ['Autopeças'],
      chat: chatExamples.negotiation,
      attachments: [],
      transportadora: defaultTransportadora
    }
  ],
  documentation: [
    {
      id: 'card-17',
      code: 'CARGA-017',
      title: 'Carga Curitiba → Florianópolis',
      origin: {
        name: 'CD Curitiba',
        address: 'Rod. BR-116, 300',
        city: 'Curitiba',
        state: 'PR',
        coordinates: [-49.2731, -25.4195]
      },
      destination: {
        name: 'CD Florianópolis',
        address: 'Rod. SC-401, 200',
        city: 'Florianópolis',
        state: 'SC',
        coordinates: [-48.5482, -27.5945]
      },
      status: 'Docs pendentes',
      type: 'Carga Completa',
      weight: 15000,
      volume: 55,
      value: 4200,
      product: {
        name: 'Produtos Químicos',
        description: 'Produtos químicos não perigosos',
        requirements: ['Licença especial', 'MOPP']
      },
      stops: [],
      documents: [],
      vehicle: {
        type: 'Carreta',
        bodywork: ['Tanque']
      },
      dates: {
        pickup: new Date('2024-03-25'),
        delivery: new Date('2024-03-26')
      },
      tags: ['Químicos', 'MOPP'],
      chat: chatExamples.documentation,
      attachments: [],
      driver: defaultDriver,
      transportadora: defaultTransportadora
    }
  ],
  risk: [
    {
      id: 'card-18',
      code: 'CARGA-018',
      title: 'Carga Manaus → Belém',
      origin: {
        name: 'CD Manaus',
        address: 'Av. Djalma Batista, 1500',
        city: 'Manaus',
        state: 'AM',
        coordinates: [-60.0217, -3.1190]
      },
      destination: {
        name: 'CD Belém',
        address: 'Av. Almirante Barroso, 400',
        city: 'Belém',
        state: 'PA',
        coordinates: [-48.4902, -1.4558]
      },
      status: 'Em análise',
      type: 'Carga Completa',
      weight: 20000,
      volume: 72,
      value: 8500,
      product: {
        name: 'Eletrônicos',
        description: 'Equipamentos eletrônicos de alto valor',
        requirements: ['Seguro especial', 'Rastreamento']
      },
      stops: [],
      documents: [],
      vehicle: {
        type: 'Carreta',
        bodywork: ['Baú']
      },
      dates: {
        pickup: new Date('2024-03-27'),
        delivery: new Date('2024-03-28')
      },
      tags: ['Eletrônicos', 'Alto Valor'],
      chat: chatExamples.risk,
      attachments: [],
      driver: defaultDriver,
      transportadora: defaultTransportadora
    }
  ],
  contract: [
    {
      id: 'card-19',
      code: 'CARGA-019',
      title: 'Carga Goiânia → Brasília',
      origin: {
        name: 'CD Goiânia',
        address: 'Av. Perimetral Norte, 2000',
        city: 'Goiânia',
        state: 'GO',
        coordinates: [-49.2647, -16.6869]
      },
      destination: {
        name: 'CD Brasília',
        address: 'SIA Trecho 3',
        city: 'Brasília',
        state: 'DF',
        coordinates: [-47.9292, -15.7801]
      },
      status: 'Contratação',
      type: 'Carga Completa',
      weight: 11000,
      volume: 40,
      value: 3200,
      product: {
        name: 'Material de Construção',
        description: 'Materiais diversos para construção',
        requirements: ['Proteção contra chuva']
      },
      stops: [],
      documents: [],
      vehicle: {
        type: 'Truck',
        bodywork: ['Graneleiro']
      },
      dates: {
        pickup: new Date('2024-03-19'),
        delivery: new Date('2024-03-20')
      },
      tags: ['Construção'],
      chat: chatExamples.contract,
      attachments: [],
      driver: defaultDriver,
      transportadora: defaultTransportadora
    }
  ],
  loading: [
    {
      id: 'card-20',
      code: 'CARGA-020',
      title: 'Carga Campo Grande → Cuiabá',
      origin: {
        name: 'CD Campo Grande',
        address: 'Av. Costa e Silva, 1000',
        city: 'Campo Grande',
        state: 'MS',
        coordinates: [-54.6462, -20.4428]
      },
      destination: {
        name: 'CD Cuiabá',
        address: 'Av. Miguel Sutil, 500',
        city: 'Cuiabá',
        state: 'MT',
        coordinates: [-56.0949, -15.5989]
      },
      status: 'Em carregamento',
      type: 'Carga Completa',
      weight: 17000,
      volume: 62,
      value: 5500,
      product: {
        name: 'Grãos',
        description: 'Soja a granel',
        requirements: ['Proteção contra umidade']
      },
      stops: [],
      documents: [],
      vehicle: {
        type: 'Carreta',
        bodywork: ['Graneleiro']
      },
      dates: {
        pickup: new Date('2024-03-19'),
        delivery: new Date('2024-03-20')
      },
      tags: ['Grãos'],
      chat: chatExamples.loading,
      attachments: [],
      driver: defaultDriver,
      transportadora: defaultTransportadora
    }
  ],
  transit: [
    {
      id: 'card-21',
      code: 'CARGA-021',
      title: 'Carga Vitória → Rio de Janeiro',
      origin: {
        name: 'CD Vitória',
        address: 'Av. Fernando Ferrari, 800',
        city: 'Vitória',
        state: 'ES',
        coordinates: [-40.3128, -20.3155]
      },
      destination: {
        name: 'CD Rio',
        address: 'Av. Brasil, 15000',
        city: 'Rio de Janeiro',
        state: 'RJ',
        coordinates: [-43.1729, -22.9068]
      },
      status: 'Em trânsito',
      type: 'Carga Completa',
      weight: 19000,
      volume: 68,
      value: 6200,
      product: {
        name: 'Bebidas',
        description: 'Bebidas diversas',
        requirements: ['Cuidado com empilhamento']
      },
      stops: [],
      documents: [],
      vehicle: {
        type: 'Carreta',
        bodywork: ['Baú']
      },
      dates: {
        pickup: new Date('2024-03-18'),
        delivery: new Date('2024-03-19')
      },
      tags: ['Bebidas'],
      chat: chatExamples.transit,
      attachments: [],
      driver: defaultDriver,
      transportadora: defaultTransportadora
    }
  ],
  unloading: [
    {
      id: 'card-22',
      code: 'CARGA-022',
      title: 'Carga São Paulo → Campinas',
      origin: {
        name: 'CD São Paulo',
        address: 'Av. Paulista, 1000',
        city: 'São Paulo',
        state: 'SP',
        coordinates: [-46.6333, -23.5505]
      },
      destination: {
        name: 'CD Campinas',
        address: 'Rod. Dom Pedro I, km 132',
        city: 'Campinas',
        state: 'SP',
        coordinates: [-47.0626, -22.9064]
      },
      status: 'Descarregando',
      type: 'Carga Completa',
      weight: 10000,
      volume: 35,
      value: 2500,
      product: {
        name: 'Produtos Farmacêuticos',
        description: 'Medicamentos diversos',
        requirements: ['Temperatura controlada', 'Manuseio especial']
      },
      stops: [],
      documents: [],
      vehicle: {
        type: 'Truck',
        bodywork: ['Baú Refrigerado']
      },
      dates: {
        pickup: new Date('2024-03-18'),
        delivery: new Date('2024-03-19')
      },
      tags: ['Farmacêuticos', 'Refrigerado'],
      chat: chatExamples.unloading,
      attachments: [],
      driver: defaultDriver,
      transportadora: defaultTransportadora
    }
  ],
  completed: [
    {
      id: 'card-23',
      code: 'CARGA-023',
      title: 'Carga Recife → João Pessoa',
      origin: {
        name: 'CD Recife',
        address: 'Av. Recife, 500',
        city: 'Recife',
        state: 'PE',
        coordinates: [-34.8811, -8.0539]
      },
      destination: {
        name: 'CD João Pessoa',
        address: 'BR-230, km 12',
        city: 'João Pessoa',
        state: 'PB',
        coordinates: [-34.8631, -7.1195]
      },
      status: 'Concluído',
      type: 'Carga Completa',
      weight: 13000,
      volume: 45,
      value: 3800,
      product: {
        name: 'Alimentos Secos',
        description: 'Alimentos não perecíveis',
        requirements: ['Ambiente seco']
      },
      stops: [],
      documents: [],
      vehicle: {
        type: 'Truck',
        bodywork: ['Baú']
      },
      dates: {
        pickup: new Date('2024-03-17'),
        delivery: new Date('2024-03-18')
      },
      tags: ['Alimentos'],
      chat: chatExamples.completed,
      attachments: [],
      driver: defaultDriver,
      transportadora: defaultTransportadora
    }
  ]
};