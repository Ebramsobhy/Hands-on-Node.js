const passwords = [
    "Pass123!",
    "krtprav",
    "12345678",
    "P@ssword",
    "Abcdefgh1"
  ];
  
const rules = [
    { regex: /.{8,}/, message: "Must be at least 8 characters long" },
    { regex: /[A-Z]/, message: "Must contain at least one uppercase letter" },
    { regex: /[a-z]/, message: "Must contain at least one lowercase letter" },
    { regex: /\d/, message: "Must contain at least one number" },
    { regex: /[@$!%*?&]/, message: "Must contain at least one special character (@$!%*?&)" }
];
  
passwords.forEach(password => {
    const failedRules = rules.filter(rule => !rule.regex.test(password));
  
    if (failedRules.length === 0) {
      console.log(`"${password}" is valid.`);
    } else {
      console.log(`"${password}" is invalid.`);
      failedRules.forEach(rule => console.log(`   - ${rule.message}`));
    }
});