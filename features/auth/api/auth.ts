export async function loginUser(data: any) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.email === "demo@nexus.com" && data.password === "Demo1234") {
        resolve({
          success: true,
          token: "mock-token-123",
          user: {
            id: "12345",
            email: data.email,
            name: "Oleksandr"
          }
        });
      } else if((data.email === "admin@nexus.com" && data.password === "Admin1234")){
        resolve({
          success: true,
          token: "mock-token-423",
          user: {
            id: "34567",
            email: data.email,
            name: "Admin"
          }
        });
      } 
      else {
        reject({
          success: false,
          message: "Invalid email or password"
        });
      }
      
      

    }, 1000);
  });
}

