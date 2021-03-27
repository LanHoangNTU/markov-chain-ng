export interface StudentPrediction {
    headers?: String[],
    data: DataPredicton[]
}

export interface DataPredicton {
    name?: String,
    result?: Object[]
}