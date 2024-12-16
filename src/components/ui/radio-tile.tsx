import React from 'react';

import { Label } from './label';
import { RadioGroupItem } from './radio-group';

export const RadioTile = React.forwardRef<
  React.ComponentRef<typeof RadioGroupItem>,
  React.ComponentPropsWithoutRef<typeof RadioGroupItem>
> (({ children, ...props }, ref) => {
  return (
    <Label
      htmlFor={props.id}
      className={`
        flex items-center gap-2 rounded-lg border-2 border-transparent p-2
        text-muted-foreground transition
        aria-checked:border-primary
        has-[[data-state=checked]]:border-primary
        has-[[data-state=checked]]:bg-primary/20
        has-[[data-state=checked]]:font-bold
        has-[[data-state=checked]]:text-foreground
        hover:border-secondary-foreground hover:bg-secondary
        hover:text-secondary-foreground
      `}
    >
      <RadioGroupItem
        {...props}
        ref={ref}
      />
      {children}
    </Label>
  );
});
