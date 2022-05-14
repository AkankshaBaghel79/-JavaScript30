const secondHand = document.querySelector('.sec');
const MinuteHand = document.querySelector('.min');
const hourHand = document.querySelector('.hour');


function setDate()
{
    const now = new Date();

    const seconds = now.getSeconds();
    const secondDegree = ((seconds/60)*360);
    secondHand.style.transform = `rotate(${secondDegree}deg)`;

    const minutes = now.getMinutes();
    const minuteDegree = ((minutes/60)*360);
    MinuteHand.style.transform = `rotate(${minuteDegree}deg)`;

    const hour = now.getHours();
    const hourDegree = ((hour/60)*360);
    hourHand.style.transform = `rotate(${hourDegree}deg)`;

}

setInterval(setDate,1000)