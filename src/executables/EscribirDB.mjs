import PocketBase from "pocketbase";
import csv from "csv-parser";
import fs from "fs";

const pb = new PocketBase("https://thundering-banana.pockethost.io");
const authData = await pb.admins.authWithPassword(
  "mikutorif@gmail.com",
  "1234567890"
);
fs.createReadStream("catalogo.csv")
  .pipe(csv())
  .on("data", async (row) => {
    try {
      const exists = await pb
        .collection("Libros")
        .getFirstListItem(`GutenbergId="${row.GutenbergId}"`, {
          requestKey: null,
        });
      console.log(`Creado: ${exists}`);
    } catch {
      console.log("No existe", row.GutenbergId);
      const data = {
        GutenbergId: row["Text#"],
        Titulo: row.Title,
        Autores: row.Authors,
      };
      const record = await pb
        .collection("Libros")
        .create(data, { requestKey: null });
    }
  })
  .on("end", () => {
    console.log("CSV file successfully processed");
  });
