import {
    procedure as publicProcedure,
    router
} from '@trpc-api/trpc';
import z from 'zod';

const getPokemonInputSchema = z.object({
    limit: z.number(),
    offset: z.number()
});
type GetPokemonsInput = z.infer<typeof getPokemonInputSchema>;

type GetPokemonsResult = {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  }[]
};

export async function getPokemons({
    input = {
        limit: 20, offset: 0
    }
}: {
    input: GetPokemonsInput;
}): Promise<GetPokemonsResult> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${input.offset}&limit=${input.limit}`);
    const body = await response.text();
    const data = JSON.parse(body);
    return data;

}

export const PokemonRouter = router({
    getAll: publicProcedure
        .input(getPokemonInputSchema)
        .query(({
            input
        }) => getPokemons({ input }))
});
