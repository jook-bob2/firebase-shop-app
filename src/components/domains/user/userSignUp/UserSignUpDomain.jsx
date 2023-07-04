import Input from '@src/components/atomics/atoms/Input';
import React, { useEffect, useState } from 'react';
import styles from '@styles/domains/user/user-sign-up.module.scss';
import classNames from 'classnames';
import Button from '@src/components/atomics/atoms/Button';
import { useUser } from '@src/core/store/providers/UserProvider';
import { useNavigate } from 'react-router-dom';
import { regExp } from '@src/helpers/regExp';
import { postUserSignUp } from '@src/core/api/user/userApi';

export default function UserSignUpDomain() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const { isUser, addUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isUser) {
      navigate(-1);
    }
  }, [isUser]);

  /**
   * @desc 회원가입
   */
  const onSubmitSignUp = async (e) => {
    e.preventDefault();

    if (validationCheck()) {
      try {
        const response = await postUserSignUp({
          email,
          password,
          name,
          role: 'user',
        });

        addUser(response);
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

  const validationCheck = () => {
    if (!name) {
      alert('이름을 입력해 주세요.');
      return false;
    }
    if (!regExp.name(name)) {
      alert('이름을 한글 2~4자 이내로 입력해 주세요.');
      return false;
    }
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
    if (!checkPassword) {
      alert('비밀번호 확인을 입력해 주세요.');
      return false;
    }
    if (password !== checkPassword) {
      alert('비밀번호가 일치하지 않습니다.');
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
        <form onSubmit={onSubmitSignUp}>
          <div className={styles.row_wrap}>
            <div className={classNames(styles.ttl, styles.after)}>이름</div>
            <div className={styles.input_wrap}>
              <Input
                placeholder="이름을 입력해 주세요."
                className={styles.input}
                maxLength={4}
                value={name}
                setValue={setName}
              />
            </div>
          </div>
          <div className={styles.row_wrap}>
            <div className={classNames(styles.ttl, styles.after)}>이메일</div>
            <div className={styles.input_wrap}>
              <Input
                placeholder="이메일을 입력해 주세요."
                className={styles.input}
                maxLength={30}
                value={email}
                setValue={setEmail}
              />
            </div>
          </div>
          <div className={styles.row_wrap}>
            <div className={classNames(styles.ttl, styles.after)}>비밀번호</div>
            <div className={styles.input_wrap}>
              <Input
                placeholder="비밀번호를 입력해 주세요."
                className={styles.input}
                type={'password'}
                maxLength={16}
                autoComplete={'new-password'}
                value={password}
                setValue={setPassword}
              />
            </div>
          </div>
          <div className={styles.row_wrap}>
            <div className={classNames(styles.ttl, styles.after)}>
              비밀번호 확인
            </div>
            <div className={styles.input_wrap}>
              <Input
                placeholder="비밀번호 확인을 입력해 주세요."
                className={styles.input}
                type={'password'}
                maxLength={16}
                autoComplete={'new-password'}
                value={checkPassword}
                setValue={setCheckPassword}
              />
            </div>
          </div>
          {/* <div className={styles.row_wrap}>
          <div className={styles.ttl}>생년월일</div>
          <div className={styles.input_wrap}>
            <Input
              placeholder="생년월일을 입력해 주세요."
              className={styles.input}
            />
          </div>
        </div> */}
          {/* <div className={styles.row_wrap}>
          <div className={classNames(styles.ttl, styles.after)}>주소</div>
          <div className={classNames(styles.input_wrap, styles.input_ad)}>
            <div className={styles.ad_box}>
              <Input className={styles.input} wrapperClass={styles.add_input} />
              <button>우편번호 찾기</button>
            </div>
            <Input className={styles.input} />
            <Input className={styles.input} />
          </div>
        </div> */}

          {/* <div className={styles.row_wrap}>
          <div className={classNames(styles.ttl, styles.after)}>전화번호</div>
          <div className={styles.input_wrap}>
            <Input
              placeholder="전화번호를 입력해 주세요."
              className={styles.input}
            />
          </div>
        </div> */}

          <Button
            type="submit"
            wrapperClass={styles.btn_wrap}
            className={styles.btn}
          >
            회원가입
          </Button>
        </form>
      </article>
    </section>
  );
}
