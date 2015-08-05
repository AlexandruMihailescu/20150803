function nextSunday(month, year)
{
    result=new Date(year, month, 15);
    result.setDate(result.getDate()+(7-result.getDay()));
    return result;
}
function getDateString(date)
{
    dd=date.getDate();
    mm=date.getMonth()+1;
    yyyy=date.getFullYear();
    return dd+"."+mm+"."+yyyy;
}