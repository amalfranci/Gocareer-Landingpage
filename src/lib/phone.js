export function normalizePhoneInput(value) {
  const digits = value.replace(/\D/g, "");

  if (digits.startsWith("91") && digits.length > 2) {
    return digits.slice(0, 12);
  }

  return digits.slice(0, 10);
}

export function toApiPhone(value) {
  const digits = value.replace(/\D/g, "");

  if (digits.length === 12 && digits.startsWith("91")) {
    return digits.slice(2);
  }

  if (digits.length === 10) {
    return digits;
  }

  return digits;
}

export function isValidPhone(value) {
  const digits = value.replace(/\D/g, "");

  if (digits.length === 10) {
    return /^\d{10}$/.test(digits);
  }

  if (digits.length === 12 && digits.startsWith("91")) {
    return /^\d{10}$/.test(digits.slice(2));
  }

  return false;
}

export function formatPhoneDisplay(value) {
  const digits = value.replace(/\D/g, "");

  if (digits.startsWith("91") && digits.length > 2) {
    return digits.slice(2, 12);
  }

  return digits.slice(0, 10);
}
