import { motion, AnimatePresence } from "framer-motion";

// eslint-disable-next-line react/prop-types
const MessageAlert = ({ message }) => {
  if (!message) return null;

  // Detecta a cor baseada no texto
  let bg = "#22c55e"; // verde (sucesso)
  // eslint-disable-next-line react/prop-types
  if (message.toLowerCase().includes("já está cadastrado")) bg = "#eab308"; // amarelo (aviso)
  // eslint-disable-next-line react/prop-types
  if (message.toLowerCase().includes("erro")) bg = "#dc2626"; // vermelho (erro)

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        style={{
          background: bg,
          padding: "12px 18px",
          borderRadius: "10px",
          marginTop: "15px",
          color: "#fff",
          fontWeight: "bold",
          textAlign: "center",
          boxShadow: `0 0 12px ${bg}80`,
        }}
      >
        {message}
      </motion.div>
    </AnimatePresence>
  );
};

export default MessageAlert;
