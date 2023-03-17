function pickIdsRec(notEqualTo?: number): number {
    const number = Math.round(Math.random() * 10) + 1;
    if (number === notEqualTo) {
        return pickIdsRec(notEqualTo);
    }
    return number
}

export const getTwoRandomIds = () => {
    const firstId = pickIdsRec();
    const secondId = pickIdsRec(firstId)
    return [firstId, secondId]
}