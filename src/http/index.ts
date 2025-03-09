import type ICategoria from "@/interfaces/ICategoria";
import type IReceita from "@/interfaces/IReceita";

export async function ObterDadosURL<T>(url: string) {
  const response = await fetch(url);
  return response.json() as T;
}

export async function ObterCategoria() {
  return ObterDadosURL<ICategoria[]>(
    "https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json"
  );
}

export async function ObterReceita() {
  return ObterDadosURL<IReceita[]>(
    "https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json"
  );
}
