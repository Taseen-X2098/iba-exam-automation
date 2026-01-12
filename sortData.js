function sortData(allData) {
  const { mathPassbar, engPassbar, anaPassbar } = setPassbar(allData, 10, 6.5, 4.5);
  
  Logger.log("mathPassbar: " + mathPassbar + "engPassbar: " + engPassbar + "anaPassbar: " + anaPassbar);
  allData.forEach((row, index) =>  {
    allData[index][10] = (row[9] >= mathPassbar);
    allData[index][16] = (row[15] >= engPassbar);
    allData[index][22] = (row[21] >= anaPassbar);
    allData[index][8] = allData[index][10] && allData[index][16] && allData[index][22];
  })

  allData.sort((rowA, rowB) => {
    const passedA = rowA[8];
    const passedB = rowB[8];
    const marksA = rowA[3];
    const marksB = rowB[3];

    if (passedA  && !passedB ) return -1; 
    if (!passedA  && passedB ) return 1; 

    return marksB - marksA;
  });  
}
