import NotificationCard from "./NotificationCard";
import { motion, AnimatePresence } from "framer-motion";

export default function NotificationList({
  notifications,
  onRead,
  onDelete,
}) {
  if (!notifications?.length) {
    return (
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-gray-500 text-center mt-6"
      >
        No notifications yet
      </motion.p>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
      className="space-y-4"
    >
      <AnimatePresence>
        {notifications.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
          >
            <NotificationCard
              {...item}
              onRead={() => onRead(item.id)}
              onDelete={() => onDelete(item.id)}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}