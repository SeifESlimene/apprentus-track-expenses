import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="main-header">
        <svg
          width="210"
          height="110"
          viewBox="0 0 210 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="210" height="110" rx="11" fill="white" />
          <path
            d="M81.1926 65V63.5234L83.1028 63.1953V49.6836H79.2356L78.8957 52.0508H77.1614V47.9375H91.341V52.0508H89.6301L89.2785 49.6836H85.4114V63.1953L87.3215 63.5234V65H81.1926ZM92.3606 65V63.5234L94.2707 63.1953V54.1367L92.3606 53.8086V52.3203H96.5793V63.1953L98.4895 63.5234V65H92.3606ZM94.1535 49.1914V46.7188H96.5793V49.1914H94.1535ZM104.56 65.1992C103.622 65.1992 102.876 64.9258 102.322 64.3789C101.775 63.8242 101.501 62.9414 101.501 61.7305V54.0312H99.4973V52.3203H101.501V49.2617H103.81V52.3203H106.564V54.0312H103.81V61.7305C103.81 62.3398 103.931 62.7891 104.173 63.0781C104.415 63.3672 104.739 63.5117 105.146 63.5117C105.419 63.5117 105.724 63.4883 106.06 63.4414C106.396 63.3867 106.657 63.3398 106.845 63.3008L107.161 64.8125C106.825 64.9141 106.411 65.0039 105.919 65.082C105.435 65.1602 104.982 65.1992 104.56 65.1992ZM114.216 65.2461C112.841 65.2461 111.767 64.8047 110.993 63.9219C110.22 63.0391 109.833 61.6641 109.833 59.7969V54.1367L108.38 53.8086V52.3203H112.142V59.8203C112.142 61.1719 112.341 62.1016 112.739 62.6094C113.138 63.1172 113.759 63.3711 114.603 63.3711C115.423 63.3711 116.099 63.207 116.63 62.8789C117.169 62.543 117.575 62.0703 117.849 61.4609V54.1367L116.15 53.8086V52.3203H120.157V63.1953L121.611 63.5234V65H118.083L117.931 63.125C117.532 63.8047 117.017 64.3281 116.384 64.6953C115.759 65.0625 115.036 65.2461 114.216 65.2461ZM128.372 65.2461C127.521 65.2461 126.724 65.1602 125.982 64.9883C125.239 64.8164 124.45 64.5508 123.614 64.1914L123.591 61.1797H125.337L125.771 62.9961C126.599 63.3398 127.466 63.5117 128.372 63.5117C129.31 63.5117 129.982 63.332 130.388 62.9727C130.794 62.6133 130.997 62.168 130.997 61.6367C130.997 61.1367 130.79 60.7148 130.376 60.3711C129.97 60.0195 129.228 59.7227 128.15 59.4805C126.618 59.1289 125.489 58.6602 124.763 58.0742C124.044 57.4805 123.685 56.6914 123.685 55.707C123.685 55.0195 123.884 54.4062 124.282 53.8672C124.681 53.3203 125.236 52.8867 125.947 52.5664C126.657 52.2461 127.486 52.0859 128.431 52.0859C129.392 52.0859 130.212 52.1953 130.892 52.4141C131.579 52.6328 132.177 52.9258 132.685 53.293L132.802 56.1875H131.068L130.693 54.5C130.419 54.2969 130.095 54.1406 129.72 54.0312C129.345 53.9219 128.915 53.8672 128.431 53.8672C127.712 53.8672 127.126 54.0352 126.673 54.3711C126.228 54.707 126.005 55.1289 126.005 55.6367C126.005 55.9336 126.068 56.1914 126.193 56.4102C126.325 56.6289 126.575 56.8281 126.943 57.0078C127.31 57.1797 127.849 57.3516 128.56 57.5234C130.325 57.9375 131.556 58.4648 132.251 59.1055C132.954 59.7461 133.306 60.5352 133.306 61.4727C133.306 62.543 132.907 63.4414 132.111 64.168C131.322 64.8867 130.075 65.2461 128.372 65.2461ZM141.275 65V63.5234L143.185 63.1953V49.7539L141.275 49.4258V47.9375H147.404V49.4258L145.493 49.7539V63.2305H151.529L151.798 60.5352H153.568V65H141.275ZM159.849 65.1992C158.911 65.1992 158.165 64.9258 157.611 64.3789C157.064 63.8242 156.79 62.9414 156.79 61.7305V54.0312H154.786V52.3203H156.79V49.2617H159.099V52.3203H161.853V54.0312H159.099V61.7305C159.099 62.3398 159.22 62.7891 159.462 63.0781C159.704 63.3672 160.029 63.5117 160.435 63.5117C160.708 63.5117 161.013 63.4883 161.349 63.4414C161.685 63.3867 161.947 63.3398 162.134 63.3008L162.45 64.8125C162.114 64.9141 161.7 65.0039 161.208 65.082C160.724 65.1602 160.271 65.1992 159.849 65.1992ZM168.907 65.2461C167.876 65.2461 166.989 64.9922 166.247 64.4844C165.513 63.9688 164.95 63.2539 164.56 62.3398C164.169 61.4258 163.974 60.3594 163.974 59.1406V58.8945C163.974 57.5352 164.169 56.3438 164.56 55.3203C164.95 54.2969 165.517 53.5039 166.259 52.9414C167.001 52.3711 167.892 52.0859 168.931 52.0859C169.681 52.0859 170.341 52.2266 170.911 52.5078C171.489 52.7812 171.982 53.1797 172.388 53.7031V48.5352L170.478 48.207V46.7188H174.697V63.1953L176.607 63.5234V65H172.693L172.505 63.4883C171.661 64.6602 170.462 65.2461 168.907 65.2461ZM169.493 63.3711C170.181 63.3711 170.759 63.2148 171.228 62.9023C171.697 62.5898 172.083 62.1484 172.388 61.5781V55.6953C172.091 55.1641 171.704 54.7422 171.228 54.4297C170.751 54.1172 170.181 53.9609 169.517 53.9609C168.415 53.9609 167.599 54.418 167.068 55.332C166.544 56.2461 166.282 57.4336 166.282 58.8945V59.1406C166.282 60.4141 166.544 61.4375 167.068 62.2109C167.591 62.9844 168.4 63.3711 169.493 63.3711Z"
            fill="black"
          />
          <path
            d="M24.63 30.84H64.04V42.04H24.63V30.84ZM37.3 44.84H51.3V79H37.3V44.84Z"
            fill="#FF480E"
          />
        </svg>
        <ul>
          <li>
            <Link to="/list">
              <svg
                width="75"
                height="75"
                viewBox="0 0 75 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="75" height="75" rx="15" fill="white" />
                <path
                  d="M36.3383 27.4785L20.334 42.3076V58.3125C20.334 58.7269 20.4803 59.1244 20.7408 59.4174C21.0013 59.7104 21.3545 59.875 21.7229 59.875L31.4503 59.8467C31.8174 59.8446 32.1689 59.6791 32.4279 59.3863C32.6869 59.0935 32.8322 58.6973 32.8322 58.2842V48.9375C32.8322 48.5231 32.9786 48.1257 33.239 47.8327C33.4995 47.5396 33.8528 47.375 34.2211 47.375H39.7767C40.145 47.375 40.4983 47.5396 40.7588 47.8327C41.0192 48.1257 41.1656 48.5231 41.1656 48.9375V58.2774C41.165 58.483 41.2005 58.6867 41.27 58.8768C41.3396 59.067 41.4418 59.2398 41.5708 59.3854C41.6998 59.531 41.8531 59.6465 42.0219 59.7254C42.1907 59.8042 42.3717 59.8448 42.5544 59.8448L52.2784 59.875C52.6467 59.875 53 59.7104 53.2605 59.4174C53.5209 59.1244 53.6673 58.7269 53.6673 58.3125V42.2969L37.6664 27.4785C37.4783 27.3079 37.244 27.2149 37.0024 27.2149C36.7608 27.2149 36.5264 27.3079 36.3383 27.4785ZM61.6186 37.5576L54.3617 30.8281V17.3018C54.3617 16.991 54.252 16.6929 54.0566 16.4731C53.8613 16.2533 53.5963 16.1299 53.32 16.1299H48.4589C48.1827 16.1299 47.9177 16.2533 47.7224 16.4731C47.527 16.6929 47.4173 16.991 47.4173 17.3018V24.3926L39.6456 17.1992C38.8998 16.5088 37.9639 16.1313 36.998 16.1313C36.0322 16.1313 35.0963 16.5088 34.3505 17.1992L12.3774 37.5576C12.2719 37.6557 12.1847 37.7762 12.1206 37.9122C12.0565 38.0483 12.0169 38.1972 12.004 38.3505C11.9911 38.5037 12.0052 38.6583 12.0454 38.8055C12.0857 38.9526 12.1513 39.0894 12.2385 39.208L14.4521 42.2354C14.5391 42.3544 14.6461 42.4529 14.767 42.5254C14.8879 42.5978 15.0203 42.6427 15.1567 42.6575C15.293 42.6723 15.4306 42.6567 15.5616 42.6115C15.6926 42.5664 15.8143 42.4927 15.92 42.3946L36.3383 23.4746C36.5264 23.304 36.7608 23.211 37.0024 23.211C37.244 23.211 37.4783 23.304 37.6664 23.4746L58.0857 42.3946C58.1911 42.4927 58.3127 42.5665 58.4435 42.6118C58.5743 42.6571 58.7117 42.6729 58.8479 42.6584C58.9842 42.6439 59.1165 42.5993 59.2374 42.5272C59.3584 42.4551 59.4655 42.357 59.5527 42.2383L61.7662 39.211C61.8533 39.0917 61.9187 38.9542 61.9585 38.8064C61.9982 38.6586 62.0116 38.5034 61.9979 38.3498C61.9842 38.1961 61.9436 38.0471 61.8785 37.9111C61.8134 37.7752 61.7251 37.655 61.6186 37.5576Z"
                  fill="#FF480E"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
