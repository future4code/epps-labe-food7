export const BASE_URL = 'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA'

export const baseAxios = {
    headers: {
        auth: localStorage.getItem('token')
    }
}