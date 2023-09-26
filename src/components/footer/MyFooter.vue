<template>
    <footer class="footer">
        <section class="footer-top">
            <ul class="footer-support__menu">
                <li>
                    <p>Support</p>
                </li>
                <li>
                    <a href="#" title="Contact us">Contact us</a>
                </li>
                <li>
                    <a href="#" title="Gift card">Gift card</a>
                </li>
                <li>
                    <a href="#" title="Shipping">Shipping</a>
                </li>
                <li>
                    <a href="#" title="Payments">Payments</a>
                </li>
                
            </ul>
            <ul class="footer-company__menu">
                <li>
                    <p>Company</p>
                </li>
                <li>
                    <a href="#" title="Company profile">Company profile</a>
                </li>
                <li>
                    <a href="#" title="Boutique">Boutique</a>
                </li>
            </ul>
            <ul class="footer-conditions__menu">
                <li>
                    <p>Legal conditions</p>
                </li>
                <li>
                    <a href="#" title="Cookie policy">Cookie policy</a>
                </li>
                <li>
                    <a href="#" title="Privacy policy">Privacy policy</a>
                </li>
                <li>
                    <a href="#" title="Terms of sale">Terms of sale</a>
                </li>
            </ul>
            <ul class="footer-info__menu">
                <li>
                    <p>Follow us</p>
                </li>
                <li>
                    <a href="https://www.instagram.com/" title="Instagram">Instagram</a>
                </li>
                <li>
                    <a href="https://www.facebook.com/" title="Facebook">Facebook</a>
                </li>
                <li>
                    <a href="#" title="Linkedin">Linkedin</a>
                </li>
                <li>
                    <a href="https://www.youtube.com/" title="Youtube">Youtube</a>
                </li>
            </ul>
        </section>
        <section class="footer-bottom">
            <div class="footer-bottom__left">
                <span>©  2023  Premita  R4765324</span>
            </div>
            <div class="footer-bottom__right">
                <div class="footer-bottom-icons__root">
                    <ul class="footer-bottom-icons__list">
                        <li class="footer-bottom-icons__item">
                            <img src="@/assets/svg/pay/pay-1.svg" alt="img_payment"/>
                        </li>
                        <li class="footer-bottom-icons__item">
                            <img src="@/assets/svg/pay/pay-2.svg">
                        </li>
                        <li class="footer-bottom-icons__item">
                            <img src="@/assets/svg/pay/pay-3.svg">
                        </li>
                        <li class="footer-bottom-icons__item">
                            <img src="@/assets/svg/pay/pay-4.svg">
                        </li>
                        <li class="footer-bottom-icons__item">
                            <img src="@/assets/svg/pay/pay-5.svg">
                        </li>
                        <li class="footer-bottom-icons__item">
                            <img src="@/assets/svg/pay/pay-6.svg">
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </footer>
</template>

<script>
export default {
    name: "my-footer",
    
}
</script>

<style lang="scss" scoped>
$font-family: 'Lucida Sans Unicode';
.footer {
    display: flex;
    flex-direction: column;
    height: 400px;
    background: rgb(241, 242, 243);
    margin-top: 135px;
    padding: 40px 300px;

    & p {
    font-size: 1.3rem;
    text-transform: uppercase;
    margin-bottom: 30px;
    font-family: $font-family;
    font-weight: 600;
    }
}
.footer-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;

    & li {
        list-style-type: none;
        margin-bottom: 20px;
    }

    & a:active,  a {
        color: #3f3434;
        text-decoration: none;
        font-family: $font-family;
        font-size: 1.1rem;
    }

    & a:hover {
        color: #9e9d9d;
    }
}
.footer-support__menu {
}
.footer-company__menu {
}
.footer-conditions__menu {
}
.footer-info__menu {
}
.footer-bottom {
    display: flex;
    justify-content: space-between;
}
.footer-bottom__left {
    & span {
        letter-spacing: 1px;
    }
}
.footer-bottom__right {
}
.footer-bottom-icons__root {
}
.footer-bottom-icons__list {
}
.footer-bottom-icons__item {
    display: inline-block;
    line-height: 1;
    margin-right: 25px;
    width: 50px;
}
.footer-bottom-icons__item:last-child {
    margin-right: 0px;
}

@media (max-width: 1350px) {
    .footer {
        padding: 40px 150px;
    }
    .footer-bottom-icons__item {
        margin-right: 10px;
    }
}

@media (max-width: 992px) {
    .footer {
        height: 750px;
        padding: 40px 250px;
    }
    .footer-top {
        flex-wrap: wrap;
    }
    .footer-bottom {
        flex-wrap: wrap;
    }
    .footer-support__menu {
        margin-right: 21px;
        margin-bottom: 30px;
    }
    .footer-company__menu {
        margin-right: 20px;
    }
    .footer-conditions__menu {
        margin-right: 20px;
    }
    .footer-info__menu {
        margin-right: 20px;
    }
    .footer-bottom__left {
        & span {
            display: block;
            margin-bottom: 30px;
        }
    }
}

@media (max-width: 865px) {
    .footer {
        height: 750px;
        padding: 40px 190px;
    }
}

@media (max-width: 767px) {
    .footer {
        height: 750px;
        padding: 40px 140px;
        margin-top: 25px;
    }
    .footer-bottom-icons__item {
        margin-right: 6px;
        width: 40px;
    }
}

@media (max-width: 640px) {
    .footer {
        height: 940px;
        padding: 40px 190px;
        margin-top: 20px;

        & p {
            margin-bottom: 5px;
        }
    }
    .footer-support__menu {
        margin-bottom: 5px;
        margin-left: 5px;
    }
    .footer-company__menu {
        margin-left: 5px;
    }
    .footer-conditions__menu {
        margin-left: 5px;
    }
    .footer-info__menu {
        margin-left: 5px;
    }
    .footer-bottom-icons__item {
        margin-right: 6px;
        width: 40px;
    }
    .footer-top {
        margin-bottom: 15px;

        & li {
            margin-bottom: 10px;
        }
    }
}
@media (max-width: 520px) {
    .footer {
        height: 940px;
        padding: 40px 150px;
        margin-top: 20px;
    }
}
</style>