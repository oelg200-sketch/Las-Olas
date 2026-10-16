interface WaveDividerProps {
  fillColor: string;
  flip?: boolean;
  className?: string;
}

export default function WaveDivider({ fillColor, flip = false, className = '' }: WaveDividerProps) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''} ${className}`}>
      <svg
        className="block w-full h-[60px] md:h-[100px]"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,60 C240,100 480,20 720,50 C960,80 1200,110 1440,60 L1440,120 L0,120 Z"
          fill={fillColor}
          fillOpacity="1"
        >
          <animate
            attributeName="d"
            dur="8s"
            repeatCount="indefinite"
            values="
              M0,60 C240,100 480,20 720,50 C960,80 1200,110 1440,60 L1440,120 L0,120 Z;
              M0,70 C240,30 480,100 720,60 C960,20 1200,50 1440,80 L1440,120 L0,120 Z;
              M0,60 C240,100 480,20 720,50 C960,80 1200,110 1440,60 L1440,120 L0,120 Z
            "
          />
        </path>
        <path
          d="M0,80 C240,40 480,110 720,70 C960,30 1200,60 1440,90 L1440,120 L0,120 Z"
          fill={fillColor}
          fillOpacity="0.5"
        >
          <animate
            attributeName="d"
            dur="6s"
            repeatCount="indefinite"
            values="
              M0,80 C240,40 480,110 720,70 C960,30 1200,60 1440,90 L1440,120 L0,120 Z;
              M0,90 C240,60 480,30 720,80 C960,110 1200,40 1440,70 L1440,120 L0,120 Z;
              M0,80 C240,40 480,110 720,70 C960,30 1200,60 1440,90 L1440,120 L0,120 Z
            "
          />
        </path>
      </svg>
    </div>
  );
}
