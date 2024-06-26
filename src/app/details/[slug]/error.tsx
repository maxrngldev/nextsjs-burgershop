'use client';

import { ErrorMessage } from '@/components/ui/error-message/error-message.component';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorMessage
      errorTitle='💥Something went wrong!💥'
      goTo='/'
      error={error}
      linkText='👈 Go back to our menu'
    />
  );
}
