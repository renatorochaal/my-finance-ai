const { Client } = require('pg');

async function testConnection() {
  const client = new Client({
    connectionString: "postgresql://user:1234@localhost:5432/finance_ai_db",
  });

  try {
    await client.connect();
    console.log("Conectado com sucesso!");
  } catch (error) {
    console.error("Erro de conexão:", error);
  } finally {
    await client.end();
  }
}

testConnection();
