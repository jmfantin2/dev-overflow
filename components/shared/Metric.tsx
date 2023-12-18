import Image from 'next/image';
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
  return (
    <div className="flex-center flex-wrap gap-1">
      <Image
        src={imgUrl}
        width={16}
        height={16}
        alt={alt}
        className={shapeshifter('object-contain ', {
          'rounded-full': href,
        })}
      />
    </div>
  );
}
