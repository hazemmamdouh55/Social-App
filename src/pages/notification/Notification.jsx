import { useNotifications } from "./hooks/useNotification";
import NotificationTabs from "../../component/notification/NotificationTabs";
import NotificationList from "../../component/notification/NotificationList";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../../component/shared/animations/fade";
import { staggerContainer } from "../../component/shared/animations/stagger";

export default function NotificationPage() {
  const { data, isLoading } = useNotifications();
  const navigate = useNavigate();

  const userRole = localStorage.getItem("userRole");

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (data) {
      setNotifications(data);
    }
  }, [data]);

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;

  const handleMarkAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, unread: false } : n
      )
    );
  };

  const handleDelete = (id) => {
    setNotifications((prev) =>
      prev.filter((n) => n.id !== id)
    );
  };

  return (
    <div className="min-h-screen py-10 bg-gradient-to-b from-[#FAF5FF] via-[#FFFFFF] to-[#EFF6FF]">
      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          className="flex items-center justify-between mb-6"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <div>
            <h1 className="text-3xl font-semibold text-[#1E2939]">
              Notifications
            </h1>

            <p className="text-[#4A5565] mt-1">
              Stay updated with your latest activity and messages
            </p>
          </div>

          <button
            onClick={() =>
              navigate(userRole === "teacher" ? "/TeacherPortal" : "/SchoolDashpord")
            }
            className="px-6 py-2 rounded-full border border-[#9810FA] text-[#9810FA] font-semibold hover:bg-[#F5E6FF] transition whitespace-nowrap"
          >
            Back to Dashboard
          </button>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <NotificationTabs notifications={notifications}>
            {(filtered) => (
              <NotificationList
                notifications={filtered}
                onRead={handleMarkAsRead}
                onDelete={handleDelete}
              />
            )}
          </NotificationTabs>
        </motion.div>

      </div>
    </div>
  );
}