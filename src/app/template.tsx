'use client';

import { motion } from 'framer-motion';

import type React from 'react';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function Template({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
