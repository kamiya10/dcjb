import * as React from 'react';

import { cn } from '@/lib/utils';

const Timeline = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex flex-col', className)} {...props} />
));
Timeline.displayName = 'Timeline';

const TimelineItem = React.forwardRef<
  HTMLDivElement,
  React.LiHTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(`relative flex flex-col p-6 pt-0`, className)}
    {...props}
  />
));
TimelineItem.displayName = 'TimelineItem';

const TimelineTime = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      `
        absolute top-0 translate-x-36 text-xs font-semibold leading-none
        text-muted-foreground
        md:-translate-x-20
      `,
      className,
    )}
    {...props}
  />
));
TimelineTime.displayName = 'TimelineTime';

const TimelineConnector = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      `
        absolute left-[30px] top-[5px] h-full w-px -translate-x-1/2
        translate-y-2 bg-primary
      `,
      className,
    )}
    {...props}
  />
));
TimelineConnector.displayName = 'TimelineConnector';

const TimelineHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center gap-4', className)}
    {...props}
  />
));
TimelineHeader.displayName = 'TimelineHeader';

const TimelineTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      `
        text-3xl font-semibold leading-none tracking-tight
        text-secondary-foreground
      `,
      className,
    )}
    {...props}
  >
    {children}
  </h3>
));
TimelineTitle.displayName = 'CardTitle';

const TimelineIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex size-3 flex-col rounded-full bg-primary', className)}
    {...props}
  />
));
TimelineIcon.displayName = 'TimelineIcon';

const TimelineDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('max-w-sm text-muted-foreground', className)}
    {...props}
  />
));
TimelineDescription.displayName = 'TimelineDescription';

const TimelineContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col items-start pl-6', className)}
    {...props}
  />
));
TimelineContent.displayName = 'TimelineContent';

export {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineTitle,
  TimelineIcon,
  TimelineDescription,
  TimelineContent,
  TimelineTime,
};
