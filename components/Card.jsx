const Card = ({ 
    children, 
    title, 
    subtitle,
    footer,
    hover = false 
  }) => {
    return (
      <div className={`
        bg-white rounded-lg shadow-md overflow-hidden
        ${hover ? 'transition-transform duration-300 hover:scale-105' : ''}
      `}>
        {(title || subtitle) && (
          <div className="p-4 border-b border-gray-200">
            {title && <h3 className="text-lg font-semibold text-gray-900">{title}</h3>}
            {subtitle && <p className="mt-1 text-sm text-gray-500">{subtitle}</p>}
          </div>
        )}
        <div className="p-4">
          {children}
        </div>
        {footer && (
          <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
            {footer}
          </div>
        )}
      </div>
    );
  };
  