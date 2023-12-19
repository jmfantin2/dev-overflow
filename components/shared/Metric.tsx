import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import shapeshifter from 'classnames';

interface MetricProps {
  imgUrl: string;
  alt: string;
  value: string | number;
  title: string;
  href?: string;
  textStyles?: string;
  isAuthor?: boolean;
}

export function Metric({
  imgUrl,
  alt,
  value,
  title,
  href,
  textStyles,
  isAuthor,
}: MetricProps) {
  const metricContent = (
    <>
      <Image
        src={imgUrl}
        width={16}
        height={16}
        alt={alt}
        className={shapeshifter('object-contain', { 'rounded-full': href })}
      />

      <p className={`${textStyles} flex items-center gap-1`}>
        {value}

        <span
          className={shapeshifter('small-regular line-clamp-1', {
            'max-sm:hidden': isAuthor,
          })}
        >
          {title}
        </span>
      </p>
    </>
  );

  return (
    <>
      {href ? (
        <Link href={href} className="flex-center gap-1">
          {metricContent}
        </Link>
      ) : (
        <div className="flex-center flex-wrap gap-1">{metricContent}</div>
      )}
    </>
  );
}
