function Print() {
    const day = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    console.log("Today is " + days[day.getDay()]);
    let M = "AM";
    let H = day.getHours();
    if (H >= 12) M = "PM";
    console.log("Current time is " + H + ":" + day.getMinutes() + ":" + day.getSeconds() + " " + M);
}

Print();