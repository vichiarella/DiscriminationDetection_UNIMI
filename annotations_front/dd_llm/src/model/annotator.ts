enum AgeRange {
    "14-19" = 0,
    "19-25" = 1,
    "26-35" = 2,
    "36-54" = 4
}

type Annotator = {
    background: string,
    referenceCookie: string,
    ageRange: AgeRange
}
