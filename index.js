import express from 'express'; 

const app = express();
app.use(express.json())
const PORT = 3000;

class Aluno{
  constructor(nome, curso){
    this.nome = nome;
    this.curso = curso;
  }
}
app.get('/', (req, res) => {

  res.send('responde');
});                   

app.get('/usuario/:id', (req, res)=>{
  const id = req.params.id;
  res.send(`O cliente está tentando visualizar o usuário ${id}`);
})

app.get('/aluno/:nome/:curso', (req, res)=>{
  const nome = req.params.nome;
  const curso = req.params.curso

  const newAluno = new Aluno(nome, curso);
  res.send(newAluno)
})
const frutas = ["Carambola", "Siriguela", "Pinha", "Lichia", "Uva"]



app.post('/frutas', (req, res)=>{
  const novaFruta = req.body.fruta;
  frutas.push(novaFruta);
  res.send("cadastrado com sucesso");
})
app.get('/frutas',  (req, res)=>{
  res.send(frutas)
})
app.get('/frutas/:i',  (req, res)=>{       
  const i = req.params.i;
  res.send(frutas[i])
})
app.put("/frutas/:indice", (req, res)=>{
  frutas[req.params.indice] = req.body.fruta;
  res.send("Nome atualizado com sucesso");
})
app.delete("/frutas/:indice", (req, res)=>{
  frutas.pop(req.params.indice);
  res.send(`A fruta foi removida com sucesso`)
})
// o app.listen sempre precisa ser a última instrução 
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});