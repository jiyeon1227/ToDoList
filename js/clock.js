const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0"); // padStart()는 내가 가지고 있는 string보다 길게 만들어야 할때 사용(string앞에 문자를 넣음)
    const minutes = String(date.getMinutes()).padStart(2, "0"); //(2, "0")는 두자리수인데 문자가 없으면 앞에 0을 넣는다는뜻
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock(); // 최초 한번 실행
setInterval(getClock,1000); // 1초마다 getcolock를 실행