import { ReactNode, MouseEvent } from 'react';
import styles from './Button.module.css';

interface Props {
  className?: string;
  id: string;
  children?: ReactNode;
  onClick: (e: MouseEvent) => void;
}

export default function Button({ className = '', ...rest }: Props) {
  const classNames = `${styles.button} ${className}`;
  return <button className={classNames} {...rest} />;
}