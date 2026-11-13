export interface Gato {
  id: number
  nombre: string
  descripcion: string
}

export const gatos: Gato[] = [
  {
    id: 1,
    nombre: 'Luna',
    descripcion: 'Una gatita cariñosa que busca una familia.',
  },
  {
    id: 2,
    nombre: 'Simón',
    descripcion: 'Un gatito juguetón que disfruta de la compañía.',
  },
  {
    id: 3,
    nombre: 'Mila',
    descripcion: 'Una gatita tranquila que disfruta descansar al sol.',
  },
  {
    id: 4,
    nombre: 'Tomás',
    descripcion: 'Un gatito curioso al que le encanta explorar.',
  },
]