export class Rent {
    constructor(
        public movieId: number,
        public dateOfRent: string,
        public dueDate: string,
        public customerId: number,
        public idRent?: number
      ) {  }
}
