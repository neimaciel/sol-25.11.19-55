import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Calendar,
  FileText,
  Truck,
  Star,
  Award,
  CheckCircle2
} from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const mockDriver = {
  id: 'driver-1',
  name: 'João Silva',
  photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=150',
  phone: '(11) 98765-4321',
  email: 'joao.silva@email.com',
  address: 'Rua das Flores, 123 - São Paulo, SP',
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
  ],
  recentTrips: [
    {
      id: 'trip-1',
      route: 'São Paulo → Rio de Janeiro',
      date: new Date('2024-03-15'),
      status: 'Concluída',
      rating: 5.0
    },
    {
      id: 'trip-2',
      route: 'Rio de Janeiro → Belo Horizonte',
      date: new Date('2024-03-10'),
      status: 'Concluída',
      rating: 4.8
    }
  ]
};

export default function DriverProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

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
            <button
              onClick={() => navigate('/drivers')}
              className="flex items-center text-gray-500 hover:text-gray-700"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Voltar para Motoristas
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex flex-col items-center text-center">
                <img
                  src={mockDriver.photo}
                  alt={mockDriver.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <h2 className="mt-4 text-xl font-semibold text-primary-dark">
                  {mockDriver.name}
                </h2>
                <div className="flex items-center gap-2 mt-2">
                  <span className={`px-3 py-1 text-sm rounded-full ${getBadgeColor(mockDriver.badge)}`}>
                    {mockDriver.badge}
                  </span>
                  <span className={`flex items-center gap-1 text-sm ${getStatusColor(mockDriver.status)}`}>
                    <CheckCircle2 className="h-4 w-4" />
                    {mockDriver.status}
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-4">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-lg font-semibold">{mockDriver.rating.toFixed(1)}</span>
                  <span className="text-sm text-gray-500">/ 5.0</span>
                </div>

                <div className="w-full mt-6 space-y-4">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Phone className="h-5 w-5 text-primary-medium" />
                    <span>{mockDriver.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Mail className="h-5 w-5 text-primary-medium" />
                    <span>{mockDriver.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <MapPin className="h-5 w-5 text-primary-medium" />
                    <span>{mockDriver.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Documents */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-primary-dark mb-4">
                Documentação
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-primary-dark">CNH</span>
                    <span className="text-xs text-primary-medium">
                      Válida até {format(mockDriver.documents.cnhExpiry, "dd/MM/yyyy", { locale: ptBR })}
                    </span>
                  </div>
                  <div className="text-sm text-primary-medium">
                    {mockDriver.documents.cnh}
                  </div>
                </div>
                {mockDriver.documents.mopp && (
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-primary-dark">MOPP</span>
                      <span className="text-xs text-primary-medium">
                        Válido até {format(mockDriver.documents.moppExpiry, "dd/MM/yyyy", { locale: ptBR })}
                      </span>
                    </div>
                    <div className="text-sm text-primary-medium">
                      Certificado ativo
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Vehicles */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-primary-dark mb-4">
                Veículos
              </h3>
              <div className="space-y-4">
                {mockDriver.vehicles.map((vehicle, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-primary-dark">
                        {vehicle.brand} {vehicle.model}
                      </span>
                      <span className="text-xs text-primary-medium">
                        {vehicle.year}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-primary-medium">
                      <span>Placa: {vehicle.plate}</span>
                      <span>•</span>
                      <span>Tipo: {vehicle.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Trips */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-primary-dark mb-4">
                Viagens Recentes
              </h3>
              <div className="space-y-4">
                {mockDriver.recentTrips.map((trip) => (
                  <div key={trip.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-primary-dark">
                        {trip.route}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm">{trip.rating.toFixed(1)}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-primary-medium">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{format(trip.date, "dd/MM/yyyy", { locale: ptBR })}</span>
                      </div>
                      <span>•</span>
                      <span>{trip.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}