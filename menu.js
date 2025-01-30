function Jobs_desk() {
    let job = document.querySelectorAll('.jobs');
    for (let i = 1; i <= 5; i++){
        var vacancy = [];
        const min = 1;
        const max = 121;
        const random_brigade = Math.floor(Math.random() * (max - min + 1)) + min;
        vacancy.push(random_brigade);
    jobs.innerHTML = vacancy;}
Jobs_desk();
} 
