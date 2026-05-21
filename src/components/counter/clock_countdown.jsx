const ClockCountdown = () => {
    return (
        <div>
            <span className="countdown font-mono text-2xl">
                <span style={{ "--value": 10 } /* as React.CSSProperties */} aria-live="polite">10</span>:
                <span style={{ "--value": 24 } /* as React.CSSProperties */} aria-live="polite">24</span>:
                <span style={{ "--value": 59, "--digits": 2 } /* as React.CSSProperties */} aria-live="polite">59</span>
            </span>
        </div>
    )
}

export default ClockCountdown