import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";
import SuccessModal from "./SuccessModal";
import toast from "react-hot-toast";


function Contact() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });

  const [successModal, setSuccessModal] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        "service_toowudr",      // Service ID
        "template_kqarcam",     // Template ID
        formData,
        "YkBSkqZOQIh1j9yIp"     // Public Key
      )
      .then(() => {
        setSending(false);
        setSuccessModal(true); // Show modal
        toast.success("Message sent successfully!");
        setFormData({ user_name: "", user_email: "", user_message: "" }); // Clear form
      })
      .catch(() => {
        setSending(false);
        toast.error("Something went wrong. Try again later.");
      });
  };

  return (
    <section id="contact" data-aos="fade-up" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6 text-blue-600 dark:text-cyan-400">Get In Touch</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          Have a question, project idea, or collaboration in mind? Feel free to reach out!
        </p>

        <form onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            value={formData.user_name}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl
              bg-white dark:bg-gray-900
              text-gray-900 dark:text-white
              placeholder-cyan-500
              border-2 border-cyan-400 dark:border-cyan-500
              focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400
              shadow-[0_0_15px_rgba(0,255,255,0.25)]
              transition-all duration-300 outline-none"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            value={formData.user_email}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl
              bg-white dark:bg-gray-900
              text-gray-900 dark:text-white
              placeholder-cyan-500
              border-2 border-cyan-400 dark:border-cyan-500
              focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400
              shadow-[0_0_15px_rgba(0,255,255,0.25)]
              transition-all duration-300 outline-none"
          />

          <textarea
            name="user_message"
            placeholder="Your Message"
            rows={6}
            value={formData.user_message}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl
              bg-white dark:bg-gray-900
              text-gray-900 dark:text-white
              placeholder-cyan-500
              border-2 border-cyan-400 dark:border-cyan-500
              focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400
              shadow-[0_0_15px_rgba(0,255,255,0.25)]
              transition-all duration-300 outline-none"
          />

          <button
            type="submit"
            disabled={sending}
            className="mx-auto flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-2xl font-semibold text-lg hover:shadow-[0_0_20px_rgba(0,238,255,0.6)] hover:scale-105 transition-all"
          >
            {sending ? "Sending..." : <><Send size={20} /> Send Message</>}
          </button>
        </form>

        {/* Modal */}
        <SuccessModal isOpen={successModal} onClose={() => setSuccessModal(false)} />
      </div>
    </section>
  );
}

export default Contact;
