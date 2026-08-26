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
    const events = [
        {
            "id": 1,
            "title": "AI & The Future of African Tech",
            "category": "Tech",
            "date": "2026-07-24",
            "time": "10:00 AM",
            "location": "ICT Building Auditorium",
            "postedBy": "Hack Club FUTA"
        },
        {
            "id": 2,
            "title": "End of Semester Hangout",
            "category": "Social",
            "date": "2026-07-28",
            "time": "4:00 PM",
            "location": "SUB Complex",
            "postedBy": "Student Union Government"
        },
        {
            "id": 3,
            "title": "Inter-Faculty Football Tournament",
            "category": "Sport",
            "date": "2026-07-25",
            "time": "8:00 AM",
            "location": "FUTA Sports Complex",
            "postedBy": "FUTA Sports Council"
        },
        {
            "id": 4,
            "title": "Final Year Project Defense Seminar",
            "category": "Academic",
            "date": "2026-07-30",
            "time": "9:00 AM",
            "location": "SEET Lecture Theatre 1",
            "postedBy": "Dept. of Computer Science"
        },
        {
            "id": 5,
            "title": "Campus Fellowship Revival Night",
            "category": "Religious",
            "date": "2026-07-23",
            "time": "6:00 PM",
            "location": "FUTA Chapel",
            "postedBy": "FUTA Christian Association"
        },
        {
            "id": 6,
            "title": "Web3 & Blockchain Workshop",
            "category": "Tech",
            "date": "2026-07-24",
            "time": "11:00 AM",
            "location": "ICT Building Lab 2",
            "postedBy": "FUTA Tech Society"
        },
        {
            "id": 7,
            "title": "Cultural Day Celebration",
            "category": "Social",
            "date": "2026-07-20",
            "time": "2:00 PM",
            "location": "FUTA Main Auditorium",
            "postedBy": "Student Affairs Division"
        },
        {
            "id": 8,
            "title": "100 Level Mathematics Clinic",
            "category": "Academic",
            "date": "2026-07-26",
            "time": "10:00 AM",
            "location": "FUTA Library Seminar Room",
            "postedBy": "Dept. of Mathematics"
        },
        {
            "id": 9,
            "title": "Basketball Interhouse Competition",
            "category": "Sport",
            "date": "2026-07-27",
            "time": "3:00 PM",
            "location": "FUTA Basketball Court",
            "postedBy": "Hall of Residence Council"
        },
        {
            "id": 10,
            "title": "Muslim Students Society Jumat Lecture",
            "category": "Religious",
            "date": "2026-07-22",
            "time": "1:00 PM",
            "location": "FUTA Central Mosque",
            "postedBy": "Muslim Students Society"
        },
        {
            "id": 11,
            "title": "SOC Governor's Cup",
            "category": "Sport",
            "date": "2026-07-21",
            "time": "5:00 PM",
            "location": "Mini Pitch",
            "postedBy": "Hall of Residence Council"
        },
        {
            "id": 12,
            "title": "JCCF Bible Teaching",
            "category": "Religious",
            "date": "2026-07-29",
            "time": "5:00 PM",
            "location": "FUTA Central Mosque",
            "postedBy": "JCCF Media Team"
        }
    ]

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
        setIsModalVisible
    };

    return isMobile
        ? <MobileDashboard {...sharedProps} />
        : <DesktopDashboard {...sharedProps} />;
}

export default Dashboard;