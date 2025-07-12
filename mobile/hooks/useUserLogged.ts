function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function esperarYRetornar(): Promise<boolean> {
  await sleep(10000); // espera 10 segundos
  return false;
}

export function useUserLogged(){

  return true
}