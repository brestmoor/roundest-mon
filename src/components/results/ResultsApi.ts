export default class ResultsApi {
    static async getTop3() {
        const response = await fetch('api/roundness?top=3');
        return response.json();
    }
}