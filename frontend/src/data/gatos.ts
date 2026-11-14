export interface Gato {
  id: number
  nombre: string
  descripcion: string
  edad: string
  sexo: 'Hembra' | 'Macho'
  imagen: string
}

export const gatos: Gato[] = [
  {
    id: 1,
    nombre: 'Luna',
    descripcion: 'Una gatita cariñosa que busca una familia.',
    edad: '4 meses',
    sexo: 'Hembra',
    imagen: `${import.meta.env.BASE_URL}img/luna.jfif`,
  },
  {
    id: 2,
    nombre: 'Simón',
    descripcion: 'Un gatito juguetón que disfruta de la compañía.',
    edad: '1 año',
    sexo: 'Macho',
    imagen: `${import.meta.env.BASE_URL}img/simon.jfif`,
  },
  {
    id: 3,
    nombre: 'Mila',
    descripcion: 'Una gatita tranquila que disfruta descansar al sol.',
    edad: '3 años',
    sexo: 'Hembra',
    imagen: `${import.meta.env.BASE_URL}img/mila.jfif`,
  },
  {
    id: 4,
    nombre: 'Tomás',
    descripcion: 'Un gatito curioso al que le encanta explorar.',
    edad: '1 año',
    sexo: 'Macho',
    imagen: `${import.meta.env.BASE_URL}img/tomas.jpeg`,
  },
]