import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Search, 
  Plus, 
  Star, 
  Truck, 
  Award,
  Filter,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Driver } from '../types';

const mockDrivers: Driver[] = [
  {
    id: 'driver-1',
    name: 'João Silva',
    photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=150',
    phone: '(11) 98765-4321',
    rating: 4.8,
    trips: 342,
    badge: 'Ouro',
    status: 'Disponível',
    lastActivity: new Date(),
    documents: {
      cnh: 'AB123456789',
      cnhExpiry: new Date('2025-12-31'),
      mopp: true,
      moppExpiry: new Date('2024-12-31')
    },
    vehicles: [
      {
        plate: 'ABC1234',
        type: 'Truck',
        brand: 'Volvo',
        model: 'FH 460',
        year: 2020
      }
    ]
  },
  {
    id: 'driver-2',
    name: 'Maria Santos',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150',
    phone: '(11) 98765-4322',
    rating: 4.9,
    trips: 523,
    badge: 'Diamante',
    status: 'Em viagem',
    lastActivity: new Date(),
    documents: {
      cnh: 'CD987654321',
      cnhExpiry: new Date('2026-06-30'),
      mopp: true,
      moppExpiry: new Date('2025-06-30')
    },
    vehicles: [
      {
        plate: 'DEF5678',
        type: 'Carreta',
        brand: 'Scania',
        model: 'R450',
        year: 2021
      }
    ]
  }
];

export default function Drivers() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedBadge, setSelectedBadge] = useState('all');

  const getBadgeColor = (badge: string) => {
    const colors = {
      Bronze: 'bg-amber-100 text-amber-800',
      Prata: 'bg-gray-100 text-gray-800',
      Ouro: 'bg-yellow-100 text-yellow-800',
      Diamante: 'bg-blue-100 text-blue-800'
    };
    return colors[badge as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getStatusColor = (status: string) => {
    const colors = {
      Disponível: 'text-green-500',
      'Em viagem': 'text-blue-500',
      'Em descanso': 'text-amber-500'
    };
    return colors[status as keyof typeof colors] || 'text-gray-500';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => navigate('/')}
                className="flex items-center text-gray-500 hover:text-gray-700"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Voltar ao Kanban
              </button>
            </div>
            <button
              onClick={() => navigate('/drivers/new')}
              className="flex items-center px-4 py-2 bg-primary-light text-white rounded-lg hover:bg-primary-medium transition-colors"
            >
              <Plus className="h-5 w-5 mr-2" />
              Novo Motorista
            </button>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4 flex-1">
            <div className="relative flex-1 max-w-lg">
              <input
                type="text"
                placeholder="Buscar motoristas..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="all">Todos os status</option>
              <option value="available">Disponível</option>
              <option value="on_trip">Em viagem</option>
              <option value="resting">Em descanso</option>
            </select>
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent"
              value={selectedBadge}
              onChange={(e) => setSelectedBadge(e.target.value)}
            >
              <option value="all">Todas as categorias</option>
              <option value="bronze">Bronze</option>
              <option value="silver">Prata</option>
              <option value="gold">Ouro</option>
              <option value="diamond">Diamante</option>
            </select>
          </div>
        </div>

        {/* Drivers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockDrivers.map((driver) => (
            <div
              key={driver.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => navigate(`/drivers/${driver.id}`)}
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <img
                    src={driver.photo}
                    alt={driver.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-lg font-medium text-primary-dark">{driver.name}</h4>
                      <span className={`px-2 py-0.5 text-xs rounded-full ${getBadgeColor(driver.badge)}`}>
                        {driver.badge}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-2">
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span>{driver.rating.toFixed(1)}/5.0</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Truck className="h-4 w-4 text-primary-medium" />
                        <span>{driver.trips} viagens</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <CheckCircle2 className={`h-4 w-4 ${getStatusColor(driver.status)}`} />
                        <span>{driver.status}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Calendar className="h-4 w-4 text-primary-medium" />
                        <span>Última atividade: {format(new Date(driver.lastActivity), "dd/MM/yyyy", { locale: ptBR })}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}