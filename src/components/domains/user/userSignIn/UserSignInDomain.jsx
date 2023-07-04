import React, { useState, useEffect } from 'react';
import Button from '@src/components/atomics/atoms/Button';
import Input from '@src/components/atomics/atoms/Input';
import styles from '@styles/domains/user/user-sign-in.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { regExp } from '@src/helpers/regExp';
import { postUserSignIn } from '@src/core/api/user/userApi';
import { useUser } from '@src/core/store/providers/UserProvider';

export default function UserSignInDomain() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isUser, addUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isUser) {
      navigate(-1);
    }
  }, [isUser]);

  /**
   * @desc 로그인 API Call
   */
  const onSubmitSignIn = async (e) => {
    e.preventDefault();

    if (validationCheck()) {
      try {
        const response = await postUserSignIn({
          email,
          password,
        });

        addUser({ ...response });
        navigate('/');
      } catch (err) {
        switch (err.code) {
          case 'auth/weak-password':
            alert('비밀번호는 8 ~ 16자 또는 영문과 숫자로 조합 되어야 합니다.');
            break;
          case 'auth/invalid-email':
            alert('잘못된 이메일 주소입니다.');
            break;
          case 'auth/email-already-in-use':
            alert('이미 가입되어 있는 계정입니다.');
            break;
          case 'auth/user-not-found':
            alert('회원 정보가 없습니다.');
            break;
          case 'auth/wrong-password':
            alert('이메일/비밀번호를 다시 확인해 주세요.');
            break;
        }
      }
    }
  };

  /**
   * @desc validation ncheck
   * @returns
   */
  const validationCheck = () => {
    if (!email) {
      alert('이메일을 입력해 주세요.');
      return false;
    }
    if (!regExp.email(email)) {
      alert('이메일 형식이 옳바르지 않습니다.');
      return false;
    }
    if (!password) {
      alert('비밀번호를 입력해 주세요.');
      return false;
    }
    if (!regExp.password(password)) {
      alert('비밀번호는 8 ~ 16자 또는 영문과 숫자로 조합 되어야 합니다.');
      return false;
    }

    return true;
  };

  if (isUser) {
    return <></>;
  }

  return (
    <section>
      <article className={styles.art}>
        <form onSubmit={(e) => onSubmitSignIn(e)}>
          <div className={styles.input_wrap}>
            <Input
              placeholder="이메일를 입력해 주세요."
              className={styles.input}
              maxLength={30}
              value={email}
              setValue={setEmail}
            />
          </div>
          <div className={styles.input_wrap}>
            <Input
              placeholder="비밀번호를 입력해 주세요."
              className={styles.input}
              type={'password'}
              maxLength={16}
              value={password}
              setValue={setPassword}
            />
          </div>
          <div className={styles.wrap}>
            <Link to={{ pathname: '/user/sign-up' }}>
              <span>회원가입</span>
            </Link>
            <span>아이디/비밀번호 찾기</span>
          </div>
          <Button
            type={'submit'}
            wrapperClass={styles.btn_wrap}
            className={styles.btn}
          >
            로그인
          </Button>
        </form>
      </article>
    </section>
  );
}
