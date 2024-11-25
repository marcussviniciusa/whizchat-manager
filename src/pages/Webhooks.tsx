import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import DashboardLayout from '@/components/layouts/DashboardLayout';

interface WebhookConfig {
  url: string;
  events: string[];
}

export default function WebhooksPage() {
  const [webhookUrl, setWebhookUrl] = useState('');
  const { toast } = useToast();

  const handleSaveWebhook = () => {
    // Aqui você implementará a lógica para salvar o webhook
    toast({
      title: "Webhook configurado",
      description: "O webhook foi salvo com sucesso!",
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Configuração de Webhook</h1>
          <p className="text-muted-foreground">
            Configure URLs de webhook para receber notificações de eventos em tempo real.
          </p>
        </div>

        <div className="grid gap-4">
          <div className="space-y-2">
            <label htmlFor="webhook-url" className="text-sm font-medium">
              URL do Webhook
            </label>
            <Input
              id="webhook-url"
              placeholder="https://sua-api.com/webhook"
              value={webhookUrl}
              onChange={(e) => setWebhookUrl(e.target.value)}
            />
          </div>

          <Button onClick={handleSaveWebhook}>
            Salvar Webhook
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}