'use client';

import { ErrorMessage } from '@/components/ui/error-message/error-message.component';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang='en'>
      <body>
        <ErrorMessage
          errorTitle='Page not found'
          error={error}
          errorMessage='Are you lost? Do not worry, we can help you!'
          goTo='/'
          linkText='👈 Go back to home 🏠'
        />
      </body>
    </html>
  );
}
