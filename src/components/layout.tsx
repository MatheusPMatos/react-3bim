import { useState } from "react";

export default function Layout() {
  const [align, setAlign] = useState<"flex-start" | "center" | "flex-end">(
    "center"
  );

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Alinhamento / justificado</h2>
      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => setAlign("flex-start")}>Início</button>
        <button onClick={() => setAlign("center")} style={{ margin: "0 10px" }}>
          Centro
        </button>
        <button onClick={() => setAlign("flex-end")}>Fim</button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: align,
          alignItems: align,
          border: "1px solid #ccc",
          height: "120px",
        }}
      >
        <div style={{ background: "#61dafb", padding: "10px" }}>Item</div>
      </div>

      <h2 style={{ marginTop: "30px" }}>Layout Fixos vs Dinâmicos</h2>
      <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
        
        <div>
          <h3>Fixos</h3>
          <button style={{ width: "80px", height: "40px" }}>Botão A</button>
          <button style={{ width: "80px", height: "40px", marginLeft: "10px" }}>
            Botão Com texto grande no tamanho fixo
          </button>
        </div>

        
        <div style={{ flex: 1 }}>
          <h3>Dinâmico</h3>
          <img
            src="https://agourmetutilidades.com.br/cdn/shop/products/taca-de-vidro-para-cerveja-paulista-300ml-nadir-un.jpg?v=1752008170"
            alt="Exemplo"
            style={{ maxWidth: "100%", height: "auto", border: "1px solid #aaa" }}
          />
        </div>
      </div>
    </div>
  );
}
