"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { useInView } from "framer-motion"

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
  max?: number
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value = 0, max = 100, ...props }, ref) => {
    const [animatedValue, setAnimatedValue] = React.useState(0)
    const progressRef = React.useRef<HTMLDivElement>(null)
    const isInView = useInView(progressRef, { once: true, amount: 0.3 })

    React.useEffect(() => {
      if (isInView) {
        const percentage = Math.min(Math.max((value / max) * 100, 0), 100)
        const timer = setTimeout(() => {
          setAnimatedValue(percentage)
        }, 100)
        return () => clearTimeout(timer)
      }
    }, [isInView, value, max])
    
    return (
      <div
        ref={ref || progressRef}
        className={cn(
          "relative h-2 w-full overflow-hidden rounded-full bg-secondary progress-neon",
          className
        )}
        {...props}
      >
        <div
          className="h-full bg-primary transition-all duration-1000 ease-out relative"
          style={{ 
            width: `${animatedValue}%`,
            boxShadow: `0 0 6px rgba(59, 130, 246, 0.6), 0 0 12px rgba(59, 130, 246, 0.4), 0 0 18px rgba(96, 165, 250, 0.2)`
          }}
        />
      </div>
    )
  }
)
Progress.displayName = "Progress"

export { Progress }

