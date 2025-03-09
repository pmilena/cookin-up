import type ICategoria from "@/interfaces/ICategoria";
import type IReceita from "@/interfaces/IReceita";

export async function ObterCategoria() {
  const response = await fetch(
    "https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json"
  );

  const categorias: ICategoria[] = await response.json();

  return categorias;
}

export async function ObterReceita() {
  const response = await fetch(
    "https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json"
  );

  const receitas: IReceita[] = await response.json();

  return receitas;
}
