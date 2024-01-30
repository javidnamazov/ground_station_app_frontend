window.onload = function () {
  getData();
};

function getData() {
  fetch("http://localhost:8080/ground_station_app/")
    .then((response) => response.json())
    .then((dataArray) => {
      useDataArrayInHTML(dataArray);
    })
    .catch((error) => console.error("Error:", error));
}

function useDataArrayInHTML(dataArray) {
  const data = dataArray[0];

  //main
  document.getElementById("gps").innerText =
    "GPS NEO6M data:\n\n" + data.gpsneo6m;
  document.getElementById("acs").innerText = "ACS712 data:\n\n" + data.acs712;
  document.getElementById("bme").innerText = "BME280 data:\n\n" + data.bme280;
  document.getElementById("hmc").innerText = "HMC5883 data:\n\n" + data.hmc5883;
  document.getElementById("mpu").innerText = "MPU6050 data:\n\n" + data.mpu6050;
  document.getElementById("temt").innerText =
    "TEMT6000 data:\n\n" + data.temt6000;
  document.getElementById("ags").innerText = "AGS02MA data:\n\n" + data.ags02ma;

  //1
  //North commutator
  const data2 = dataArray[1];

  //lazers (on/off)
  if (data2.xd22On) {
    document.getElementById("xd22").innerText = "Lazer X\n\non (D22)";
  }
  if (data2.yd23On) {
    document.getElementById("yd23").innerText = "Lazer Y\n\non (D23)";
  }
  if (data2.zd24On) {
    document.getElementById("zd24").innerText = "Lazer Z\n\non (D24)";
  }

  //bars
  if (data2.barD3 !== null) {
    document.getElementById("bard3").style.width = data2.barD3 + "%";
  }
  if (data2.barD4 !== null) {
    document.getElementById("bard4").style.width = data2.barD4 + "%";
  }
  if (data2.barD5 !== null) {
    document.getElementById("bard5").style.width = data2.barD5 + "%";
  }

  //angles
  if (data2.angleD3 != null) {
    document.getElementById("angd3").innerText = data2.angleD3 + "°";
  }
  if (data2.angleD4 != null) {
    document.getElementById("angd4").innerText = data2.angleD4 + "°";
  }
  if (data2.angleD5 != null) {
    document.getElementById("angd5").innerText = data2.angleD5 + "°";
  }

  //2
  //South commutator
  const data3 = dataArray[2];

  //lazers (on/off)
  if (data3.xd25On) {
    document.getElementById("xd25").innerText = "Lazer X\n\non (D25)";
  }
  if (data3.yd26On) {
    document.getElementById("yd26").innerText = "Lazer Y\n\non (D26)";
  }
  if (data3.zd27On) {
    document.getElementById("zd27").innerText = "Lazer Z\n\non (D27)";
  }

  //bars
  if (data3.barD6 !== null) {
    document.getElementById("bard6").style.width = data3.barD6 + "%";
  }
  if (data3.barD7 !== null) {
    document.getElementById("bard7").style.width = data3.barD7 + "%";
  }
  if (data3.barD8 !== null) {
    document.getElementById("bard8").style.width = data3.barD8 + "%";
  }

  //angles
  if (data3.angleD6 != null) {
    document.getElementById("angd6").innerText = data3.angleD6 + "°";
  }
  if (data3.angleD7 != null) {
    document.getElementById("angd7").innerText = data3.angleD7 + "°";
  }
  if (data3.angleD8 != null) {
    document.getElementById("angd8").innerText = data3.angleD8 + "°";
  }

  //3
  //Nadir commutator
  const data4 = dataArray[3];

  //lazers (on/off)
  if (data4.xd28On) {
    document.getElementById("xd28").innerText = "Lazer X\n\non (D28)";
  }
  if (data4.yd29On) {
    document.getElementById("yd29").innerText = "Lazer Y\n\non (D29)";
  }
  if (data4.zd30On) {
    document.getElementById("zd30").innerText = "Lazer Z\n\non (D30)";
  }

  //bars
  if (data4.barD9 !== null) {
    document.getElementById("bard9").style.width = data4.barD9 + "%";
  }
  if (data4.barD10 !== null) {
    document.getElementById("bard10").style.width = data4.barD10 + "%";
  }

  //angles
  if (data4.angleD9 != null) {
    document.getElementById("angd9").innerText = data4.angleD9 + "°";
  }
  if (data4.angleD10 != null) {
    document.getElementById("angd10").innerText = data4.angleD10 + "°";
  }

  //4
  //Zenit commutator
  const data5 = dataArray[4];

  //lazers (on/off)
  if (data5.xd31On) {
    document.getElementById("xd31").innerText = "Lazer X\n\non (D31)";
  }
  if (data5.yd32On) {
    document.getElementById("yd32").innerText = "Lazer Y\n\non (D32)";
  }
  if (data5.zd33On) {
    document.getElementById("zd33").innerText = "Lazer Z\n\non (D33)";
  }

  //bars
  if (data5.barD11 !== null) {
    document.getElementById("bard11").style.width = data5.barD11 + "%";
  }
  if (data5.barD12 !== null) {
    document.getElementById("bard12").style.width = data5.barD12 + "%";
  }

  //angles
  if (data5.angleD11 != null) {
    document.getElementById("angd11").innerText = data5.angleD11 + "°";
  }
  if (data5.angleD12 != null) {
    document.getElementById("angd12").innerText = data5.angleD12 + "°";
  }
}
