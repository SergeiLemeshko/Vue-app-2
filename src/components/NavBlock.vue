<template>
	<div class="nav-collection">
		<p>Discover the new collection</p>
	</div>
	<section class="nav nav-fixed">
		<!--кнопки навбара -->
        <div class="nav-btn">
            <div @click="$router.push('/')"><span class="nav-btn__logo">PREMITA</span></div>
            <div @click="$router.push('/reviews')"><span class="nav-btn__review">Reviews</span></div>
        </div>
	</section>
</template>

<script>
export default {
    name: 'nav-block',
}
</script>

<style lang="scss">
.nav {
	position: absolute;
	top: 0px;
	background-color: rgb(255, 255, 255);
	height: 110px;
	width: 100%;
	display: flex;
	padding: 0px 15px;
	margin: 0 auto;
	justify-content: flex-start;
	border-bottom: 1px solid #d4e7e0;
}

.nav-btn {
    display: flex;
    width: 200px;
    justify-content: space-between;
	top: 70px;
	align-items: flex-end;
}

.nav-fixed{
	position: fixed;
	top: 0; 
	max-width: inherit;
	z-index: 2;
}

.nav-collection {
	position: fixed;
	top: 0;
	z-index: 3;
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: center;
	background: rgb(241, 242, 243);
	height: 40px;
	text-transform: uppercase;
	font-size: 14px;
}

.nav-btn__logo {
	display: inline-block;
	margin: 0px 0px 16px 30px;
	font-family: Tahoma;
	font-size: 1.8rem;
	font-weight: 600;
	letter-spacing: 2px;
	cursor: pointer;
}

.nav-btn__review {
	display: inline-block;
	margin: 0px 0px 17px 60px;
	font-family: Verdana;
	font-size: 1.3rem;
	cursor: pointer;
}
</style>