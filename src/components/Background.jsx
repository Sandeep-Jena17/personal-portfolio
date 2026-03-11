/**
 * Background Components
 * Grid background and radial glow effects
 */

import React from 'react';

export function GridBackground() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(0,255,200,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,255,200,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
      aria-hidden="true"
    />
  );
}

export function RadialGlow() {
  return (
    <div
      style={{
        position: 'fixed',
        top: '20%',
        right: '10%',
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,255,200,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
}
