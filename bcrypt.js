const bcrypt = require("bcrypt");

const demo = async () => {
  // hash when you register
  const hashedPassword = await bcrypt.hash("correcthorse", 10);
  console.log(hashedPassword);

  // compare when you log in
  console.log(
    "Original password succeeds?",
    await bcrypt.compare("correcthorse", hashedPassword)
  );

  // compare when you log in
  console.log(
    "Different password succeeds?",
    await bcrypt.compare("batterystaple", hashedPassword)
  );
};

demo();
