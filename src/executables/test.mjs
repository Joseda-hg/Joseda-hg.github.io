import PocketBase from "pocketbase";
import csv from "csv-parser";
import fs from "fs";

const pb = new PocketBase("https://thundering-banana.pockethost.io");
const authData = await pb.admins.authWithPassword(
  "mikutorif@gmail.com",
  "1234567890"
);
try {

    const exists = await pb
    .collection("Libros")
    .getFirstListItem(`GutenbergId="${99999999999999999999999999999}"`,{ requestKey: null });
}
catch{
    console.log("No existe");
}
// console.log(exists);