export const DELETE_ACCOUNT_URL =
  "https://api.gocareer.co/auth/candidate/delete-account";

async function parseResponse(response) {
  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch {
    return {
      success: false,
      message: text || response.statusText || "Request failed",
    };
  }
}

export async function deleteCandidateAccount(phone) {
  const response = await fetch(DELETE_ACCOUNT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phone }),
  });

  const data = await parseResponse(response);
  if (!response.ok || data.success === false) {
    throw new Error(data.message || "Failed to delete account");
  }
  return data;
}
