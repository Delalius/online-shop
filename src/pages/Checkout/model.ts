export type CheckoutForm = {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  address: string;
  comment: string;
  paymentMethod: "card" | "cash";
  deliveryMethod: "courier" | "pickup";
};

export type CheckoutField = keyof CheckoutForm;
export type FormErrors = Partial<Record<CheckoutField, string>>;

export const initialCheckoutForm: CheckoutForm = {
  fullName: "",
  phone: "",
  email: "",
  city: "",
  address: "",
  comment: "",
  paymentMethod: "card",
  deliveryMethod: "courier",
};

export const requiredCheckoutFields: CheckoutField[] = [
  "fullName",
  "phone",
  "email",
  "city",
  "address",
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+\d][\d\s()-]{8,}$/;

export const validateCheckoutForm = (form: CheckoutForm): FormErrors => {
  const errors: FormErrors = {};

  if (!form.fullName.trim()) {
    errors.fullName = "Введите имя и фамилию.";
  } else if (form.fullName.trim().length < 3) {
    errors.fullName = "Имя должно быть не короче 3 символов.";
  }

  if (!form.phone.trim()) {
    errors.phone = "Введите номер телефона.";
  } else if (!phonePattern.test(form.phone.trim())) {
    errors.phone = "Укажите телефон в корректном формате.";
  }

  if (!form.email.trim()) {
    errors.email = "Введите email.";
  } else if (!emailPattern.test(form.email.trim())) {
    errors.email = "Укажите email в формате name@example.com.";
  }

  if (!form.city.trim()) {
    errors.city = "Укажите город.";
  } else if (form.city.trim().length < 2) {
    errors.city = "Название города слишком короткое.";
  }

  if (!form.address.trim()) {
    errors.address = "Укажите адрес или отделение.";
  } else if (form.address.trim().length < 5) {
    errors.address = "Добавьте более точный адрес.";
  }

  return errors;
};

export const getCheckoutInputClassName = (hasError: boolean) =>
  `w-full rounded-xl border bg-white px-4 py-3 outline-none transition ${
    hasError
      ? "border-rose-400 focus:border-rose-500"
      : "border-slate-200 focus:border-sky-500"
  }`;
