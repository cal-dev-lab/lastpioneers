"use client"
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const SubscribeForm = () => {
    const { toast } = useToast();
    const [email, setEmail] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email_address: email }),
            });

            const data = await res.json();

            if (res.status == 200 || res.status == 201) {
                toast({
                    title: "Success!",
                    description: "You have been successfully subscribed!",
                    className: "bg-black text-white"
                })
                setEmail('');
            } else {
                toast({
                    title: "Uh-oh!",
                    description: data.error,
                    variant: "destructive",
                    className: "bg-black text-white"
                })
            }
        } catch (error) {
            toast({
                title: "Uh-oh!",
                description: "An error occurred. Please try again.",
                variant: "destructive"
            })
        }
    };

    return (
        <div id="mailing-list">
            <h2>Subscribe to our Newsletter</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                />
                <Button disabled={!email} type="submit">Subscribe</Button>
            </form>
        </div>
    );
};

export default SubscribeForm;