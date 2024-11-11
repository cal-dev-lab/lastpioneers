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
        const response = await mailchimp.lists.addListMember("6d3722568c", {
            email_address: email_address,
            status: 'subscribed',
        });

    console.log("response: ", response)


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
