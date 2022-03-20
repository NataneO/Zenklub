

export interface Professional {
    id: number,
    name: string,
    segment: String,
    country: String,
    reviews: number,
    price: number,
    duration: String,
    description:String,
    start_time:String,
    end_time: String,
    range: number,
    schedule: [
        {
            date: String

        }
    ]
}
