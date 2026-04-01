import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

type Status = "loading" | "valid" | "already" | "invalid" | "success" | "error";

const Unsubscribe = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    if (!token) {
      setStatus("invalid");
      return;
    }
    fetch(`${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${token}`, {
      headers: { apikey: SUPABASE_KEY },
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.valid === false && data.reason === "already_unsubscribed") {
          setStatus("already");
        } else if (data.valid) {
          setStatus("valid");
        } else {
          setStatus("invalid");
        }
      })
      .catch(() => setStatus("invalid"));
  }, [token]);

  const handleUnsubscribe = async () => {
    setStatus("loading");
    try {
      const { data } = await supabase.functions.invoke("handle-email-unsubscribe", {
        body: { token },
      });
      if (data?.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        {status === "loading" && <Loader2 className="w-10 h-10 animate-spin text-muted-foreground mx-auto" />}

        {status === "valid" && (
          <>
            <h1 className="text-2xl font-playfair font-bold text-foreground mb-4">Cancelar inscrição</h1>
            <p className="text-muted-foreground mb-8">Tem certeza de que deseja parar de receber nossos emails?</p>
            <Button onClick={handleUnsubscribe} size="lg" className="bg-primary text-primary-foreground">
              Confirmar cancelamento
            </Button>
          </>
        )}

        {status === "success" && (
          <>
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h1 className="text-2xl font-playfair font-bold text-foreground mb-2">Inscrição cancelada</h1>
            <p className="text-muted-foreground">Você não receberá mais nossos emails.</p>
          </>
        )}

        {status === "already" && (
          <>
            <CheckCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-2xl font-playfair font-bold text-foreground mb-2">Já cancelado</h1>
            <p className="text-muted-foreground">Sua inscrição já foi cancelada anteriormente.</p>
          </>
        )}

        {status === "invalid" && (
          <>
            <XCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
            <h1 className="text-2xl font-playfair font-bold text-foreground mb-2">Link inválido</h1>
            <p className="text-muted-foreground">Este link de cancelamento é inválido ou expirou.</p>
          </>
        )}

        {status === "error" && (
          <>
            <XCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
            <h1 className="text-2xl font-playfair font-bold text-foreground mb-2">Erro</h1>
            <p className="text-muted-foreground">Ocorreu um erro. Tente novamente mais tarde.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Unsubscribe;
