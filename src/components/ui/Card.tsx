import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'outline' | 'gradient';
  hoverable?: boolean;
  clickable?: boolean;
  onClick?: () => void;
  animate?: boolean;
  glow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'default',
  hoverable = true,
  clickable = false,
  onClick,
  animate = true,
  glow = false,
}) => {
  const baseStyles = 'rounded-2xl transition-all duration-300 overflow-hidden';
  
  const variants = {
    default: 'bg-dark-100 border border-white/5',
    glass: 'glass border border-white/10',
    outline: 'border-2 border-white/10 bg-transparent',
    gradient: 'bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent border border-white/5',
  };

  const hoverStyles = hoverable
    ? 'hover:transform hover:-translate-y-1 hover:shadow-2xl hover:border-blue-500/30'
    : '';

  const glowStyles = glow
    ? 'hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]'
    : '';

  const clickStyles = clickable
    ? 'cursor-pointer active:scale-[0.98]'
    : '';

  const CardComponent = animate ? motion.div : 'div';

  const animationProps = animate
    ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-50px' },
        transition: { duration: 0.6, ease: 'easeOut' },
      }
    : {};

  return (
    <CardComponent
      {...animationProps}
      className={cn(
        baseStyles,
        variants[variant],
        hoverStyles,
        glowStyles,
        clickStyles,
        className
      )}
      onClick={onClick}
      whileHover={hoverable ? { scale: 1.01 } : {}}
      whileTap={clickable ? { scale: 0.98 } : {}}
    >
      {children}
    </CardComponent>
  );
};

// Card subcomponents for better organization
export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div className={cn('p-6 pb-0', className)}>{children}</div>
);

export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div className={cn('p-6', className)}>{children}</div>
);

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div className={cn('p-6 pt-0 border-t border-white/5', className)}>{children}</div>
);

export const CardTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <h3 className={cn('text-xl font-bold text-white', className)}>{children}</h3>
);

export const CardDescription: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <p className={cn('text-sm text-gray-400', className)}>{children}</p>
);

// Export all as a namespace
const CardNamespace = Object.assign(Card, {
  Header: CardHeader,
  Content: CardContent,
  Footer: CardFooter,
  Title: CardTitle,
  Description: CardDescription,
});

export default CardNamespace;