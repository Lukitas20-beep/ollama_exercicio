// index.js
import fetch from "node-fetch";
import readlineSync from "readline-sync";

const OLLAMA_URL = "http://ollama.eastus.cloudapp.azure.com:11434/api/generate";
const MODEL = "phi3:mini";

async function askAndSend() {
  console.log("Conectando ao Ollama ->", OLLAMA_URL);
  const prompt = readlineSync.question("Digite seu prompt: ");

  console.log("\nIA está digitando... ⌛\n");

  const body = {
    model: MODEL,
    prompt: prompt,
    stream: false
  };

  try {
    const resp = await fetch(OLLAMA_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!resp.ok) {
      const text = await resp.text();
      console.error(`Erro HTTP ${resp.status}:`, text);
      return;
    }

    const data = await resp.json();
    console.log("\n--- Resposta do modelo ---\n");
    if (data.response !== undefined) {
      console.log(data.response);
    } else if (data.choices && data.choices.length) {
      console.log(data.choices.map(c => c.text || c.message || JSON.stringify(c)).join("\n"));
    } else {
      console.log(JSON.stringify(data, null, 2));
    }
    console.log("\n--------------------------\n");
  } catch (err) {
    console.error("Erro ao chamar a API:", err);
  }
}


askAndSend();
