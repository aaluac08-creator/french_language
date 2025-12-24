import React from 'react';

const ImagePlaceholder = ({ description, className = '', ...props }) => {
  return (
    <div 
      className={`bg-surface border border-dashed border-muted rounded-lg flex items-center justify-center ${className}`}
      style={{ minHeight: '200px' }}
      {...props}
    >
      <div className="text-center p-4">
        <div className="text-accent mb-2">[IMAGE]</div>
        <div className="text-sm text-muted">{description}</div>
      </div>
    </div>
  );
};

export default ImagePlaceholder;