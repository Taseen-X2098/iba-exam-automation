function addRecord(dataArray) {
  dataArray.forEach((row, index) => {
    dataArray[index][8] = (dataArray[index][8]) ? "PASSED" : "FAILED";
    dataArray[index][10] = (dataArray[index][10]) ? "PASSED" : "FAILED";
    dataArray[index][16] = (dataArray[index][16]) ? "PASSED" : "FAILED";
    dataArray[index][22] = (dataArray[index][22]) ? "PASSED" : "FAILED";
    dataArray[index] = [index + 1, ...row]
  })
  const sheet = SpreadsheetApp.openById("1A7DA8x5SkcLsxhPxFJQ1MdyxHOLvhvrRaQB0iP9eLgM").getSheetByName("LeaderBoard");
  // const sheet = SpreadsheetApp.openById("1-oOYZ_mQbP7tHq5P-l6PWONgKXLXA3OFeI2LJG6tms0").getSheetByName("LeaderBoard");
  sheet.getRange(3, 1, dataArray.length, 28).setValues(dataArray);
}
