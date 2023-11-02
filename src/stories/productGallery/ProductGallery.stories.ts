import type { Meta, StoryObj } from '@storybook/react';
import { ProductGallery, ProductGalleryProps } from './ProductGallery';

const meta = {
  title: 'Example/ProductGallery',
  component: ProductGallery,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ProductGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Gallery: Story = {
  args: {
    products: [
      {
        cardHeight: "150",
        flag: "src/stories/assets/3253482_flag_spain_country_world_icon.png",
        title: "Vino Tinto Crianza",
        subheader: "Añada 2019",
        image: "src/stories/assets/bot-ramonbilbao-crianza-2019.jpg", 
        description: "Este vino tinto crianza es perfecto para cualquier ocasión.",
        tastingNotes: "Este vino presenta un color rojo rubí intenso, con aromas a frutas rojas y un toque de vainilla. En boca es suave y aterciopelado, con taninos bien equilibrados.",
      },
      {
        cardHeight: "150",
        flag: "src/stories/assets/3253482_flag_spain_country_world_icon.png",
        title: "Vino Tinto Reserva",
        subheader: "Añada 2018",
        image: "/static/images/cards/wine2.jpg",
        description: "Este vino tinto reserva tiene un sabor rico y profundo, perfecto para acompañar carnes rojas.",
        tastingNotes: "Este vino tiene un color rojo oscuro, con aromas a frutas negras y un toque de especias. En boca es robusto y complejo, con taninos firmes.",
      },
      {
        cardHeight: "150",
        flag: "src/stories/assets/3253482_flag_spain_country_world_icon.png",
        title: "Vino Blanco",
        subheader: "Añada 2020",
        image: "/static/images/cards/wine3.jpg",
        description: "Este vino blanco es ligero y refrescante, perfecto para acompañar pescados y mariscos.",
        tastingNotes: "Este vino tiene un color amarillo pálido, con aromas a frutas cítricas y un toque de hierbas. En boca es fresco y vibrante, con una acidez equilibrada.",
      },
    ],
  },
};