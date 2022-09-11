let button = document.getElementById("btn");

button.addEventListener("click", () => {
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const result = document.getElementById("output");
  let height_status = false,
    weight_status = false;

  if (height === "" || isNaN(height) || height <= 0) {
    document.getElementById("height_error").innerHTML = "Harap berikan tinggi badan yang valid";
  } else {
    document.getElementById("height_error").innerHTML = "";
    height_status = true;
  }

  if (weight === "" || isNaN(weight) || weight <= 0) {
    document.getElementById("weight_error").innerHTML = "Harap berikan berat badan yang valid";
  } else {
    document.getElementById("weight_error").innerHTML = "";
    weight_status = true;
  }

  if (height_status && weight_status) {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.5) {
      result.innerHTML = "anda kekurangan berat badann, cara mengatasi nya dengan Tingkatkan menu makanan harian,makan makanan yang tinggi kandungan nutrisinya seperti sayur, buah,biji-bijian, atau ikan laut. : " + bmi;
    } else if (bmi >= 18.6 && bmi < 25.1) {
      result.innerHTML = "berat badan anda normal, cara membuat bb normal bertahan lama nya dengan tidur yang cukup, kurangi makan yang manis  : " + bmi;
    } else {
      result.innerHTML = "anda obesitas, anda kelebihan berat badan, cara mengatasi nya, membatasi tidur berlebihan, makan sayur dan buah buahan, olahraga 30 m3nit sekali : " + bmi;
    }
  } else {
    alert("isi dulu blokkk");
    result.innerHTML = "";
  }
});
