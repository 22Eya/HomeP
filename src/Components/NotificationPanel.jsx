import React from 'react';
import { Bell, Calendar, Users, Award, X } from 'lucide-react';

const NotificationPanel = ({ onClose }) => {
  const notifications = [
    {
      id: 1,
      type: 'event',
      icon: Calendar,
      title: 'Nouveau événement',
      message: 'Hackathon IA 2024 - Inscriptions ouvertes',
      time: '2 min',
      unread: true
    },
    {
      id: 2,
      type: 'formation',
      icon: Award,
      title: 'Formation terminée',
      message: 'Vous avez terminé la formation React Avancée',
      time: '1h',
      unread: true
    },
    {
      id: 3,
      type: 'community',
      icon: Users,
      title: 'Nouveaux membres',
      message: '25 nouveaux membres ont rejoint cette semaine',
      time: '3h',
      unread: false
    },
    {
      id: 4,
      type: 'system',
      icon: Bell,
      title: 'Mise à jour système',
      message: 'Nouvelles fonctionnalités disponibles',
      time: '1j',
      unread: false
    }
  ];

  return (
    <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-lg border z-50">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="max-h-96 overflow-y-auto">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 border-b last:border-b-0 hover:bg-gray-50 cursor-pointer ${
              notification.unread ? 'bg-blue-50' : ''
            }`}
          >
            <div className="flex items-start">
              <div className={`p-2 rounded-full mr-3 ${
                notification.type === 'event' ? 'bg-blue-100' :
                notification.type === 'formation' ? 'bg-green-100' :
                notification.type === 'community' ? 'bg-purple-100' :
                'bg-gray-100'
              }`}>
                <notification.icon className={`w-4 h-4 ${
                  notification.type === 'event' ? 'text-blue-600' :
                  notification.type === 'formation' ? 'text-green-600' :
                  notification.type === 'community' ? 'text-purple-600' :
                  'text-gray-600'
                }`} />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">
                    {notification.title}
                  </p>
                  <p className="text-xs text-gray-500">{notification.time}</p>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {notification.message}
                </p>
                {notification.unread && (
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t">
        <button className="w-full text-center text-sm text-blue-600 hover:text-blue-800 font-medium">
          Voir toutes les notifications
        </button>
      </div>
    </div>
  );
};

export default NotificationPanel;