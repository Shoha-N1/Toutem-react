import React from "react";
import "./../../common.scss/Common.scss"   
import "./Section-1.scss";



export default function Section_1(){
   return (
       <>
     <section>
            <div class="section-head-1">
                <div class="container">
                    <div class="section-inner">
                        <div class="section-body">
                            <h2>Pear kiwi
                                & Mint</h2>
                            <p>They say that home is where the heart is. Perhaps that's why a feeling of loss is so
                                apparent when you are far from the ones you love. </p>
                        </div>
                        <img class="pik" src="/Group 48.png" />

                    </div>

                    <div class="box-1">
                        <ul>
                            <li>
                                <svg width="103" height="101" viewBox="0 0 103 101" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M42.4195 84.0225C18.6447 72.2745 5.07339 51.899 11.117 27.4245C18.3609 -1.91099 32.3967 34.8386 51.4883 22.0581C70.5798 9.27765 102.376 18.0028 95.6078 51.9904C89.2716 83.8069 66.1943 95.7706 42.4195 84.0225Z"
                                        fill="#5FD788" />
                                    <path
                                        d="M35.8258 51.1709H66.6501V67.8946H69.7325V41.1366C69.7304 39.3627 69.0803 37.6627 67.925 36.4085C66.7691 35.1549 65.2024 34.4494 63.5677 34.4471H62.0264V31.1024H63.5677C63.9764 31.1024 64.3685 30.9262 64.6575 30.6126C64.9465 30.299 65.1089 29.8735 65.1089 29.43V19.3958C65.1089 18.9523 64.9465 18.5267 64.6575 18.2132C64.3685 17.8996 63.9764 17.7234 63.5677 17.7234H57.4028V7.68915C57.4028 5.29928 56.2276 3.0908 54.3204 1.89567C52.4132 0.701118 50.0628 0.701118 48.1555 1.89567C46.2483 3.09097 45.0731 5.29947 45.0731 7.68915V17.7234H38.9083C38.0572 17.7234 37.367 18.4722 37.367 19.3958V29.43C37.367 29.8735 37.5294 30.299 37.8184 30.6126C38.1074 30.9262 38.4996 31.1024 38.9083 31.1024H40.4495V34.4471H38.9083C37.2735 34.4494 35.7068 35.1549 34.5509 36.4085C33.3957 37.6628 32.7455 39.3628 32.7434 41.1366V82.9459H35.8258V51.1709ZM48.1555 7.68915C48.1555 6.49386 48.7431 5.38969 49.6967 4.79241C50.6504 4.19514 51.8256 4.19514 52.7792 4.79241C53.7328 5.38969 54.3204 6.49389 54.3204 7.68915V17.7234H48.1555V7.68915ZM40.4495 21.0681H62.0264V27.7576H40.4495V21.0681ZM43.5319 31.1024H58.944V34.4471H43.5319V31.1024ZM38.9083 37.7919H63.5677C64.3851 37.7926 65.168 38.1458 65.746 38.7729C66.3239 39.4 66.6494 40.2497 66.65 41.1366V47.8261H35.8258V41.1366C35.8265 40.2496 36.1519 39.4 36.7299 38.7729C37.3078 38.1458 38.0909 37.7926 38.9083 37.7919Z"
                                        fill="#424B25" />
                                    <path
                                        d="M93.6962 81.1262C93.4052 79.3807 92.488 77.8323 91.1458 76.8199C89.8041 75.8082 88.1466 75.4148 86.5373 75.7269L77.4365 77.5038L76.3453 70.9203H76.3446C76.2724 70.4836 76.0433 70.0961 75.7075 69.843C75.3717 69.5899 74.9575 69.4914 74.555 69.5697L65.4536 71.3467C65.0518 71.425 64.694 71.6744 64.4607 72.0387C64.2275 72.4023 64.1374 72.8525 64.2096 73.2893L64.4821 74.9348L59.9314 75.8232H59.932C59.094 75.9867 58.5374 76.8565 58.6881 77.7651L59.2426 81.1099L18.4824 90.599C16.9481 90.9559 15.6772 92.1153 15.0889 93.6943C14.5013 95.2734 14.674 97.0652 15.5492 98.4784C16.4244 99.8916 17.8885 100.741 19.4579 100.747C19.6911 100.747 19.9244 100.729 20.1556 100.692L61.409 94.1698L61.9635 97.5161H61.9628C62.0358 97.9521 62.2649 98.3396 62.6007 98.5927C62.9364 98.8458 63.3506 98.9443 63.7531 98.866L68.3039 97.9775L68.5763 99.623C68.6486 100.06 68.8777 100.447 69.2135 100.7C69.5492 100.953 69.9641 101.052 70.3666 100.973L79.4673 99.1959C80.3054 99.0324 80.862 98.1634 80.7113 97.2541L79.6201 90.6707L88.7215 88.8938C90.3302 88.5795 91.7585 87.5842 92.6915 86.1276C93.6245 84.671 93.9864 82.8717 93.6967 81.1254L93.6962 81.1262ZM19.711 97.3826C18.8324 97.5215 18.0102 96.8802 17.8533 95.932C17.6957 94.9838 18.2599 94.0715 19.1282 93.8699L59.7898 84.4047L60.8631 90.8768L19.711 97.3826ZM64.725 95.2779L61.9962 78.8185L65.0299 78.2264L67.7586 94.6858L64.725 95.2779ZM71.3384 97.3855L67.5178 74.343L73.5863 73.159L77.4064 96.2014L71.3384 97.3855ZM90.1606 84.2192C89.6962 84.9494 88.9813 85.4474 88.1762 85.6019L79.0748 87.3788L77.9836 80.7954L87.0843 79.0185H87.085C87.8893 78.8617 88.7184 79.0581 89.3892 79.5643C90.0601 80.0705 90.519 80.8454 90.6635 81.7189C90.808 82.5916 90.627 83.4913 90.1605 84.2192L90.1606 84.2192Z"
                                        fill="#424B25" />
                                    <path
                                        d="M51.238 56.1878C50.7812 56.1878 50.3477 56.408 50.0553 56.7881C48.9654 58.2044 43.532 65.4731 43.532 69.5667C43.532 72.5539 45.001 75.3147 47.385 76.808C49.7691 78.3019 52.7071 78.3019 55.0911 76.808C57.4751 75.3148 58.9441 72.5539 58.9441 69.5667C58.9441 65.4731 53.5113 58.2043 52.4208 56.7881C52.1284 56.408 51.695 56.1878 51.2381 56.1878H51.238ZM55.8617 69.5668C55.8617 71.3594 54.9803 73.0153 53.5499 73.9119C52.1194 74.8078 50.3566 74.8078 48.9262 73.9119C47.4958 73.0152 46.6144 71.3594 46.6144 69.5668C46.6144 67.772 49.0335 63.6642 51.238 60.5411C53.4426 63.6642 55.8617 67.7719 55.8617 69.5668Z"
                                        fill="#424B25" />
                                    <path d="M60.4855 54.5154H63.5679V57.8601H60.4855V54.5154Z" fill="#424B25" />
                                </svg>

                                <h4> <a href="/">Essential oils </a></h4>
                            </li>

                            <li>
                                <svg width="111" height="113" viewBox="0 0 111 113" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M38.2125 88.0488C18.0499 70.024 9.80103 46.5314 21.4764 24.5881C35.4706 -1.71337 40.2625 37.7259 61.752 30.7427C83.2415 23.7594 111.874 41.1173 97.2288 72.0458C83.5195 100.999 58.375 106.074 38.2125 88.0488Z"
                                        fill="#5FD788" />
                                    <path
                                        d="M96.9093 56.8629H93.2953V52.9414H96.9093V49.0198H93.2953V43.1374C93.2953 42.6175 93.1049 42.1185 92.7661 41.7509C92.4273 41.3833 91.9674 41.1767 91.4883 41.1767H87.8743V35.2943C87.8718 32.6788 87.1813 30.1183 85.8841 27.9142C84.587 25.71 82.7373 23.9523 80.5519 22.8493L80.727 22.3416C83.0833 15.5226 83.0092 7.99474 80.5173 1.23263C80.3083 0.666286 79.8687 0.237358 79.3274 0.0727869C78.7861 -0.0917797 78.2045 0.026393 77.7551 0.392293L73.4183 3.9217C70.3109 6.45054 66.8487 8.41917 63.1636 9.7525C59.4786 11.0865 55.6195 11.7658 51.7343 11.7649C47.0103 11.7641 42.4403 13.59 38.8449 16.9145C35.2487 20.2391 32.8624 24.8452 32.113 29.9065C29.7436 30.6199 27.6165 32.0643 25.9902 34.0654C24.3647 36.0664 23.3097 38.5367 22.9539 41.1766H19.2083C18.2104 41.1766 17.4013 42.0546 17.4013 43.1374V49.0198H13.7873V52.9413H17.4013V56.8629H13.7873C12.7894 56.8629 11.9803 57.7409 11.9803 58.8237V92.1569C11.9827 94.2368 12.745 96.23 14.0996 97.7005C15.4548 99.1702 17.2916 99.9974 19.2083 100H91.4883C93.405 99.9974 95.2419 99.1702 96.5971 97.7005C97.9515 96.2299 98.7139 94.2367 98.7163 92.1569V58.8237C98.7163 58.3037 98.526 57.8048 98.1871 57.4371C97.8483 57.0695 97.3884 56.8629 96.9093 56.8629ZM35.4712 33.3335H58.9622V29.412H35.8781C36.6977 25.5133 38.7121 22.0318 41.5927 19.5388C44.4734 17.0449 48.0496 15.6865 51.7345 15.6865C56.0074 15.6874 60.2532 14.9398 64.3068 13.4728C68.3605 12.0065 72.1688 9.84095 75.5869 7.0591L77.936 5.14735C79.3017 10.3529 79.0944 15.8967 77.343 20.9649L77.0825 21.7186C76.467 21.6197 75.8474 21.5689 75.2255 21.5689H66.1905V25.4905H75.2255C77.6206 25.4931 79.9173 26.5269 81.6113 28.3651C83.3053 30.2033 84.258 32.6954 84.2605 35.2944V41.1767H26.6182C27.0376 38.9638 28.1469 36.9759 29.7595 35.5465C31.3729 34.1179 33.3892 33.3362 35.4712 33.3335ZM21.0152 52.9414H37.2782V49.0198H21.0152V45.0982H89.6813V49.0198H84.2603V52.9414H89.6813V56.8629H21.0152V52.9414ZM95.1023 92.157C95.1015 93.1969 94.7199 94.193 94.0423 94.9283C93.3646 95.6635 92.4466 96.0776 91.4883 96.0785H19.2083C18.2499 96.0776 17.3319 95.6636 16.6543 94.9283C15.9767 94.193 15.5951 93.1968 15.5943 92.157V60.7845H95.1023L95.1023 92.157Z"
                                        fill="#424B25" />
                                    <path d="M40.8923 49.0198H80.6463V52.9413H40.8923V49.0198Z" fill="#424B25" />
                                    <path
                                        d="M55.3483 88.2354C57.7442 88.2354 60.0423 87.2025 61.7374 85.3644C63.4315 83.5253 64.3833 81.0314 64.3833 78.4315C64.3833 75.8316 63.4313 73.338 61.7374 71.4987C60.0425 69.6604 57.7442 68.6276 55.3483 68.6276C52.9523 68.6276 50.6542 69.6605 48.9591 71.4987C47.2651 73.3378 46.3132 75.8316 46.3132 78.4315C46.3157 81.0305 47.2684 83.5226 48.9624 85.3608C50.6565 87.199 52.9531 88.2327 55.3483 88.2354ZM55.3483 72.5492C56.7858 72.5492 58.1653 73.1689 59.1816 74.2719C60.1978 75.3748 60.7692 76.8718 60.7692 78.4314C60.7692 79.9911 60.198 81.4882 59.1816 82.591C58.1651 83.6937 56.7856 84.3136 55.3483 84.3136C53.9109 84.3136 52.5312 83.6939 51.5149 82.591C50.4987 81.488 49.9274 79.9911 49.9274 78.4314C49.929 76.8716 50.5009 75.3764 51.5173 74.2743C52.533 73.1714 53.9109 72.5508 55.3484 72.549L55.3483 72.5492Z"
                                        fill="#424B25" />
                                </svg>


                                <h4> <a href="/">Essential oils </a></h4>
                            </li>

                            <li>
                                <svg width="111" height="116" viewBox="0 0 111 116" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M38.2125 91.0488C18.0499 73.024 9.80102 49.5314 21.4764 27.5881C35.4706 1.28663 40.2625 40.7259 61.752 33.7427C83.2415 26.7594 111.874 44.1173 97.2288 75.0458C83.5195 103.999 58.375 109.074 38.2125 91.0488Z"
                                        fill="white" />
                                    <path
                                        d="M88.4019 58.6781H82.6899C81.9541 58.6781 81.3571 58.0303 81.3571 57.2319V50.0006C81.3571 47.4939 83.2359 45.4553 85.5459 45.4553C87.8558 45.4553 89.7347 47.4941 89.7347 50.0006V57.2319C89.7347 58.0303 89.1376 58.6781 88.4019 58.6781H88.4019ZM84.0227 55.7857H87.0691V50.0007C87.0691 49.0894 86.3857 48.3478 85.5459 48.3478C84.7061 48.3478 84.0227 49.0894 84.0227 50.0007V55.7857Z"
                                        fill="#424B25" />
                                    <path
                                        d="M55.0822 99.9999H55.0815L54.8789 99.9991C47.5341 99.943 40.6019 96.7944 35.3606 91.1341C30.1177 85.4737 27.1826 77.9672 27.095 69.9982C26.9788 59.4109 31.8267 49.6915 40.0636 43.9981C45.0564 40.5463 48.0376 34.6808 48.0376 28.307C48.0376 27.5086 48.6346 26.8607 49.3704 26.8607H60.7947C61.5304 26.8607 62.1275 27.5086 62.1275 28.307C62.1275 34.694 65.093 40.5493 70.0605 43.9694C74.5078 47.0316 78.0581 51.3682 80.3322 56.5142C80.4437 56.7252 80.5076 56.9709 80.5076 57.2321C80.5076 57.9988 79.9582 58.626 79.2632 58.6754L79.2639 61.9842H81.1224C81.7487 61.9842 82.2913 62.4579 82.4246 63.122C82.4736 63.3662 82.5219 63.6105 82.5647 63.8562C82.6354 64.2569 82.5477 64.6708 82.322 64.997L77.3599 72.1767V87.5224C77.3599 87.8471 77.2592 88.1629 77.0736 88.4182C71.7259 95.7779 63.7098 100 55.0833 100L55.0822 99.9999ZM50.658 29.752C50.2398 36.5532 46.8813 42.7137 41.4948 46.4364C34.0419 51.5882 29.6543 60.3832 29.7598 69.9638C29.923 84.8248 41.1997 97.0009 54.8975 97.1067L55.0811 97.1074C62.7347 97.1074 69.8558 93.435 74.6935 87.0138V71.6944C74.6935 71.3816 74.7866 71.0768 74.96 70.8267L79.0728 64.8763H77.9303C77.1945 64.8763 76.5975 64.2285 76.5975 63.4301V57.2319C76.5975 56.7641 76.8015 56.3487 77.1191 56.0845C75.0696 52.1618 72.1631 48.8436 68.6311 46.4116C63.2658 42.7176 59.9208 36.5667 59.5045 29.7529L50.658 29.752Z"
                                        fill="#424B25" />
                                    <path
                                        d="M89.9252 99.9999H81.1666C77.5972 99.9999 74.6928 96.8483 74.6928 92.9751V71.6937C74.6928 70.8953 75.2898 70.2474 76.0256 70.2474H95.0669C95.8027 70.2474 96.3998 70.8953 96.3998 71.6937V92.9751C96.3998 96.8483 93.4953 99.9999 89.9259 99.9999H89.9252ZM77.3584 73.1403V92.9747C77.3584 95.2532 79.0666 97.1069 81.1665 97.1069H89.925C92.0248 97.1069 93.7331 95.2533 93.7331 92.9747V73.1403H77.3584Z"
                                        fill="#424B25" />
                                    <path
                                        d="M95.0659 73.1403H76.0245C75.52 73.1403 75.0582 72.8311 74.8324 72.3411C74.6067 71.8512 74.6556 71.2645 74.9583 70.8262L80.6703 62.5619C80.9219 62.1981 81.317 61.9834 81.7366 61.9834H89.3528C89.7723 61.9834 90.1674 62.1974 90.419 62.5619L96.1311 70.8262C96.4337 71.2645 96.4826 71.8512 96.2569 72.3411C96.0311 72.8311 95.5694 73.1403 95.0648 73.1403H95.0659ZM78.6912 70.2478H92.4003L88.6874 64.8759H82.404L78.6912 70.2478Z"
                                        fill="#424B25" />
                                    <path
                                        d="M93.1631 64.8759H77.9308C77.195 64.8759 76.5979 64.2281 76.5979 63.4297V57.2315C76.5979 56.4331 77.195 55.7853 77.9308 55.7853H93.1631C93.8989 55.7853 94.496 56.4331 94.496 57.2315V63.4297C94.496 64.2281 93.8989 64.8759 93.1631 64.8759ZM79.2635 61.9835H91.8303V58.6778H79.2635V61.9835Z"
                                        fill="#424B25" />
                                    <path
                                        d="M102.682 99.9999H16.9995C16.2638 99.9999 15.6667 99.352 15.6667 98.5536C15.6667 97.7552 16.2638 97.1074 16.9995 97.1074H102.682C103.418 97.1074 104.015 97.7552 104.015 98.5536C104.015 99.352 103.418 99.9999 102.682 99.9999Z"
                                        fill="#424B25" />
                                    <path
                                        d="M58.8894 29.752H51.2732C50.5375 29.752 49.9404 29.1041 49.9404 28.3057V21.8964C48.7048 22.9619 47.1673 23.5537 45.5612 23.5537C43.6565 23.5537 41.8796 22.742 40.563 21.2973C40.0163 21.4242 39.4587 21.4877 38.897 21.4877C34.4871 21.4877 30.8999 17.5954 30.8999 12.81C30.8999 8.02463 34.4869 4.13236 38.897 4.13236C40.7691 4.13236 42.5738 4.85548 43.9943 6.12827C45.6515 3.61062 48.343 2.06618 51.2732 2.06618C53.3207 2.06618 55.2614 2.81144 56.8256 4.15956C58.255 1.63303 60.8323 0 63.6495 0C67.2475 0 70.2912 2.55524 71.2949 6.11939C72.5713 4.8672 74.2537 4.13217 76.0258 4.13217C79.91 4.13217 83.0709 7.56107 83.0709 11.7767C83.0709 15.9924 79.9102 19.4213 76.0258 19.4213C74.7664 19.4213 73.5608 19.0664 72.502 18.4001C70.972 21.511 67.9431 23.5534 64.6016 23.5534C63.0518 23.5534 61.5462 23.1166 60.2223 22.3101V28.3054C60.2223 29.1038 59.6252 29.7516 58.8895 29.7516L58.8894 29.752ZM52.606 26.8596H57.5566V19.308C57.5566 18.7066 57.9001 18.1679 58.4182 17.9554C58.9371 17.7429 59.5226 17.9008 59.8891 18.3517C61.0825 19.8193 62.8003 20.6613 64.6016 20.6613C67.3998 20.6613 69.8859 18.6218 70.647 15.7012C70.7769 15.2039 71.1413 14.8194 71.6031 14.6925C72.0655 14.5656 72.5544 14.7161 72.8863 15.0873C73.7179 16.017 74.8332 16.5291 76.0259 16.5291C78.4406 16.5291 80.4051 14.3974 80.4051 11.7772C80.4051 9.15694 78.4406 7.02522 76.0259 7.02522C74.3401 7.02522 72.785 8.09516 72.0634 9.75179C71.86 10.2189 71.4425 10.5325 70.9685 10.5753C70.4952 10.6173 70.0349 10.3834 69.7635 9.95914C69.6241 9.74147 69.4711 9.5297 69.3073 9.32973C69.1046 9.08106 68.987 8.76377 68.974 8.43246C68.855 5.32601 66.5158 2.89318 63.6495 2.89318C61.2926 2.89318 59.1872 4.60729 58.5304 7.06219C58.3917 7.5824 57.9959 7.97421 57.5063 8.07825C57.016 8.1823 56.5141 7.98012 56.2047 7.55584C55.0031 5.90591 53.2058 4.95923 51.2733 4.95923C48.7544 4.95923 46.4866 6.58554 45.4952 9.10179C45.3076 9.57919 44.8975 9.9105 44.4222 9.97029C43.9468 10.0308 43.4783 9.80795 43.1954 9.38958C42.1931 7.90938 40.5862 7.02531 38.8971 7.02531C35.9573 7.02531 33.5658 9.62041 33.5658 12.8104C33.5658 16.0003 35.9573 18.5954 38.8971 18.5954C39.4744 18.5954 40.0456 18.4943 40.5944 18.2943C41.135 18.0973 41.7321 18.2958 42.0782 18.788C42.9153 19.9789 44.185 20.6615 45.5613 20.6615C46.8513 20.6615 48.0705 20.0468 48.9056 18.9754C49.213 18.5814 49.6903 18.3947 50.1582 18.4862C50.5322 18.5592 50.9069 18.5954 51.2734 18.5954C52.0092 18.5954 52.6062 19.2433 52.6062 20.0416L52.606 26.8596Z"
                                        fill="#424B25" />
                                    <path
                                        d="M55.0822 91.7355C43.8484 91.7355 34.7091 81.8183 34.7091 69.6286C34.7091 68.8302 35.3062 68.1824 36.042 68.1824C36.7777 68.1824 37.3748 68.8302 37.3748 69.6286C37.3748 80.2232 45.3188 88.8434 55.0826 88.8434C55.8184 88.8434 56.4155 89.4913 56.4155 90.2897C56.4155 91.0881 55.8184 91.7359 55.0826 91.7359L55.0822 91.7355Z"
                                        fill="#424B25" />
                                    <path
                                        d="M55.0822 66.9425C52.2473 66.9425 49.9413 64.4403 49.9413 61.3641C49.9413 58.2879 52.2473 55.7857 55.0822 55.7857C57.9172 55.7857 60.2231 58.2879 60.2231 61.3641C60.2231 64.4403 57.9172 66.9425 55.0822 66.9425ZM55.0822 58.6781C53.7174 58.6781 52.6069 59.8831 52.6069 61.3641C52.6069 62.8451 53.7174 64.05 55.0822 64.05C56.4471 64.05 57.5575 62.8451 57.5575 61.3641C57.5575 59.8831 56.4471 58.6781 55.0822 58.6781Z"
                                        fill="#424B25" />
                                    <path
                                        d="M63.6506 87.6023C60.2906 87.6023 57.5577 84.6368 57.5577 80.9909C57.5577 77.3449 60.2906 74.3794 63.6506 74.3794C67.0106 74.3794 69.7436 77.3449 69.7436 80.9909C69.7436 84.6368 67.0106 87.6023 63.6506 87.6023ZM63.6506 77.2718C61.761 77.2718 60.2233 78.9402 60.2233 80.9909C60.2233 83.0416 61.7608 84.7099 63.6506 84.7099C65.5405 84.7099 67.078 83.0416 67.078 80.9909C67.078 78.9402 65.5405 77.2718 63.6506 77.2718Z"
                                        fill="#424B25" />
                                    <path
                                        d="M95.0659 89.6689H81.7376C81.0019 89.6689 80.4048 89.0211 80.4048 88.2227C80.4048 87.4243 81.0019 86.7764 81.7376 86.7764H95.0659C95.8017 86.7764 96.3987 87.4243 96.3987 88.2227C96.3987 89.0211 95.8017 89.6689 95.0659 89.6689Z"
                                        fill="#424B25" />
                                </svg>

                                <h4> <a href="/">Essential oils </a></h4>

                            </li>

                            <li>
                                <svg width="111" height="117" viewBox="0 0 111 117" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M38.2125 92.0488C18.0499 74.024 9.80102 50.5314 21.4764 28.5881C35.4706 2.28663 40.2625 41.7259 61.752 34.7427C83.2415 27.7594 111.874 45.1173 97.2288 76.0458C83.5195 104.999 58.375 110.074 38.2125 92.0488Z"
                                        fill="#5FD788" />
                                    <path
                                        d="M83.2337 42.8572H39.3493C38.1855 42.8572 37.0688 42.3555 36.2461 41.4626C35.4234 40.5698 34.9609 39.3579 34.9609 38.0954V28.5716C34.9609 27.695 35.6159 26.9843 36.4237 26.9843H86.1594C86.5473 26.9843 86.9195 27.1515 87.1938 27.4491C87.4681 27.7467 87.6222 28.1506 87.6222 28.5716V38.0954C87.6222 39.3581 87.1598 40.5699 86.337 41.4626C85.5142 42.3553 84.3974 42.8572 83.2338 42.8572H83.2337ZM37.8864 30.1588V38.0953C37.8864 38.5162 38.0406 38.9201 38.3148 39.2177C38.5891 39.5153 38.9614 39.6826 39.3493 39.6826H83.2337C83.6216 39.6826 83.9938 39.5153 84.2681 39.2177C84.5423 38.9201 84.6965 38.5162 84.6965 38.0953V30.1588H37.8864Z"
                                        fill="#424B25" />
                                    <path
                                        d="M83.2337 100H39.3493C38.8275 99.9986 38.3462 99.6967 38.0857 99.2064C37.6599 98.4127 27.6469 79.6436 27.6469 66.6658C27.6371 62.8697 28.5866 59.1431 30.3916 55.8912C32.1973 52.6393 34.7892 49.9862 37.8866 48.2212V41.269H40.8122V49.2055C40.8122 49.8404 40.4635 50.4144 39.926 50.6645C37.1323 52.0995 34.7709 54.3643 33.1155 57.1966C31.46 60.0289 30.5784 63.3119 30.5725 66.6658C30.5725 77.3724 38.3169 93.142 40.2023 96.8245H82.3815C84.2668 93.1418 92.0113 77.3615 92.0113 66.6658C92.0048 63.3105 91.1219 60.026 89.4652 57.1937C87.8078 54.3614 85.4444 52.0965 82.6493 50.6623C82.1158 50.4101 81.771 49.8375 81.7717 49.2054V41.2689H84.6973V48.2211C87.7946 49.9863 90.3865 52.6393 92.1922 55.8911C93.9973 59.143 94.9468 62.8696 94.937 66.6657C94.937 79.6433 84.9238 98.4118 84.4982 99.2063C84.2376 99.6967 83.7563 99.9986 83.2345 100L83.2337 100Z"
                                        fill="#424B25" />
                                    <path
                                        d="M78.8452 92.0635H43.7377C43.1225 92.0635 42.5733 91.6461 42.3624 91.019C42.1286 90.2955 36.4237 73.2015 36.4237 65.0797C36.4394 62.4535 37.2929 59.9138 38.8399 57.8937C40.387 55.8736 42.5316 54.498 44.908 54.0005C45.004 53.9786 45.102 53.968 45.2006 53.9687H77.3825C77.4811 53.968 77.579 53.9786 77.675 54.0005C80.0515 54.498 82.196 55.8734 83.7431 57.8937C85.2902 59.914 86.1436 62.4537 86.1594 65.0797C86.1594 73.2018 80.4544 90.2952 80.2207 91.019C80.0097 91.6461 79.4605 92.0635 78.8454 92.0635H78.8452ZM44.7725 88.8889H77.8104C79.0499 85.0396 83.2333 71.559 83.2333 65.0793C83.2196 63.2099 82.6156 61.4022 81.5211 59.9575C80.4272 58.5134 78.9103 57.5198 77.2228 57.1428H45.3635C43.6807 57.5304 42.1689 58.5268 41.0757 59.9688C39.9832 61.4108 39.3738 63.2128 39.3484 65.0793C39.3484 71.559 43.5317 85.0394 44.7714 88.8889H44.7725Z"
                                        fill="#424B25" />
                                    <path
                                        d="M70.0683 92.0635H52.5146C51.7068 92.0635 51.0518 91.3528 51.0518 90.4762V80.9524C51.0518 80.0759 51.7068 79.3651 52.5146 79.3651H70.0683C70.4562 79.3651 70.8285 79.5323 71.1027 79.83C71.377 80.1276 71.5311 80.5315 71.5311 80.9524V90.4762C71.5311 90.8971 71.377 91.3011 71.1027 91.5987C70.8285 91.8963 70.4562 92.0635 70.0683 92.0635ZM53.9774 88.8889H68.6055V82.5397H53.9774V88.8889Z"
                                        fill="#424B25" />
                                    <path
                                        d="M61.2914 76.1905C59.7398 76.1905 58.2515 75.5216 57.1538 74.3311C56.0567 73.1399 55.4402 71.5249 55.4402 69.8413C55.4402 66.7603 59.4073 61.8063 60.2028 60.8446C60.4875 60.5229 60.8806 60.3408 61.2914 60.3408C61.7021 60.3408 62.0953 60.5229 62.38 60.8446C63.1754 61.8062 67.1426 66.7601 67.1426 69.8413C67.1426 71.5249 66.5261 73.14 65.429 74.3311C64.3312 75.5216 62.8429 76.1905 61.2913 76.1905H61.2914ZM61.2914 64.3637C59.7392 66.4684 58.3658 68.8301 58.3658 69.8413C58.3658 70.9758 58.9235 72.0238 59.8286 72.5907C60.7337 73.1576 61.8491 73.1576 62.7543 72.5907C63.6594 72.0238 64.2171 70.9757 64.2171 69.8413C64.2171 68.857 62.845 66.4775 61.2914 64.3637Z"
                                        fill="#424B25" />
                                    <path d="M59.8287 74.6031H62.7543V80.9524H59.8287V74.6031Z" fill="#424B25" />
                                    <path
                                        d="M53.9774 19.0476H51.0518C51.0518 18.1555 50.7344 17.7778 50.0173 16.9956C48.821 15.9468 48.1262 14.3673 48.1262 12.6984C48.1262 11.0295 48.8211 9.45016 50.0173 8.40127C50.7344 7.61896 51.0518 7.24127 51.0518 6.34921C51.0518 5.45714 50.7344 5.07936 50.0173 4.29714C48.8353 3.23634 48.1431 1.66458 48.1262 0H51.0518C51.0518 0.892154 51.3692 1.26984 52.0863 2.05206C53.2683 3.11287 53.9605 4.68463 53.9774 6.34921C53.9604 8.01375 53.2682 9.58549 52.0863 10.6463C51.3692 11.4287 51.0518 11.8063 51.0518 12.6984C51.0518 13.5905 51.3692 13.9683 52.0863 14.7505C53.2683 15.8113 53.9605 17.383 53.9774 19.0476Z"
                                        fill="#424B25" />
                                    <path
                                        d="M64.217 19.0476H61.2914C61.2914 18.1555 60.974 17.7778 60.257 16.9956C59.0606 15.9468 58.3659 14.3673 58.3659 12.6984C58.3659 11.0295 59.0607 9.45016 60.257 8.40127C60.974 7.61896 61.2914 7.24127 61.2914 6.34921C61.2914 5.45714 60.974 5.07936 60.257 4.29714C59.075 3.23634 58.3828 1.66458 58.3659 0H61.2915C61.2915 0.892154 61.6089 1.26984 62.3259 2.05206C63.5079 3.11287 64.2002 4.68463 64.217 6.34921C64.2001 8.01375 63.5078 9.58549 62.3259 10.6463C61.6089 11.4287 61.2915 11.8063 61.2915 12.6984C61.2915 13.5905 61.6089 13.9683 62.3259 14.7505C63.5079 15.8113 64.2002 17.383 64.217 19.0476Z"
                                        fill="#424B25" />
                                    <path
                                        d="M74.4568 19.0476H71.5311C71.5311 18.1555 71.2138 17.7778 70.4967 16.9956C69.3004 15.9468 68.6056 14.3673 68.6056 12.6984C68.6056 11.0295 69.3004 9.45016 70.4967 8.40127C71.2138 7.61896 71.5311 7.24127 71.5311 6.34921C71.5311 5.45714 71.2138 5.07936 70.4967 4.29714C69.3147 3.23634 68.6225 1.66458 68.6056 0H71.5312C71.5312 0.892154 71.8486 1.26984 72.5656 2.05206C73.7476 3.11287 74.4399 4.68463 74.4568 6.34921C74.4398 8.01375 73.7476 9.58549 72.5656 10.6463C71.8486 11.4287 71.5312 11.8063 71.5312 12.6984C71.5312 13.5905 71.8486 13.9683 72.5656 14.7505C73.7476 15.8113 74.4399 17.383 74.4568 19.0476Z"
                                        fill="#424B25" />
                                    <path d="M36.4236 33.3333H81.7708V36.5079H36.4236V33.3333Z" fill="#424B25" />
                                </svg>

                                <h4> <a href="/">Essential oils </a></h4>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
       </>
   )
}