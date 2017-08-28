<template>
    <div class="row menu">
        <ul class="nav nav-pills nav-justified">
            <li @click="$router.go(-1)" role="presentation"><a>Back</a></li>
            <router-link to="/" active-class="active" exact tag="li"><a>Home</a></router-link>
            <router-link to="/profile" active-class="active" exact tag="li"><a>Profile</a></router-link>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
