import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  MessageSquare,
  Bot,
  Webhook,
  Settings,
  Link2
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: MessageSquare, label: 'Conversas', path: '/conversations' },
  { icon: Bot, label: 'Configurações IA', path: '/ai-settings' },
  { icon: Webhook, label: 'Webhooks', path: '/webhooks' },
  { icon: Link2, label: 'API', path: '/api-settings' },
  { icon: Settings, label: 'Configurações', path: '/settings' },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 animate-slide-in">
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-whatsapp-dark">WhatsAI</h1>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-whatsapp-dark transition-colors duration-200"
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span className="text-sm font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;