import type { NextApiRequest, NextApiResponse } from 'next';
import mailchimp from '@mailchimp/mailchimp_marketing';
import { NextRequest } from 'next/server';

// Initialize Mailchimp client
const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const MAILCHIMP_API_SERVER = process.env.MAILCHIMP_API_SERVER;

if (!MAILCHIMP_API_KEY || !MAILCHIMP_API_SERVER) {
    throw new Error('Mailchimp API Key or Server Prefix is missing');
}

mailchimp.setConfig({
    apiKey: MAILCHIMP_API_KEY,
    server: MAILCHIMP_API_SERVER,
});

export async function POST(req: NextRequest, res: NextApiResponse) {
    const body = await req.json();
    const { email_address } = body;

    if (!email_address) {
        return new Response(
            JSON.stringify({ error: 'Email is required' }),
        );
    }

    try {
        try {
            const existingMember = await mailchimp.lists.getListMember(
                "6d3722568c",
                email_address.toLowerCase()
            );
            
            if (existingMember) {
                return new Response(
                    JSON.stringify({ error: 'This email is already subscribed' }),
                    { status: 400 }
                );
            }
        } catch (error: any) {
            // If the error is not a 404, throw it
            if (error.status !== 404) {
                console.error("Error checking existing email:", error);
                return new Response(
                    JSON.stringify({ error: 'An error occurred while checking email' }),
                    { status: 500 }
                )
            }
        }

        const response = await mailchimp.lists.addListMember("6d3722568c", {
            email_address: email_address,
            status: 'subscribed',
        });

        if (response && response.status === 'subscribed') {
            return new Response(
                JSON.stringify({ message: 'Subscribed successfully', response }),
                { status: 200 }
            );
        }
    } catch (error) {
        return new Response(
            JSON.stringify({ error: 'Failed to subscribe' }),
            { status: 500 }
        );
    }
}