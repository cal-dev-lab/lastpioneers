"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";

const SubscribeForm = () => {
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
        toast("You have been successfully subscribed!");
        setEmail("");
        setLoading(false);
      } else {
        toast(data.error);
        setLoading(false);
      }
    } catch (error) {
      toast("An error occured. Please try again.");
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
