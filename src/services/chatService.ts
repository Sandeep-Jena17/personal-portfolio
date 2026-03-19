/**
 * Chat Service
 * Handles communication with the Anthropic Claude API.
 *
 * SECURITY WARNING: Move this API call to a backend Lambda function
 * before production deploy. Exposing the API key client-side is not
 * safe for production — use a proxy/serverless endpoint instead.
 */

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export async function askAI(
  messages: Message[],
  systemPrompt: string
): Promise<string> {
  const apiKey = process.env.REACT_APP_ANTHROPIC_API_KEY;

  if (!apiKey) {
    throw new Error('REACT_APP_ANTHROPIC_API_KEY is not set in environment variables.');
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1024,
        system: systemPrompt,
        messages,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        `API request failed: ${response.status} ${response.statusText}. ${
          (errorData as { error?: { message?: string } }).error?.message ?? ''
        }`
      );
    }

    const data = await response.json() as {
      content: Array<{ type: string; text: string }>;
    };

    const textBlock = data.content.find((block) => block.type === 'text');
    if (!textBlock) {
      throw new Error('No text content in API response.');
    }

    return textBlock.text;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('An unexpected error occurred while contacting the AI.');
  }
}
