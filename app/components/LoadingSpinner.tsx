interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large'
  color?: string
}

export default function LoadingSpinner({ size = 'medium', color = '#007ACC' }: LoadingSpinnerProps) {
  const sizeMap = {
    small: 16,
    medium: 24,
    large: 32
  }

  return (
    <div 
      className="loading-spinner"
      style={{
        display: 'inline-block',
        width: sizeMap[size],
        height: sizeMap[size],
      }}
      aria-label="Loading"
    >
      <svg
        width={sizeMap[size]}
        height={sizeMap[size]}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          animation: 'spin 1s linear infinite',
        }}
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="62.83"
          strokeDashoffset="62.83"
          style={{
            animation: 'spin 1s linear infinite',
          }}
        />
      </svg>
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        circle {
          transform-origin: center;
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  )
}