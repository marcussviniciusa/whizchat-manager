import DashboardLayout from "@/components/layouts/DashboardLayout";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold text-gray-900">Dashboard</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium text-gray-900">Conversas Ativas</h3>
            <p className="mt-2 text-3xl font-semibold text-whatsapp-dark">0</p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium text-gray-900">Mensagens Hoje</h3>
            <p className="mt-2 text-3xl font-semibold text-whatsapp-dark">0</p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium text-gray-900">Taxa de Resposta</h3>
            <p className="mt-2 text-3xl font-semibold text-whatsapp-dark">0%</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;