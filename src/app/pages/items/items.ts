
export class Items {
    previous: string;
    next: string;
    totalHours: number;
    isLocked?: boolean;
    status?: number;

    constructor(
        previous: string,
        next: string,
        totalHours: number,
    ) {
        this.previous = previous;
        this.next = next;
        this.totalHours = totalHours;
    }
}
