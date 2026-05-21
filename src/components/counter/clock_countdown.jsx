import { useEffect, useState } from "react";

const ClockCountdown = ({ bidCounter }) => {
    const [timeLeft, setTimeLeft] = useState(bidCounter || 0);
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        setTimeLeft(bidCounter || 0);
    }, [bidCounter]);

    useEffect(() => {
        if (!timeLeft) return;
        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    setFinished(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [timeLeft]);

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${String(hours).padStart(2, "0")} : ${String(
            minutes
        ).padStart(2, "0")} : ${String(secs).padStart(2, "0")}`;
    };

    return (
        <div className="text-[18px] font-medium font-poppins text-[#E897B4]">
            {finished ? "Bid close!" : formatTime(timeLeft)}
        </div>
    );
};

export default ClockCountdown;