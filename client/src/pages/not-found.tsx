import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[hsl(220_14%_96%/0.7)]">
      <Card className="w-full max-w-md mx-4 noise-surface">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 data-testid="text-404-title" className="text-display text-2xl font-bold text-foreground">
              Pina no encontrada
            </h1>
          </div>

          <p data-testid="text-404-subtitle" className="mt-4 text-sm text-muted-foreground">
            Esse link no existe. Volte para a pina inicial.
          </p>

          <div className="mt-6">
            <Link href="/">
              <a
                data-testid="link-404-home"
                className="btn-secondary btn-transition inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar
              </a>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
