"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";

const SubscribeForm = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email_address: email }),
      });

      const data = await res.json();

      if (res.status == 200 || res.status == 201) {
        toast({
          title: "Success!",
          description: "You have been successfully subscribed!",
          className:
            "bg-black text-white fixed bottom-4 left-1/2 transform -translate-x-1/2",
        });
        setEmail("");
        setLoading(false);
      } else {
        toast({
          title: "Uh-oh!",
          description: data.error,
          variant: "destructive",
          className:
            "bg-black text-white fixed bottom-4 left-1/2 transform -translate-x-1/2",
        });
        setLoading(false);
      }
    } catch (error) {
      toast({
        title: "Uh-oh!",
        description: "An error occurred. Please try again.",
        variant: "destructive",
        className: "fixed bottom-4 left-1/2 transform -translate-x-1/2",
      });
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex items-center gap-4">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@example.com"
        />
        <Button disabled={!email || loading} type="submit">
          <p>SUBMIT</p>
        </Button>
      </form>
    </div>
  );
};

export default SubscribeForm;
