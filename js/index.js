setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

    hour1.style.transform = `rotate(${hrotation}deg)`;
    minute1.style.transform = `rotate(${mrotation}deg)`;
    second1.style.transform = `rotate(${srotation}deg)`;

    hour2.style.transform = `rotate(${hrotation}deg)`;
    minute2.style.transform = `rotate(${mrotation}deg)`;
    second2.style.transform = `rotate(${srotation}deg)`;
}, 1000);