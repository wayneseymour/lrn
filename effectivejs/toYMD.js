function toYMD(date) {
  var y = date.getYear() + 1900, // year is 1900-indexed
    m = date.getMonth() + 1, // month is 0-indexed
    d = date.getDate();

    return y
      + "/" + (m < 10 ? "0" + m : m)
      + "/" + (d < 10 ? "0" + d : d);
}
debugger;
//toYMD(new Date());
