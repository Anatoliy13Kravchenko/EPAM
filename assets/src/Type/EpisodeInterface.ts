export default interface EpisodeInterface {
    id: number;
    name: string;
    image: {
        [medium: string]: string
    },
    number: number;
    season: number;
    summary: string;
    runtime: number;
}
