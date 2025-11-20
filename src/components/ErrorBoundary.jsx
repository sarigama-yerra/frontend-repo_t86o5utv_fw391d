import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
   ;(this).state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    // Optionally log to an error reporting service
    // console.error('ErrorBoundary caught:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="h-full w-full grid place-items-center p-6 text-center text-white/90 bg-black/60">
          <div>
            <p className="font-semibold">3D prikaz nije mogao da se učita.</p>
            <p className="mt-1 text-sm text-white/70">Proverite konekciju ili pokušajte ponovo kasnije.</p>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
