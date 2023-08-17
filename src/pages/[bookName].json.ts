// Salidas: /builtwith.json


export async function get({params, request}) {
  return {
    body: JSON.stringify({
      nombre: 'Astro',
      url: 'https://astro.build/es',
    }),
  };
};