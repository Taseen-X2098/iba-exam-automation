function resultCompilation() {
  const form = FormApp.openById('1VHhHbvmz_gJuLp6MzkSdAMCPkpFIkypcOO11TxSZkm4');
  const responses = form.getResponses();
  const allData = [];

  responses.forEach((formResponse => {
    var totalMarks = 0, totalAns = 0, totalCorr = 0, totalIncorr = 0, totalSkip = 0;
    var mathMarks = 0, engMarks = 0, anaMarks = 0;
    var mathCorr = 0, engCorr = 0, anaCorr = 0;
    var mathIncorr = 0, engIncorr = 0, anaIncorr = 0;
    var mathSkip = 0, engSkip = 0, anaSkip = 0;
    var mathAns = 0, engAns = 0, anaAns = 0;

    var gradableItemResponses = formResponse.getGradableItemResponses();
    gradableItemResponses.shift();
    const responses = formResponse.getItemResponses();

    const name = responses[1].getResponse();
    const classValue = responses[2].getResponse();
    const college = responses[3].getResponse();

    gradableItemResponses.forEach((itemResponse, itemResponseIndex) => {
      
      const response = itemResponse.getResponse();
      const type = itemResponse.getItem().getType();

      if(type == FormApp.ItemType.MULTIPLE_CHOICE){
        const subject = getSubject(itemResponseIndex);
        if (response == "") {
          if (subject == "math") {
            mathSkip += 1;
          }else if (subject == "english") {
            engSkip += 1;
          }else {
            anaSkip += 1;
          }

        } else{

          if(response == getCorrectOption(itemResponse)) {

            if (subject == "math") {
              mathCorr += 1;
              mathMarks += 1;
              mathAns += 1;
            }else if (subject == "english") {
              engCorr += 1;
              engMarks += 1;
              engAns += 1;
            }else {
              anaCorr += 1;
              anaMarks += 1;
              anaAns += 1;
            }

          } else {

            if (subject == "math") {
              mathIncorr += 1;
              mathMarks = mathMarks - .25;
              mathAns += 1;
            }else if (subject == "english") {
              engIncorr += 1;
              engMarks = engMarks - .25;
              engAns += 1;
            }else {
              anaIncorr += 1;
              anaMarks = anaMarks - .25;
              anaAns += 1;
            }

          }
        }
      } 
    })

    totalMarks = mathMarks + engMarks + anaMarks;
    totalAns = mathAns + engAns + anaAns;
    totalCorr = mathCorr + engCorr + anaCorr;
    totalIncorr = mathIncorr + engIncorr + anaIncorr;
    totalSkip = mathSkip + engSkip + anaSkip;

    allData.push(
      [name, classValue, college,
        totalMarks, totalAns, totalCorr, totalIncorr, totalSkip, null,
        mathMarks, null, mathAns, mathCorr, mathIncorr, mathSkip, 
        engMarks, null, engAns, engCorr, engIncorr, engSkip, 
        anaMarks, null, anaAns, anaCorr, anaIncorr, anaSkip
      ]);
    })) 

    sortData(allData);
    addRecord(allData);
}










