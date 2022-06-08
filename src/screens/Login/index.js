import styles from "./style.module.css"
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate  } from "react-router-dom";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [isEmailValid, setEmailValid] = useState(false);
  let [isPasswordValid, setPasswordValid] = useState(false);
  let [isUserExist, setUserExist] = useState("");
  let [isAllValid, setAllValid] = useState("");
  let [loading, setLoading] = useState(false);

  const router = useNavigate();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1280px)" });

  useEffect(() => {
    if (isUserExist === "exists") {
      router("/");
    }
  }, [isUserExist]);

  const handleEmail = (e) => {
    const value = e.target.value;
    const valueWithNoSpace = value.includes(" ") ? false : true;
    const isThereaddress = value.split("@")[0] ? true : false;
    const justOneAt = value.match(/@/g)?.length === 1 ? true : false;
    const isThereDomain = value.split("@")[1]?.split(".")[0] ? true : false;
    const isThereTopLevelDomain = value.split(".")[1]?.length > 0 ? true : false;

    setEmail(value);
    isThereaddress && justOneAt && valueWithNoSpace && isThereDomain && isThereTopLevelDomain
      ? setEmailValid(true)
      : setEmailValid(false);
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    const minLength = 8;
    const maxLength = 14;
    const containsNumber = value.match(/[1-9]/) ? true : false;
    const containsLetter = value.match(/[a-zA-Z]/) ? true : false;

    setPassword(value);
    value.length >= minLength && value.length <= maxLength && containsLetter && containsNumber
      ? setPasswordValid(true)
      : setPasswordValid(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) {
      return;
    }

    if (isEmailValid && isPasswordValid) {
      setLoading(true);

      axios
        .post("http://108.136.240.248/api/v1/auth/login", { email, password })
        .then((response) => {
          setUserExist("exists");
          setAllValid("valid");
          setLoading(false);
          Cookies.set("token", response.data.data.token);
          console.log(response)
        })
        .catch((error) => {
          setUserExist("doesn't exist");
          setAllValid("valid");
          setLoading(false);
          console.log(error);
        });
    } else {
      setAllValid("not valid");
      setUserExist("");
    }
  };

  return (
    <section className={styles.container}>
      {isTabletOrMobile ? (
        <div className={styles.containerFormMobile}>
          <form
            className={styles.formMobile}
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <header className={styles.headerMobile}>
              <h1>Masuk</h1>
              {isUserExist === "doesn't exist" && (
                <p className={styles.validationAlertMobile}>Akun anda belum terdaftar.</p>
              )}

              {isAllValid === "not valid" && !isEmailValid && !isPasswordValid && (
                <p className={styles.validationAlertMobile}>
                  Masukkan Email dan Password dengan benar.
                </p>
              )}

              {isAllValid === "not valid" && !isEmailValid && isPasswordValid && (
                <p className={styles.validationAlertMobile}>Masukkan Email dengan benar.</p>
              )}

              {isAllValid === "not valid" && !isPasswordValid && isEmailValid && (
                <p className={styles.validationAlertMobile}>Masukkan Password dengan benar.</p>
              )}
            </header>

            <label htmlFor="email" className={styles.emailLabelMobile}>
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Email"
              className={styles.emailMobile}
              value={email}
              onChange={(e) => {
                handleEmail(e);
              }}
            />

            <label htmlFor="password" className={styles.passwordLabelMobile}>
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className={styles.passwordMobile}
              value={password}
              onChange={(e) => {
                handlePassword(e);
              }}
            />

            <button
              type="submit"
              className={`${styles.buttonMobile} ${loading && styles.buttonUnable}`}
            >
              Masuk
            </button>
          </form>

          <p className={styles.containerToRegisterMobile}>
            Belum memiliki akun ?{" "}
            <Link to="/register">
              <a>Daftar di sini</a>
            </Link>
          </p>
        </div>
      ) : (
        <>
          <img src="/login/bg.svg" alt="login-photo" />
          <form
            className={styles.form}
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <h1 className={styles.title}>Masuk Akun</h1>
            {isUserExist === "doesn't exist" && (
              <p className={styles.validationAlert}>Akun anda belum terdaftar.</p>
            )}

            {isAllValid === "not valid" && !isEmailValid && !isPasswordValid && (
              <p className={styles.validationAlert}>Masukkan Email dan Password dengan benar.</p>
            )}

            {isAllValid === "not valid" && !isEmailValid && isPasswordValid && (
              <p className={styles.validationAlert}>Masukkan Email dengan benar.</p>
            )}

            {isAllValid === "not valid" && !isPasswordValid && isEmailValid && (
              <p className={styles.validationAlert}>Masukkan Password dengan benar.</p>
            )}

            <div className={styles.containerInput}>
              <label htmlFor="email" className={styles.emailLabel}>
                Email
              </label>
              <input
                type="text"
                className={styles.email}
                id="email"
                value={email}
                onChange={(e) => {
                  handleEmail(e);
                }}
              />

              <label htmlFor="password" className={styles.passwordLabel}>
                Password
              </label>
              <input
                type="password"
                className={styles.password}
                id="password"
                value={password}
                onChange={(e) => {
                  handlePassword(e);
                }}
              />
            </div>

            <button type="submit" className={`${styles.button} ${loading && styles.buttonUnable}`}>
              Masuk
            </button>

            <div className={styles.containerToRegister}>
              <p>Belum memiliki akun?</p>
              <Link to="/register">
                <a>Daftar di sini</a>
              </Link>
            </div>
          </form>
        </>
      )}
    </section>
  );
};

export default Login;
