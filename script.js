// EXERCISE 01

const calcula_media = (x, y) => {
  let average = (x + y) / 2;
  return average;
};

const calcula_produto = (x, y) => {
  let multiplication = x * y;
  return multiplication;
};

let n1 = null;
let n2 = null;

let average = null;
let multiplication = null;

let first_number = document.getElementById("first_number");
first_number.addEventListener("keyup", (e) => {
  n1 = parseInt(e.target.value);
});

let second_number = document.getElementById("second_number");
second_number.addEventListener("keyup", (e) => {
  n2 = parseInt(e.target.value);
});

//keyup (aperta a tecla pressionando - keydown e quando sobe é keyup)

let button_average = document.getElementById("calcula_media");
button_average.addEventListener("click", () => {
  average = calcula_media(n1, n2);
  multiplication = calcula_produto(n1, n2);
  let average_result = document.getElementById("average");
  let multiplication_result = document.getElementById("multiplication");
  average_result.textContent = `The average is: ${average}`;
  multiplication_result.textContent = `The multiplication is: ${multiplication}`;
});

let button_delete = document.getElementById("delete");
button_delete.addEventListener("click", () => {
  first_number.value = "";
  second_number.value = "";
  let average_result = document.getElementById("average");
  let multiplication_result = document.getElementById("multiplication");
  average_result.textContent = "";
  multiplication_result.textContent = "";
});

// EXERCISE 02

const calcula_media_ponderada = (w1, w2, g1, g2) => {
  let weighted_average = (w1 * g1 + w2 * g2) / (w1 + w2);
  weighted_average = weighted_average.toFixed(1);
  return weighted_average;
};

let register = null;
let weight01 = null;
let weight02 = null;
let grade01 = null;
let grade02 = null;

let weightedAverage = null;

let weight1 = document.getElementById("weight1");
weight1.addEventListener("keyup", (e) => {
  weight01 = parseInt(e.target.value);
});

let weight2 = document.getElementById("weight2");
weight2.addEventListener("keyup", (e) => {
  weight02 = parseInt(e.target.value);
});

let grade1 = document.getElementById("grade1");
grade1.addEventListener("keyup", (e) => {
  grade01 = parseFloat(e.target.value);
});

let grade2 = document.getElementById("grade2");
grade2.addEventListener("keyup", (e) => {
  grade02 = parseFloat(e.target.value);
});

let register01 = document.getElementById("register-student");
register01.addEventListener("keyup", (e) => {
  register = parseInt(e.target.value);
});

let button_waverage = document.getElementById("calcula_media_ponderada");
button_waverage.addEventListener("click", () => {
  weightedAverage = calcula_media_ponderada(
    weight01,
    weight02,
    grade01,
    grade02
  );
  let register_result = document.getElementById("register");
  register_result.textContent = `Student register number: ${register}`;
  let weightedAverage_result = document.getElementById("weightedAverage");
  weightedAverage_result.textContent = `The weighted average is: ${weightedAverage}`;
});

let button_delete1 = document.getElementById("delete1");
button_delete1.addEventListener("click", () => {
  weight1.value = "";
  weight2.value = "";
  grade1.value = "";
  grade2.value = "";
  register01.value = "";
  let register_result = document.getElementById("register");
  let weightedAverage_result = document.getElementById("weightedAverage");
  register_result.textContent = "";
  weightedAverage_result.textContent = "";
});

// EXERCISE 03

const calcula_media_ponderada2 = (w1, w2, g1, g2) => {
  let w_a = (calcula_produto(w1, g1) + calcula_produto(w2, g2)) / (w1 + w2);
  w_a = w_a.toFixed(1);
  return w_a;
};

let registerX = null;
let w1 = null;
let w2 = null;
let g1 = null;
let g2 = null;

let weighted_average = null;

let weight_1 = document.getElementById("weight01");
weight_1.addEventListener("keyup", (e) => {
  w1 = parseInt(e.target.value);
});

let weight_2 = document.getElementById("weight02");
weight_2.addEventListener("keyup", (e) => {
  w2 = parseInt(e.target.value);
});

let grade_1 = document.getElementById("grade01");
grade_1.addEventListener("keyup", (e) => {
  g1 = parseFloat(e.target.value);
});

let grade_2 = document.getElementById("grade02");
grade_2.addEventListener("keyup", (e) => {
  g2 = parseFloat(e.target.value);
});

let registerXX = document.getElementById("register-student01");
registerXX.addEventListener("keyup", (e) => {
  registerX = parseInt(e.target.value);
});

let buttonWaverage = document.getElementById("calcula_media_ponderada2");
buttonWaverage.addEventListener("click", () => {
  weighted_average = calcula_media_ponderada2(w1, w2, g1, g2);
  let register_result01 = document.getElementById("register01");
  register_result01.textContent = `The student register number is: ${registerX}`;
  let weighted_average_result = document.getElementById("weighted-average");
  weighted_average_result.textContent = `The weighted average is: ${weighted_average}`;
});

let button_delete2 = document.getElementById("delete2");
button_delete2.addEventListener("click", () => {
  weight_1.value = "";
  weight_2.value = "";
  grade_1.value = "";
  grade_2.value = "";
  registerXX.value = "";
  let register_result01 = document.getElementById("register01");
  let weighted_average_result = document.getElementById("weighted-average");
  register_result01.textContent = "";
  weighted_average_result.textContent = "";
});

// EXERCISE 04

const calcula_media_ponderada3 = (w1, w2, g1s1, g2s1, g1s2, g2s2) => {
  let w_a =
    (calcula_produto(w1, g1s1) +
      calcula_produto(w1, g1s2) +
      calcula_produto(w2, g2s1) +
      calcula_produto(w2, g2s2)) /
    (2 * (w1 + w2));
  w_a = w_a.toFixed(1);
  return w_a;
};

let a = null;
let b = null;
let g1s1 = null;
let g2s1 = null;
let g1s2 = null;
let g2s2 = null;

let wa = null;

let weight001 = document.getElementById("weight001");
weight001.addEventListener("keyup", (e) => {
  a = parseInt(e.target.value);
});

let weight002 = document.getElementById("weight002");
weight002.addEventListener("keyup", (e) => {
  b = parseInt(e.target.value);
});

let grade001 = document.getElementById("grade001");
grade001.addEventListener("keyup", (e) => {
  g1s1 = parseFloat(e.target.value);
});

let grade002 = document.getElementById("grade002");
grade002.addEventListener("keyup", (e) => {
  g2s1 = parseFloat(e.target.value);
});

let grade003 = document.getElementById("grade003");
grade003.addEventListener("keyup", (e) => {
  g1s2 = parseFloat(e.target.value);
});

let grade004 = document.getElementById("grade004");
grade004.addEventListener("keyup", (e) => {
  g2s2 = parseFloat(e.target.value);
});

let button_wa = document.getElementById("calcula_wa");
button_wa.addEventListener("click", () => {
  wa = calcula_media_ponderada3(a, b, g1s1, g2s1, g1s2, g2s2);
  let wa_result = document.getElementById("weighted-average01");
  wa_result.textContent = `The weighted average of the class is: ${wa}`;
});

let button_delete3 = document.getElementById("delete3");
button_delete3.addEventListener("click", () => {
  weight001.value = "";
  weight002.value = "";
  grade001.value = "";
  grade002.value = "";
  grade003.value = "";
  grade004.value = "";
  let wa_result = document.getElementById("weighted-average01");
  wa_result.textContent = "";
});

// EXERCISE 5

const total_price = (price) => {
  let total = 1.1 * price;
  total = total.toFixed(2);
  return total;
};

let price = null;

let price01 = document.getElementById("price");
price01.addEventListener("keyup", (e) => {
  price = parseFloat(e.target.value);
});

let button_price = document.getElementById("show_price");
button_price.addEventListener("click", () => {
  let final_price = total_price(price);
  let price_result = document.getElementById("price_result");
  price_result.textContent = `The final price is: ${final_price}`;
});

let button_delete4 = document.getElementById("delete4");
button_delete4.addEventListener("click", () => {
  price01.value = "";

  let price_result = document.getElementById("price_result");
  price_result.textContent = "";
});

// EXERCISE 6

const inss = (salary) => {
  let inss_tax = 0.1 * salary;
  return inss_tax;
};

const fgts = (salary) => {
  let fgts_tax = 0.08 * salary;
  return fgts_tax;
};

const healthcare_plan = (salary) => {
  return 100;
};

const final_salary = (salary) => {
  let final_s = salary - inss(salary) - fgts(salary) - healthcare_plan(salary);
  return final_s;
};

let salaryInput = document.getElementById("salary");

let calculateButton = document.getElementById("calculateButton");

let salary = null;
let inssValue = null;
let fgtsValue = null;
let healthCareValue = null;

salaryInput.addEventListener("keyup", (e) => {
  salary = e.target.value;
});

calculateButton.addEventListener("click", () => {
  if (salary) {
    inssValue = parseFloat(inss(salary));
    fgtsValue = parseFloat(fgts(salary));
    healthCareValue = parseFloat(healthcare_plan(salary));

    let inssResult = document.getElementById("inssResult");
    let fgtsResult = document.getElementById("fgtsResult");
    let healthCareResult = document.getElementById("healthCareResult");

    inssResult.textContent = `INSS tax: R$ ${inssValue}`;
    fgtsResult.textContent = `My FGTS: R$ ${fgtsValue}`;
    healthCareResult.textContent = `Health Care Value: R$ ${healthCareValue}`;
  }
});

let button_delete5 = document.getElementById("delete5");
button_delete5.addEventListener("click", () => {
  inssValue.value = "";
  fgtsValue.value = "";
  healthCareValue.value = "";
  salaryInput.value = "";

  let inssResult = document.getElementById("inssResult");
  let fgtsResult = document.getElementById("fgtsResult");
  let healthCareResult = document.getElementById("healthCareResult");

  inssResult.textContent = "";
  fgtsResult.textContent = "";
  healthCareResult.textContent = "";
});
