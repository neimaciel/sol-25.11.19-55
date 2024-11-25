import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, Plus, Trash2 } from 'lucide-react';

export default function NewDriver() {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string>('');

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPhoto(file);
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  const removePhoto = () => {
    setPhoto(null);
    setPhotoPreview('');
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

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-primary-dark mb-6">
              Cadastrar Novo Motorista
            </h2>

            <form className="space-y-6">
              {/* Photo Upload */}
              <div>
                <label className="block text-sm font-medium text-primary-dark mb-2">
                  Foto
                </label>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    {photoPreview ? (
                      <div className="relative">
                        <img
                          src={photoPreview}
                          alt="Preview"
                          className="w-32 h-32 rounded-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={removePhoto}
                          className="absolute -top-2 -right-2 p-1 bg-red-100 rounded-full text-red-600 hover:bg-red-200"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    ) : (
                      <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center">
                        <label className="cursor-pointer">
                          <input
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={handlePhotoChange}
                          />
                          <Upload className="h-8 w-8 text-gray-400" />
                        </label>
                      </div>
                    )}
                  </div>
                  <div className="text-sm text-gray-500">
                    <p>Formatos aceitos: JPG, PNG</p>
                    <p>Tamanho máximo: 5MB</p>
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-primary-dark mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-dark mb-2">
                    CPF
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-dark mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-dark mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent"
                  />
                </div>
              </div>

              {/* Documents */}
              <div>
                <h3 className="text-lg font-medium text-primary-dark mb-4">
                  Documentação
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-primary-dark mb-2">
                      CNH
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent"
                      placeholder="Número da CNH"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-dark mb-2">
                      Validade CNH
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-primary-dark">
                        Possui certificado MOPP
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Vehicle Information */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-primary-dark">
                    Veículos
                  </h3>
                  <button
                    type="button"
                    className="flex items-center px-3 py-1.5 text-sm bg-primary-pale text-primary-dark rounded-lg hover:bg-primary-pale/80"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Adicionar Veículo
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-primary-dark mb-2">
                          Placa
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary-dark mb-2">
                          Tipo
                        </label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent">
                          <option>Selecione...</option>
                          <option>Truck</option>
                          <option>Carreta</option>
                          <option>Bitrem</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary-dark mb-2">
                          Marca/Modelo
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary-dark mb-2">
                          Ano
                        </label>
                        <input
                          type="number"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-6">
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary-light text-white rounded-lg hover:bg-primary-medium transition-colors"
                >
                  Cadastrar Motorista
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}