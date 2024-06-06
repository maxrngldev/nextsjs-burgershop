'use client';

import Link from 'next/link';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className='error'>
      <h2 className='error__title'>💥Something went wrong!💥</h2>
      <p className='error__message'>{error.message}</p>

      <Link href='/' className='error__link'>
        👈 Go back to our menu
      </Link>
    </div>
  );
}
