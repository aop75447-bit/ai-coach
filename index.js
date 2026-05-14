
<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Healthy Body AI</title>

  <style>
    body {
      font-family: Arial, sans-serif;
      background: #0f172a;
      color: white;
      margin: 0;
      padding: 0;
      text-align: center;
    }

    header {
      background: #1e293b;
      padding: 15px;
      font-size: 22px;
      font-weight: bold;
    }

    .container {
      padding: 20px;
    }

    input, button {
      width: 90%;
      padding: 12px;
      margin: 10px 0;
      border-radius: 10px;
      border: none;
      font-size: 16px;
    }

    input {
      background: #334155;
      color: white;
    }

    button {
      background: #22c55e;
      color: black;
      font-weight: bold;
      cursor: pointer;
    }

    .box {
      margin-top: 20px;
      padding: 15px;
      background: #1e293b;
      border-radius: 12px;
    }
  </style>
</head>

<body>

<header>Healthy Body AI 💪</header>

<div class="container">

  <h3>ادخل بياناتك</h3>

  <input type="number" id="weight" placeholder="الوزن (كغم)">
  <input type="number" id="height" placeholder="الطول (سم)">
  <input type="number" id="age" placeholder="العمر">

  <button onclick="generatePlan()">إنشاء خطة</button>

  <div class="box" id="result">
    النتيجة تظهر هنا...
  </div>

</div>

<script>
function generatePlan() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let age = document.getElementById("age").value;

  if (!weight || !height || !age) {
    document.getElementById("result").innerHTML = "⚠️ رجاءً املأ كل الحقول";
    return;
  }

  let bmi = weight / ((height/100) * (height/100));

  let message = "";

  if (bmi < 18.5) {
    message = "جسمك نحيف، تحتاج تضخيم + سعرات عالية 🍗";
  } else if (bmi < 25) {
    message = "جسمك طبيعي، استمر على التمرين 💪";
  } else {
    message = "تحتاج تنشيف ونظام غذائي مضبوط 🔥";
  }

  document.getElementById("result").innerHTML =
    "BMI: " + bmi.toFixed(1) + "<br><br>" + message;
}
</script>

</body>
</html>
