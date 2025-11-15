import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hoverable = false,
  ...props 
}) => {
  const baseClasses = 'bg-dark-100 rounded-2xl border border-primary-500/20 transition-all duration-300';
  
  const hoverClasses = hoverable 
    ? 'hover:border-primary-500/40 hover:shadow-lg hover:shadow-primary-500/10 quantum-hover' 
    : '';

  const classes = `${baseClasses} ${hoverClasses} ${className}`.trim();

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = '' }) => (
  <div className={`p-6 border-b border-gray-600 ${className}`}>
    {children}
  </div>
);

const CardBody = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

const CardFooter = ({ children, className = '' }) => (
  <div className={`p-6 border-t border-gray-600 ${className}`}>
    {children}
  </div>
);

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;