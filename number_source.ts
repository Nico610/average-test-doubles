// number_source.ts
export interface NumberSource {
  readNumbers(): Promise<number[]>;
}