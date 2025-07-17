import React, { useState } from 'react';
import { Search, X, Clock, TrendingUp } from 'lucide-react';

const SearchBar = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [recentSearches] = useState([
    'Formation React',
    'Hackathon IA',
    'Événements avril',
    'Équipe ATPU'
  ]);

  const popularSearches = [
    'Formations disponibles',
    'Prochains événements',
    'Rejoindre l\'association',
    'Contact équipe'
  ];

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.length > 2) {
      // Simulation de recherche
      const mockResults = [
        { type: 'Formation', title: 'Formation React Avancée', description: 'Maîtrise complète du framework React' },
        { type: 'Événement', title: 'Hackathon IA 2024', description: 'Développement d\'applications IA innovantes' },
        { type: 'Équipe', title: 'Ahmed Ben Salem', description: 'Président - Docteur en Informatique' },
        { type: 'Page', title: 'Environnement', description: 'Actions environnementales de l\'ATPU' }
      ].filter(item => 
        item.title.toLowerCase().includes(value.toLowerCase()) ||
        item.description.toLowerCase().includes(value.toLowerCase())
      );
      setResults(mockResults);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Rechercher formations, événements, membres..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            autoFocus
          />
        </div>
        <button
          onClick={onClose}
          className="ml-3 p-2 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Search Results */}
      {query.length > 0 && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 max-h-96 overflow-y-auto z-50">
          {results.length > 0 ? (
            <div className="p-2">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full mr-2">
                          {result.type}
                        </span>
                        <h4 className="font-medium text-gray-900">{result.title}</h4>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{result.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-gray-500">
              Aucun résultat trouvé pour "{query}"
            </div>
          )}
        </div>
      )}

      {/* Recent and Popular Searches */}
      {query.length === 0 && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 z-50">
          <div className="p-4">
            <div className="mb-4">
              <h4 className="flex items-center text-sm font-medium text-gray-900 mb-2">
                <Clock className="w-4 h-4 mr-2" />
                Recherches récentes
              </h4>
              <div className="space-y-1">
                {recentSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => setQuery(search)}
                    className="block w-full text-left text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="flex items-center text-sm font-medium text-gray-900 mb-2">
                <TrendingUp className="w-4 h-4 mr-2" />
                Recherches populaires
              </h4>
              <div className="space-y-1">
                {popularSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => setQuery(search)}
                    className="block w-full text-left text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;