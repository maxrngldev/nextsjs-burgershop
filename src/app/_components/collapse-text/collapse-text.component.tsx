'use client';

import { useState } from 'react';
import { ShowMore } from './collapse-text.styles';

interface CollapseTextProps {
  className?: string;
  wordLimit: number;
  text: string;
}

export function CollapseText({
  className,
  wordLimit,
  text,
}: CollapseTextProps) {
  const [showMore, setShowMore] = useState(false);
  const collapsedDescription = `${text
    .split(' ')
    .splice(0, wordLimit)
    .join(' ')}...`;

  function handleExpandText(event: React.MouseEvent<HTMLSpanElement>) {
    event.stopPropagation();
    setShowMore((value) => !value);
  }

  const aboveWordLimit = text.split(' ').length > wordLimit;

  return (
    <p className={className}>
      {!aboveWordLimit ? text : showMore ? text : collapsedDescription}

      {aboveWordLimit && (
        <ShowMore onClick={handleExpandText}>
          {!showMore ? ' Show more' : ' Show less'}
        </ShowMore>
      )}
    </p>
  );
}
