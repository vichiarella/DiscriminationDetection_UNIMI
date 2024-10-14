

enum Valuation {
    Discriminatory = 0,
    Inclusive = 1
}

type Annotation = {
    job_id?: string | undefined,
    annotator?: Annotator | undefined,
    comment?: string | undefined,
    valuation: Valuation
}