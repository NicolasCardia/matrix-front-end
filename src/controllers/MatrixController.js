export function buildMatrix(lines, columns) {
  const matrix = [];
  for (let i = 0; i < lines; i++) {
    const lines = [];
    for (let j = 0; j < columns; j++) {
      lines.push(0);
    }
    matrix.push(lines);
  }
  return matrix;
}
