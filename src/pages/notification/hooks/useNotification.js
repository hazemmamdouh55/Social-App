import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  getNotifications,
  markAsRead,
  deleteNotification,
} from "../../../servises/notification/notification.service.js";

import toast from "react-hot-toast";

export const useNotifications = () => {
  return useQuery({
    queryKey: ["notifications"],
    queryFn: getNotifications,
  });
};

export const useMarkAsRead = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: markAsRead,
    onSuccess: () => {
      toast.success("Marked as read ✅");
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
  });
};

export const useDeleteNotification = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteNotification,
    onSuccess: () => {
      toast.success("Deleted 🗑️");
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
  });
};