<template>
  <div id="app">
    <div class="logo-block">
      <img alt="logo" src="./assets/logo.png" id="top-logo" />
    </div>
    <img
      alt="popper-left"
      src="./assets/popper.png"
      id="popper-left"
      class="popper"
    />
    <img
      alt="popper-left"
      src="./assets/popper.png"
      id="popper-right"
      class="popper"
    />
    <div class="coupon-block">
      <div class="text">
        <div class="fan-title">粉絲唯一優惠</div>
        <div class="price-title">$18,999</div>
      </div>
      <div class="img">
        <div class="circle"><span>贈</span></div>
        <img alt="coupon-pc" src="./assets/coupon_pc.png" id="coupon_pc" />
      </div>
    </div>
    <div class="product-block">
      <div class="product-img-box">
        <img alt="馬桶可掀扶手" src="./assets/馬桶可掀扶手.png" />
        <div class="product-label">馬桶可掀扶手*1</div>
      </div>
      <div class="product-img-box">
        <img alt="垂直扶手" src="./assets/垂直扶手.png" />
        <div class="product-label">入口垂直扶手*2</div>
      </div>
      <div class="product-img-box">
        <img alt="水平扶手" src="./assets/水平扶手.png" />
        <div class="product-label">牆面水平扶手*1</div>
      </div>
      <div class="product-img-box">
        <img alt="沐浴L扶手" src="./assets/沐浴L扶手.png" />
        <div class="product-label">沐浴L扶手*1</div>
      </div>
      <div class="product-img-box">
        <img alt="地板止滑" src="./assets/地板止滑.png" />
        <div class="product-label">地板止滑*1</div>
      </div>
      <div class="explanation">
        <div class="title">含以上扶手安裝</div>
        <div class="price">價值$25,000</div>
      </div>
    </div>
    <div class="info-block">
      <img
        alt="open-bracket"
        src="./assets/open-bracket.png"
        class="open-bracket left"
      />
      <div class="info left">
        <div class="hight-light">你不知道的三大優勢</div>
        <div class="detail">抗菌防滑扶手，台灣製造，3年保固</div>
        <img alt="plus" src="./assets/plus.png" class="plus" />
        <div class="detail">觸感不冰冷，兼具美觀與舒適</div>
        <img alt="plus" src="./assets/plus.png" class="plus" />
        <div class="detail">通過SGS拉力測試100公斤</div>
      </div>
      <div class="info right">
        <div class="list">
          <div class="header">
            <img
              alt="sticky-note"
              src="./assets/sticky-note.png"
              class="sticky-note"
            />
            <span>施工三大保障</span>
          </div>
          <div class="content">
            <div>1、壁體探測器，降低鑽破水管的危險</div>
            <div>2、專業磁磚鑽尾，保證不會造成磁磚破裂</div>
            <div>3、鑽孔搭配集塵設備，避免粉塵飄散</div>
          </div>
        </div>
        <div class="list">
          <div class="header">
            <img alt="warning" src="./assets/warning.png" class="warning" />
            <span>注意事項</span>
          </div>
          <div class="content">
            <div>
              本專案扶手組合若因環境因素無法安裝，可擇處使用，或更換等值他款扶手以便替代。
            </div>
          </div>
        </div>
      </div>
      <img
        alt="open-bracket"
        src="./assets/open-bracket.png"
        class="open-bracket right"
      />
    </div>
    <div class="form-block">
      <div class="col">
        <div class="form-control">
          <div class="label">姓名</div>
          <input id="input-name" type="text" />
        </div>
      </div>
      <div class="col">
        <div class="form-control">
          <div class="label">電話</div>
          <input id="input-phone" type="text" />
        </div>
      </div>
      <div class="col">
        <div class="form-control">
          <div class="label">Email</div>
          <input id="input-mail" type="text" />
        </div>
      </div>
      <div class="col">
        <div class="form-control">
          <div class="label">LineID</div>
          <input id="input-line" type="text" />
        </div>
      </div>
      <div class="col">
        <div class="form-control">
          <div class="label">聯絡電話</div>
          <input id="input-contact-phone" type="text" />
        </div>
      </div>
      <div class="col">
        <div class="form-control">
          <div class="label">居住縣市</div>
          <input id="input-city" type="text" />
        </div>
      </div>
      <div class="address-row">
        <div class="form-control">
          <div class="label">地址</div>
          <input id="input-address" type="text" />
        </div>
      </div>
    </div>
    <div class="send-block">
      <button class="btn-send">送出</button>
    </div>
    <div class="footer">
      <div class="title">聯繫方式</div>
      <div class="type">
        <a>電話｜0971119930</a>
        <a class="social" href="https://lin.ee/EqSoyn9H">
          <img alt="line" src="./assets/line.png" />
          <span>@giantcare</span>
        </a>
        <a class="social" href="https://www.facebook.com/giantcare">
          <img alt="line" src="./assets/facebook.png" />
          <span>居安照護 Giant Care</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import "./styles/index.scss";
export default {
  name: "App",
};
</script>
