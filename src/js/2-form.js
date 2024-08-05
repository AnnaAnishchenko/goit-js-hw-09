// Знаходимо батька-форму
const feedbackFormEl = document.querySelector('.feedback-form');
// console.log(feedbackFormEl);

// створюємо об'єкт formData з початковими значеннями
let formData = {
  email: '',
  message: '',
};

// Зчитуємо інформацію
const fillFormsFields = () => {
  // зчитуємо данні з localStorage
  const formDataFromLS = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  // перевірка наявності інформації
  if (formDataFromLS === null) {
    return;
  }
  formData = formDataFromLS;

  // перебираємо об'єкт, записуємо отримані значення
  for (const key in formDataFromLS) {
    if (formDataFromLS.hasOwnProperty(key)) {
      feedbackFormEl.elements[key].value = formDataFromLS[key];
    }
  }
};

fillFormsFields();

// Подія input на форму
const feedbackFormFill = event => {
  // записуємо значення вводу до змінної
  const fieldValue = event.target.value;
  // записуємо значення до formData
  const fieldName = event.target.name;

  formData[fieldName] = fieldValue;
  //   console.log(formData);

  //відправляємо об'єкт в localStorage з перетворенням в JSON рядок
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

// Делегування події input
feedbackFormEl.addEventListener('input', feedbackFormFill);

// події submit для перевірки заповнення форми та відправки даних
const feedbackFormSubmit = event => {
  event.preventDefault();

  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  formData = {
    email: '',
    message: '',
  };

  feedbackFormEl.reset();
};
// делегування перевірки даних події submit на форму
feedbackFormEl.addEventListener('submit', feedbackFormSubmit);
