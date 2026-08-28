import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());
app.use(express.static('.'));

interface Note {
  id: string;
  title: string;
  content: string;
}

let notes: Note[] = [];

app.post('/notes', (req: Request, res: Response) => {
  const { title, content } = req.body;
  const note: Note = {
    id: Date.now().toString(),
    title: title || '',
    content: content || '',
  };
  notes.push(note);
  res.status(201).json(note);
});

app.get('/notes', (_req: Request, res: Response) => {
  res.json(notes);
});

app.get('/notes/:id', (req: Request, res: Response) => {
  const note = notes.find((n) => n.id === req.params.id);
  if (!note) return res.status(404).json({ error: 'Not found' });
  res.json(note);
});

app.put('/notes/:id', (req: Request, res: Response) => {
  const note = notes.find((n) => n.id === req.params.id);
  if (!note) return res.status(404).json({ error: 'Not found' });
  const { title, content } = req.body;
  if (title !== undefined) note.title = title;
  if (content !== undefined) note.content = content;
  res.json(note);
});

app.delete('/notes/:id', (req: Request, res: Response) => {
  const idx = notes.findIndex((n) => n.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  notes.splice(idx, 1);
  res.status(204).send();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
