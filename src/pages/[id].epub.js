// export const prerender = false;
// export const config = {
//   runtime: 'serverless',
// };
// export async function get({ params, request }) {
//     const id = params.id;
//     const response = await fetch(`https://www.gutenberg.org/ebooks/${id}.epub3.images`);
//     const buffer = Buffer.from(await response.arrayBuffer());
//     return new Response(buffer, {
//       headers: { "Content-Type": "application/epub+zip"},
//     });
//   }