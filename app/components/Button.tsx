import LoadingSpinner from './LoadingSpinner'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  loading?: boolean
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
}

export default function Button({
  children,
  loading = false,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled,
  className = '',
  ...props
}: ButtonProps) {
  const getStyles = () => {
    const baseStyles = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      border: '2px solid transparent',
      borderRadius: '8px',
      fontWeight: '600',
      textDecoration: 'none',
      cursor: loading || disabled ? 'not-allowed' : 'pointer',
      transition: 'all 0.2s ease',
      fontFamily: 'inherit',
      position: 'relative' as const,
      overflow: 'hidden',
    }

    const sizeStyles = {
      small: {
        padding: '8px 16px',
        fontSize: '14px',
        minHeight: '36px',
      },
      medium: {
        padding: '12px 24px',
        fontSize: '16px',
        minHeight: '44px',
      },
      large: {
        padding: '16px 32px',
        fontSize: '18px',
        minHeight: '52px',
      },
    }

    const variantStyles = {
      primary: {
        backgroundColor: '#007ACC',
        color: 'white',
        borderColor: '#007ACC',
      },
      secondary: {
        backgroundColor: '#f3f4f6',
        color: '#374151',
        borderColor: '#f3f4f6',
      },
      outline: {
        backgroundColor: 'transparent',
        color: '#007ACC',
        borderColor: '#007ACC',
      },
    }

    const widthStyles = fullWidth ? { width: '100%' } : {}

    const hoverStyles = !loading && !disabled ? {
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 12px rgba(0, 122, 204, 0.3)',
    } : {}

    const disabledStyles = disabled ? {
      opacity: '0.6',
      cursor: 'not-allowed',
    } : {}

    return {
      ...baseStyles,
      ...sizeStyles[size],
      ...variantStyles[variant],
      ...widthStyles,
      ...hoverStyles,
      ...disabledStyles,
    }
  }

  return (
    <button
      className={`custom-button ${className}`}
      style={getStyles()}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <LoadingSpinner 
          size={size === 'large' ? 'medium' : 'small'} 
          color={variant === 'outline' ? '#007ACC' : 'white'} 
        />
      )}
      <span style={{ opacity: loading ? 0.7 : 1 }}>
        {children}
      </span>
      
      <style jsx>{`
        .custom-button:hover:not(:disabled):not(.loading) {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 122, 204, 0.3);
        }
        
        .custom-button:active:not(:disabled) {
          transform: translateY(0);
        }
        
        .custom-button:focus-visible {
          outline: 2px solid #007ACC;
          outline-offset: 2px;
        }
      `}</style>
    </button>
  )
}