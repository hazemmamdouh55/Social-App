import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../../schema/contact.schema";
import { useContact } from "../../pages/contact/hooks/useContact";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ContactForm() {
  const { mutate, isPending } = useContact();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: () => {
        reset();
      },
    });
  };

  const inputStyle =
    "w-full bg-gray-100 border border-gray-100 rounded-xl p-3 outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition text-sm sm:text-base";

  const labelStyle =
    "block text-sm font-semibold text-gray-800 mb-1";

  const errorStyle =
    "text-red-500 text-xs mt-1";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6">
        Send Us a Message
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">

        <motion.div whileFocus={{ scale: 1.01 }}>
          <label className={labelStyle}>I am a:</label>
          <input
            {...register("role")}
            className={inputStyle}
            placeholder="e.g. Teacher / Student"
          />
          {errors.role && <p className={errorStyle}>{errors.role.message}</p>}
        </motion.div>

        <motion.div whileFocus={{ scale: 1.01 }}>
          <label className={labelStyle}>Full Name *</label>
          <input
            {...register("fullName")}
            placeholder="Enter your full name"
            className={inputStyle}
          />
          {errors.fullName && (
            <p className={errorStyle}>{errors.fullName.message}</p>
          )}
        </motion.div>

        <motion.div whileFocus={{ scale: 1.01 }}>
          <label className={labelStyle}>Email Address *</label>
          <input
            type="email"
            {...register("email")}
            placeholder="your.email@example.com"
            className={inputStyle}
          />
          {errors.email && (
            <p className={errorStyle}>{errors.email.message}</p>
          )}
        </motion.div>

        <motion.div whileFocus={{ scale: 1.01 }}>
          <label className={labelStyle}>Subject</label>
          <input
            {...register("subject")}
            placeholder="How can we help you?"
            className={inputStyle}
          />
          {errors.subject && (
            <p className={errorStyle}>{errors.subject.message}</p>
          )}
        </motion.div>

        {/* Message */}
        <motion.div whileFocus={{ scale: 1.01 }}>
          <label className={labelStyle}>Message *</label>
          <textarea
            {...register("message")}
            rows="5"
            placeholder="Tell us more about your inquiry..."
            className={inputStyle + " resize-none"}
          />
          {errors.message && (
            <p className={errorStyle}>{errors.message.message}</p>
          )}
        </motion.div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.02 }}
          type="submit"
          disabled={isPending}
          className="w-full flex items-center justify-center gap-2 text-white py-3 rounded-xl transition-all duration-300 hover:opacity-90 hover:shadow-lg active:scale-[0.98] disabled:opacity-70 bg-[linear-gradient(90deg,#9810FA,#155DFC)]"
           
        >
          <FiSend className="text-lg" />
          {isPending ? "Sending..." : "Send Message"}
        </motion.button>

      </form>
    </motion.div>
  );
}