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
    errors.fullName = "Enter your full name.";
  } else if (form.fullName.trim().length < 3) {
    errors.fullName = "Name must be at least 3 characters.";
  }

  if (!form.phone.trim()) {
    errors.phone = "Enter your phone number.";
  } else if (!phonePattern.test(form.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!form.email.trim()) {
    errors.email = "Enter your email.";
  } else if (!emailPattern.test(form.email.trim())) {
    errors.email = "Use the format name@example.com.";
  }

  if (!form.city.trim()) {
    errors.city = "Enter your city.";
  } else if (form.city.trim().length < 2) {
    errors.city = "City name is too short.";
  }

  if (!form.address.trim()) {
    errors.address = "Enter your address or pickup location.";
  } else if (form.address.trim().length < 5) {
    errors.address = "Add a more specific address.";
  }

  return errors;
};

export const getCheckoutInputClassName = (hasError: boolean) =>
  `w-full rounded-xl border bg-white px-4 py-3 outline-none transition ${
    hasError
      ? "border-rose-400 focus:border-rose-500"
      : "border-slate-200 focus:border-amber-700"
  }`;
