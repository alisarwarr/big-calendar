export default function convertStringDateToDateObject(str) {
    var mnths = {
        Jan: "01",
        Feb: "02",
        Mar: "03",
        Apr: "04",
        May: "05",
        Jun: "06",
        Jul: "07",
        Aug: "08",
        Sep: "09",
        Oct: "10",
        Nov: "11",
        Dec: "12"
    };
    let date = str.split(" ");

    const year  = Number(date[3]);
    const month = Number(mnths[date[1]])-1;
    const datee = Number(date[2]);

    return new Date(year, month, datee);
}