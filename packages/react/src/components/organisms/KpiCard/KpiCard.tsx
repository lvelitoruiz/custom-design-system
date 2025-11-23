import React from 'react';
import { KpiCardProps } from './types';
import { cn } from '../../../lib/utils';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';
import { Icon } from '../../atoms/Icon';

export const KpiCard: React.FC<KpiCardProps> = ({
  label,
  value,
  icon,
  trend = "neutral",
  trendValue,
  className
}) => {
  // Trend icon based on trend type
  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return <ArrowUp className="w-full h-full" />;
      case 'down':
        return <ArrowDown className="w-full h-full" />;
      case 'neutral':
        return <Minus className="w-full h-full" />;
      default:
        return null;
    }
  };

  // Trend color classes
  const getTrendColorClass = () => {
    switch (trend) {
      case 'up':
        return 'text-[hsl(var(--success))]';
      case 'down':
        return 'text-[hsl(var(--destructive))]';
      case 'neutral':
        return 'text-[hsl(var(--muted-foreground))]';
      default:
        return 'text-[hsl(var(--muted-foreground))]';
    }
  };

  return (
    <div
      role="group"
      aria-label={`KPI ${label}`}
      className={cn(
        'rounded-md',
        'bg-[hsl(var(--card))]',
        'border border-[hsl(var(--border))]',
        'shadow-sm',
        'px-5 py-4',
        'flex flex-col gap-1',
        'transition-colors duration-200',
        'hover:shadow-md',
        className
      )}
    >
      {/* Header: Icon and Label */}
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-medium text-[hsl(var(--muted-foreground))]">
          {label}
        </span>
        {icon && (
          <div className="text-[hsl(var(--foreground))]">
            {icon}
          </div>
        )}
      </div>

      {/* Value */}
      <div className="text-2xl font-semibold text-[hsl(var(--foreground))]">
        {value}
      </div>

      {/* Trend */}
      {trendValue && (
        <div className={cn(
          'flex items-center gap-1',
          'text-sm font-medium',
          getTrendColorClass()
        )}>
          <Icon size={16}>
            {getTrendIcon()}
          </Icon>
          <span>{trendValue}</span>
        </div>
      )}
    </div>
  );
};
