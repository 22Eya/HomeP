import React from 'react';
import { 
  Users, 
  Calendar, 
  BookOpen,
  ChevronRight,
  TrendingUp,
  Leaf
} from 'lucide-react';
import StatCard from '../Components/StatCard';


const AccueilPage = ({ memberStats }) => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Association Tunisienne des Promotions Universitaires</h1>
        <p className="text-xl mb-6">Une famille universitaire unie pour l'avenir</p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
          Rejoindre l'Association
        </button>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="MEMBRES TOTAUX"
          value={memberStats.totalMembers}
          change={5.2}
          icon={Users}
          color="blue"
        />
        <StatCard
          title="MEMBRES ACTIFS"
          value={memberStats.activeMembers}
          change={3.48}
          icon={Users}
          color="green"
        />
        <StatCard
          title="ÉVÉNEMENTS"
          value={memberStats.events}
          change={8.12}
          icon={Calendar}
          color="purple"
        />
        <StatCard
          title="FORMATIONS"
          value={memberStats.formations}
          change={12.5}
          icon={BookOpen}
          color="orange"
        />
      </div>

      {/* Nos Axes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-xl font-bold">Formation</h3>
          </div>
          <p className="text-gray-600 mb-4">Hackathons, formations, conférences pour développer vos compétences</p>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-700">
              <ChevronRight className="w-4 h-4 mr-2 text-blue-600" />
              Hackathons mensuels
            </li>
            <li className="flex items-center text-gray-700">
              <ChevronRight className="w-4 h-4 mr-2 text-blue-600" />
              Formations techniques
            </li>
            <li className="flex items-center text-gray-700">
              <ChevronRight className="w-4 h-4 mr-2 text-blue-600" />
              Conférences expertes
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <Leaf className="w-8 h-8 text-green-600 mr-3" />
            <h3 className="text-xl font-bold">Environnement</h3>
          </div>
          <p className="text-gray-600 mb-4">Actions concrètes pour préserver notre environnement</p>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-700">
              <ChevronRight className="w-4 h-4 mr-2 text-green-600" />
              Nettoyage campus
            </li>
            <li className="flex items-center text-gray-700">
              <ChevronRight className="w-4 h-4 mr-2 text-green-600" />
              Plantation d'arbres
            </li>
            <li className="flex items-center text-gray-700">
              <ChevronRight className="w-4 h-4 mr-2 text-green-600" />
              Sensibilisation écologique
            </li>
          </ul>
        </div>
      </div>

      {/* Graphique d'évolution */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4">Évolution de l'Association</h3>
        <div className="h-64 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <TrendingUp className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <p className="text-gray-600">Graphique d'évolution des membres et événements</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccueilPage;