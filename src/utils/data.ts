export const getData = (endpoint: string, callback: (data: any[]) => void): void => {
    fetch(endpoint)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.error(error));
}