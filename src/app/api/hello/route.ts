export const runtime = 'edge';

export async function GET() {
    const responseText = 'Hello World';

    return new Response(responseText);
}
