function hora()
{
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var res = h+":"+m;
    return res;
}
