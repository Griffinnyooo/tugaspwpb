function hasil() {
  let suhu = document.getElementById("suhu").value;

  if (suhu >= 36.1 && suhu <= 37.2) {
    window.alert(`suhu tubuh anda normal (${suhu} C)`);
  } else if (suhu > 37.2 && suhu <= 42.0) {
    window.alert(`suhu tubuh anda demam (${suhu} C)`);
  } else {
    window.alert(`Suhu tubuh anda tidak ter deteksi`);
  }
}
