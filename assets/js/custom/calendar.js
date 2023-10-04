var paperCall = "BEGIN:VCALENDAR\n" +
    "VERSION:2.0\n" +
    "PRODID:Cal_App//PPSN\n" +
    "METHOD:PUBLISH\n" +
    "BEGIN:VEVENT\n" +
    "UID:" + uuidv4() + "\n" +
    "LOCATION:" + "Online Submission" + "\n" +
    "SUMMARY:" + "Submit your paper via the online submission tool." + "\n" +
    "DESCRIPTION:" + "Submit your paper via the online submission tool." + "\n" +
    "CLASS:PUBLIC\n" +
    "DTSTART:" + "20240401T-000000Z\n" +
    "DTEND:" + "20240401T-235900Z\n" +
    "DTSTAMP: " + "20230401T000000Z\n" +
    "END:VEVENT\n" +
    "END:VCALENDAR";

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}


function getCall() {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(paperCall));
    element.setAttribute('download', "test.ics");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();
    document.body.removeChild(element);
}