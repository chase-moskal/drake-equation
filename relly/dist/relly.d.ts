export interface ReltextParams {
    elements: HTMLElement[] | NodeListOf<HTMLElement>;
    fraction: number;
}
export declare function reltext({elements, fraction}?: Partial<ReltextParams>): () => void;
