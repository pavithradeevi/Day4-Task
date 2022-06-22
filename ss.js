
var request=new XMLHttpRequest();
request.open("GET","https://data.covid19india.org/v4/min/data.min.json");
request.send();
request.onload=function(){
    var res=JSON.parse(request.response)
    console.log(res);
    //console.log(res);
    //console.log(res[0].name);
    console.log("AN",res.AN.total.confirmed);
    console.log("AP",res.AP.total.confirmed);
    console.log("AR",res.AR.total.confirmed);
    console.log("AS",res.AS.total.confirmed);
    console.log("BR",res.BR.total.confirmed);
    console.log("CH",res.CH.total.confirmed);
    console.log("CT",res.CT.total.confirmed);
    console.log("DL",res.DL.total.confirmed);
    console.log("DN",res.DN.total.confirmed);
    console.log("GA",res.GA.total.confirmed);
    console.log("GJ",res.GJ.total.confirmed);
    console.log("HP",res.HP.total.confirmed);
    console.log("HR",res.HR.total.confirmed);
    console.log("JH",res.JH.total.confirmed);
    console.log("JK",res.JK.total.confirmed);
    console.log("KA",res.KA.total.confirmed);
    console.log("KL",res.KL.total.confirmed);
    console.log("LA",res.LA.total.confirmed);
    console.log("LD",res.LD.total.confirmed);
    console.log("MH",res.MH.total.confirmed);
    console.log("ML",res.ML.total.confirmed);
    console.log("MN",res.MN.total.confirmed);
    console.log("MP",res.MP.total.confirmed);
    console.log("MZ",res.MZ.total.confirmed);
    console.log("NL",res.NL.total.confirmed);
    console.log("OR",res.OR.total.confirmed);
    console.log("PB",res.PB.total.confirmed);
    console.log("PY",res.PY.total.confirmed);
    console.log("RJ",res.RJ.total.confirmed);
    console.log("SK",res.SK.total.confirmed);
    console.log("TG",res.TG.total.confirmed);
    console.log("TN",res.TN.total.confirmed);
    console.log("TR",res.TR.total.confirmed);
    console.log("TT",res.TT.total.confirmed);
    console.log("UP",res.UP.total.confirmed);
    console.log("UT",res.UT.total.confirmed);
    console.log("WB",res.WB.total.confirmed);




    
}