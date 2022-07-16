import React, { useEffect, useState, useRef } from "react";
import { doGet, doPost } from "../../../utils/api/api";
import HeadlessTippy from "@tippyjs/react/headless";

import styles from "./SearchProduct.module.scss";
import Wrapper from "../Popper";
import ProductItem from "../ProductItem/ProductItem";
import { useDebounce } from "../../../Hooks";
import { useTranslation } from "react-i18next";

function SearchProduct() {
  const { t, i18n } = useTranslation();
  const inputRef = useRef();
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  // console.log(searchResult)
  const useBounce = useDebounce(searchValue, 700);
  useEffect(() => {
    if (!searchValue) {
      setSearchResult([]);
      return;
    }
    setLoading(true);
    (async () => {
      try {
        const { data } = await doGet(
          `product/ShowAndsearch?searchValue=${searchValue}`
        );
        console.log(data.data.products);
        setSearchResult(data.data.products);
        setLoading(false);
      } catch (error) {
        console.log("lỗi search" + error);
      }
    })();
  }, [useBounce]);
  const handleSearch = () => {
    console.log("áhdakhdashd");
  };
  const handleHideResult = () => {
    setShowResult(false);
  };
  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };
  return (
    <div>
      <HeadlessTippy
        placement="bottom"
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={styles["search-result"]} tabIndex="-1" {...attrs}>
            <Wrapper>
              <h6 style={{ marginLeft: "25px" }}>{t("product")} </h6>
              {searchResult.map((result) => (
                <ProductItem key={result.id} data={result} />
              ))}
            </Wrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className="hero__search__form">
          <div className={styles.wrapper}>
            <input
              ref={inputRef}
              value={searchValue}
              onChange={handleChange}
              className={styles.valueInput}
              placeholder={t("search.placehoder")}
              onFocus={() => setShowResult(true)}
            />
            {!!searchValue && !loading && (
              <button
                onClick={() => {
                  setSearchValue("");
                  setSearchResult([]);
                  inputRef.current.focus();
                }}
                className={styles.clear}
              >
                <i className="fa-solid fa-circle-xmark"></i>
              </button>
            )}

            {loading && (
              <button className={styles.loading}>
                <i className="fa-solid fa-spinner"></i>
              </button>
            )}
            <button onClick={handleSearch} type="submit" className="site-btn">
              {t("search.button")}
            </button>
          </div>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default SearchProduct;
