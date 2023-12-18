import { Button } from '@/components/ui/button';
import { HomePageFilters } from '@/constants/filters';
import shapeshifter from 'classnames';

export function HomeFilters() {
  const active = 'recommended';

  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {HomePageFilters.map((item) => (
        <Button
          key={item.value}
          className={shapeshifter(
            'body-medium rounded-lg px-6 py-3 capitalize shadow-none',
            {
              'bg-primary-100 text-primary-500 dark:bg-dark-400 dark:text-primary-500':
                active === item.value,
              'bg-light-800 text-light-500  dark:bg-dark-300 dark:text-light-500':
                active !== item.value,
            }
          )}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
}
