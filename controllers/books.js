// создаем простенький контроллер

// todo запихнуть потом данные в папку data
let books = [
  {id: '1', name: 'The Angel', author: 'Hans Christian Andersen', year: '1843'},
  {id: '2', name: 'The Bell', author: 'Hans Christian Andersen', year: '1845'},
  {id: '3', name: 'Blockhead Hans', author: 'Hans Christian Andersen', year: '1855'},
  {id: '4', name: 'The Elf Mound', author: 'Hans Christian Andersen', year: '1845'},
  {id: '5', name: 'The Emperors New Clothes', author: 'Hans Christian Andersen', year: '1837'},
  {id: '6', name: 'The Fir-Tree', author: 'Hans Christian Andersen', year: '1844'},
  {id: '7', name: 'The Flying Trunk', author: 'Hans Christian Andersen', year: '1839'},
]

export const getAllHandler = (req, res) => {
  res.status(200).json(books) // прописываем статус 200, дабы не возникал error
}