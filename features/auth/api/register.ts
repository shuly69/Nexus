export async function registerUser(data: any) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ success: true, userId: "12345" });
      // reject({ success: false, message: "Email already exists" });
    }, 1200);
  });
}

