import { Format, video } from "./video";

export default class videoDetails implements video {
    formats: Format[] = [];
    title: string = "";
    idVideo: string = "";
    thumbnail: string = "";
    viewCount: string = "";
    dutation: string = "";
    constructor(){}
}