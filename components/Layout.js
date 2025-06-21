import classNames from 'classnames';
import { useEffect } from 'react';
import styles from './Layout.module.css';

export function GradientBackground({ variant, className }) {
  const classes = classNames(
    {
      [styles.colorBackground]: variant === 'large',
      [styles.colorBackgroundBottom]: variant === 'small',
    },
    className
  );

  return <div className={classes} />;
}

export default function Layout({ children }) {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="relative pb-24 overflow-hidden">
      <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
        {children}
      </div>
    </div>
  );
}
