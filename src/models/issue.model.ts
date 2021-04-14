export interface IIssue {
    repoNumber?: string;
    title?: string;
    responsible?: string;
    estimation?: IEstimation;
    progress?: number;
    priority?: number;
    clientValue?: number;
}

export interface IEstimation {
    optimistic?: number;
    mostLikely?: number;
    pesimistic?: number;
    originalEstimation?: number;
}
