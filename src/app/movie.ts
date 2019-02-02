export class Movie {
    constructor(
        public title: string,
        public year: number,
        public genreId: number,
        public directorId: number,
        public idMovie?: number
      ) {  }
}
