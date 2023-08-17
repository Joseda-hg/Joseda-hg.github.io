// Salidas: /builtwith.json
export const prerender = false;
export const config = {
  runtime: 'edge',
};
import json from "../books.json";
export async function getStaticPaths() {
  // @ts-ignore
  return json.map((book) => {
    return {
      params: { bookName: book.Text },
      props: { book },
    };
  });
}
// @ts-ignore
export async function get({params, request}) {
  const id = params.bookName;
  return {
    body: JSON.stringify({
      nombre: `${json[id-1].Title}`,
      url: `https://www.gutenberg.org/ebooks/${json[id-1].Text}.epub3.images`,
    }),
  };
};