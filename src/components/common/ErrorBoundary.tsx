import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  componentName?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(`[ErrorBoundary] Error in ${this.props.componentName || 'component'}:`, error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="p-4 my-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-sm">
          <p className="font-semibold">Component failed to render: {this.props.componentName || 'Section'}</p>
          <p className="text-xs text-amber-600 mt-1 font-mono">{this.state.error?.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

