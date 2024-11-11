"use client"
import { useState } from 'react';
import { Button } from "@/components/ui/button"

const SubscribeForm = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<string | null>(null);

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
                setStatus('You have been successfully subscribed!');
                setEmail('');
            } else {
                setStatus(data.error || 'Something went wrong');
            }
        } catch (error) {
            setStatus('An error occurred. Please try again.');
        }
    };

    return (
        <div>
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
            {status && <p>{status}</p>}
        </div>
    );
};

export default SubscribeForm;