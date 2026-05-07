export const getNotifications = async () => {
  return [
    {
      id: 1,
      title: "Interview Scheduled",
      desc: "Boston Latin Academy has scheduled an interview with you for Mar 20, 2026 at 10:00 AM.",
      time: "2 hours ago",
      unread: true,
      icon: "📅",
    },
    {
      id: 2,
      title: "New Message",
      desc: "You have a new message from Cambridge International School.",
      time: "5 hours ago",
      unread: true,
      icon: "💬",
    },
    {
      id: 3,
      title: "Job Offer!",
      desc: "Congratulations! MIT Learning Center has extended a job offer to you.",
      time: "1 day ago",
      unread: false,
      icon: "💼",
    },
    {
      id: 4,
      title: "Application Received",
      desc: "Your application to Newton South High School has been received and is under review.",
      time: "2 days ago",
      unread: false,
      icon: "📦",
    },
    {
      id: 5,
      title: "Profile Views",
      desc: "Your profile has been viewed 15 times this week!",
      time: "3 days ago",
      unread: false,
      icon: "👁️",
    },
    {
      id: 6,
      title: "New Message",
      desc: "Brookline Academy sent you a message about the Mathematics Department Head position.",
      time: "4 days ago",
      unread: false,
      icon: "💬",
    },
    {
      id: 7,
      title: "Application Status Update",
      desc: "Your application status at Quincy Middle School has been updated to 'Interview'.",
      time: "5 days ago",
      unread: false,
      icon: "📈",
    },
  ];
};

export const markAsRead = async (id) => {
  return { success: true };
};

export const deleteNotification = async (id) => {
  return { success: true };
};