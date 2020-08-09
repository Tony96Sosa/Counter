const btns = document.querySelectorAll(".btn");
const info = document.querySelector(".info");
let count = 0;

btns.forEach( btn => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
        }else if(styles.contains("increase")){
            count++;
        }else{
            count = 0;
        }
        if(count < 0){
            info.style.color = "red";
        }else if(count > 0){
            info.style.color = "green";
        }else if(count === 0){
            info.style.color = "#102a42";
        }
        info.textContent = count;
    });
})
