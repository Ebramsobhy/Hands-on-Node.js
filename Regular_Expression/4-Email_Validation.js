/*
Email Validation
  - Length must be between 10 and 50 characters.
  - Username must start with a letter.
  - Email must contain exactly one '@' symbol.
  - Username must have at least 5 characters.
  - Subdomains are allowed in the domain part (e.g., example.co.uk)
  - Top-level domain must have at least 2 letters (e.g., .com, .gov)
  - Only letters, numbers, dots (.), @, and hyphens (-) are allowed. No other special characters.
*/

let arr = [
    "a1.b@c2.d3efghijkl",
    "abram.sobhy@gamil.com",
    "abcdefghij.klmnop",
    "abcdef@ghi@j.klmnop",
    "12.a@cd.e",
    "sadsdasda@b.cdefghijklmnop",
    "a.b@c.d1234.56.7890",
    "a2.3.4b.cd@ef.ghijklmnop",
    "measdertyuuzasđasdkjhalskdjaslkdjsdasd@3c.4defghijklmn",
    "ahemd@cloud.com",
    "nermeen.s25@edu.com"
  ]

const emailRegex = /^(?=.{10,50}$)[a-zA-Z][a-zA-Z0-9]{4,}(?:\.[a-zA-Z0-9]+)?@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const rules = [
    { regex: e => e.length < 10 || e.length > 50, reason: "Length must be between 10 and 50 characters." },
    { regex: e => !/^[a-zA-Z]/.test(e), reason: "Username must start with a letter." },
    { regex: e => !/@/.test(e), reason: "Missing '@' symbol." },
    { regex: e => e.match(/@/g).length > 1, reason: "Multiple '@' symbols are not allowed." },
    { regex: e => !/[a-zA-Z0-9]{4,}/.test(e.split("@")[0]), reason: "Username must have at least 5 characters." },
    { regex: e => !/\.[a-zA-Z]{2,}$/.test(e), reason: "Invalid or too short top-level domain." },
    { regex: e => /[^a-zA-Z0-9.@-]/.test(e), reason: "Contains invalid characters." }
  ];
  
  for (let email of arr) {
    const failedRule = rules.find(r => r.regex(email));
    const result = emailRegex.test(email);
    const reason = failedRule ? failedRule.reason : "";
    console.log(`${email} → ${result ? "Valid" : "Invalid"} ${reason ? "- " + reason : ""}`);
}