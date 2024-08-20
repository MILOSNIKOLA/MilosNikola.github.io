
// let interval = setInterval(() => {
//     // location.href = 'https://fr.linkedin.com/in/dragan-manojlovic-76985310b?trk=people-guest_people_search-card'
// }, 8000)



setInterval(() => {
    // get time indicator elements
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let secondes = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    // digits time indicator
    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');


    // dot time indicator
    let dotH = document.querySelector('.h_dot');
    let dotM = document.querySelector('.m_dot');
    let dotS = document.querySelector('.s_dot');

    // get current time
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ap = h >= 24 ? '' : '';

    // convert to 12 hour format
    if (h > 24) {
        h = h - 12;
    }

    // add 0 before single digit
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    // set time and label
    hours.innerHTML = h + 'Hours';
    minutes.innerHTML = m + 'Minutes';
    secondes.innerHTML = s + 'Seconds';
    ampm.innerHTML = ap;

    // set time circular indicator
    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

    // set dot time position indicator
    dotH.style.transform = `rotate(${h * 30}deg)`;
    dotM.style.transform = `rotate(${m * 6}deg)`;
    dotS.style.transform = `rotate(${s * 6}deg)`;

    let media500 = window.matchMedia('(max-width: 500px)');

if (media500.matches) {
    setInterval(() => {
        // get time indicator elements
        let hours = document.getElementById('hours');
        let minutes = document.getElementById('minutes');
        let secondes = document.getElementById('seconds');
        // let ampm = document.getElementById('ampm');
    
        // digits time indicator
        let hh = document.getElementById('hh');
        let mm = document.getElementById('mm');
        let ss = document.getElementById('ss');
    
    
        // dot time indicator
        let dotH = document.querySelector('.h_dot');
        let dotM = document.querySelector('.m_dot');
        let dotS = document.querySelector('.s_dot');
    
        // get current time
        let h = new Date().getHours();
        let m = new Date().getMinutes();
        let s = new Date().getSeconds();
        // let ap = h >= 24 ? '' : '';
    
        // convert to 12 hour format
        if (h > 24) {
            h = h - 12;
        }
    
        // add 0 before single digit
        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;
    
        // set time and label
        hours.innerHTML = h + 'Hours';
        minutes.innerHTML = m + 'Minutes';
        secondes.innerHTML = s + 'Seconds';
        // ampm.innerHTML = ap;
    
        // set time circular indicator
        hh.style.strokeDashoffset = 450 - (400 * h) / 12;
        mm.style.strokeDashoffset = 400 - (310 * m) / 60;
        ss.style.strokeDashoffset = 400 - (310 * s) / 60;
    
        // set dot time position indicator
        dotH.style.transform = `rotate(${h * 30}deg)`;
        dotM.style.transform = `rotate(${m * 6}deg)`;
        dotS.style.transform = `rotate(${s * 6}deg)`;
    
    }, 1000);

    let media370 = window.matchMedia('(max-width: 370px)');
    
    setInterval370(() => {
        
        if (media370.matches) {

        let hhh = document.getElementById('hhh');
        let mmm = document.getElementById('mmm');
        let sss = document.getElementById('mmm');

        let h = new Data().getHours();
        let m = new Data().getMinutes();
        let s = new Date().getSeconds();

        hhh.style.strokeDashoffset = 760 - (760 * h) / 12;
        mmm.style.strokeDashoffset = 130 - (630 * m) / 60;
        sss.style.strokeDashoffset = 130 - (130 * h) / 60;

        }
    })
    
}


}, 1000);

const reci = document.querySelector('.p');

// Ajout d'un gestionnaire d'événements pour 'mouseenter'

reci.addEventListener('click', () => {
    // Ajout de la classe CSS pour l'effet "hover"
    reci.classList.toggle('reci');
    console.log('aaaaaaaaa');
    // let interval = setInterval(() => {
    //     location.href = 'https://fr.linkedin.com/in/dragan-manojlovic-76985310b?trk=people-guest_people_search-card' 
    // }, 1000)
    window.open('https://fr.linkedin.com/in/dragan-manojlovic-76985310b?trk=people-guest_people_search-card')
});












