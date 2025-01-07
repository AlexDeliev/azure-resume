window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApiUrl = 'https://myresumecounter.azurewebsites.net/api/GetResumeCounter?code=hMpZ4F_HlUsDNPXSq_R2l30YoECdrKcguh7JJkqlRlH3AzFucixT-A%3D%3D'
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30; // Default value
    fetch(functionApiUrl)
        .then(response => {
            return response.json();
        })
        .then(response => {
            console.log("Website called function API");
            count = response.count;
            document.getElementById("counter").innerText = count; // Corrected here
        })
        .catch(function (error) {
            console.log(error);
        });
    return count;
};
