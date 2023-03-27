export interface WHObject{
    name: string;
    width: {w1: number,w2: number ,w3: number,w4: number,w5: number};
    height: {h1: number,h2: number ,h3: number,h4: number,h5: number};
}
export interface NewsItemInterface{
    date: Date;
    imageURL: string;
    description: string;
    subDescription?: [string, string?, string?];
}
