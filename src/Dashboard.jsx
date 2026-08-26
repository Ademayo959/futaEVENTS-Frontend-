import { useState, useEffect } from "react";
import DesktopDashboard from "./DesktopDashboard";
import MobileDashboard from "./MobileDashboard";

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 640);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobile;
}

const Dashboard = () => {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchEvents() {
            try {
                const response = await fetch("https://futa-events-api.onrender.com/events");
                const data = await response.json();

                if (response.ok) {
                    setEvents(data);
                } else {
                    setError(data.message || "Failed to load events");
                }
            } catch (err) {
                console.log("Error detected:", err);
                setError("Something went wrong");
            } finally {
                setIsLoading(false);
            }
        }

        fetchEvents();
    }, []);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isDark, setIsDark] = useState(localStorage.getItem('theme') === 'dark');
    const isMobile = useIsMobile();

    const toggleDark = () => {
        const newMode = document.documentElement.classList.toggle('dark')
        localStorage.setItem('theme', newMode ? 'dark' : 'light')
        setIsDark(newMode)
    }

    const sharedProps = {
        events,
        isDark,
        toggleDark,
        isModalVisible,
        setIsModalVisible,
        isLoading,
        error
    };

    return isMobile
        ? <MobileDashboard {...sharedProps} />
        : <DesktopDashboard {...sharedProps} />;
}

export default Dashboard;