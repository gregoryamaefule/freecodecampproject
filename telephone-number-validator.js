function telephoneCheck(str) {
  const telRegex = /^(1){0,1}\s{0,1}-{0,1}(\d{3}){1}\s{0,1}-{0,1}(\d{3}){1}\s{0,1}-{0,1}(\d{4}){1}$/ig
  const telRegex1 = /^(1){0,1}\s{0,1}-{0,1}(\({1}\d{3}\){1}){1}\s{0,1}-{0,1}(\d{3}){1}\s{0,1}-{0,1}(\d{4}){1}$/ig
  return telRegex.test(str) || telRegex1.test(str);
}

telephoneCheck("555-555-5555");