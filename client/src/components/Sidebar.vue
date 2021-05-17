<template>
<div>
	<el-menu 
		default-active="0" 
		class="el-menu-vertical-demo sideNav" 
		:collapse="isCollapse"       		
		background-color="#545c64"
	    text-color="#fff"
	    active-text-color="#ffd04b">
	  <el-submenu index="1">
	    <template slot="title">
	      <i class="el-icon-user"></i>
	      <span slot="title">Data</span>
	    </template>
	    <el-menu-item-group>
	      <span slot="title">Collect Data</span>
	      <router-link to="/user" style="text-decoration: none"><el-menu-item index="1-1">User</el-menu-item></router-link>
	      <router-link to="/siswa" style="text-decoration: none"><el-menu-item index="1-2">Siswa</el-menu-item></router-link>
	      <router-link to="/spp" style="text-decoration: none"><el-menu-item index="1-3">Spp</el-menu-item></router-link>
	    </el-menu-item-group>
	  </el-submenu>
	  <router-link to="/transaction" style="text-decoration: none">
	  	<el-menu-item index="2">
		    <i class="el-icon-money"></i>
		    <span slot="title">Transaction</span>
	  	</el-menu-item>
	  </router-link>
	  <router-link to="/history" style="text-decoration: none">
	  	<el-menu-item index="3">
		    <i class="el-icon-notebook-2"></i>
		    <span slot="title">History Transaction</span>
		  </el-menu-item>
	  </router-link>
	</el-menu>
</div>

</template>

<script>
export default {

  name: 'Sidebar',

  data () {
    return {
    	isCollapse: false,
    }
  },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
  }
}
</script>

<style lang="css" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .sideNav {
  	height: 100%;
  	position: fixed;
  	z-index: 10;
  }
</style>