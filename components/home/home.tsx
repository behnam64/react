import React from "react";
import ArrowIcon from "../icons/arrow-icon";
import BellIcon from "../icons/bell-icon";
import QuestionIcon from "../icons/question-icon";
import ShoppingIcon from "../icons/shopping-icon";

export default function Home() {
  if(process.browser) {
    window.resizeTo(100, 100)
  }

  return (
    <div className="home">
      <div className="home__logo">
        <img className="home__logo--image" src="/images/paladium.png" alt="paladium" />
      </div>

      <p className="home__title home__title--small">به مرکز خرید پالادیوم</p>
      <p className="home__title home__title--large">خوش آمدید</p>

      <div className="list">
        <QuestionIcon className="list__icon"/>
        <div className="list__content">
          <p className="list__content--title">راهنمای طبقات</p>
          <p className="list__content--text">شما میتوانید راهنمای طبقات را مشاهده نمایید</p>
        </div>
        <ArrowIcon className="list__arrow"/>
      </div>
      <div className="list">
        <ShoppingIcon className="list__icon"/>
        <div className="list__content">
          <p className="list__content--title">پیشنهادات ویژه خرید</p>
          <p className="list__content--text">شما میتوانید پیشنهادات ویژه مرکز خرید را مشاهده نمایید</p>
        </div>
        <ArrowIcon className="list__arrow"/>
      </div>
      <div className="list">
        <BellIcon className="list__icon"/>
        <div className="list__content">
          <p className="list__content--title">سفارش غذا</p>
          <p className="list__content--text">شما میتوانید به صورت آنلاین از فودکورت سفارش ثبت کنید</p>
        </div>
        <ArrowIcon className="list__arrow"/>
      </div>
    </div>
  )
}