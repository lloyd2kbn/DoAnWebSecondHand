import React from 'react'
import SearchProduct from '../Search/SearchProduct'
import { useTranslation } from 'react-i18next';
function NavBelowHeader() {
  const { t, i18n } = useTranslation();
  return (
<section className="hero hero-normal">
  <div className="container">
    <div className="row">
      <div className="col-lg-3">
        <div className="hero__categories">
          <div className="hero__categories__all">
            <i className="fa fa-bars" />
            <span>{t('navHeader.categories')}</span>
          </div>
          <ul>
            <li><a href="#">{t('navHeader.accessories')}</a></li>
            <li><a href="#">{t('navHeader.outerwear')}</a></li>
            <li><a href="#">{t('navHeader.tops')}</a></li>
            <li><a href="#">{t('navHeader.bottoms')}</a></li>
            <li><a href="#">{t('navHeader.footwear')}</a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-9">
        <div className="hero__search">
         <SearchProduct/>
          <div className="hero__search__phone">
            <div className="hero__search__phone__icon">
              <i className="fa fa-phone" />
            </div>
            <div className="hero__search__phone__text">
              <h5>+84 395956546</h5>
              <span> {t('navHeader.support')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default NavBelowHeader