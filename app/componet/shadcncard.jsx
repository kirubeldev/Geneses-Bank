// shadcncard.js

export function Card({ children }) {
    return <div className="card">{children}</div>;
  }
  
  export function CardContent({ children }) {
    return <div className="card-content">{children}</div>;
  }
  
  export function CardHeader({ children }) {
    return <div className="card-header">{children}</div>;
  }
  
  export function CardTitle({ children }) {
    return <h2 className="card-title">{children}</h2>;
  }
  
  export function CardDescription({ children }) {
    return <p className="card-description">{children}</p>;
  }
  
  export function CardFooter({ children }) {
    return <div className="card-footer">{children}</div>;
  }



  // components/ui/chart.js

export function ChartContainer({ children }) {
    return <div className="chart-container">{children}</div>;
  }
  
  export function ChartTooltip({ cursor, content }) {
    // Implement tooltip functionality
    return <div className="chart-tooltip">{content}</div>;
  }
  
  export function ChartTooltipContent({ active, payload }) {
    if (active && payload && payload.length) {
      return (
        <div className="tooltip-content">
          <p>{`${payload[0].name} : ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  }