$("#schedule-download-form").submit(function (e) {
    e.preventDefault();
});

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

function pad(n) {
    return (n < 10) ? ("0" + n) : n;
}

function download() {
    var checkedDays = $("#schedule input:checkbox:checked").map(function () {
        return $(this).data('day')
    }).get();
    var checkedTime = $("#schedule input:checkbox:checked").map(function () {
        return $(this).data('time')
    }).get();
    var checkedTitle = $("#schedule input:checkbox:checked").map(function () {
        return $(this).data('title')
    }).get();
    var checkedDesc = $("#schedule input:checkbox:checked").map(function () {
        return $(this).data('desc')
    }).get();
    var checkedRoom = $("#schedule input:checkbox:checked").map(function () {
        return $(this).data('room')
    }).get();
    var checkedDuration = $("#schedule input:checkbox:checked").map(function () {
        return $(this).data('duration')
    }).get();
    console.log(checkedDays)
    console.log(checkedTime)
    console.log(checkedTitle)
    console.log(checkedDesc)
    console.log(checkedRoom)
    console.log(checkedDuration)

    var ical = "";
    ical += "BEGIN:VCALENDAR\n";
    ical += "VERSION:2.0\n";
    ical += "PRODID:Cal_App//PPSN\n";
    ical += "METHOD:PUBLISH\n";

    for (var i = 0; i < checkedDays.length; ++i) {
        var day = pad(checkedDays[i].split(" ").slice(-1));
        var month = "06";
        var year = "2023";
        var startHour = pad(checkedTime[i].split(":")[0]);
        var startMin = checkedTime[i].split(":")[1];
        var endHour = pad(Number(startHour) + checkedDuration[i]);
        var endMin = "00";
        var sec = "00";

        ical += "BEGIN:VEVENT\n";
        ical += "UID:" + uuidv4() + "\n";
        ical += "LOCATION:" + checkedRoom[i] + "\n";
        ical += "SUMMARY:" + checkedTitle[i] + "\n";
        ical += "DESCRIPTION:" + checkedDesc[i] + "\n";
        ical += "CLASS:PUBLIC\n";
        ical += "DTSTART:" + year + "" + month + "" + day + "T" + startHour + "" + startMin + "" + sec + "Z\n";
        ical += "DTEND:" + year + "" + month + "" + day + "T" + endHour + "" + endMin + "" + sec + "Z\n";
        ical += "DTSTAMP:20230616T100000Z\n";
        ical += "END:VEVENT\n";

        console.log(ical)
    }

    ical += "END:VCALENDAR";


    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(ical));
    element.setAttribute('download', "test.ics");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();
    document.body.removeChild(element);
}