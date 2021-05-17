<template>
  <div id="app">
      <el-container>
        <el-aside width="200px">
            <Sidebar />
        </el-aside>
          <el-container>
        <el-main
        class="container">
            <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue"

export default {
  name: "app",
  components: {
    Sidebar
},

data() {
  return {
      
    }
},


 methods: {

    }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  margin: 1rem 3rem;
}
</style>
