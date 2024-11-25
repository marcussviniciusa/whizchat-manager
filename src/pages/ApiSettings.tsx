import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import DashboardLayout from '@/components/layouts/DashboardLayout';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ApiSettingsPage() {
  const [apiKey, setApiKey] = useState('');
  const { toast } = useToast();

  const generateApiKey = () => {
    // Aqui você implementará a lógica para gerar uma nova API key
    const newApiKey = 'whats-' + Math.random().toString(36).substring(2, 15);
    setApiKey(newApiKey);
    toast({
      title: "API Key gerada",
      description: "Uma nova API Key foi gerada com sucesso!",
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Configurações da API</h1>
          <p className="text-muted-foreground">
            Gerencie suas chaves de API e configure integrações.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>API Key</CardTitle>
            <CardDescription>
              Use esta chave para autenticar suas requisições à API.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-4">
                <Input
                  value={apiKey}
                  readOnly
                  placeholder="Sua API key aparecerá aqui"
                />
                <Button onClick={generateApiKey}>
                  Gerar Nova Key
                </Button>
              </div>
              
              <div className="text-sm text-muted-foreground">
                <p>Para usar a API, inclua a key no header de suas requisições:</p>
                <pre className="mt-2 p-2 bg-muted rounded-md">
                  Authorization: Bearer {apiKey || 'sua-api-key'}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Documentação da API</CardTitle>
            <CardDescription>
              Consulte nossa documentação para aprender como integrar com nossa API.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Endpoints disponíveis:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>POST /api/messages - Enviar mensagem</li>
                <li>GET /api/messages - Listar mensagens</li>
                <li>GET /api/conversations - Listar conversas</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}