'use client';

export default function NavLink({ href, children, onMouseEnter, onMouseLeave, style }: any) {
  return (
    <a 
      href={href} 
      style={style} 
      onMouseEnter={onMouseEnter} 
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  );
}
