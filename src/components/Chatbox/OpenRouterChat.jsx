import React, { useState, useEffect, useRef } from "react";

export default function OpenRouterChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "system",
      content:
        "Eres un asistente educativo que orienta a los jóvenes sobre carreras y universidades en Yucatán, México. Sé claro, útil y amable.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = "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";

  const messagesEndRef = useRef(null);

  // Scroll automático al último mensaje
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "openai/gpt-4o-mini",
          messages: newMessages,
        }),
      });

      const data = await response.json();
      if (data.choices && data.choices.length > 0) {
        setMessages([...newMessages, data.choices[0].message]);
      } else {
        alert("No hubo respuesta de la IA.");
      }
    } catch (error) {
      alert("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setOpen(true)}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          backgroundColor: "#0f172a",
          color: "#38bdf8",
          borderRadius: "50%",
          width: 60,
          height: 60,
          border: "none",
          boxShadow: "0 4px 15px rgba(56, 221, 255, 0.6)",
          cursor: "pointer",
          fontSize: 28,
          zIndex: 1000,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#0369a1")}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#0f172a")}
        title="Chatear con IA"
        aria-label="Abrir chat IA"
      >
        💬
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(15, 23, 42, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1100,
            padding: 10,
          }}
          onClick={() => setOpen(false)} // cerrar al hacer clic fuera del modal
        >
          <div
            onClick={e => e.stopPropagation()} // prevenir cierre cuando clic dentro
            style={{
              backgroundColor: "#1e293b",
              borderRadius: 20,
              width: "90%",
              maxWidth: 400,
              height: "80%",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 0 20px #0ea5e9",
              color: "#e0e7ff",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "12px 20px",
                borderBottom: "1px solid #334155",
                fontWeight: "bold",
                fontSize: 18,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#0f172a",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}
            >
              Chat IA - Orientación Universitaria
              <button
                onClick={() => setOpen(false)}
                aria-label="Cerrar chat"
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#38bdf8",
                  fontSize: 24,
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
                title="Cerrar"
              >
                ×
              </button>
            </div>

            {/* Mensajes */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: 15,
                fontSize: 14,
                lineHeight: "1.4em",
              }}
            >
              {messages
                .filter((m) => m.role === "user" || m.role === "assistant")
                .map((m, i) => (
                  <div
                    key={i}
                    style={{
                      marginBottom: 12,
                      textAlign: m.role === "user" ? "right" : "left",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        padding: "8px 14px",
                        borderRadius: 20,
                        maxWidth: "80%",
                        backgroundColor:
                          m.role === "user" ? "#0284c7" : "#334155",
                        color: "white",
                        wordWrap: "break-word",
                        fontWeight: "500",
                      }}
                    >
                      {m.content}
                    </span>
                  </div>
                ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input y botón */}
            <div
              style={{
                padding: "10px 15px",
                borderTop: "1px solid #334155",
                display: "flex",
                gap: 10,
                backgroundColor: "#0f172a",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
              }}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Haz una pregunta sobre universidades en Yucatán..."
                style={{
                  flex: 1,
                  borderRadius: 20,
                  border: "none",
                  padding: "10px 15px",
                  fontSize: 14,
                  outline: "none",
                }}
                autoFocus
              />
              <button
                onClick={sendMessage}
                disabled={loading}
                style={{
                  backgroundColor: "#0284c7",
                  border: "none",
                  borderRadius: 20,
                  padding: "10px 20px",
                  color: "white",
                  fontWeight: "bold",
                  cursor: loading ? "default" : "pointer",
                  opacity: loading ? 0.6 : 1,
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  if (!loading) e.currentTarget.style.backgroundColor = "#0369a1";
                }}
                onMouseLeave={(e) => {
                  if (!loading) e.currentTarget.style.backgroundColor = "#0284c7";
                }}
              >
                {loading ? "Consultando..." : "Enviar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
