<template>
  <div>
    <label class="lineLabel"  for="lines">Você quer montar uma matriz com quantas <b>LINHAS?</b></label><br />
    <input type="number" class="lines" id="lines" v-model="lines" min="0" />
    <br/><br/>
    <label for="columns">Você quer montar uma matriz com quantas <b>COLUNAS</b>?</label><br />
    <input type="number" id="columns" v-model="columns" min="0"/>
    <br/><br/>
    <button @click="validateAndBuildMatrix">Gerar matriz</button>

    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>

    <div v-if="matrix.length">
      <h2>Matriz:</h2>
      <table class="tableMatrix">
        <tr v-for="(lines, linesIndex) in matrix" :key="linesIndex">
          <td v-for="(columns, columnsIndex) in lines" :key="columnsIndex">
            <input type="number" v-model="matrix[linesIndex][columnsIndex]" min="0" max="1" />
          </td>
        </tr>
      </table>
      <button @click="submitMatrix">Enviar Matriz</button>
    </div>
  </div>
</template>

<script>
import { buildMatrix } from "../controllers/MatrixController.js";

export default {
  name: 'MatrixForms',
  props: {
    msg: String,
  },
  data() {
    return {
      lines: 0,
      columns: 0,
      matrix: [],
      errorMessage: '',
    };
  },
  methods: {
    validateAndBuildMatrix() {
      if (this.lines <= 0 || this.columns <= 0) {
        this.errorMessage = "Número de linhas e colunas deve ser maior que zero.";
      } else {
        this.errorMessage = "";
        this.matrix = buildMatrix(this.lines, this.columns);
      }
    },
    async submitMatrix() {
      try {
        const response = await fetch('http://localhost:8080/rectangle', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ matrix: this.matrix })
        });
        const result = await response.json();
        alert(`Área do maior retângulo: ${result}`);
      } catch (error) {
        console.error('Erro ao enviar a matriz:', error);
        this.errorMessage = "Erro ao enviar a matriz. Por favor, tente novamente.";
      }
    }
  }
};
</script>

<style scoped>
h1 {
  margin: 40px 0 0;
  font-size: 100px;
  color: blue;
}

label {
  font-size: 20px;
}

input[type="number"] {
  width: 60px;
  padding: 8px;
  margin: 4px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  background-color: #f1f1f1;
}

button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 12px;
  margin-top: 20px;
}

table {
  margin-top: 20px;
}

td {
  padding: 5px;
}

.tableMatrix {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.error-message {
  color: red;
  font-size: 18px;
  margin-top: 20px;
}
</style>
