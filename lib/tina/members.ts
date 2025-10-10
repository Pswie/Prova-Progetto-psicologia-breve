import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Member {
  slug: string;
  nome: string;
  cognome: string;
  ruolo: string;
  immagine?: string;
  bio: string;
  email?: string;
  telefono?: string;
  citta?: string;
  specializzazioni?: string;
  ordine?: string;
  body?: string;
}

const membersDirectory = path.join(process.cwd(), "content/membri");

export function getAllMembers(): Member[] {
  if (!fs.existsSync(membersDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(membersDirectory);
  const allMembers = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(membersDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        nome: data.nome || "",
        cognome: data.cognome || "",
        ruolo: data.ruolo || "",
        immagine: data.immagine || "",
        bio: data.bio || "",
        email: data.email || "",
        telefono: data.telefono || "",
        citta: data.citta || "",
        specializzazioni: data.specializzazioni || "",
        ordine: data.ordine || "999",
        body: content,
      } as Member;
    });

  // Ordina per numero d'ordine
  return allMembers.sort((a, b) => {
    const ordineA = parseInt(a.ordine || "999");
    const ordineB = parseInt(b.ordine || "999");
    return ordineA - ordineB;
  });
}

export function getMemberBySlug(slug: string): Member | null {
  const fullPath = path.join(membersDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    nome: data.nome || "",
    cognome: data.cognome || "",
    ruolo: data.ruolo || "",
    immagine: data.immagine || "",
    bio: data.bio || "",
    email: data.email || "",
    telefono: data.telefono || "",
    citta: data.citta || "",
    specializzazioni: data.specializzazioni || "",
    ordine: data.ordine || "999",
    body: content,
  } as Member;
}
