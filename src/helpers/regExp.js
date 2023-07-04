export const regExp = {
  email: (value) => {
    // 이메일 정규식
    return /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(
      value,
    );
  },
  password: (value) => {
    // 영문 숫자 조합 8~16자
    return /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/.test(value);
  },
  phone: (value) => {
    // 휴대폰 번호 체크
    return /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/.test(value);
  },
  name: (value) => {
    // 한글 이름 2~4자 이내
    return /^[가-힣]{2,4}$/.test(value);
  },
};
